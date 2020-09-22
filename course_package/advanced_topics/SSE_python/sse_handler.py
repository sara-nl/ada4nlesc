import json
import pprint
import sseclient
import requests

url='https://dcacheview.grid.surfsara.nl:22880/api/v1/events/channels/[channel_ID]'
headers = {'Authorization': 'Bearer [Token]}

r = requests.get(url, headers=headers, stream=True)
client = sseclient.SSEClient(r)

for event in client.events():
    print ("Got a new event from dCache")
    pprint.pprint(event.data)

