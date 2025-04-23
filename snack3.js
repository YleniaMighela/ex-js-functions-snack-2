// Crea una funzione eseguiOperazione

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). 

const sottrazione = (a, b) => a - b;

const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operatore) => operatore(a, b);

// La funzione deve eseguire l'operazione fornita sui due numeri.
console.log(eseguiOperazione(10, 2, sottrazione));
console.log(eseguiOperazione(10, 2, divisione));

