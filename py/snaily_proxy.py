import os
import sys
import asyncio
import httpx
import jwt

from mitmproxy import options, http
from mitmproxy.tools import dump

token = sys.argv[1]
id_child = sys.argv[2]

# dangerous website
dangerous_websites_file_path = os.path.join(
    os.path.dirname(__file__), "list_website.txt")
dangerous_websites_file = open(dangerous_websites_file_path, "r", encoding="utf8")
dangerous_websites = dangerous_websites_file.read()
dangerous_websites = dangerous_websites.split("\n")
dangerous_websites = [x.replace('http://', '').replace(
    'https://', '').replace('www.', '').rstrip("/") for x in dangerous_websites]
dangerous_websites_file.close()

# trust positif
trust_positif_file_path = os.path.join(
    os.path.dirname(__file__), "trust_positif.txt")

trust_positif_file = open(trust_positif_file_path, "r", encoding="utf8")
trust_positif = trust_positif_file.read()
trust_positif = trust_positif.split("\n")
trust_positif = [x.replace('http://', '').replace(
    'https://', '').replace('www.', '').rstrip("/") for x in trust_positif]
trust_positif_file.close()

combined_list_websites = list(set(dangerous_websites + trust_positif))

class Addon:
    block_detail = None

    def __init__(self, queue: asyncio.Queue):
        self.queue = queue

    def request(self, flow: http.HTTPFlow):
        request_url = flow.request.url
        if(flow.request.method == "GET"):
            acceptHeader = flow.request.headers.get("accept")
            if acceptHeader != None and "text/html" in acceptHeader:
                secFetchSiteHeader = flow.request.headers.get("sec-fetch-site")
                if(secFetchSiteHeader == None or  "none" in secFetchSiteHeader or  "same-origin" in secFetchSiteHeader or ("cross-site" in secFetchSiteHeader and flow.request.headers.get("referer") != None)):
                    currentRequest = flow.request.url.replace('http://', '').replace('https://', '').replace('www.', '').rstrip("/")
                    if(currentRequest.split("/")[0] in combined_list_websites):
                        parent = jwt.decode(token, options={"verify_signature": False})
                        block_detail = {
                            "parent": parent,
                            "childId": id_child,
                            "web_url": request_url,
                            "token": token
                        }
                        notif_token = jwt.encode(block_detail, "")
                        flow.response = http.Response.make(
                            302,
                            b'',
                            {"Location": "https://snailly-block.netlify.app?f=" + notif_token},
                        )
                    elif currentRequest in combined_list_websites:
                        parent = jwt.decode(token, options={"verify_signature": False})
                        block_detail = {
                            "parent": parent,
                            "childId": id_child,
                            "web_url": request_url,
                            "token": token
                        }
                        notif_token = jwt.encode(block_detail, "")
                        flow.response = http.Response.make(
                            302,
                            b'',
                            {"Location": "https://snailly-block.netlify.app?f=" + notif_token},
                        )
                    else:
                        self.queue.put_nowait(request_url)
                        pass
    

async def insert_history(queue: asyncio.Queue):
    async with httpx.AsyncClient() as client:
        while True:
            data_url = await queue.get()
            if(data_url == None):
                break
            logData = {
                "childId": id_child,
                "parentId": jwt.decode(token, options={"verify_signature": False})['id'],
                "url": data_url,
                "web_title": data_url.split("//")[-1].split("/")[0].split(".")[0],
                "web_description": '',
                "detail_url": ""
            }
            try:
                await client.post('https://snailly.unikomcodelabs.id/log', data=logData, headers={'Authorization': 'Bearer ' + token})
            except Exception as err:
                print('error', err)

async def start_proxy():
    queue = asyncio.Queue()
    opts = options.Options(listen_host="localhost", listen_port=8080)
    master = dump.DumpMaster(opts)
    master.addons.add(Addon(queue=queue))
    master.options.set('block_global=false')
    master.options.set('connection_strategy=lazy')
    await asyncio.gather(master.run(), insert_history(queue))

asyncio.run(start_proxy())
