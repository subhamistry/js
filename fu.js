function SayMyName() {
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("A");
} 
//SayMyName()
//function addTwoNumbers(number1 , number2){ //parmeter 
   // console.log(number1 + number2);
//}
addTwoNumbers(3,4)//arguments 

function addTwoNumbers(number1 , number2){ //parmeter 
   // let result =number1 + number2
   // return result
    return number1 + number2
    //console.log("dfhwegf")
} 
const result = addTwoNumbers(1,2)
console.log("Result:" , result);

function loginUserMessage(Username ="hello"){
   // if(Username === undefined){//!
   if(!Username)  {
   console.log("please enter your username ");
      return
    }
    return `${Username} don't log in `
} 
console.log( loginUserMessage("hello"));



function calculateprice(val1 , val2 , ...number15){ // ... rest operator 
    return number15
} 

console.log(calculateprice(333, 444,44));


const user = {
    username : "djw",
    age: "99"
} 
 function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
 } 

 handelobject (user) 

 const mynewarray = [4,5,6,6,4,,6]
  function returnsecondvalue (getarray){
    return getarray[1]
  } 
  console.log(returnsecondvalue(mynewarray));