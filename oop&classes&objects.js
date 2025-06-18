/////// * DIFFERENCE YE HOTA HE KE OBJECT ORIENTED PROGRAMMING JB BHI KERTE HO TO REAL WORLD OBJECTS BANATE HO AP REAL WORLD TEMPLATES * ////////

let obj = {
    a: 1,
    b: "Harry"
}

console.log(obj)


/////// * PROTOTYPE ISLIE BANATE HE TAKE HAM PROTOTYPE INHERITANCE KERSAKE * ///////

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // ** SET rabbit.[[Prototype]] = animal 

// ** OBEJCTS KE ANDAR KUCH AUR PROPERTIES ADD KERNI HOTO PROTOTYPE USE KERTE H ** //

/// *** CLASSES & OBJECTS IN JAVASCRIPT *** ///

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created....")
    }

    eats() {
        console.log("Kha raha hoo")
    }

    jumps() {
        console.log("Kood raha hoo")
    }

}


// **** IS SE YE HOGA KE LIION KE ANDAR ANIMAL WALI PROPERTIES BHI AJAYEGIN              **** //
class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a Lion....")
    }
    // *METHOD OVERRIDING*
    eats() {
        super.eats()   // * YE CONSTRUCTOR SE DATA KE LEYE * //
        console.log("Kha raha hoo roar")
    }
}


let a = new Animal("Bunny")
console.log(a)

let l = new Lion("Shera")
console.log(l)

