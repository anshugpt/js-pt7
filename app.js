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
        // return (eng + phy + math)/3 ; //* This will not work 
        return (this.eng + this.phy + this.math)/3 ; //* This will work
    }
}