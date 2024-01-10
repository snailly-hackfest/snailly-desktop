from mitmproxy import http
import os

# dangerous website
dangerous_websites_file_path = os.path.join(
    os.path.dirname(__file__), "list_website.txt")
dangerous_websites_file = open(dangerous_websites_file_path, "r", encoding="utf8")
dangerous_websites = dangerous_websites_file.read()
dangerous_websites = dangerous_websites.split("\n")
dangerous_websites = [x.replace('http://', '').replace(
    'https://', '').replace('www.', '').rstrip('/') for x in dangerous_websites]
dangerous_websites_file.close()

# trust positif
trust_positif_file_path = os.path.join(
    os.path.dirname(__file__), "trust_positif.txt")
print(trust_positif_file_path)

trust_positif_file = open(trust_positif_file_path, "r", encoding="utf8")
trust_positif = trust_positif_file.read()
trust_positif = trust_positif.split("\n")
trust_positif = [x.replace('http://', '').replace(
    'https://', '').replace('www.', '').rstrip('/') for x in trust_positif]
trust_positif_file.close()

combined_list_websites = list(set(dangerous_websites + trust_positif))

website_berbahaya = ["https://www.facebook.com/friends/".replace('http://', '').replace('https://', '').replace('www.', '').rstrip("/")]

def request(flow: http.HTTPFlow):
    if(flow.request.method == "GET"):
        acceptHeader = flow.request.headers.get("accept")
        if acceptHeader != None and "text/html" in acceptHeader:
            secFetchSiteHeader = flow.request.headers.get("sec-fetch-site")
            if(secFetchSiteHeader == None or  "none" in secFetchSiteHeader or  "same-origin" in secFetchSiteHeader or "cross-site" in secFetchSiteHeader):
                currentRequest = flow.request.url.replace('http://', '').replace('https://', '').replace('www.', '').rstrip("/")
                print("Website Berbahaya", website_berbahaya)
                print("URL SAAT INI SETELEAH secFetchSiteHeader\t: ", currentRequest)
                if(currentRequest.split("/")[0] in combined_list_websites):
                    flow.response = http.Response.make(
                            302,
                            b'',
                            {"Location": "https://white-pebble-088ad5110.2.azurestaticapps.net"},
                        )
                elif(currentRequest in combined_list_websites):
                    flow.response = http.Response.make(
                            302,
                            b'',
                            {"Location": "https://white-pebble-088ad5110.2.azurestaticapps.net"},
                        )
                else:
                    print("Tidak Berbahaya: URL", currentRequest)

