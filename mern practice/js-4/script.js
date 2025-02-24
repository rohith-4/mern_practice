/*function print(){
    var a=10;
}
console.log(a); //there will be a error in this since a is funcction scope it cannot be accessed out side */
/*
console.log(undefined==null);// value is same
console.log(undefined===null);//we are checking for data type as well

console.log(typeof null);
console.log(typeof undefined);

console.log(5=="5")//true
console.log(5==="5")//false because data type is different
*/
//terinary operator
/*
let age =10;
console.log(age>18? "can vote":"can't vote");
//prime
let a=6;
let count =0;
for(let i=2;i<a;i++){
    if(a%i==0){
        count++;
    }
}
if(count>0){
    console.log("it is prime");
}else{
    console.log("it is not prime");
}
 

//checking whethe positivve or not
let b=6;
if(b<0){
    console.log("Negative");

}else{
    console.log("positive");
}

//divisisble by 5
let c=9;
(c%9==0)? console.log("divvisible"):console.log("not divisible");

let d=9;
(d%3==0)? console.log("divisible"):console.log("not divisible");

//fizz buzzz

let n=100;
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzbuzz");
    }else if(i%3==0){
        console.log("fizz");
    }else if(i%5==0){
        console.log("buzz");
    }else{
        console.log(i);
    }
}
*/
/*
console.log(5+6); //addition
console.log(7-4);  //subtraction
console.log(5*6);  //multiplication
console.log(6/3);  //divison
console.log(10%3);  //modulus
console.log(2**3);  //power

let b=10;
console.log(b); //assignment operator

let a=10;
a+=6
console.log(a);//assignment operator

let c=50;
c-=10;
console.log(c);//assignment operator

let d=10;
let e=20;
console.log(d==e);
console.log(d!=e);
console.log(d>e);
console.log(d<e);// comparison operator


a=10;
b="10";
console.log(a==b);//identity opertor
*/
let z=4;
let i=1;
if(z<10){
    while(i<=10){
        console.log(i);
        i++;
    }
}

//for in loop
//it is used for objects
let college={
    name:"aitam",
    adress:"srikakulam",
    students:5000,
    status:"good"

};
console.log(college.name);
for(let key in college){
    console.log(key,college[key]);//here we should only use college[key] but should not use college.key because then it will search for the key in object which is not there
}

//for of loop is mostly used in arrays


let arr=[1,2,3,4,5,6]

for(let num of arr){
    console.log(num);

}

let arr1=[1,2,3,4,5,6,7]

arr1.forEach((num)=>{
    console.log(num);
});


//function:block of code that we can call or use anywhere in code
//basic def of a function can be write one time and use anywhere

//syntax
//function definition
//function add (parameters){
    //logic
// }
    //invoking or call a function
//add();


//named function
// function sum(a,b){
//     return a+b;
// }
// sum();

// anonymous function
// var sum=function(a,b){
//     return a+b;
// }
// var sum1=sum(5,6)
// console.log(sum1)

//arrow function in js
// var sum=()=>{
//     //logic
// }
// var sum=(a,b)=>console.log(a+b);

// function a(){
//     var a=10;
//     let b=3;
// }
// console.log(a);


// let a=2;
// let c=5;
// function b(){
//     console.log(a);
//     var c=10;
// }
// b();
// console.log(c);

//global scope
//block scope