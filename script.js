let counter = document.getElementById("count")
let total = document.getElementById("entre")
let All = document.getElementById("all")
let count = 0
function increment() {
    count += 1;
    counter.textContent = count
}
let sum = 0
function save() {
    All.textContent = All.textContent.replace(`${sum}`, '');
    sum += count;
    let total = count + " - ";
    entre.textContent += total;
    All.textContent += `${sum}`;
    counter.textContent = 0;
    count = 0;
}


