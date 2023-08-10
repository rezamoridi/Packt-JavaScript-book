//Practice 3.2  Arrays in JS (chapter3)
/*
let shopingList = []; // shoping list
shopingList = shopingList.concat("Milk", "Bread", "Apples"); // add items to list
shopingList.splice(1, 1, "Bananas", "eggs"); // update Bread with Bananas and eggs
shopingList.pop(); // remove last item
shopingList.sort(); // sort items
shopingList.splice(1, 0, "carrot", "lettuce"); // adding items after Bananas
let newList = ["juice", "Pop"];
shopingList = shopingList.concat(newList);
shopingList = shopingList.concat(newList);
console.log(shopingList); // log shopping list to the console
*/

// Practice 3.3  Arrays in JS (chapter3)
/*
let originalArr = [1, 2, 3];
let newArr = [originalArr, originalArr, originalArr]
console.log(newArr[0][1]);
*/

// Practice 3.4

/*
let myCar = {
  model: "type A",
  color: "Red",
  taxi: false,
  hybrid_engin: false,
  tierLevel: 80,
};
let color = "color";
let modelProp = "model";
myCar[modelProp] = "type C";
myCar[color] = "Yellow";
console.log(myCar.model);
console.log(myCar["model"]);
console.log(myCar[modelProp]);
console.log(myCar);
*/

// Combining Arrays & Objects
/*
function practice35() {
let myCar = {
  engine: {
    fuel: "Perol",
    valves: 8,
    cylinder: 4,
    damage: false,
  },
  body: {
    color: {
      doors: "black",
      windows: 0,
    },
    damage: false,
    roof: {
      radio: true,
      sunroof: true,
    },
  },
};

let people = {
  friends: [],
};

let friend1 = 'ali';
let friend2 = 'reza';
let friend3 = 'ahmad';
people.friends.push(friend1, friend2, friend3);

console.log(people.friends);
}
*/

// chapter project: Manipulating an array

/*
const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

theList.shift();
theList.splice(1, 6);
theList.push("Middle", "hello World", "LAST");
theList.unshift("FIRST");
console.log(theList);
*/

// chapter 3 project : Company product catalog

/*
let inventory = [
    computer = {
        name_ : "Acer",
        model : 'New',
        cost : 30,
        quantity : false
    },
    refrigrator = {
        name_ : "vertical",
        model : 'shop',
        cost : 50,
        quantity : false
    },
    chealer = {
        name_ : "absal",
        model : 'WWW',
        cost : 45,
        quantity : true
    }
]
console.log(inventory[2].quantity);
*/
