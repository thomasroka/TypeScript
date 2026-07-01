// number or string or anydatatype  can be use is union
let info: string|number='Thomas' // | means or that means union
console.log(info);

function informations(info:string|number){
console.log(info);
}
informations(100);

// Type narrowing in ts
//let info: string|number='Thomas' here ts  accepted both number and string but to work with it it need to know its type so we use type of  

function operations(fullname:string|number,num:string|number){
    if (typeof fullname==="string" && typeof num==="number"){
        const captial= fullname.toUpperCase();
        console.log(captial);
         console.log(num.toFixed(4));
    }}
operations("shree krishna",20);
