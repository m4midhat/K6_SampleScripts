import http from "k6/http";
import { check } from "k6";

export const options = {
    vus : 10,
    iterations:20
};

let headers_api ={
    'Authorization' : 'Bearer d04a0e80612e604118da98ef7b389287f795e4f5cead29e2bac431dd4118317d'
}

export default function(){
    const response = http.get("https://gorest.co.in/public/v2/users", {headers:headers_api})
    console.log("Response code : ",response.status);
    check(response,{
        'Status code check':(response)=>response.status===200
    })
}