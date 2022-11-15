let adults = 42;
let children = 8;
let price;

if(adults < 0) {
    adults = 0;
}

if (children < 0) {
    children = 0;
}

for(let i=1; i<=adults; i++) {
    console.log("Ticket #" + i);
}

function calc(adults, children) {
    return adults*12 + children*6
}

window.onload = function() {
  let btn = document.getElementById("buyBtn");
  btn.onclick = function() {
    let adults = document.getElementById("adCount").value;
    let children = document.getElementById("chCount").value;
    let price = calc(adults, children);
    alert("It'll cost " + price);
  }
} 
