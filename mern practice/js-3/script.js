/*Data types in java Script 
1.primitive Datatypes ==>Nummber,Stringg,boolean,, undefinedd, null and Symbol. (we can't change its nature)(uses stack memory)
2.Non-primitive Datatypes ==>Object=Array, and functions (mutable or refeence type of data type)(uses heap kind of memory)
*/
/*
in stack the original value will not be lost(it uses call by value)
in heap the original  value will be lost (it uses call by reference method)
*/
// heap example
let obj ={
    name: "vikas",
    age:25
};
console.log(obj);
obj.name="ganesh";
console.log(obj);
 //1.Number ==> It is used to represent both integer and floating point numbers. range of this number is 2^53. if your number is greater than that you can use bigint
 //2.String==> It is used to represent a sequence of charactors. It is enclosedd in single quotes(''), double quotes("") or bacticks(``).
 //3.boolean==>It is used to represent the logical value. It can have two values true or false.
 //4.undefined==>It is  used to repesent an undefined value
 //5.null==> it is used to represent the empty value
 //6.Symbol==>It is ued to represent the unique value.
/*
let studentName="likki";
let studentAge=20;
let studentIsMale=false;
let salary=5000.00;
let studentMarks=null;
let studentAddress;
console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof studentIsMale);
console.log(typeof salary);
console.log(typeof studentMarks);
console.log(typeof studentAddress);  
*/
//non premitive ata types==>object,array and function
//object==> it is used to represent a collection of key-value pairs

//how to create object
/*
let person={
    name:"gv",
    age:20,
    ismale:true,
    salary:100000.00,
    marks:1000
}
console.log(person)
console.log(typeof person)
console.log(person.name)

//Array==> It is used to represent the collection of elments.

let cars=["bmw","audi",1];
console.log(typeof cars) //it will be objecctt
console.log(cars);
*/
// Function in javascript ==> Function is a block of code that perrforms a specific task. Function is only execcuted only when it is calledd or invoked. and is used to avoid code duplication.
//how to create function...
/*
function add(a,b){
    return a+b;
}
console.log(add(5,5));
console.log(add(78+56));
console.log(add(56.3,78.4));
console.log(4,7);
*/
/* 
anonymous function
var add =funcction(){
}
arrow function
var add=()=>{

    \'''''''''''''''''''' 
    }
*/ 
//what is conditional statement in javascript==> It is usd to perform different actions based on different conditions.
/*
1.if
2.else
3.else if
4 switch

let cage=16;
if(cage>=18){
    console.log("you are eligibl to vote");
}
else{
    console.log("you are not eligible to vote");
}
//else if
if(cage>=18){
    console.log("you are eligibl to vote");
}
else if(cage==18){
    console.log("you are not eligible to vote but not adult");
}
else{
    console.log("you are not eligible to vote");
}
*/

let day=2;

switch (day){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("aug");
        break;
    case 9:
        console.log("sep");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("decc");
        break;
    default:
        consol.log("invalid date");
        break;

}

//loops inn javascript==>it is used to execute a block of code multiple times until a conditionn is true

//for loop
for(let i=0;i<5;i++){
    console.log("gv");
}
//while loop
let j=0;
while(j<5){
    console.log(j);
    j++;
}

let k=0;
do{
    console.log(k);
    k++;;
}while(k<3);
