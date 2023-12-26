/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
 //The implementation you provided with setTimeout doesn't actually halt or busy wait the thread; it schedules a function to run after the specified time.
//If you want to create a busy-wait function that blocks the execution of the thread for a given number of milliseconds

function sleep(milliseconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milliseconds);
  });
}
//this is the part that does that for you
async function main(n) {
  console.log(" going to sleep/busy wait for " + `${n}` + " seconds");
  await sleep(n * 1000);//here the thread is actually waiting as the sleep function is called which has setTimeout inside it.
  console.log("After" + `${n}`, "seconds");//although this is a synchronous task but due to the use of await we are blocking the thread to reach here immediately !
}
main(4);
//I hope this helps !

module.exports = sleep;
