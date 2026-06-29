/*
MultiDimensional array is a type of array  that contains other arrays as an elements.S
 */
const matrix: number[][]=[
    [1,2],
    [3,4],
];
const triple_Dimensional: string[][][]=[[["Thomas"]]];
console.log(matrix);
console.log(triple_Dimensional);

//Exercise
// type in typescript is read left to right
const StudentList:{name:string}[]=[{name:"Tom"},{name:"god"}]
console.log(StudentList[0]);