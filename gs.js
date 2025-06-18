// *** GETTERS & SETTERS IN JAVASCRIPT *** //


class User {
    constructor(name){
        this.name = name;
    }

    // FUNCTION TO GET THE NAME //
get name (){
    return this._name;
}

    // SETTER FUNCTION
set name(value){
    if (value.length < 4) {
        console.log("Name is too Short.");
        return;
    }
    this._name = value;
}

}

let user = new User("John");
console.log(user.name); // JOHN

// user = new User(""); // NAME IS TOO SHORT 
// user.name = "" 

user.name = "Harry";
console.log(user)
