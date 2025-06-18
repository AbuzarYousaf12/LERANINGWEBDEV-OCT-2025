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
        super()
        this.name = name
        console.log("Object is created and he is a lion....")
    }

    eats() {
        console.log("Kha raha hoo")
    }

    jumps() {
        console.log("Kood raha hoo")
    }

}

class Lion extends Animal {            // **** IS SE YE HOGA KE LIION KE ANDAR ANIMAL WALI PROPERTIES BHI AJAYEGIN               **** //


}


let a = new Animal("Bunny")
console.log(a)