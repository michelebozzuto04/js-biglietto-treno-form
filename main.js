const form = document.getElementById("form");
const fullNameOutput = document.querySelector("")


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputfullName = document.getElementById("fullName").value;
    const inputKmNumber = document.getElementById("kmNumber").value;
    const inputAge = document.getElementById("age").value;
    let ticketPrice = inputKmNumber * 0.21;
    let offer = "Offerta Standard";
    if (inputAge < 18) {
        ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
        offer = "Offerta Minorenni";
    } else if (inputAge >= 65) {
        ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
        offer = "Offerta Over 65";
    } else {
        ticketPrice;
    }
    console.log(`Grazie ${inputfullName}, ${offer}, Prezzo totale: ${ticketPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`);
})
