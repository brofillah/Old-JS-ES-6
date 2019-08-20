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

// OLD JS

var user = {
    name: "Farhan",
    age: 19,
    sayName: function(){
        console.log("My name is " + this.name)        
        var that = this
        var fullName = function(){
            console.log("My name is " + that.name + " and my age is " + that.age);
        }
        fullName()
    }
}

user.sayName()

// ES 6

const bio = {
    name: "Masfar",
    age: 19,
    sayName: function(){
        console.log(`My name is ${this.name}`);
        const fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        }
        fullName()
    }
}

bio.sayName()