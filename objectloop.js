const myobject = {
    js: 'javascript' , 
    cpp : 'c++' , 
    RB : 'ruby '
} 
for (const key in myobject) {
    //console.log(myobject[key]);

    //console.log(key ,  ':-' , value);
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
    
    
} 
const programming = ['js' , "html"]

for (const key in programming) {
     console.log(programming[key]);
     }
