function doSomething() {
    console.log(33330);
}

console.log((132135));
doSomething() // synchronize way te show korbe
setTimeout(doSomething, 1000) // last e show korbe porer value ta 1000 milisecond ba 1 second e count hobe then output show korbe
console.log(4444);
console.log(4444);

setTimeout(() => {
    console.log('see u later');
}, 4000); //4 second pore show korbe jodi ager gula sob output dekhanu hoyejay


setInterval(() => {
    console.log('doing interval');
}, 5000); //1000 milisecond ba 1 second por por call korbe