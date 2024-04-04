import http from "k6/http";
import { check } from "k6";

export const options = {
    vus : 10,
    iterations:20
};

export default function(){
    const response = http.get("https://test.k6.io")
    console.log("Response code : ",response.status);
    check(response,{
        'Status code check':(response)=>response.status===200
    })
}