console.log(this); // window

function simpleFunc() {
  console.log(this); 
}
window.simpleFunc(); // window
console.clear();


class Counter {
  count = 0;
//   increase = function () {
//     console.log(this);
//   };
  increase = () => { // 해결 2)
    console.log(this);
  };
}
const counter = new Counter(); 
counter.increase();


const caller = counter.increase;
//const caller = counter.increase.bind(counter); // 해결 1)
caller(); // undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
