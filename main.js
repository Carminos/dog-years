// My age in years
const myAge = 40;

// First two years of a dog's life
let earlyYears = 2;
earlyYears *= 10.5;

// Later years
let laterYears = myAge - 2;

// Each later year 
laterYears *= 4

console.log(earlyYears)
console.log(laterYears)

// My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

const myName = 'Carmen'.toLowerCase();
console.log(myName);

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
