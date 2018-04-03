// Episode One
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// Answer
// name is a global variable so it is in scope of the function
// so concatination works



// Episode Two
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//Answer
// score will be 3 because the variable score = 3 it is return inside the function
// so when result is called it returns 3



//Episode Three
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//Answer
// myAnimals array is declared inside the function so it has scope of that first
// it is then looping over the array from 0 to the length of the array which is 3
// so it returns each incriment, the string ":" , and each individual element of the array
// defined by i;



// Episode Four
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//Answer
// when allSuspects is called it will return the three global variables except suspectThree because
// suspectThree is defined first inside the function.



// Episode Five
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//Answer
// Detective['name'] is being defined in the function detectiveInfo so that would return 'Poirot' using the
// previous method printName which would replace the previous call on name: 'Ace Ventura'



//Episode Six
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//Answer
// The console.log is refering to a variable called murderer meaning
// it needs scope of it, therefore the only one it can "see" is the global
// variable where murderer = 'rick' so it will print to screen
// 'the murderer is rick'
// the other murderer variables are inside functions and only exist there



//Episode Seven
var scandel = 'I know pirate related stuff!';

function JohnAndTheTaleOfTheScallywag(){
    console.log(scandel);
    var scandel = 'Oh no not that kind of Scallywag!';
};
JohnAndTheTaleOfTheScallywag();

//Answer
