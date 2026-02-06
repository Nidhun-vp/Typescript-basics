//function overloading
function add1(num1:number|string,num2:number|string):number|string{
    if(typeof num1=="string" ||typeof num2=="string"){
      return num1+""+num2;  
    }
return num1+num2;
}


//accept any time
function add2(num1:any,num2:any):any{
    return num1+num2;
}

function add3(num1:string,num2:string):any{
    return num1+num2;
}

add1(2,2);//4
add3("2","2");//22
add1(2,"2")//22

//function overloading
function add(num1:number,num2:number):number;
function add(num1:string,num2:string):string;
function add(num1:any,num2:any):any
{
  return num1+num2;  
}
// add([],[])  -shows error 
// add({},{})