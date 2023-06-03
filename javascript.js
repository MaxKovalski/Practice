// exercise 1 
// console.log('exercise 1')
// let bob = 'bob'
// sayHello('bob')
// function sayHello(name){
//     console.log(`the name is ${name}`)
// }
// exercise 2
// console.log('exercise 2')
// function sayHelloToBob(name){
// let name = 'bob'
// }
// console.log(`hello ${name}`)

// exercise 3 CallBack Function 
// console.log('exercise 3')
// function greet(name){
//     console.log(`hello ${name}`)
// }
// function useGreet(name,callback){
//     callback(name)
// }
// useGreet('bob',greet)


// function add(number1,number2){
//     console.log((number1)+(number2))
// }
// function subtract(number1,number2){
//     console.log((number1)-(number2))
// }
// function multiply(number1,number2){
//     console.log((number1) * (number2))
// }
// function divide(number1,number2){
// console.log(number1 / number2)
// }
// function numbers(number1,number2,mathFun){
//     mathFun(number1,number2)
// }
// numbers(2,5,subtract)

// const calc = (operator,number1,number2)=>{
//     switch(operator){
//         case "+":
//             return number1+number2;
//             case "-":
//                 return number1-number2;
//                 case "*":
//                     return number1*number2;
//                     case "/":
//                         return number1 / number2;
//                         default:
//                             return 'invalid operator'
//     }
// }
// console.log(calc('+',5,7))


// let a =  [1,3,7,4,2,9];
// let sum = 0
// for (let i = 0; i < a.length; i++) {
//  const element = a[i] + 1
//  sum += element
// }
// console.log(sum)

// let a =  [1,3,7,4,2,9];
// let sum = 0
// for(let number in a){
// sum += a[number]
// }
// console.log(sum)

// let b =['reet','teewt','tersdf']
// for(let s in b ){
//     console.log(b[s])
// }

// let c =  [1,3,7,4,2,9];
//  let sum1 = 0
// for(let b of c){
// sum += b
// }
// console.log(sum)

// sum = 0
// numbers = {
//     one: 1,
//     two :2,
//     three:3,
//     four:4,
// }
// for(number in numbers){
//  sum += numbers[number]
// }
// console.log(sum)


// 

// numbers = [1,3,7,4,2,9]
// sum = 0;
// numbers.forEach((value) => {
//     sum +=value
// });
// console.log(sum)

let names = ['maxim','nadav','tomer','vladimir','bar']
let special = ""
names.forEach((value)=>{
   special += value.charAt(0)
})
console.log(special)
