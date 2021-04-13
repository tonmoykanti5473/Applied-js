function isLeapyear(year){
    let reminder = year % 4
    if(((reminder==0)&&(year%100!=0))||(year%400==0)){
        return true
    }
    else{
        return false
    }
}
let checkYear = isLeapyear(2000)
console.log(checkYear)