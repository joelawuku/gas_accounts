function calculate(){

let p1_open = parseFloat(document.getElementById("p1_open").value)
let p1_close = parseFloat(document.getElementById("p1_close").value)

let p2_open = parseFloat(document.getElementById("p2_open").value)
let p2_close = parseFloat(document.getElementById("p2_close").value)

let price = parseFloat(document.getElementById("price").value)
let expense = parseFloat(document.getElementById("expense").value)
let cash = parseFloat(document.getElementById("cash").value)

let pump1 = p1_close - p1_open
let pump2 = p2_close - p2_open

let litres = pump1 + pump2
let sales = litres * price

let bank = sales - expense

let variance = cash - bank


document.getElementById("pump1").innerText = "Pump1 Litres: " + pump1.toFixed(2)
document.getElementById("pump2").innerText = "Pump2 Litres: " + pump2.toFixed(2)

document.getElementById("litres").innerText = "Total Litres: " + litres.toFixed(2)
document.getElementById("sales").innerText = "Sales Amount: " + sales.toFixed(2)

document.getElementById("bank").innerText = "Cash To Bank: " + bank.toFixed(2)


let box = document.getElementById("varianceBox")
let text = document.getElementById("varianceText")

if(variance > 0){

box.className="variance over"
text.innerText="OVER: " + variance.toFixed(2)

}

else if(variance < 0){

box.className="variance short"
text.innerText="SHORTAGE: " + variance.toFixed(2)

}

else{

box.className="variance balanced"
text.innerText="BALANCED"

}

}
