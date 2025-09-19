/*CallBack Function*/
function sec(){
    console.log('Hello Im a call back function');
}
 main(sec);

 function main(func){
    func();
 }
//!Promise
//!*SYNC*//
let prom = new Promise(function(resolve,reject){
    let data = false;
    if(data){
        resolve("got the data!!!");
    }
    else{
        reject("not getted???");
    }
});
prom
  .then((res) => console.log(res))
  .catch((ress) => console.log(ress));


//!ASYNC
console.log('A');

let ice_cream = new Promise((res,rej) => {
    let got_ice_cream;
    console.log('B');

    //! steTimeout(() => {},delay)

    setTimeout(() => {
        got_ice_cream = false;
        if (got_ice_cream) {
            res(got_ice_cream);
        }
        else {
            rej(got_ice_cream);
        }
    },3000);

    console.log('C');
});
console.log('D');

console.log('~ice_cream:', ice_cream);

ice_cream 
  .then(() => {
    console.log('eat the ice cream');
  })
  .catch(() => {
    console.log('call mommy');
});

console.log('E');

function waiting_msg_promis(){
  return new Promise((res,rej) => {
    res("goatch you???")
  })
}
async function async_await_show_msg_promis(){
  console.log("start the task???");

  let msg = await waiting_msg_promis();
  console.log('🚀 ~ msg:', msg);

  console.log("Finish the task");

}

async_await_show_msg_promis();