"use strict";
//any/unknown/never/void/null
Object.defineProperty(exports, "__esModule", { value: true });
let username = "aslam";
//unknown
let username1 = "debug media";
const newvalue = username1; //type casting unknown convert to string
//never/void
function throughError(message) {
    throw new Error(message);
}
function LogMessage(message) {
    throw new Error(message);
}
const currentObj = {
    name: "debug media",
    getUserName(message) {
        console.log(message);
    },
};
currentObj.getUserName("welcome");
//null
let userName = null;
function get() {
    if (userName) {
        return "sdsa";
    }
    else if (userName === null) {
        return "sadsa";
    }
}
