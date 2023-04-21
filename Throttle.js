function throttle(callback, delay) {
  let isThrottled;
  let lastArgs;
  let lastThis;

  return function (...args) {
    if (isThrottled) {
      lastArgs = args;
      lastThis = this;
      return;
    }

    callback.apply(this, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;

      if (lastArgs && lastThis) {
        callback.apply(lastThis, lastArgs);

        lastArgs = lastThis = null;
      }
    }, delay);
  };
}

function handleSomething() {
  console.log(new Date());
}

handleSomething = throttle(handleSomething, 300);

setInterval(handleSomething, 3000);
