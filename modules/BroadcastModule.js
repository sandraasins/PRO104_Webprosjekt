const BroadcastModule = (function() {
    const BroadcastMessages = [
        {
            author: "Admin",
            content: "Da er vi igang med PIZZA DAGEN! Dere er godt forberedt, la festen begynne!",
            date: "(08:32) 09.02.21"
        },{
            author: "IT",
            content: "Som følge av en systemfeil må alle ansatte som jobber i dag melde fra til nærmeste leder for å få registrert arbeidstid.",
            date: "(12:03) 11.02.21"
        },{
            author: "IT",
            content: "Systemet fungerer igjen som det skal, alle ansatte kan logge inn på vanlig måte fra i morgen.",
            date: "(23:41) 11.02.21"
        },{
            author: "Admin",
            content: "I morgen er det valentinsdagen, gi våre kunder den absolutt beste opplevelsen de kan få!",
            date: "(18:19) 13.02.21"
        },{
            author: "Admin",
            content: "Endelig er dagen her! Fra i dag kan kunder bestille vår nye \"I'm special\" pizza. Anbefal det til alle!",
            date: "(09:31) 06.03.21"
        },{
            author: "Admin",
            content: "Denne helgen har vi kampanje med 1 gratis drikke når man kjøper en stor pizza. Husk å anbefale sideretter!",
            date: "(09:27) 18.03.21"
        },{
            author: "Admin",
            content: "Grunnet oppussing vil vårt lokale på Frogner ikke være åpent fra tirsdag til torsdag denne uken.",
            date: "(14:21) 12.04.21"
        },{
            author: "Admin",
            content: "Vi har nå lagt til Hot Wings på menyen! Smaker kjempegodt! Anbefal til alle kunder.",
            date: "(09:00) 18.05.21"
        }
    ];

    const getBroadcasts = () => BroadcastMessages;
    const appendBroadcast = function(author,content,date) {
        BroadcastMessages.push({author,content,date});
    };

    return {getBroadcasts, appendBroadcast};
})();

export default BroadcastModule;