const name = "subha"
const repocount = 40 ; 

console.log(`hello my name is ${name} and my repo count is ${repocount}`);


const gamename = new String ("callofduty")
console.log(gamename[7]);
//console.log(gamename._proto_);
console.log(gamename.length);
//console.log(gamename.topUpperCase());
console.log(gamename.charAt('c'));

/* numbers _and_maths */
const score = 4000 ; 
console.log(score);
const balance = new Number(8.89)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));
/** */ 
const newvalue= 343.1645
console.log(newvalue.toPrecision(3)); 
/* */
const hundreds = new Number(10000)
console.log(hundreds.toLocaleString('en-IN')); 


/*  maths library*/
console.log(Math);
console.log(Math.abs(-55));
console.log(Math.round(5.9));
console.log(Math.floor(4.54));
console.log(Math.max(4,49,99));

/** math random value */

console.log(Math.random());
console.log((Math.random()*10) + 1 );
console.log(Math.floor(Math.random()*10 )+ 1 );

const max =  10 ; 
const min = 20; 

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 