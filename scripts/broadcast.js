import BroadcastModule from "../modules/BroadcastModule.js";

function displayLatestBroadcasts() {
    let broadcasts = BroadcastModule.getBroadcasts();
    let content = getBroadcastsHTML(5); // Martin: 5 most recent broadcasts

    document.getElementById("broadcast-container").innerHTML = content;
}

function addNewBroadcast(input) {
    // Martin: store information about the new broadcast
    let author = "Admin";
    let content = input;
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    if (hours < 10) {
        hours = "0"+hours.toString();
    }
    if (minutes < 10) {
        minutes = "0"+minutes.toString();
    }
    if (day < 10) {
        day = "0"+day.toString();
    }
    if (month < 10) {
        month = "0"+month.toString();
    }

    let dateString = "("+hours+":"+minutes+") "+day+"."+(month)+"."+year.toString().substr(-2);

    // Martin: add to Broadcast array
    BroadcastModule.appendBroadcast(author,content,dateString);
}

function displayAllBroadcasts() {
    let content = `
    <div class="modal is-active">
        <div id="modal-background" class="modal-background"></div>
        <div class="modal-content box">
            ${getBroadcastsHTML("all")}
        </div>
    </div>
    `;   
    document.getElementById("modal-area").innerHTML = content;

    // Martin: remove the entire modal if the background is clicked
    document.getElementById("modal-background").onclick = function() {
        document.getElementById("modal-area").innerHTML = "";
    }
}

function displayWriteBroadcast() {
    let content = `
    <div class="modal is-active">
        <div id="modal-background" class="modal-background"></div>
        <div class="modal-content columns box">
            <input id="broadcast-input" class="input column is-10" type="text" placeholder="Skriv en broadcast">
            <button id="broadcast-send-button" class="button btn-styling column is-2">Send</button>
        </div>
    </div>
    `;

    document.getElementById("modal-area").innerHTML = content;

    // Martin: remove the entire modal if the background is clicked
    document.getElementById("modal-background").onclick = function() {
        document.getElementById("modal-area").innerHTML = "";
    }

    document.getElementById("broadcast-input").addEventListener("keydown", function() {
        if (event.keyCode == 13) {
            sendBroadcast();
        }
    })
    document.getElementById("broadcast-send-button").onclick = sendBroadcast;

    document.getElementById("broadcast-input").focus();
}

function sendBroadcast() {
    let broadcastMessage = document.getElementById("broadcast-input").value;
    if (broadcastMessage !== "") {
        console.log(broadcastMessage);
        addNewBroadcast(broadcastMessage);
        document.getElementById("modal-area").innerHTML = "";
        displayLatestBroadcasts();
    }
}

function getBroadcastsHTML(amount="all") {
    let content = "";
    let broadcasts = BroadcastModule.getBroadcasts();
    if (amount == "all") {
        amount = broadcasts.length;
    }
    // Martin: loop through all broadcasts
    for (let i = broadcasts.length-1; i >= broadcasts.length-amount; i--) {
        let currBroadcast = broadcasts[i];
        content += `
        <article class="media tile is-child notification broadcast-box">
            <div class="media-content">
                <div class="content">
                    <span class="has-text-weight-bold">${currBroadcast.author}</span> <span class="is-size-7">${currBroadcast.date}</span>
                    <br>
                    ${currBroadcast.content}
                </div>
            </div>
        </article>
        `;
        if (broadcasts.length-amount != i) {
            content += "<br>";
        }
    }
    return content;
}

document.getElementById("read-all").onclick = function() {
    displayAllBroadcasts();
}
document.getElementById("new-broadcast").onclick = function() {
    displayWriteBroadcast();
}

displayLatestBroadcasts();