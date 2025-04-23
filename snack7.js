// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, avvio, stop) {

    const id = setInterval(() => {
        console.log(messaggio);

    }, avvio);


    setTimeout(() => {
        clearInterval(id)
        console.log("Sei arrivato primo!");

    }, stop);

};

eseguiEferma("Pronti...Partenza..Via!", 1000, 6000);