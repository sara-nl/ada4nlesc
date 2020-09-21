#create connection
const url = "https://dcacheview.grid.surfsara.nl:22880/api/v1/events/channels/RcQVOjThCdEEAchPTBJ2hQ"
const token = "MDAxY2xvY2F0aW9uIE9wdGlvbmFsLmVtcHR5CjAwMThpZGVudGlmaWVyIDVMdFI5S29QCjAwMTVjaWQgaWlkOlZUMDhXTFN5CjAwMzhjaWQgaWQ6NTAzNTQ7NDEzODUsNDI1MjksNDQ0MzYsNDk5ODQsMzAwMTM7a3Jpc3RlbmwKMDAyYmNpZCBiZWZvcmU6MjAyMC0wOS0yM1QxMDoxNDoyMy44MTc0MDNaCjAwMzRjaWQgaG9tZTovcG5mcy9ncmlkLnNhcmEubmwvZGF0YS91c2Vycy9rcmlzdGVubAowMDQ0Y2lkIHJvb3Q6L3BuZnMvZ3JpZC5zYXJhLm5sL2RhdGEvdXNlcnMva3Jpc3RlbmwvZGlzay9ubGVzY19hZGEvCjAwNTJjaWQgYWN0aXZpdHk6RE9XTkxPQUQsVVBMT0FELERFTEVURSxNQU5BR0UsTElTVCxSRUFEX01FVEFEQVRBLFVQREFURV9NRVRBREFUQQowMDE1Y2lkIGlwOjAuMC4wLjAvMAowMDJmc2lnbmF0dXJlIMYbr7TAaUQ1wA57ZzSUOrgelKnPDdDdb0n3cAxDVS47Cg"
const header = '{ authorizationHeader : "Bearer ' + token + '"}'
const evtSource = new EventSource(url, header)

#simple: 
evtsource.onmessage = console.log

#more graular event handling
evtSource.addEventListener("ping", function(event) {
  const newElement = document.createElement("li");
  const time = JSON.parse(event.data).time;
  newElement.innerHTML = "ping at " + time;
  eventList.appendChild(newElement);
});