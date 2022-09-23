// var name = "Aditya"

// let loc = "India"

// const dob = "21 March"

// console.log(loc)

// loc = "UK"




// // let sum = 10 + 10
// // console.log(sum)

// // sum = num1 + num2
// // console.log(sum)

// let sub = num1 - num2
// console.log(sub)

// let product = num1 * num2
// console.log(product)

// let division = num1 / num2
// console.log(division)


// let remainder = num2 % num1
// console.log(remainder)


// let num3=50, num4=90

// if(num3 >= 40 && num3 <=80 && num4 >= 50 && num4 <= 70){
//     console.log("num3 is in the range of 40-80")
// }
// else{
//     console.log("out of range")
// }


// if(num3 >= 40 || num3 <=80 || num4 >= 50 || num4 <= 70){
//     console.log("num3 is in the range of 40-80")
// }
// else{
//     console.log("out of range")
// }


// let name = "Aditya", surname="Kadam"

// let fullName = name + " " + surname,
// fullNameNew = `${name} ${surname}`
// console.log(fullName)
// console.log(fullNameNew)




function calculates(num1, num2){
    let sum = num1 + num2
    return sum
}
// function calculateNew()
// {
//     // num1 
//     let sub = num1 - num2
// }

let num3

console.log(num3)


let names = ["Aditya", "Adi", "Owen"]


console.log(names[1])

let user = {name: "Aditya", age: 28}
console.log(user.name)

let users = [{name: "Aditya", age: 28}, {name: "John Doe", age: 32}]

for(let i=0; i <= 1; i++)
{
    // console.log(names[i])
}

for(let k in user)
{
    console.log(k)
}

for(let v of names)
{
    console.log(v)
}


// let index = 0

// while(index < 3)
// {
//     console.log(ages[index])
//     index = index + 1
// }


let ages = [20, 30, 40, 50]
let newAgeSet = ages.filter((item, index)=>{
    return item < 40
})

console.log(newAgeSet)

let newDoubleSet = ages.map((item, index)=>{
    return item * 2
})

console.log(newDoubleSet)


let ageSum = ages.reduce((prevValue, currentValue)=>{
    return prevValue + currentValue
}, 0)

console.log(ageSum)