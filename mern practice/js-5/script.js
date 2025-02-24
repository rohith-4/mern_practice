// let arr=new Array[3,2,4,6,8];
// console.log(arr);

// let arr1=[1,2,3,4,5];
// arr1.push(6);
// arr1.unshift(0);
// arr1[1]=15;
// console.log(arr1);
// arr1.pop();  //to delete element at last
// arr1.shift();  //to delete element at start
// console.log(arr1);

// let arr1=[1,2,3,4,5];
// arr1.forEach((num)=>{
//     console.log(num);
// })

// let arr2=arr1.map((num)=>{
//     return num*num;
// });
// console.log(arr2);
// console.log(arr1);
// let arr=new Array[3,2,4,6,8];
// console.log(arr);

// let arr1=[1,2,3,4,5];
// arr1.push(6);
// arr1.unshift(0);
// arr1[1]=15;
// console.log(arr1);
// arr1.pop();  //to delete element at last
// arr1.shift();  //to delete element at start
// console.log(arr1);

let arr1=[1,2,3,4,5];
arr1.forEach((num)=>{
    console.log(num);
})

let arr2=arr1.map((num)=>{
    return num*num;
});
console.log(arr2);
console.log(arr1);

//reduce method
// let arr3=arr1.reduce((acc,num)=>{
//     return acc+num;
// },0);
// console.log(arr3);
// console.log(arr1);

// let arr=new Array[3,2,4,6,8];
// console.log(arr);

// let arr1=[1,2,3,4,5];
// arr1.push(6);
// arr1.unshift(0);
// arr1[1]=15;
// console.log(arr1);
// arr1.pop();  //to delete element at last
// arr1.shift();  //to delete element at start
// console.log(arr1);
/*
let arr1=[1,2,3,4,5];
arr1.forEach((num)=>{
    console.log(num);
})
let arr2=arr1.map((num)=>{
    return num*num;
});
console.log(arr2);
console.log(arr1);
*/
// //reduce method
// let arr3=arr1.reduce((acc,num)=>{
//     return acc+num;
// },0);
// console.log(arr3);
// console.log(arr1);

// let obj={
//     name:"aman",
//     age:20,
//     isMale:"true",
//     salary:5000.00,
// }
// console.log(obj);
// console.log(obj.age);
// console.log(obj['age']);
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

let details=[
    {
        name:"aman",
        age:20,
        isMale:"true",
        salary:5000.00,
    },
    {
        name:"aman",
        age:20,
        isMale:"true",
        salary:5000.00,
    },
    {
        name:"aman",
        age:20,
        isMale:"true",
        salary:5000.00,
    }
    ];
    console.log(details[1].name);
    let filterdetails=details.filter((details)=details.age>22);
    console.log(filterdetails);

    //spread and rest
    // let arr1=[1,2,3,4,5,6];
// let arr2=arr1; //reference type:it is directly changing original one
// arr2.push(4);
// console.log(arr2);
// console.log(arr1);

//spread operator
// // ... three dots represent the spread operator means the original array doesnot change
// let arr1=[1,2,3,4,5,6];
// let arr2=[...arr1];
// arr2.push(7);
// console.log(arr2);
// console.log(arr1);



//merge two arrays
// let arr1=[1,2,3,4,6,5];
// let arr2=[7,8,9,6];
// let obj1={
//     name:"Aman",
//     age:20
// };
// let obj2={...obj1};
// obj2.name="aitam";
// console.log(obj2);
// console.log(obj1);


//merging two objects
// let obj1={name:"aman",age:20};
// let obj2={name:"amar",age:16};
// let result={...obj1,...obj2};
// console.log(result);


// let numbers=[10,30,50];
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(...numbers));


// let arr=[30,50,70,90,86];
// let[first,second,...rest]=[30,50,70,90,86];
// console.log(first);
// console.log(second);
// console.log(rest);


// let user={
//     name:"aman",
//     age:20,
//     address:"srikakulam"
// };
// let{name,age,...location}=user;
// console.log(name);
// console.log(age);
// console.log(location);

//shallow  vs deep copy
// let obj1={
//     name:"aman",
//     age:20,
//     address:{
//         city:"srikakulam",
//         state:"andhra pradesh"
//     }
// };

// let obj2={...obj1};  //shallow copy
// obj2.name="aitam";
// obj2.address.city="delhi"
// console.log(obj2);


// let obj1={
//     name:"aman",
//     age:20,
//     address:{
//         city:"srikakulam",
//         state:"andhra pradesh"
//     }
// };
// // let obj2=JSON.parse(JSON.stringify(obj1));
// let obj2=structuredClone(obj1);
// obj2.address.city="delhi";
// obj2.name="vijay";
// console.log(obj2);
// console.log(obj1);


// let obj3={
//     name:"aman",
//     age:20,
//     salary:50000,
//     address:{
//                 city:"srikakulam",
//                 state:"andhra pradesh"
//             }
// };
// let obj4={...obj3};
// obj4.name="vijjulu";
// obj4.address.city="delhi";
// console.log(obj4);
// console.log(obj3);

// let str1="vijay";
// let str2="devarakonda";
// let result=My name is ${str1} and my surname is ${str2};
// console.log(result);


// const paragraph=`this is line one
// this is line two
// this is line three`;
// console.log(paragraph);


// let a=6;
// let b=10;
// console.log(the sum og ${a} ans ${b} is ${a+b});

function hello(name){
    return "hello${name}";
}
console.log('${hello("Aman")} welcome to aitam training center');


// console.log(a);
// console.log(b);
// console.log(c);

// let a = 23; //tdz
// const b = 34; //tdz
// c = 45; //

// {
// console.log(a);
// console.log(b);
// console.log(c);
// }

// function a(){
//     const a = 45;
//     console.log(a);

//     function b(){
//         const a = 23;
//         console.log(a);

//         function c(){
//             const a = 34;
//             console.log(a);
//         }
//         c();
//     }
//     b();
// }
// a();

// var fun = ()=>{
//     console.log(a);

//     var a = 45;

//     var b = ()=> {
//         console.log(a);
//         console.log(z);
//     };
//     let z = 45;
//     b();
// };
// let result = fun();
// console.log(result);


// function scope(){
//     if(true){
//         var x=45;
//         let y=10;
//         const z=15;
//     }
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// scope();

// function example(){
//     var a=10;
//     function inner(){
//         var b=23;
//         console.log(a);
//         console.log(b);
//     }
//     inner();
//     console.log(b);
// }
// example();

// let arr=[1,2,3,4,5];
// for(i in arr){
//     console.log(i);
// }   // to print indexes of array


// function fun(a){
//     if(a<0)
//     {
//         console.log("negative");
//     }
//     else if(a==0)
//     {
//         console.log("zero");
//     }
//     else
//     {
//         console.log("positive")
//     }};
// fun(null); //whether number is +ve,-ve or 0;

// function fun(n){
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }
// fun(10); //sum of numbers

// function sum(arr){
//     return arr.reduce((acc,curr)=> acc+curr,0)
// }
// console.log(sum([1,2,3,4,5]));   //sum of elments in array

// function max(arr){
//     return Math.max(...arr);
// }
// console.log(max([100,29,388,401,5]));  //max element of array

let obj1={
    name:"vijay",
    age:32,
    address:{
        city:"Paris",
        state:"France"
    }
};   
let obj2={...obj1};  
obj2.name="Vijjulu";
obj2.address.city="USA"
console.log(obj2);