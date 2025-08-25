const userNumber="42";
const inputNum=Boolean(userNumber);

if(!isNaN(inputNum)){
    console.log("valid so: "+ (inputNum+8));
}else{
    console.log("invalid");
}
const z=String(inputNum);
const y=Boolean(inputNum);
const x=Boolean(userNumber);
console.log(typeof z+ " "+ typeof y+" "+ typeof x);
console.log(z+" "+y+" "+x);

// type conversions

const a="123";
const b="456";
const c=Number(a);
const d=Number(b);
console.log(a+b);
console.log(typeof a +" and "+ typeof b);
console.log(c+d);
console.log(typeof c +" and "+ typeof d);

const e=String(c);
console.log(e);
