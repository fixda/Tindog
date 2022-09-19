// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'

let dogIndex = 0
let currentDog = new Dog(dogs[dogIndex])

document.getElementById('reject-button').addEventListener('click', nope)
document.getElementById('accept-button').addEventListener('click', yes)
render()
function getNewDog(){
    dogIndex += 1
    if (dogIndex < dogs.length){
    currentDog = new Dog(dogs[dogIndex])
    render()}
    else{
        noMoreDogs()
    }
}

function yes(){
    currentDog.setMatchState(true)
    document.getElementById('liked').style.display = "block";
    setTimeout(getNewDog, 1500)
}

function nope(){
    currentDog.setMatchState(false)
    document.getElementById('nope').style.display = "block";
    setTimeout(getNewDog, 1500)
}
function noMoreDogs(){
    console.log("end")
    document.getElementById("card-container").innerHTML = `<div id="main-container">
    <h1>No more dogs in your area</h1>
    </div>`
}

function render(){
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}  

