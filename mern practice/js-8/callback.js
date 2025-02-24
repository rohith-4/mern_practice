function greet(name,callback){
    console.log(`Hello ${name}`);
    callback();
}
function msg(){
    console.log("welcome to aitam training");
}
greet("likhi",msg);

function calculate(a,b,callback) {
    const result =a+b;
    callback(result);
}
function showresult(result) {
    console.log(`Result is ${result}`);
}
calculate(5,6,showresult);
/*
console.log("loading data...");
setTimeout(()=>{
    console.log("data loaded successfully");
},5000);
console.log("process ended successfully");
*/
let arr=[1,2,3,4,5,6,7,8];
arr.forEach((element)=>{
    console.log(element);
});
function step1(callback){
    console.log("Step1 called");
    callback();
}
function step2(callback){
    console.log("Step2 called");
    callback();
}
function step3(callback){
    console.log("Step3 called");
    callback();
}
step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("all steps are completed");
        })
    })
})

