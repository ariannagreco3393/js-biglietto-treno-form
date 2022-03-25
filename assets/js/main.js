/* 
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const prezzo_al_km = 0.21;
let prezzo_finale;

//btn Genera

let elementGeneraBtn = document.querySelector(".genera_ticket")

elementGeneraBtn.addEventListener("click", function() {
    let full_name = document.getElementById("full_name").value;
    let km_da_percorrere = document.getElementById("km_passeggero").value;
    let eta_passeggero = document.querySelector(".fascia_eta").value;
    let price_ticket = document.getElementById("adult").value;
    price_ticket = km_da_percorrere * prezzo_al_km;
    let price_under_18 = document.getElementById("min").value;
    price_under_18 = price_ticket - (price_ticket * 0.2)
    let price_over_65 = document.getElementById("over").value;
    price_over_65 = price_ticket - (price_ticket * 0.4)

    if (eta_passeggero < 18) {
        prezzo_finale = price_under_18
    } else if (eta_passeggero > 65) {
        prezzo_finale = price_over_65
    } else {
        prezzo_finale = price_ticket
    }
    console.log(prezzo_finale);
  
});