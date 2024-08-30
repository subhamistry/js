const mynums = [1 ,2 ,3 ]
// const mytotal  = mynums.reduce(function(acc , currval){
//     console.log(`acc: ${acc} and currval : ${currval}`);
    
//     return acc + currval
// } , 0 ) // indicate acc to start from 0  index 

const myTotal = mynums.reduce((acc , curr) => acc + curr , 0 ) 
console.log(myTotal);
