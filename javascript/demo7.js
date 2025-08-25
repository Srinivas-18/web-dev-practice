// let anonymousFunction= function(){
//     console.log("HEllo");
// };
// anonymousFunction();
// console.log(typeof anonymousFunction);

let vscode = function Sairam(name){
    console.log("Sairam Sairam "+ name);
}
vscode("bathai");

let data = function neo(n){
    if(n>=1){
        neo(n-1);
        console.log(n);
        // neo++;
    }
}
data(5);

let factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120
