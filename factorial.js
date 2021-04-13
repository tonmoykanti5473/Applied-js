// let factorial = 1
// for(let i=1; i<=10; i++){
//     factorial = factorial * i
//     console.log(i, factorial)
// }


function factorial(num){
    let factorial = 1
    for(let i=1; i<=num; i++){
        factorial = factorial * i
    }
    return factorial
}
let result = factorial(8)
console.log(result)












