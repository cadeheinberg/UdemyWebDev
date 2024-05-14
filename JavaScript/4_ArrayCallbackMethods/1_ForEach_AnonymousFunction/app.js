const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//what if we want to loop through all the elements like so
for (let el of numbers) {
    console.log(el);
}

//so to do the above, but this time ForEach start with:
console.log("--------- section 1 ---------")
//define a function like print
function print(element) {
    console.log(element)
}

//then either print the numbers manually using your function
print(numbers[0]);
print(numbers[1]);

//or call the function on each element
//it passes each element in the array as an argument to print
numbers.forEach(print);

//or do it all together using an anonymous function
console.log("--------- section 2 ---------")
numbers.forEach(print = function (element) {
    console.log(element)
})
//this is the same as one right above
numbers.forEach(function (element) {
    console.log(element)
})

console.log("--------- section 3 ---------")
//print out 'MovieName - Score'
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

//for each movie object in the movies array, do this anonymous function
movies.forEach(function (myMovieVariable) {
    console.log(`${myMovieVariable.title} - ${myMovieVariable.score}/100`)
})

