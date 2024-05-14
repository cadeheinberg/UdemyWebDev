console.log("------------------ section 1 ------------------")
const person1 = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    // we typically wont use arrow functions to define Object methods
    // here is why
    fullNameArrow: () => {
        //inside of an arrow function, the keyword this
        //is just going to refer to the scope that it was created in
        //so just refers to the Window object
        return `${this.firstName} ${this.lastName}`
    }
}

//person1.fullName(); //"Viggo Mortensen"
//person1.fullNameArrow(); //"undefined undefined"

console.log("------------------ section 2 ------------------");
//so where could we use it?
const person2 = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    //we might want to use a function within our object method
    //this wont work. when we dont use "=>", 
    //"this" refers to the execution context
    //and technically setTimeout is a method on the Window object
    fullNameTimeoutNoArrow: function () {
        console.log(this); //"this" == person2
        setTimeout(function () {
            console.log(this); ////"this" == Window, different than above
            console.log(this.fullName())
        }, 3000)
    },
    //this WILL work. when we use "=>", 
    //"this" within the arrow function is the same value of "this"
    // in the scope of where the function was created
    // so within the fullNameTimeoutArrow: function(), which is person2
    fullNameTimeoutArrow: function () {
        console.log(this); //"this" == person2
        setTimeout(() => {
            console.log(this); //"this" == person2, same as above
            console.log(this.fullName())
        }, 3000)
    }
}

//person2.fullName(); //returns "Viggo Mortensen"
person2.fullNameTimeoutNoArrow(); //does not work like we want
person2.fullNameTimeoutArrow(); //works



// YOU GOT THIS