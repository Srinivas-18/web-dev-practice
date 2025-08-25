const data=require('readline-sync');
const name=data.question("Enter your age: ");
// console.log("Was it "+ name+ " ?");
const age=Number(name);
if(!isNaN(age)){
    const year= new Date().getFullYear();
    const DOB=year-age;
    console.log("Your DOB is: "+ DOB);
    const data1= require('readline-sync');
    const confirm=data1.question("Is it correct??"+ "(yes/no): ");
    if(confirm.toLowerCase()==="yes"){
        console.log("Thank you");
    }
    else{
        console.log("Enter again!!");
    }
    
}else{
    console.log("Enter a valid age");
}
