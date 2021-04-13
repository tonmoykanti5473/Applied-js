function factorial(n){
    let factorial = 1;
    for(let i =n; i>=1; i--){
        factorial = factorial * i
    }
    return factorial    
}
let result = factorial(10)
console.log( result)


function factorial(n){
    let factorial = 1
    let i = n
    while(i>=1){
        factorial = factorial * i
        i--
    }
    return factorial
}
let result = factorial(10)
console.log(result)


function factorial(n){
    if(n==0){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
}
let result = factorial(10)
console.log(result)







