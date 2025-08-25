let numAdd=(num1,num2)=>{
    return num1 + num2;
}
console.log(numAdd(69,69));

let numSub= (num3,num4) => (num4-num3);
console.log(numSub(69,138));

let square=(n) => n*n;
console.log(square(69));

let name=() => console.log("Hello 69");
name();

let daata=[1,2,3,4,5];
let squrares = daata.map(n => n*n);
console.log(squrares);

function person(){
    this.age=10;
    setInterval(()=>{
        this.age++;
        console.log("data "+ this.age);
    },1000);

}

let p=new person();