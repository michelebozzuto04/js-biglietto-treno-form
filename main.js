const form = document.getElementById("form");
const results = document.getElementById("results");
const fullNameOutput = document.getElementById("fullNameOutput");
const offerOutput = document.getElementById("offerOutput");
const wagonOutput = document.getElementById("wagonOutput");
const codeOutput = document.getElementById("codeOutput");
const priceOutput = document.getElementById("priceOutput");

form.addEventListener('submit', (event) => {
    // Prevents page from reloading
    event.preventDefault();

    // DOM Variables Declaration
    const inputfullName = document.getElementById("fullName").value;
    const inputKmNumber = document.getElementById("kmNumber").value;
    const inputAge = document.getElementById("age").value;
    let ticketPrice = inputKmNumber * 0.21;
    let offer = "Biglietto Standard";
    let wagon = Math.floor(Math.random() * 100);
    let code = 91736;

    // Condition for Different Ages
    if (inputAge < 18) {
        ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
        offer = "Biglietto Minorenni";
    } else if (inputAge >= 65) {
        ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
        offer = "Biglietto Over 65";
    } else {
        ticketPrice;
    }

    // Show Output
    fullNameOutput.innerText = inputfullName;
    offerOutput.innerText = offer;
    wagonOutput.innerText = wagon;
    codeOutput.innerText = code;
    priceOutput.innerText = ticketPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" });

    results.classList.remove("d-none");
    results.classList.add("d-flex");

})

form.addEventListener('reset', () => {
    results.classList.remove("d-flex");
    results.classList.add("d-none");
})