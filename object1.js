//singletone

//object liteals 
 const sym = Symbol ("mykey")
const JsUser = {
    name : "sushusi " , 
    [sym] : "hello" ,
    age : 20 , 
    location : " KOLKATA" , 
    email : "leo@gmail.com " , 

} 
 console.log(JsUser.email);
 console.log(JsUser[sym]); 

 JsUser.email = "iwfig@gmail.com "
 //Object.freeze (JsUser)
 //JsUser.email = "hore@gmail.com "
 console.log(JsUser);

 JsUser.greeting = function() {
    console.log("hello  js use ");



 } 

 JsUser.greetingtwo= function() {
    console.log('hello  js user  , ${thsi.name} ');

 } 
 console.log(JsUser.geeting());
console.log(JsUser.greetingtwo());