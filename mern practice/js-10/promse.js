


//promise
/*
const mypromise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve(success);
    }
    else{
        reject('Failed to fetch data');
    }
})

*/
//consume the promise
/*
mypromise.then((data) => {
    console.log('Data fetched successfully', data);
}).catch((error) => {
    console.log('Error occurred', error);
})
.finally(() => {
    console.log('This code always runs');
});
*/


//promise chaining
// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(()=>resolve("data fetched"),2000);
//     });
// }
// fetchData()

// .then((data)=>{
//     console.log(data);
//     return "processing the data......";
// })
// .then((message)=>{
//     console.log(message);
//     return "Data processed successfully.....";
// })
// .then(console.log)
// .catch(console.error)

//handling of errors in promises....
/*
const fetchData=()=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => reject("❌ data not found"),2000);
    });
};
fetchData()
.then((data)=>console.log(data))
.catch((error)=> console.error(error))
.finally(()=> console.log("operation finished"));

let promise1 = new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
  });
  
  let promise2 = promise1
    .then((result) => {
      console.log(result); // 5
      return result * 2;
    })
    .then((result) => {
      console.log(result); // 10
      return result + 3;
    });
  
  promise2.then((result) => {
    console.log(result); // 13
  });
  */

   ///promise all
   /*
   const promise1 =Promise.resolve("task 1 resolved");
   const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("task 2 resolved"), 2000);
  });
  const promise3 = Promise.resolve("task3 resolved");

Promise.all([promise1, promise2, promise3])
.then((result) => console.log("all tasks been done",result))
.catch((error) => console.error(error));
*/

//promise settled
/*
const p1 =Promise.resolve("task 1 resolved");
const p2=Promise.reject("task 2 rejected");
const p3=new Promise((resolve) => {
    setTimeout(() => resolve("3 getting delayed"), 4000);
  
});
const p4 = new Promise((resolve) => {
    setTimeout(() => resolve(" 4 getting delayed"), 2000);
});
Promise.allSettled([p1,p2,p3,p4])
.then((result)=> console.log(result))
.catch((error)=> console.log(error));

*/

//promise race
/*
const p1 = new Promise((resolve)=> setTimeout(()=> resolve("tsk1 resolved"),2000));

const p2 = new Promise((resolve)=> setTimeout(()=> resolve("task2 resolved"),1000));
const p3 =Promise.resolve("task3 resolved");
Promise.race([p1,p2,p3]).then(console.log).catch(console.error);
*/

//promise race
const p1 =Promise.reject("task 1 resolved");
const p2=Promise.reject("task 2 rejected");
const p3 =Promise.reject("task3 resolved");
Promise.any([p1,p2,p3]).then(console.log).catch(console.error);