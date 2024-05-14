// basically just a more compact version of the anonymous function
// arrow functions are good for stuff like Map and ForEach usage
// or passing a function into another function in general

console.log("------------------ section 1 ------------------")
// lets start simple, define a function
function myAdd1(x, y) {
    return x + y;
}
// same as above, but function expression is saved in a variable
const myAdd2 = function (x, y) {
    return x + y;
}
myAdd1(3, 4) // 7
myAdd2(3, 4) // 7

// covert the above to an arrow function
// does the exact same thing, just different syntax
// of using "=>" instead of "function"
const myAdd3 = (x, y) => {
    return x + y;
}
myAdd3(3, 4) // 7

console.log("------------------ section 2 ------------------")
//using a single argument, these are the same
const mySquare1 = num => {
    return num * num;
}
const mySquare2 = (num) => {
    return num * num;
}

console.log("------------------ section 3 ------------------")
//using no arguments
const myRollDie1 = () => {
    return Math.floor(Math.random() * 6) + 1
}

console.log("------------------ section 4 ------------------")
//using implicit return
//ONLY usable for ARROW functions, not regular functions
//ONLY works with one expression/line, it returns the value of that expression
//notice the usage of parenthesis instead of brackets now
const myRollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)
//doing it on one line with "implicit return", no parenthesis needed
const myRollDie3 = () => Math.floor(Math.random() * 6) + 1
const mySquare3 = (num) => num * num;
const myAdd4 = (x, y) => x + y;
myAdd4(3, 4) // 7


console.log("------------------ section 5 ------------------")
//create an array of movie objects
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

//get an array of "MovieTitle - Score" using map
//set before section on Map if confused
//but basically map will call the anonymous function on each element in movies
//and then inside the function, we can get stuff from each movie
//then return a brand new array and save it in myMovies1 variable
const myMovies1 = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})
console.log(myMovies1);

//2. converting the above to a standard arrow function
const myMovies2 = movies.map((movie) => {
    return `${movie.title} - ${movie.score / 10}`
});

//3.adding an implicit return to the above
const myMovies3 = movies.map((movie) => (
    `${movie.title} - ${movie.score / 10}`
))

//4.making it all one line
//  removing parenthesis around function body since its one line
const myMovies4 = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

//5.removing the parenthesis around movie since its a single argument 
const myMovies5 = movies.map(movie => `${movie.title} - ${movie.score / 10}`);

console.log("------------------ section 6 ------------------")
//if you are confused about the $ stuff
const greet1 = (name) => {
    return "Hey " + name + "!";
}
//the ${} is used to input a variable into a string
//same as above but shorter syntax
const greet2 = (name) => {
    return `Hey ${name}!`;
}
console.log(greet1("Cade")); //will be "Hey Cade!"
console.log(greet2("Cade")); //will be "Hey Cade!"






