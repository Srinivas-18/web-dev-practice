const data =require('readline-sync');
const marks = data.question("Enter your marks: ");

console.log(marks>35 ?"He was passed" : "He got failed");
const grades= marks>90 ? 'A' :
            marks>80 && marks<=90 ? 'B' :
            marks>70 ? 'C' :
            marks>60 ? 'D' :
            marks>50 ? 'E' :
            marks>=35 ? 'Pass' : 'Fail';
console.log("Your grade was: "+grades);
