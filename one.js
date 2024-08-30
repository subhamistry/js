
const isuserloggedin = true
const temperature = 62
if (temperature < 60 ) {


    console.log("less than 60 ");
} else{
    console.log("is greater than 60");
    
}
console.log("Executed");

// const score = 300
// if (score > 100) 
//      {
//         const power ="fly"
//     console.log('User Power : ${power}');
    
// } console.log('User Power : ${power}');   

const balance = 500;
if (balance<500) 
    {
    console.log("less than");
    
    
} 
else if (balance<750) 
    {
    console.log("less than 800");
    
    } 
    else if (balance<7500) 
        {
        console.log("less than 800");
        
        }  else {
            console.log("less than 1200");
            
        } 


const userloggedIn = true // real life example 
const Debitcard = true
const loggedInfromGoogle = true
const loggedInfromEmail = false
if (userloggedIn && Debitcard) {

    console.log("Allow to buy Course ");
    
    
} if (loggedInfromGoogle || loggedInfromEmail) {

    console.log("user logged in ");
    
    
}  

/* falsy values 
false , 0 ,-0 BigInt 0n , "", null , undefined , NAN
 */
/***
 * truthy values
 * "0" , "false" , "" , [] , {} ,fucntion(){}
 */ 
const useremail = {}
if (useremail.length = 0) {
    console.log("array is empty");
    
    
} 

const emptyobj = {}
if (Object.keys(emptyobj).length == 0) {
    console.log("empty");
    
} 

/** Nullish coalescing operator(??) : null undefined*/

let val1;
// val1 = 5 ?? 10 
val1 = undefined ?? 15
val1 = null ?? 15



console.log(val1);
/**TERNIARY OPERATOR  */

const iceteaprice = 100

iceteaprice >= 80 ? console.log("less thann 80") : console.log("more than 80");
;
