//* This keyword :-
// used in methods for getting access to the other key&value pair in that object
// By default value of This is window object


const student = {
    name: "Anshu",
    age: 21,
    eng: 87,
    phy: 88,
    math: 78,
    getAvg(){
        //// return (eng + phy + math)/3 ; //* This will not work 
        return (this.eng + this.phy + this.math)/3 ; //* This will work
    }
}


//* Try & Catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block
// if we run big code and we got an error in the middle of the code after that error all the code did't run and websute crash
// that why we test the code by try and catch

// console.log("hello1");
// console.log("hello1");
// try {
//     console.log(a);
// } catch {
//     console.log("get an error... a is not defined");
// }
// console.log("hello2");
// console.log("hello2");

// by this we can run all the code while getting error
// we can see error in catch statement -> catch(err){ console.log(err);}
// this will show which error we got in try!

//* Miscellaneous Topic

//* Arrow Function :-
// it's a short way to write function
// used for callback for higher order function
// it's not stand alone function
// used as passing parameter to high order function

const sum = (a, b) => {
    return a + b;
};

//* ==> Implicit return in arrow function :-
// if arrow function only return a single value then we use implicit return

const mult = (a, b) => a * b;


//* Set Timeout :-
// use to set timer in which our will have to done
// inbuilt function of window object
// Syntax => setTimeout(function, timeout)
// Timeout argument will be in milli second -> 1s = 1000ms
// code will keep running it will not wait for timeout

// console.log("hi, there");

// setTimeout(() => {
//     console.log("Anshu"); //* Print it in 4s
// }, 4000);

// console.log("I'm"); //* print before "Anshu"

//* Set Interval :-
// it will run the code multiple times in the given timeout
// syntax -> setInterval(function, timeout)
// timeout will be in ms

// setInterval(() => {
//     console.log("Anshu"); //* keep printing after 2000ms
// }, 2000);

// if we want to stop that then we need to assine an id to it

let id = setInterval(() => {
    console.log("hi");
}, 2000);

clearInterval(id); //* using that method we need to stop that


//* This with arrow function :-
// This keyword is very tricky
// for function -> scope for This is calling it's object
// for arrow -> it's work as lexical scope -> the scope of parent is scope of this keyword in arrow function

const students = { //* students scope -> globle scope
    name: "Ajali",
    marks: 99,
    prop: this, //* globle scope
    getName: function(){
        console.log(this); //* for students object
        return this.name; //* scope -> students object
    },
    getMark: () => {
        console.log(this); //* for window object
        return this.marks; //* parent's scope which is globle scope
    },
    getInfo1: function (){
        setTimeout(() => {
            console.log(this); //* parent's scope -> function -> student's object
        }, 2000);
    },
    getInfo2: function (){
        setTimeout(function(){
            console.log(this); //* call by setTimeout which is window's object function -> default -> window's object
        }, 2000);
    }
};

//* Practice Qs
// function that print "hello world" five times at interval of 2s

function printHello(){
    
        
    
    } 

printHello();