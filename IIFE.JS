// console.log();
// // Immediately Ivoked Function Expressions
 (function chai (){
 console.log(`honda`);
 })() ;//remove pollution of global scope 

( (name) => {
     console.log(`DB ${name}`);
}) (`hello`)
