let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getFullYear());
console.log(typeof myDate); 

let mycredate = new Date(2025 , 0 , 16 , 4 , 8)
//console.log(mycredate.toDateString());
console.log(mycredate.toLocaleString());

 let mydate =new Date("01-16-2004");
 console.log(mydate.toLocaleString());

 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(mydate.getTime());


 let newdate  = new Date() 
 console.log(newdate);
 console.log(newdate.getDate());
console.log(newdate.getDay());
 
 /*newdate.toLocaleString('default' , {
    weekday : 'long',
    timeStyle : ''
 })
*/ 