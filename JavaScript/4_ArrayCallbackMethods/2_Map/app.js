const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//similar to using an anonymous function like ForEach
//but map will return an array

//so for each element in numbers, do the anonymous function on it
//and generate a new array using the result
//then save this new array to a varaible like doubles
const doubles = numbers.map(function (num) {
    return num * 2;
})




//make an array of objects
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

//gets an array of all the titles of the movie object but uppercased
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})


