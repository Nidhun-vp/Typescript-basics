//infer types-automatically ts detects and  provide types or implicit types
let userName=" developer";
let Subscribers=3000;

//Defining types

let userNames:string="john";
let Subscribers2:number=40000;
let isSubscribed:boolean=true;
let skills:string[]=["JS","css","Ts"]; //array of strings
let salaryRange:number[]=[3,4,5,8,12]; //array of number
let emptyArray:[]=[];//Ts expect values of array also empty 

//interface-it is a object it can use in another object
interface Details{
    name:string;
    age:number;
    salary:number;
    getName:()=> void; 

    

}
//interface used here -it replace set of types
let userDetails:Details={  //object -for getting intenjrelli press ctrl+space
name:"varun",
age:32,
salary:12000,
getName() {
    console.log(this.name)
},
};

let adminDetails:Details={  //object -for getting intenjrelli press ctrl+space
name:"admin",
age:42,
salary:82000,
getName() {
    console.log(this.name);
},
};

userDetails.age=35;

//interface
interface Details{
    name:string;
    age:number;
    salary:number;

}

//type
type Details2 = {
     name:string;
    age:number;
    salary:number;
    getName:()=> void;
}

let userDetails2:Details3={  
name:"varun",
age:"32",//string age also allow it use union type
salary:12000,
getName() {
    console.log(this.name)
},
};

//union type/

//age in string or number both allow
type Details3 = {
     name:string;
    age:number |string;
    salary:number;
    getName?:()=> void; //optional type :?-function use cheyithillenkilumlum error adikkila
}

let skillSet:(string|number|boolean)[]=["React","JS","css","Ts",10,20,30,false,true]; //array accept both number and string

//functions
function getuserName(userDetails:Details3,adminDetails:Details){
    return userDetails.name;

}
const newValue=getuserName(userDetails,adminDetails);
newValue.length

//named types-user created types
type statusType="pending"|"completed"|"failed"|"";
type ToggleSwitch="on"|"off";
let currentStatus:statusType=""
let Switchmode:ToggleSwitch="off"

//imagine data from api
const response="pending"
if(response==="pending"){
    currentStatus="pending"
}




