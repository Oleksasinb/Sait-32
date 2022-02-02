// function min(a,b) {
// if(a < b){
//         console.log(a)
//     }
//     return
// }
// let rez = min(4,10)

// function pow(x,n) {
//     console.log(x**n)
//     return(x,n)
// }
// let rez2 = pow(2,5)
// let rez3 = pow(3,5)
// let rez4 = pow(12,12)

const body = document.getElementById("body")
body.innerHTML=body.innerHTML + '<div class=block></div>'
const block = document.querySelector(".block")
block.style.width='200px'
block.style.height='200px'
block.style.background='red'
let array = ['#FF0000', '#00FF00', '#0000FF']
let temp=0
change.onclick = function() {
    temp=temp + 1
    let x = document.getElementById("add").value
    if (!array.includes(x)) {
        array.push(x)
        temp=array.length -1
    }
    block.style.background=array[temp % array.length]
}