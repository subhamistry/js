const coding = ["uefa" , "ruby" , "jva", "Afc" , "name "]
coding.forEach(function(val){
    console.log(val);
    
}) 

coding.forEach((item)=> {
    console.log(item);
    
})  



coding.forEach((item , index ,  arr)=> {
    console.log(item , index , arr);
    
}) 
const mycoding = [
    {
        languagName:"javascript" , 
        languagefile :"js"
    } ,
    {
        languagName:"java" , 
        languagefile :"java"
    } ,
    {
        languagName:"python" , 
        languagefile :"py"
    } ,
] 
mycoding.forEach((item) => {
   

    console.log(item.languagName);
    
})