//as const
let username="debug media" as const
// username="media one";

//keyof typeof

const  StatusType={
   PENDING:"pending",
    COMPLETED:"completed",
    FAILED:"failed",
}as const //not allow to change value of status type field

function getStatus(orderId:string,status:keyof typeof StatusType){  //keyof acesss values of status type,typeof object ne type akki matti
    // StatusType.PENDING="delay"//---through error it set as read only by using const
    console.log(orderId,"==",StatusType[status]);
}
getStatus("12345","COMPLETED");