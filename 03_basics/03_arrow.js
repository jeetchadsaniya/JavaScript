const user = {
  username: "jeet",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "jeet";
//   console.log(this);
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "jeet";
//   console.log(this);
//   console.log(this.username);
// };

const chai = () => {
  let username = "jeet";
  console.log(this);
  console.log(this.username);
};

chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({ username: "jeet" });
// const addTwo = (num1, num2) => {
//   return {username: "jeet"};
// };

// console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];
// way ro right function in other function argument
// method( function() {} );
// method( () => {} );
// method( () => () );

// myArray.forEach();
