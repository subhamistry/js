/*for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}*/
for (let i = 0; i <= 10; i++) {
 
    console.log(`outer loop value : $(i)`);
    for (let j = 0; j <=10 ; j++) {
        console.log(`inner loop ${j} and inner loop ${i}`);
        console.log( i + '*'+ j + '='+ i*j);
        
        
    }
    
}
let myarray =["arrr" , "wdw" , "wbdu"]
console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
    
}