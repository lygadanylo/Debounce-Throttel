function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => callback.apply(this, args), delay);
  };
}

function hendleSomething(value){
    console.log(value);
}

const process = debounce(hendleSomething, 1000);

process(1);
process(2);
process(3);
