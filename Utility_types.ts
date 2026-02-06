type Users={
     name:string;
    age:number;

};

const userdetails:Readonly<Users>={  //cannot assign it is read only,set using utility type
    name:"debug-media",
    age:20,
};

// userdetails.age=30  ////cannot assign it is read only
// userdetails.name="abhi"  //cannot assign it is read only

const userdetails1:Partial<Users>={  //optional utility type press ctrl,space u can see ?,set it to optional using partial
    name:"debug-media",
    age:20,
};

//required 
const userdetails2:Required<Users>={  
    name:"debug-media",
    age:20,
};

//pick

const user:Pick<Users,"name"| "age">={  
    name:"debug-media",
    age:20,
};

//omit
const user1:Omit<Users,"salary"> = {  
    name:"debug-media",
    age:20,
};

type StatusType="pending" | "completed" | "failed";
const status_:Exclude< StatusType,"pending">="failed";

//record

type food={
    KFC:string;
    PIZZA:string;
    CHICKEN:string;
};

type food1=Record<string,any>;
const food:food1={
     KFC:"butter chicken",
    PIZZA:"hotpizza",
    CHICKEN:"chicken65",
    price:{
        mrp:120,
        gst:10,
    },
};