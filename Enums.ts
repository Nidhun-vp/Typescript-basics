// type Statustype="pending" |"completed" |"failed"
enum Statustype{
    PENDING,
    COMPLETED,
    FAILED,
}

function getStatus1(orderId:string,message:string,status:Statustype){
    console.log(orderId,"==",status);
}
getStatus1("12345","text messaage",Statustype.COMPLETED);