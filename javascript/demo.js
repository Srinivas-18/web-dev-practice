console.log("Hello, World!");

let message;
message = "This is a demo script.";
console.log(message);

const text = "JavaScript is fun!";
console.log(text);

const PI = 3.14;
console.log(PI);

// Stick to a single naming convention like camelCase.
const homeAddress = "123/017/217";
const anotherHomeAddress = "123/017/217";
// Use template literals for cleaner string interpolation.
console.log(`${homeAddress} ${anotherHomeAddress}`);

// Avoid variable names that only differ by case. Use descriptive names.
const userId = 12345;
const alternateUserId = 53635;
console.log(`User ID: ${userId} || Alternate User ID: ${alternateUserId}`);

console.log(typeof homeAddress);
console.log(typeof userId);

// Use descriptive variable names to improve clarity.
const isActive = true;
if (isActive) {
    console.log("Status is active");
} else {
    console.log("Status is inactive");
}
console.log(typeof isActive);

const user = {
    name: "abhi",
    age: 69,
    address: "123/017/217", // Object property names should also follow camelCase.
};
console.log(user);
console.log(typeof user);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers); // This correctly logs 'object'.
console.log(Array.isArray(numbers)); // Use Array.isArray() to check for an array.

let numbers1 = 20;
let data="Abhi";
message1= data+" age was "+numbers1;
console.log(message1);

let userName1="Srinivas";
let userAge=20;
let message2=`${userName1} age is ${userAge}
i am ${userName1} studying in college`;
console.log(message2);

let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
a++;