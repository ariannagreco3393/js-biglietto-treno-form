/* 
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const prezzo_al_km = 0.21;
let prezzo_finale;

// chiedere i km al passeggero

let km_da_percorrere = document.getElementById("km_da_percorrere").value;
console.log(km_da_percorrere);

// chiedere l'età del passeggero

let eta_passeggero;


//prezzo del biglietto

const price_ticket = prezzo_al_km * km_da_percorrere

// prezzo minori di 18

const price_under_18 = price_ticket - (price_ticket * 0.2)

// prezzo over 65
const price_over_65 = price_ticket - (price_ticket * 0.4)

if (eta_passeggero < 18) {
    prezzo_finale = price_under_18
} else if (eta_passeggero > 65) {
    prezzo_finale = price_over_65
} else {
    prezzo_finale = price_ticket
}