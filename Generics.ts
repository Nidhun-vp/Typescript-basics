//generics
function getAge(age:string | number):string | number{ 
    return age;
}

function getAge1<T>(age:T):T{ //T-generic type
    return age;
}

//
getAge(22);
getAge("22");
//generic function call
getAge1<number>(22);
getAge1<string>("22");
//
type userDetail={
    name:string;
    age:number;
}

type adminDetail={
    firstname:string;
    role:string;
}


const UserDetail:userDetail={
    name:"john",
    age:20,
};

const AdminDetail:adminDetail={
    firstname:"ruther",
    role:"admin",
}

//
function getDetails(details:userDetail):userDetail{
    return details;
}

function getDetails1<T>(details:T):T{
    return details;
}

const userValue=getDetails(UserDetail);
const adminValue=getDetails1<adminDetail>(AdminDetail)
//uservalue
userValue.name
adminValue.firstname
//interface acess fields from userdetails
interface AdminDetail extends userDetail{
    role:string;
}