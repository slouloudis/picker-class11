// need 3 products displayed on the sight - the user can pick one. 

let productContainer = document.querySelector("section")
let resultButton = document.querySelector("section + div");
let img1 = document.querySelector("section img:first-child");
let img2 = document.querySelector("section img:nth-child(2)");
let img3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
let maxClicksAllowed = 9;

function Products(nameParam,src) {
  this.name = nameParam;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
  Products.allProds.push(this)
}

Products.allProds = [];

// random
function getRandomNumber () {
  return Math.floor(Math.random() * Products.allProds.length);
}

function render() {
  // call the getRandomNumber
  let product1 = getRandomNumber();
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();

  while (product1 === product2) {
    product2 = getRandomNumber();
  }
  img1.src = Products.allProds[product1].src;
  img2.src = Products.allProds[product2].src;
  img3.src = Products.allProds[product3].src;
  img1.alt = Products.allProds[product1].name;
  img2.alt = Products.allProds[product2].name;
  img3.alt = Products.allProds[product3].name;
  Products.allProds[product1].views++;
  Products.allProds[product2].views++;
  Products.allProds[product3].views++;
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("Please click on an image");
  }
  clicks++;
  let clickProducts = event.target.alt;
  for (let i = 0; i < Products.allProds.length; i++) {
    if (clickProducts === Products.allProds[i].name) {
      Products.allProds[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProductClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener("click", renderResults);
    resultButton.className = "clicks-allowed";
    productContainer.className = "no-voting";
  } else {
    render();
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < Products.allProds.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${Products.allProds[i].name} had ${Products.allProds[i].views} view and was clicked ${Products.allProds[i].clicks} times.`;
    ul.appendChild(li);
  }
}

new Products("Bag", "./images/bag.jpeg");
new Products("Banana", "./images/banana.jpeg");
new Products("Bathroom", "./images/bathroom.jpeg");
new Products("Boots", "./images/boots.jpeg");
new Products("Breakfast", "./images/breakfast.jpeg");
new Products("Bubblegum", "./images/bubblegum.jpeg");
new Products("Chair", "./images/chair.jpeg");

render();

productContainer.addEventListener("click", handleProductClick);