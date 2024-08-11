/**let index = 0 
while (index <= 10) {
    console.log(`value of index is ${index}`);

    index = index + 2
    
    
} */
let myarr = ["bird" , "peacock" , " zebra"]
let arr = 0 
while (arr < myarr.length) {
    console.log(`value is ${myarr[arr]}`);
    arr = arr + 1 
    
    
}


let score = 16
do {
    console.log(`value of ${score}`);
    score++
    
} while (score <=10);


const array = [1,2,3,4,6]

for (const i of array) {
      console.log(i);
          
} 

const greetings = "hello ! world"

for (const greet of greetings) {
    console.log(`Eacch char is ${greet}`);
    
    
} 

const map = new Map()

map.set('IN' ,"India")
map.set('USA', "United state of America")


//console.log(map);

for (const [key , value] of map) {
   // console.log(map);
   console.log(key ,  ':-' , value);
   
} 
// const myobject =  {
//     game1: 'NFS',
//     Game2: 'Spiderman'

// } 

// for (const [key , value ] of myobject) {
//     onsole.log(key ,  ':-' , value);
   
    
// }