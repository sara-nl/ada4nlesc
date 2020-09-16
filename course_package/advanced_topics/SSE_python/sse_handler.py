from sseclient import SSEClient

url = 'https://dcacheview.grid.surfsara.nl:22880/api/v1/events/channels/l3PD88a3Jqray09-LzhafQ'


messages = SSEClient(url)
for msg in messages:
    print("success?")
