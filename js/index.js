// main vars
let btn = document.querySelector('#cat')
let span = document.querySelector('#main-number')

let upgrades = document.querySelectorAll(`.upgrade`)

// main number vars
let catCount = 0
let clickPower = 1

// costs
let costs = [10 , 50 , 400, 3000]


for (let button of buttons){
    button.addEventListener()
}

btn.addEventListener('click', add)

function add(){
  catCount = catCount + clickPower
  span.innerHTML = catCount
}