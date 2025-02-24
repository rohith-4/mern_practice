/*
let obj ={
    name :"roihth",
    age: 20,
    address:{
        state:"andhra",
        district:"srikakulam",
        pincode:532201
    }
}
let obj1=obj;
obj1.name="babu"
console.log(obj);
console.log(obj1);
//if we want to print just the keys
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//using constructor method

const obj2 =new Object();
obj2.name="Rohith";
console.log(obj2);


//using functon constructor

function details(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}
let details1= new details("babu",23,239090);
console.log(details1)
*/
// let arr1=[1,2,3,4];
// let arr2=[5,6,7];
// let arr3=arr1.concat(arr2);
// console.log(arr3);

// let arr4=[...arr1,...arr2];
// console.log(arr4);

// let ar1=["apple","banana","orange","grapes"];
// let [first,second, ...others] =ar1;
// console.log(first);//it takes as a value
// console.log(second);//it takes as a value
// console.log(others);// rest takes it as an array

// let em ={
//     id:520,
//     name:"rohith",
//     age: 25,
//     salary:20000000,
//     department:"cse"
// }
// let {id,name,...rest}=em;
// console.log(id);
// console.log(name);
// console.log(rest);

let details ={
    fname:" vikas",
    lname:"rohtih"
}
// let {fname,lname="not available"}=details
// console.log(fname);
// console.log(lname);

// let a =true;
    
    // let x=prompt("enter the first name");
    // let y=prompt("enter the first");
    // details.fname=x;
    // details.lname=y;
    let {fname,lname="not available"}=details
    console.log(details.fname);
    console.log(details.lname);
    
    // let obj1={
        
    //         name :"roihth",
    //         age: 20,
    //         address:{
    //             state:"andhra",
    //             district:"srikakulam",
    //             pincode:532201
    // }
    // let obj2=Object.assign({},obj1)

//api response
let response = {
    status: 200,
    data: {
      user: {
        name: "Vedant",
        age: 23,
        adress:"gv"
      },
    },
  };
  let {status,data:{user:{name,age,adress="not available"}}}=response;
  console.log(status);
  console.log(name);
  console.log(age);
  console.log(adress)