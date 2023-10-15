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