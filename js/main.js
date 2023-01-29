/*let x = +prompt("x :")
console.log(x);
console.log(typeof x);
console.log(typeof x.toString());
console.log(typeof String(x));
console.log(typeof Boolean(x));
//truethy-->undefined,empty string,null,number 0--->false
// other--->true
//empty object & array ===>in js true but in php-->false
let data=[]
console.log(Boolean(data));
let data1={}
console.log(Boolean(data1));
let y = 10
if(y)
{
    console.log(":D");
}
else
{
    console.log("ignore");
}



let y = null;
if(y)
{
    console.log(":D");
}
else
{
    console.log("ignore");
}

let y //undefined
if(y)
{
    console.log(":D");
}
else
{
    console.log("ignore");
}


let y = 0;
if(y)
{
    console.log(":D");
}
else
{
    console.log("ignore");
}

let y = ""
if(y)
{
    console.log(":D");
}
else
{
    console.log("ignore");
}


let y = "salam"
if(y)
{
    console.log(":D");
}
else
{
    console.log("ignore");
}

let y = false
if(y)
{
    console.log(":D");
}
else
{
    console.log("ignore");
}

//Block scopes:

//var ignore...
var x=10;
{
    {
        {
            console.log(x);
            var y =20;
        }
    }
}
console.log(y);


let x=10;
{
    {
        {
            console.log(x);
            let y =20;
        }
    }
}
console.log(y);


const x=10;
{
    {
        {
            console.log(x);
            
        }
        const y =20;
    }
}
console.log(y);



{
    {
        let x=10;

        {
            console.log(x);
            
        }
        let y =20;
    }
}
console.log(y);


let x=100
{
    let y =+prompt("y :")
    {
        let sum=x+y
        {
            console.log(sum);
        }
    }
}


let x=+prompt("x :")
let y =+prompt("y :")
let sum =x+y
console.log(sum);
let sub=x-y
console.log(sub);
let mul=x*y
console.log(mul);
let div=x/y
console.log(div);
let rem=x%y
console.log(rem);
let power=x**y
console.log(power);


let x=+prompt("x :")
let y=x++
console.log(y);
console.log(x);


let x=5;
let y=10;
let result=(x+y/2*5)*2/(x-y*2+5)
console.log(result);

let x=+prompt("x :")//5
let y =+prompt("y :")//10
let result=(x/y*2+y/x)*2/((x+y)*2/5)
console.log(result);


let x=+prompt("x :")
let y=prompt("y :")
let result=x===y //type value
console.log(result);


let x=+prompt("x :")
let y=prompt("y :")
let result=x!==y //type value
console.log(result);


let x=+prompt("x :")
let y=+prompt("y :")
//10>5 -> true
//10===10 ->true
//5===5 ->true
//true*true*true -> 1*1*1=1 ->true
let result= x>y && x===10 && y===5
console.log(result);


let x=+prompt("x :")
let y=+prompt("y :")
//10<5 -> false
//10===10 ->true
//5===5 ->true
//false*true*true -> 0*1*1=1 ->true
let result= x<y && x===10 && y===5
console.log(result);


let x=+prompt("x :")
let y=+prompt("y :")
//10>5 -> true
//10===10 ->true
//5===5 ->true
//true+true+true -> 1+1+1=1 ->true
let result= x>y || x===10 || y===5;
console.log(result);


let x=+prompt("x :")
let y=+prompt("y :")
//3>5 -> false
//3===10 ->false
//5===5 ->true
//false+false+true -> 0+0+1=1 ->true
let result= x>y || x===10 || y===5;
console.log(result);


let x=+prompt("x :")
let y=+prompt("y :")
let result=!((x===y && x<=10) || x!==y )
console.log(result);


let check=confirm("do you want delete data?")
if(check===true)
{
    console.log("your data deleted!!!");
}
else{
    console.log("your data didn't delete :D");
}


debugger
let age =+prompt("enter your age :")
if (age>18){
    console.log(`you are more than ${age} go to university!!!`);
}
else {
    console.log(`go to school!!!`);
}


debugger
let age =+prompt("enter your age :")
if (age>18){
    console.log(`you are more than ${age} go to university!!!`);
}
else {
    console.log(`go to school!!!`);
}


let x=+prompt(`x :`)
let y=+prompt(`y :`)
if(x>y){
    console.log(x);
}
else{
    console.log(y);
}


let x=+prompt(`x :`)
if(x===1){
    console.log(`shanbe`);
}else if(x===2){
    console.log(`1shanbe`);
}else if(x===3){
    console.log(`2shanbe`);
}else if(x===4){
    console.log(`3shanbe`);
}else if(x===5){
    console.log(`4shanbe`);
}else if(x===6){
    console.log(`5shanbe`);
}else if(x===7){
    console.log(`jome`);
}else{
    console.log(`must be select between 1 to 7`);
}


let x=+prompt(`x :`)
let y=+prompt(`y :`)
let operand=prompt(`select + - * / ?`)
if (operand==="+"){
    console.log(x+y);
}else if(operand==="-"){
    console.log(x-y);
}else if(operand==="*"){
    console.log(x*y);
}else if(operand==="/"){
    console.log(x/y);
}else{
    console.log(`nothings!!!`);
}


let num1=document.getElementById("num1").value
let num2=document.getElementById("num2").value
function plus()
{
    document.getElementById("h1").innerHTML=Number(num1)+Number(num2)
}
*/

let num1=document.querySelector("input#num1")
let num2=document.querySelector("input#num2")
let plus=document.querySelector("button#plus")
let minus=document.querySelector("button#minus")
let mul=document.querySelector("button#mul")
let div=document.querySelector("button#div")
plus.addEventListener("click",function(){
    document.querySelector("input#txt3").value=Number(num1.value)+Number(num2.value)
})

minus.addEventListener("click",function(){
    document.querySelector("input#txt3").value=Number(num1.value)-Number(num2.value)
})

mul.addEventListener("click",function(){
    document.querySelector("input#txt3").value=Number(num1.value)*Number(num2.value)
})


div.addEventListener("click",function(){
    document.querySelector("input#txt3").value=Number(num1.value)/Number(num2.value)
})

function num1_keyup(e)
            {
                if(e.keyCode==13)
                    {
                        document.getElementById('num2').focus()
                    }
            }