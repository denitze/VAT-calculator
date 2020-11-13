let nettoToBrutto = document.getElementById("netto-to-brutto")
let bruttoToNetto = document.getElementById("brutto-to-netto")
let title = document.getElementById("title")
let ergebnisHeading =document.getElementById("netto-betrag")

// change the title from Netto to Brutto

bruttoToNetto.addEventListener('click', function() {
    title.innerHTML = "Bruttobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>"
    ergebnisHeading.innerHTML = "Nettobetrag"
})

nettoToBrutto.addEventListener('click', function() {
    title.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>"
    ergebnisHeading.innerHTML = "Bruttobetrag (Endpreis)"
})


function calculateMe() {
    console.log("test");
let wert1 = document.getElementById("wert1");
let preis = document.getElementById("preis");
let betrag1 = document.getElementById("betrag1");
let betrag2 = document.getElementById("betrag2");

let brutto
let netto
let betrag


// check if netto to brutto or brutto to netto
if (nettoToBrutto.checked) {

    // 19% oder 7%
    if (wert1.checked) {
brutto = preis.value * 1.19;
brutto = brutto.toFixed(2)
betrag2.innerHTML = brutto + " €"
betrag = brutto - preis.value;
betrag = betrag.toFixed(2)
betrag1.innerHTML = betrag + " €"
    } else {
        brutto = preis.value * 1.07;
    brutto = brutto.toFixed(2)
    betrag2.innerHTML = brutto + " €"
    betrag = brutto - preis.value;
    betrag = betrag.toFixed(2)
    betrag1.innerHTML = betrag + " €"
    } }

//    wenn brutto to netto  
    else {
        if (wert1.checked) {
            netto = preis.value / 1.19;
            netto = netto.toFixed(2)
            betrag2.innerHTML = netto + " €"
            betrag = preis.value - netto;
            betrag = betrag.toFixed(2)
            betrag1.innerHTML = betrag + " €"
                } else {
                netto = preis.value / 1.07;
                netto = netto.toFixed(2)
                betrag2.innerHTML = netto + " €"
                betrag = preis.value - netto;
                betrag = betrag.toFixed(2)
                betrag1.innerHTML = betrag + " €"
                }
    }
}




