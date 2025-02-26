const controller = new AbortController();
async function fun1() {
  for (let i = 0; i < 10; i++) {
    if (controller.signal.aborted) {
      return;
    } else {
      try {
        let res = await mypromise(770, i);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

function mypromise(time, msg) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(msg);
    }, time);
  });
}

fun1();

setTimeout(() => {
  controller.abort();
}, 3000);
