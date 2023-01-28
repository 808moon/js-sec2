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
}*/