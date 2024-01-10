import asyncio

from mitmproxy import options
from mitmproxy.tools import dump

async def start_proxy():
    opts = options.Options(listen_host="localhost", listen_port=8080)
    master = dump.DumpMaster(opts)
    master.options.set('block_global=false')
    master.options.set('connection_strategy=lazy')
    def stopProxy():
        master.shutdown()
    async def stop():
        asyncio.get_event_loop().call_later(1.5, stopProxy())
    await asyncio.gather(master.run(), stop())

asyncio.run(start_proxy())

