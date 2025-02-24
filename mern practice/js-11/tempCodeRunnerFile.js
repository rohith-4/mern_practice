const delay =(ms) => new Promise((resolve)=> setTimeout(resolve,ms));
// async function runtask(){
//     const tasks =[1000,2000,3000];
//     for(const time of tasks){
//         console.log(`waiting time ${time /1000} seconds...`);
//         await delay(time);
//         console.log("task done");
//     }
// }
// runtask()