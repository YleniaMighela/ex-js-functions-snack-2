// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a, b) {
    return (a + b);
}
console.log(somma(3, 5));
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const somma = function (a, b) {
    return (a + b);
}

console.log(somma(2, 4));
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const somma = (a, b) => a + b;
console.log(somma(5, 4));

