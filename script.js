let fruit = document.querySelector(".fruit");
let flower = document.querySelector(".flower");
let color = document.querySelector(".color");
let age = document.querySelector(".age");


//Code Along
// task 1: update the variable fruitList so that it is an array with at least 4 fruits.
let fruitList = ["Strawberry", "Cherry", "mango", "coconut"];
console.log(fruitList);

// task 2: update the variable flowerList so that it is an array with at least 4 flowers.
let flowerList = ["Rose", "Sunflower", "Begonia", "Iris"];
console.log(flowerList);

// task 3: update the variable colorList so that it is an array with at least 4 different colors.
let colorList = ["Red", "Yellow", "Blue", "Green"];
console.log(colorList);

// task 4: update the variable ageList so that it is an array with a list of ages (numbers) of classmates and volunteers.
let ageList = ["17", "23", "28", "30"];
console.log(ageList);


//Code It Solo
// task 5: update the variable favFruit to retrieve the array element of your favorite fruit in the fruitList array. Update the innerHTML to the favFruit variable.
let favFruit = fruitList[1];
fruit.innerHTML = favFruit;


// task 6: update the variable favFlower to retrieve the array element of your favorite flower in the flowerList array. Update the innerHTML to the favFlower variable.
let favFlower = flowerList[1];
flower.innerHTML = favFlower;

// task 7: update the variable favColor to retrieve your favorite color from the colorList array. Update the innerHTML to the favColor variable.
let favColor = colorList[1];
color.innerHTML = favColor;


// task 8: update the variable oldestAge to retrieve the array element of the oldest person in the ageList array. Update the innerHTML to the oldestAge variable.
let oldestAge = ageList[1];
age.innerHTML = oldestAge;


