const quotes = [   
    "Největším úspěchem není nikdy nepadnout, ale pokaždé znovu vstát.",
    "Cesta tisíce mil začíná prvním krokem.",
    "Život je to, co se děje, když jste zaneprázdněni jinými plány.",
    "Síla nepochází z fyzické kapacity. Pochází z nezlomné vůle.",
    "Štěstí je, když to, co si myslíte, co říkáte a co děláte, je v harmonii.",
    "Není důležité, jak pomalu jdete, dokud se nezastavíte.",
    "Nikdy není pozdě být tím, kým jste mohli být.",
    "Každý den je nová příležitost změnit svůj život.",
    "Nemůžete zpět změnit, ale můžete začít tam, kde jste, a změnit konec.",
    "Nezáleží na tom, jak pomalu kráčíte, dokud nezastavíte."];
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote;
}
