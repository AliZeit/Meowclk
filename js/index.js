let catCount = 0
let clickPower =1

let btn = document.querySelector('#cat')
let span = document.querySelector('#main-number')

btn.addEventListener('click', add)

function add(){
  catCount = catCount + clickPower
  span.innerHTML = catCount
}