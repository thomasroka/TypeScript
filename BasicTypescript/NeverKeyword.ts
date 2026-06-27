/* Never Keyword is used to indicate a functions,variables that never return  value

Some usecases

-> A function that allows throws an error
-> A functions that has an infinite loop
A variable that has never  have a value

*/
const throwError=(msg:string):never =>{
    throw new Error(msg)
}