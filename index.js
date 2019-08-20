// // OLD JAVASCRIPT

// var user = {
//     name: "Farhan",
//     age: 25
// }

// myName = user.name
// console.log(myName);

// // ES6

// const list = {
//     name: 'Shopping List',
//     items: ['Milk', 'Cow']
// }

// const {name, items} = list

// console.log(name, items);

//=====================================================
// OLD JS

function sayName(){
    console.log('Hello I am Farhan');
}

var sayAge = function(){
    console.log('My age is, well i dont wanna tell you')
}

sayName()
sayAge()

//ES 6

// const sayLocation = location => {
//     console.log(`My location is ${location}`);
// }
const sayLocation = (location, name) => console.log(`My location is ${location}`);

sayLocation('London')
