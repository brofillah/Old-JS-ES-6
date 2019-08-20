// // // OLD JAVASCRIPT

// // var user = {
// //     name: "Farhan",
// //     age: 25
// // }

// // myName = user.name
// // console.log(myName);

// // // ES6

// // const list = {
// //     name: 'Shopping List',
// //     items: ['Milk', 'Cow']
// // }

// // const {name, items} = list

// // console.log(name, items);

// //======================END OBJECT===============================
// // OLD JS

// function sayName(){
//     console.log('Hello I am Farhan');
// }

// var sayAge = function(){
//     console.log('My age is, well i dont wanna tell you')
// }

// sayName()
// sayAge()

// //ES 6

// // const sayLocation = location => {
// //     console.log(`My location is ${location}`);
// // }
// const sayLocation = (location, name) => console.log(`My location is ${location}`);

// sayLocation('London')
//====================== END FUNCTION ===============================

// // OLD JS

// var user = {
//     name: "Farhan",
//     age: 19,
//     sayName: function(){
//         console.log("My name is " + this.name)        
//         var that = this
//         var fullName = function(){
//             console.log("My name is " + that.name + " and my age is " + that.age);
//         }
//         fullName()
//     }
// }

// user.sayName()

// // ES 6

// const bio = {
//     name: "Masfar",
//     age: 19,
//     sayName: function(){
//         console.log(`My name is ${this.name}`);
//         const fullName = () => {
//             console.log(`My name is ${this.name} and my age is ${this.age}`);
//         }
//         fullName()
//     }
// }

// bio.sayName()

// ====================== /THIS COMPONENT IN FUNCTION INDEX OBJECT===============================

// //OLD JS
// function multiply(x, y){
//     var a = x || 1
//     var b = y || 1
//     console.log(a * b);
// }
// multiply(100, 2)

// // ES 6
// const add = (c = 1, d = 2) => {
//     console.log(c + d);
// }

// add()

// ===========================/Function Parameter====================================

// // ES6
// const shoppingList = ['Milk', 'Cow', 'Eggs', 'Bananas', 'Choco']

// //Foreach
// shoppingList.forEach((element, index) => {
//     console.log(`Index of ${index} is ${element} so nice`);
    
// });

// //Map 
// const newList = shoppingList.map(item => item + "new") //untuk menambahkan kata new di setiap akhir kata index array
// console.log(newList);

// //Filter
// const filterList = shoppingList.filter(item => item === "Eggs") //filtering
// console.log(filterList);

//============================Pengolahan Array====================================

//OLD JS
    function Person(name, age, hairColor){
        this.name = name
        this.age  = age
        this.hairColor = hairColor
    }

    Person.prototype.sayName = function(){
        console.log(`My name is ${this.name}`)
    };

    function Farhan(ocupation, hobbys, name, age, hairColor){
        Person.call(this, name, age, hairColor)
        this.ocupation = ocupation
        this.hobbys = hobbys
    }

    Farhan.prototype = Object.create(Person.prototype)

    const person = new Farhan('Dev', 'Motorcycle', 'Farhan', 19, 'Black')

    //var Farhan = new Person('Farhan', 19, 'Black')
    person.sayName()

//ES 6

class ShoppingList {
    constructor(items, nr){
        this.items = items
        this.nr = nr
    }

    sayList(){
        console.log(this.items);
    }
}

class Product extends ShoppingList {
    constructor(items, nr, ammount, cost){
        super(items, nr)
        this.ammount = ammount
        this.cost = cost
    }
}

const product = new Product(['Redbull, chocolate, candy'], 3, 2, 20) //panggil extends
product.sayList() //panggil extends

// const myList = new ShoppingList(['Milk, choco, redbull'], 3) //panggil 1 class
// myList.sayList() //panggil 1 class