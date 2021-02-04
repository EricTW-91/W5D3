// Q1
function sumValue(x, y){
    let result = x + y;
    return result;
}

console.log("A1:");
console.log(sumValue(99,5));

// Q2
function plusOne(x){
    let result = x + 1;
    return result;
}

console.log("A2:");
console.log(plusOne(99));

// Q3
function minToSec(x){
    let result = x * 60;
    return result;
}

console.log("A3:");
console.log(minToSec(3));

// Q4
function arrOfMultiples(x, arrLength){
    let resultArr = [];

    for(i=0; i<arrLength; i++){
        resultArr.push(i*x+x);
    }
    
    return resultArr;
}

console.log("A4:");
console.log(arrOfMultiples(5, 6));

// Q5
function toArray(obj){
    let newArray = [];

    for(i=0; i<Object.keys(obj).length; i++){
        let arrX = Object.keys(obj)[i];
        let arrY = obj[arrX];

        newArray.push([arrX, arrY]);
    }

    return newArray;
}

let obj_00 = {
        name: "beef",
        qty: 12,
        price: 8
    };
let obj_01 = {
        name: "pork",
        qty: 20,
        price: 5
    };
let obj_02 = {
        name: "fish",
        qty: 3,
        price: 23
    };


console.log("A5:");
console.log(toArray(obj_00));