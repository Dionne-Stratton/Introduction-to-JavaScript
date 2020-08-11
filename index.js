/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


const votingAge = 38;

if (votingAge > 18) {
  console.log('true');
}


//Task b: declare a variable and then use a conditional to change the value of that
//variable based on the value assigned to a second variable (no function required)

let iGetIt = "Git it?";
const itWorks = "yes";

if (itWorks === "yes") {
  iGetIt = "Got it!"
} else {
  iGetIt = "Don't got it."
}

console.log(iGetIt)



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"));


//Task d: Write a function to multiply a*b

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(3, 7));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years


const age = 38

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(age, 7));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will TO be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

function dogFeeding(weight, age) {
  if (age >= 1 && weight <= 5) {
    return weight * 0.05
  } else if (age >= 1 && weight >= 6 && weight <= 10) {
    return weight * 0.04
  } else if (age >= 1 && weight >= 11 && weight <= 15) {
    return weight * 0.03
  } else if (age >= 1 && weight > 15) {
    return weight * 0.02
  } else if (age < 1 && age >= .2 && age <= .4) {
    return weight * 0.10
  } else if (age < 1 && age > .4 && age <= .7) {
    return weight * 0.05
  } else if (age < 1 && age > .7 && age <= .12) {
    return weight * 0.04
  }
}

console.log(dogFeeding(15, 1))
// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
function playGame(player, computer) {

  let computer = Math.random()
  if (computer <= 0.30) {
    computer = "rock"
  } else if (computer <= 0.60) {
    computer = "paper"
  } else if (computer > 0.60) {
    computer = "scissors"
  }

  let result = winOrLose(player, computer);

  if (player = "rock" && computer = "rock" || player = "paper" && computer = "paper" || player = "scissors" && computer = "scissors" || ) {
    result = "tie"
  } else if (player = "rock" && computer = "scissors" || player = "paper" && computer = "rock" || player = "scissors" && computer = "paper") {
    result = "win"
  } else if (player = "scissors" && computer = "rock" || player = "rock" && computer = "paper" || player = "paper" && computer = "scissors") {
    result = "lose"
  }
  console.log(result)
}

console.log(playGame(paper))

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var kilometers = parseInt(5);
var miles = kilometers / 1.6;
console.log(miles + " Miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters


var feet = parseInt(5);
var cm = feet * 30.48;
console.log(cm + " CM");


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

// function(annoyingSong)
// for (let i = 99; i > 0; i--) {
//   console.log(i);
// }



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
let letter= "Letter Grade"
let grade=76

if (grade >= 90) {
  letter = "A"
} else if (grade >= 80) {
  letter = "B"
} else if (grade >= 70) {
  letter = "C"
} else if (grade >= 60) {
  letter = "D"
} else if (grade > 60) {
  letter = "F"
}

console.log(letter)

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
