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
    //chiedi al passeggero km e età
    let full_name = document.getElementById("full_name").value;
    let km_da_percorrere = document.getElementById("km_passeggero").value;
    let eta_passeggero = document.querySelector(".fascia_eta").value;
    
    //applica scontistica in base a età
    price_ticket = km_da_percorrere * prezzo_al_km;

    price_under_18 = price_ticket - (price_ticket * 0.2)
    
    price_over_65 = price_ticket - (price_ticket * 0.4)


    if (eta_passeggero == "young") {
        prezzo_finale = price_under_18
    } else if (eta_passeggero == "over") {
        prezzo_finale = price_over_65
    } else {
        prezzo_finale = price_ticket
    }

    // stampa biglietto 

    let nome_passeggero = document.querySelector(".nome_passeggero").innerHTML
    document.querySelector(".nome_passeggero").innerHTML = full_name

    let tariffa = document.querySelector(".tariffa").innerHTML
    document.querySelector(".tariffa").innerHTML = eta_passeggero

    let carrozza = document.querySelector(".carrozza").innerHTML
    document.querySelector(".carrozza").innerHTML = Math.floor(Math.random() * 10)+1;

    let codice_cp = document.querySelector(".codice_cp").innerHTML
    document.querySelector(".codice_cp").innerHTML = Math.floor(Math.random() * 10000) +1;



    let costo_ticket = document.querySelector(".costo_biglietto").innerHTML
    document.querySelector(".costo_biglietto").innerHTML = prezzo_finale.toFixed(2)
  
});

let elementAnnullaBtn = document.querySelector(".annulla_ticket")

elementAnnullaBtn.addEventListener("click" , function () {
    document.querySelector(".nome_passeggero").innerHTML = ""
    document.querySelector(".tariffa").innerHTML = ""
    document.querySelector(".costo_biglietto").innerHTML = ""
    document.querySelector(".carrozza").innerHTML = ""
    document.querySelector(".codice_cp").innerHTML = ""

});

