// String, Number, Boolean, Null, undefined

// const name="Jhon";
// const age=23;
// const rating=4.5;
// const isCool=true;
// const x=null;
// const y=undefined;
// let z;

// console.log(typeof 'name');
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);



// *---Next task ---*

// const name='John';
// const age=56;

//Concatenation--
// console.log('My name is ' + name + ' and I am ' +age+ ' old');

// Template string--
// console.log('My name is ${name} and I am ${age} old');
// console.log(`My name is ${name} and I am ${age} old`);
// const hello = `My name is ${name} and I am ${age} old`;
// console.log(hello);



// *--Next task String--*

// const s='Hello World!';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));
// const s='technology, computer, it, code';
// console.log(s.split(', '));



// *--Arrays- variables taht hold multiple values--*

// const number = new Array(1,2,3,4,5);
// console.log(number);

// const fruits=['apple', 'oranges', 'pears'];
// console.log(fruits);

// const fruits=['apple', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// console.log(fruits);

// const fruits=['apple', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// console.log(fruits);

// const fruits=['apple', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('Straberries');
// console.log(fruits);

// const fruits=['apple', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('Straberries');
// fruits.pop();
// console.log(fruits);

// const fruits=['apple', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('Straberries');
// fruits.pop();
// console.log(Array.isArray(fruits)); //it will give a ture value
// // console.log(Array.isArray('Hello world')); //it will give false value
// console.log(fruits);

// const fruits=['apple', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('Straberries');
// fruits.pop();
// console.log(Array.isArray(fruits)); //it will give a ture value
// // console.log(Array.isArray('Hello world')); //it will give false value
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);


// *--Next task - Object--* 

// const person = {
//     firstName: 'John',
//     lastName: 'doe',
//     age: 32,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         Street: '34 main st',
//         city: 'Noida',
//         State: 'Uttar Pardesh',
//         Country: 'India'
//     }
// }

// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const{firstName, lastName, address:{city}} = person;
// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person);


// *--Next task --*

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trah',
//         inCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Meeting with boss',
//         inCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Dentist appt',
//         inCompleted: false
//     }
// ];
// console.log(todos);
// console.log(todos[1]. text);
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);


// *--Next task - For and Whileloop --*

//--For
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trah',
//         inCompleted: true
//     }
// ];
// for(let i=0; i<10; i++){
//     console.log(`For Loop Number: ${i}`);
// }

// //--While
// let i=0;
// while(i<10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trah',
//         inCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Meeting with boss',
//         inCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Dentist appt',
//         inCompleted: false
//     }
// ];
// for(let i=0; 1<todos.length; i++){
//     console.log(todos[i].text);
// }

//--forEach, map, filter--

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted == true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);