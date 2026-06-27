// Array of only string type
const names: string[]=[];
names.push("Thomas");
console.log(names);
// numbers.push(10) it doesnt work here

// readonly keyword in typescript doesnt allow the array to be changed

const students: readonly string[]=["THomas"];
//students.push("shree") cant change

//Type Interferance in Array  
// Which means typescript automatically knows what types of data are inside array
 const data=[]
 data.push(1);
 data.push("thomas");
 console.log(data);
 // there are no errors
