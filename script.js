
//This is the 2-d array of foods 

let foods = [
    ["Starbucks Egg White Wrap", 400],
    ["Mr Bean Tuna", 225],
    ["Mr Bean Cheese", 200],
    ["Mr Bean Peanut", 350],
    ["Mr Bean Chicken Soy Porridge", 350],
    ["Subway Turkey Sandwich", 300],
    ["Subway Roasted Chicken Sandwich", 300],
    ["TDC", 500],
    ["Gokoku Chicken Avocado", 500],
    ["Gokoku Match", 300],
    ["HM Soy Oats", 300],
    ["Protein Snack", 220],
    ["TBB chicken chilli sandwich", 600]
];

//decides which 3 foods to eat
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function decideFood(){
    // Shuffle array
    const shuffled = array.sort(() => 0.5 - Math.random());

   // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 3);

    return selected;

function printFoods(){
    for
}
}




//event handler for button press

let button = document.querySelector("button");

button.addEventListener("click", function())