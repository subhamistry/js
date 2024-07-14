const name = "subha"
const repocount = 40 ; 

console.log(`hello my name is ${name} and my repo count is ${repocount}`);


const gamename = new String ("callofduty")
console.log(gamename[7]);
//console.log(gamename._proto_);
console.log(gamename.length);
//console.log(gamename.topUpperCase());
console.log(gamename.charAt('5'));
const newString = gamename.substring (0,4)
console.log(newString);

const anothgersrtring= gamename.slice(-8,4)
console.log(anothgersrtring);

const newStringOne  = " Messi  " // for unnecessary
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://youtu.be/sscX432bMZo?si=m5YPCax7AtpV1BAK"
console.log(url.replace ('youtu' , 'subh'));