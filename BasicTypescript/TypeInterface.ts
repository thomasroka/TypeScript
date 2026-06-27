/*Type Interface

Type Interface is a feature in Typescript that allows the compillers to automatically determine the type  of variables without explicit  specifiying  type, if you declare a variavle without explicit specifying its type Typescript will try to interfer the type based on the values you assign to it.
*/

let tech = "Typescript";
let favnumber = 360;
let isHard = false;
console.log(tech + favnumber + isHard);

/* Any Type 
TypeScript has a special any type that can be used to represent any type . When a variable is annoted with the anytype.

*/
let color: any = "red"
console.log(color);
color = true; // It is only possible in typescript.
console.log(color);