/*
Function Parameters Annotations

Function Parametes annotations in Typescripts are used to specify the expected types of the parameters that the functions takes.
 */
function addNumbers(num1: number, num2: number) {
    console.log(num1 + num2);
}

addNumbers(1, 2);

//Arrow Function
const double = (x: number, y: number) => {
    console.log(x * y);
}
double(2, 10);

// function object return
 function printUser():{name:string, age:number,location:string}{
    return{
        name:"Shree",
        age:20,
        location:"ktm"
    }
 }
 const result = printUser();
 console.log(result.name);
 
 // with arr return
  function list():(string|number)[]{
 return ["thomas",1,2]
  }

  // acccept objects as params
  const users=(user:{name:string; age:number})=>{
    console.log(`user name:${user.name} ${user.age}`)
  }
  users({name:"krish", age:20});