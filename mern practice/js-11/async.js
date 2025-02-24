// function greet(){
//     return "hello world";
// }
// greet().then(console.log);


// async function fetchdata(){
//     let result= await Promise.resolve("data fetched");
//     console.log(result);
// }
// fetchdata();

// function getuser(){
//     return new Promise((reject)=>{
//         setTimeout(()=> reject("user data not fetched"),2000);
//     });
// }
// async function dispalyuser(){
//     console.log("fetching the data please wait..");
//     try{
//         let user=await getuser();
//         console.log(user);
//     }
//     catch(error){
//         console.error("error")
//     }

//     console.log("data fetched successfully");
// }
// dispalyuser();

// let delay =(ms) => new Promise((resolve)=> setTimeout(resolve,ms));
// async function runtask(){
//     console.log("task 1 started");
//     await delay(3000);
//     console.log("task 2 started");
//     await delay(2000);
//     console.log("task 3 started");
//     await delay(1000);
//     console.log("task 4 started");
//     await delay(1000);
// }
// runtask();

//  const fetchdata = ()=> new Promise((resolve)=>setTimeout(()=>resolve("data fetched"),1000));
//  const fetchpost = ()=> new Promise((resolve)=>setTimeout(()=>resolve("data posted"),5000));

//  async function fetchalldata(){
//     const [user , post] = await Promise.all([fetchdata(),fetchpost()]);
//     console.log(user,post);
//  }
//  fetchalldata();

//  const fetchdata = ()=> new Promise((resolve)=>setTimeout(()=>resolve("data fetched"),2000));
//  const fetchpost = ()=> new Promise((resolve)=>setTimeout(()=>resolve("data posted"),1000));

//  async function fetchalldata(){
//     const result = await Promise.race([fetchdata(),fetchpost()]);
//     console.log(result);
//  }
//  fetchalldata();

// const delay =(ms) => new Promise((resolve)=> setTimeout(resolve,ms));
// async function runtask(){
//     const tasks =[1000,2000,3000];
//     for(const time of tasks){
//         console.log(`waiting time ${time /1000} seconds...`);
//         await delay(time);
//         console.log("task done");
//     }
// }
// runtask()
//for loop
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// async function runTask() {
//   const tasks = [1000, 2000, 3000];
//   for(let i=0;i<tasks.length;i++){
//         console.log(`waiting time ${tasks[i] /1000} seconds...`);
//         await delay(tasks[i]);
//         console.log("task done");
//   }
// }
// runTask();

//while loop
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// async function runTask() {
//   const tasks = [1000, 2000, 3000];
//   let index = 0;
//   while (index < tasks.length) {
//     const time = tasks[index];
//     console.log(`waiting ${time / 1000} seconds.....`);
//     await delay(time);
//     console.log("task done");
//     index++;
//   }
// }
// runTask();
