//   let num = [1,2,3,4,5,6]
//   let dice = Math.random(num)
//   console.log(dice)



let minister = 450
let businessmen = 550
let batfar = 650

if(minister>businessmen){
    if(minister>batfar){
        console.log("MINISTER IS THE RICHEST")
    }
    else{
        console.log("BATFAR IS THE RICHEST")
    }
}
else{
    if(businessmen>batfar){
        console.log("bebsha rockzzz")
    }
    else{
        console.log("batfari rockzz")
    }
}


let marks = [40,50,60,70,80,90,99,100]
let max = marks[0]
for(let i=0; i<marks.length; i++){
    element = marks[i]
    if(element>max){
        max = element
    }
}
console.log("highest value is :" , max)



function sumValue(num){
    let sum = 0
    for(let i=0; i<num.length; i++){
        sum = sum + num[i]
    }
    return sum
}
let num = [23,45,67,97,53,91]
let result = sumValue(num)
console.log(result)

let total = sumValue([34,56,87,54,98,87,66])
console.log(total)


























