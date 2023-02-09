// need 3 products displayed on the sight - the user can pick one. 
let previousProduct = [];
let productContainer = document.querySelector("section");
let resultButton = document.getElementById("rButton");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

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
  let isRepeated = null;
  let allreadySeen = null;
  // call the getRandomNumber
  do {
    var product1 = getRandomNumber();
    var product2 = getRandomNumber();
    var product3 = getRandomNumber();
    isRepeated = product1 === product2 || product1 === product3 || product2 === product3;
    allreadySeen = false;

    for (let i = 0; i < previousProduct.length; i++) {
      let product1name = Products.allProds[product1].name;
      let product2name = Products.allProds[product2].name;
      let product3name = Products.allProds[product3].name;
      if (previousProduct[i] === product1name || previousProduct[i] === product2name|| previousProduct[i]  === product3name ) { // checks if the product index has been shown in the previous 'loop'
        console.log("repeated "+ [i])
        allreadySeen = true
      }
    }
  } while (isRepeated || allreadySeen)  // goes back to the start. Do while = do it again if condition is true. 
  
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

// ------------------ CHARTS ----------------------------------
function renderChart(){
  let labelArray = [];
  let clickedArray = [];
  let viewsArray = [];

  for (let i = 0; i < Products.allProds.length; i++){
    let thisProd = Products.allProds[i];
    labelArray.push(thisProd.name);
    clickedArray.push(thisProd.clicks);
    viewsArray.push(thisProd.views);
  }
  const labels = labelArray
  const data = {
  labels: labels,
  datasets: [{
    label: 'Product clicks',
    data: clickedArray,
    backgroundColor: [
      '#FFA07A',
      '#778899',
      '#FFE4B5',
      '#B0C4DE',
      '#F08080',
      '#ADD8E6',
      '#6495ED'
    ],
    borderColor: [
      'black',
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
      indexAxis: 'y',
  },
};
const canvas = document.getElementById('myCanvas')
new Chart(canvas,config)
}



function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("Please click on an image");
  } else {
    clicks++;
  }
  

  let clickProducts = event.target.alt;
  for (let i = 0; i < Products.allProds.length; i++) {
    if (clickProducts === Products.allProds[i].name) {
      Products.allProds[i].clicks++;
      break;
    }
  }

  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProductClick);
    resultButton.addEventListener("click", renderResults);
    renderResults();
  } else {
    previousProduct = [img1.alt,img2.alt,img3.alt]
    console.log(previousProduct)
    render();
  }
}

function renderResults() {
  renderChart();
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
new Products("Cthulhu", "./images/cthulhu.jpeg");
new Products("Dog Duck", "./images/dog-duck.jpeg");
new Products("Dragon", "./images/dragon.jpeg");
new Products("Pen", "./images/pen.jpeg");
new Products("Pet Sweep", "./images/pet-sweep.jpeg");
new Products("Scissors", "./images/scissors.jpeg");
new Products("Shark", "./images/shark.jpeg");
new Products("Sweep", "./images/sweep.png");
new Products("Tauntaun", "./images/tauntaun.jpeg");
new Products("Unicorn", "./images/unicorn.jpeg");
new Products("Water Can", "./images/water-can.jpeg");
new Products("Wine Glass", "./images/wine-glass.jpeg");


render();


productContainer.addEventListener("click", handleProductClick);