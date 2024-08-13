let mn = 0
let pwc =1

let btn = document.querySelector('#btn')
let p = document.querySelector('#click')

btn.addEventListener('click', add)

function add(){
  mn = mn + pwc
  p.innerHTML = mn
}