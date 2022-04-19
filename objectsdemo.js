let me = {
    firstName: 'James',
    lastName: 'Goff',
    age: 26
}

let attribute = 'age'

// console.log(me.lastName)
// console.log(me[attribute])


let meal = {                          //if there is more than 1 item, use ' , '
    drink: 'Dr pepper',
    entree: 'steak',
    appetizer: 'chips'
}


//console.log(meal)                   //< this is how you add something 
                                   
//meal.dessert = 'Fried Ice cream'    //< to the 

//console.log(meal)                   //< list

// let takeHome = meal.entree


let {entree: takeHome} = meal  //<<<<<< this example places  
let{entree} = meal


let {appetizer} = meal             // items outside 

//console.log(appetizer, takeHome) // of the array


//console.log(entree)


//For in loop

for(let attribute in me){       //this is an example of a for loop with object
    console.log(attribute, me[attribute])
}

//for(let "key stand-in" in "object to loop through"){     for-loop template
//    what you want it to do
//}


//Classes
class Pet {
    constructor(name, color, age){
        this.name = name,
        this.color = color,
        this.age = age
    }


    howOld(){
        console.log(`${this.name} is ${this.age} years old.`)
    }
} 


// let object = new pet('spike', 'black', 1)     //this is how we create an instance of our class

// console.log(object)

class Dog extends Pet {
    constructor(name, color, age, breed){
        super(name, color, age)
        this.breed = breed,
        this.trainingLevel = 0
    }

    train(){
        this.trainingLevel += 1
        console.log(`${this.name}'s training level is now ${this.trainingLevel}`)
    }
}

let myPet = new Dog('Spike', 'Black', 1, 'Bernadoodle')

console.log(myPet)

myPet.train()


class Cat extends Pet {
    constructor(name, color, age){
        super(name, color, age),
        this.temperment = temperament
    }
}