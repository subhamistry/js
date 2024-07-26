const proUser= {}
proUser.name = "kgb"
proUser.roll = "37163284"
proUser.age = "7"
console.log(proUser);

const regularUser= { 
    email:"subhamistry603@gamil.com ",

     fullname : {
        Username:{
            firstname :"hire",
        }

     }
    
}

console.log(regularUser.fullname.Username);

const obj1 = {1:"a" , 2:"b"}
const obj2= {6:"a" , 5:"b"} 
const obj4 = {1:"a" , 2:"b"}
const obj3 ={...obj1 , ...obj2}
//const obj3 = Object.assign({} , obj1,obj2)
//const obj3 = {obj1 , obj2}; 
console.log(obj3);

const users =[
  {  id:1 ,
    email:"sub@gmail.com "
  },

  {  id:1 ,
    email:"sub@gmail.com "
  },
  {  id:1 ,
    email:"sub@gmail.com "
  },
  {  id:1 ,
    email:"sub@gmail.com "
  },
  {  id:1 ,
    email:"sub@gmail.com "
  },
  {  id:1 ,
    email:"sub@gmail.com "
  },
]
users[1].id
console.log(proUser);
console.log(Object.keys(proUser));
console.log(Object.values(proUser));
console.log(Object.entries(proUser));


//console.log(proUser.hasOwnproperty('age'));

