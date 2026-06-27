
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