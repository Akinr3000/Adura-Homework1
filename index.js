let input = document.getElementById("input1")
let send = document.getElementById("send1")
let sender = document.getElementById("sender")
let receiver = document.getElementById("receiver")
let pop = document.getElementById("popup")
let popup = document.getElementById("pop")

// function popel(){
//     popup.style.display = "block"
//     console.log("clicked")
// }

pop.addEventListener("click", function(){
    popup.style.display = "block"
})

function sendel(){
    if(input.value != ""){
        sender.innerHTML += `<p>${input.value}</p>`
        sender.style.display = "block"
        input.value = ""
    }
}