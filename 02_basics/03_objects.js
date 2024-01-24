// singleton
// Object.create

// object literals

const mySym = Symbol("key1");
// console.log(mySym);
// console.log(typeof mySym);

const JsUser = {
  name: "Jeet",
  fullName: "Jeet Patel",
  // [mySym]: 5,
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "jeet@google.com",
  isLoggedIn: false,
  // lastLoginDays: [1,2,3],
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.fullName);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.mySym);

JsUser.email = "jeet@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "jeet@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
