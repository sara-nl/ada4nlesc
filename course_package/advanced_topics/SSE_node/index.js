const app = require("express")();

app.get("/", (req, res) => {
    const evtSource = new EventSource("https://dcacheview.grid.surfsara.nl:22880/api/v1/events/channels/l3PD88a3Jqray09-LzhafQ")

    evtSource.addEventListener("ping", function(event) {
        const newElement = document.createElement("li");
        const time = JSON.parse(event.data).time;
        newElement.innerHTML = "ping at " + time;
        eventList.appendChild(newElement);
    });
    
    res.send("hello!")
});

app.listen(8080)
console.log("Listening on 8080")

