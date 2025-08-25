const data=require('readline-sync');
const name=data.question("Enter your Name: ");
const data1=require('readline-sync')
const name1 =data1.question("Enter your age: ");

const age=Number(name1);
if(!isNaN(age)){
    const year = new Date().getFullYear();
    const DateOfBirth=year-age;
    const data2=require('readline-sync');
    const confirm=data2.question(`Your name is ${name}
        Your age is ${age}
        Your DOB is ${DateOfBirth}
        Is it correct?? (yes/no): `);
        if(confirm.toLowerCase()==="yes"){
            if(DateOfBirth<=2005){
            console.log(`hi your name was ${name} and your age was ${age} and your DOB was ${DateOfBirth} and your are eligible!!`);
        }else{
        console.log(`hi mr/ms ${name} you are not eligible!!`);
        }
        }else if(confirm.toLowerCase()==="no"){
            console.log("Enter again!!");
        }else{
            console.log("Enter a valid input!!");
        }
}else{
    console.log(`some thing went wrong!!`);
}

console.log(50>50);
console.log(50<20);
console.log(50<=20);
console.log(50>20);
console.log(50>=20);
console.log("Banana">"Apple");
console.log("20">"10");
console.log("01"== 1);
console.log("01"=== 1);