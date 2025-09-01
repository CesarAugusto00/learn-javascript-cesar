// javascript
//document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
let count = Number(countEl.textContent)
let text = document.getElementById("save-el")
let info = text.textContent 
let countElements = 0

//listen to clics at the increment buttom. You create a on click on the button with the name of the funciton that will be given here
function increment() {
    count = count + 1
    countEl.innerText = count
}

function save(){
    let currentCount = countEl.textContent
    if (countElements === 0) {
        info += currentCount 
        document.getElementById("save-el").textContent = info
        countElements += 1
    }
    else{
        info += "-"+currentCount 
        document.getElementById("save-el").textContent = info
    }
    countEl.innerText = 0
    count = 0
}

//create two variables name and greeting
let userName = "Cesar"
let greeting = "Hi, my name is "

let myGreeting = greeting + userName  
console.log(myGreeting)

let greetingEl = document.getElementById("welcome-el")
greetingEl.innerText = myGreeting



