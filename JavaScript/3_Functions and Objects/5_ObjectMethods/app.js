
// adding methods to objects
// in the same way that myMath.PI is a variable of this Object
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

// adding methods to objects, different syntax
const myMath2 = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

console.log(myMath.square(2)); //4

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this) //
        console.log(`${this.name} says MEOWWWW`);
    }
}

cat.meow(); //this refers to the cat object, //Blue Steele says MEOWWWW

const meow2 = cat.meow; //this refers to Window object
meow2(); // says MEOWWWW
Window.meow2() // same as above "says MEOWWW"