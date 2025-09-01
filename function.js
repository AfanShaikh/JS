function anualDay(){
    console.log("Hello Function's");
    return 'Afan'
}
let ans = anualDay();
console.log('~ans:',ans);

let num_1 = 10;
let num_2 = 20;

function greatest(a,b){
    if(a>b){
        return `this is the greater then b and the value of a is ${a}`;
    }
    else{
         return `this is the greater then a and the value of b is ${b}`;
    }
}

let ans1 = greatest(num_1,num_2);
console.log('~ans1:',ans1);

let num_3 = undefined;
let num_4 = 5;

function greatest(a=40,b=60){
    if(a>b){
        return `this is the greater then b and the value of a is ${a}`;
    }
    else{
         return `this is the greater then a and the value of b is ${b}`;
    }
}
let ans2 = greatest(num_3,num_4);
console.log('~ans2:',ans2);

let num_5 = undefined;
let num_6 = 5;

const greatest=(a=40,b=60)=>{
    if(a>b){
        return `this is the greater then b and the value of a is ${a}`;
    }
    else{
    return `this is the greater then a and the value of b is ${b}`;
    }
}
let ans3 = greatest(num_5,num_6);
console.log('~ans3:',ans3);