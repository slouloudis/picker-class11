
// global variables

let boatContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let img1 = document.querySelector("section img:first-child");
let img2 = document.querySelector("section img:nth-child(2)");
let img3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
let maxClicksAllowed = 9;

function Boat(nameParam,src) {
  this.name = nameParam;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
  Boat.allBoats.push(this)
}

Boat.allBoats = [];

// random
function getRandomNumber () {
  return Math.floor(Math.random() * allBoats.length);
}

// render boat

function renderBoats() {
  //call the getRandomNumber 
  let boat1 = getRandomNumber();
  let boat2 = getRandomNumber();

  img1.src = allBoats[boat1].src
  img1.setAttribute["src"]
}

function boatClicked(event) {
  if (event.targt == boatContainer) {
    alert("Please click an image!")
  }
  clicks++;
  let clickBoat = event.target.alt;
  //loop through all boats
  for (let i = 0; i < allBoats.length; i++) {
    console.log(Boat.allBoats[i])
    // check if name matches one we've clicked on
    if (clickBoat == Boat.allBoats)
  }
}

function renderResults();

renderBoats();

boatContainer.addEventListener("click", boatClicked)