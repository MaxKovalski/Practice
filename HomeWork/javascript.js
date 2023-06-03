// ex-11
let userNumber = prompt('how much words you want?')
let allWords = ''
for(let i = 0; i < userNumber; i++){
let words = prompt('write your words')
allWords += words + ' '
}
console.log(allWords)

// ex-12
let arrayItems =[15,5,2,5,6]
let sum1 = 0
    for(let items in arrayItems){
  sum1 += arrayItems[items] 
}
console.log(sum1)

//  ex-13
 let giveMeNumber = prompt('write some number')
 let sum2 =0;
 for(let i = 1; i <=giveMeNumber; i++){
 sum2 += i
 }
 console.log(sum2)

// ex-14
let sum3 = 0
for(let i = 0; i < Infinity; i++ ){
    let enterPrice = parseInt(prompt('enter price'))
    sum3 += enterPrice;
    if(enterPrice == 0){
     break
    }
}
console.log(sum3)

// ex-15 
let studentNumber = prompt('how much student you have?')
let counter = 0
let allStudentScore = 0
let averageScore = 0
for(let i = 0; i<studentNumber; i++){
counter++
let studentScore = parseInt(prompt(`write score for student ${counter}`))
allStudentScore += studentScore
averageScore =  allStudentScore / counter
}
console.log(averageScore)
// ex-16-17-18-19-20
let studentScoreArray = []
for(let i =0; i<studentNumber; i++){
    counter++
    let studentScore = parseInt(prompt(`enter score for student ${counter}`))
    studentScoreArray.push(studentScore)
}
studentScoreArray.sort(function(a,b){return b-a})
console.log(`height Score ${studentScoreArray[0]}`)
studentScoreArray.sort(function(a,b){return a-b})
console.log(`lowest Score ${studentScoreArray[0]}`)
let bestStudent = 0;
let worstStudent = 0
let averageStudent = 0
studentScoreArray.forEach(number=>{
    if(number >= 90){
    bestStudent++
    }else if(number <= 69){
        worstStudent++
    }else if(number >= 70|| number <= 89){
        averageStudent++
    }
}
)
console.log(bestStudent)
console.log(worstStudent)
console.log(averageStudent)