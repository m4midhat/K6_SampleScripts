import http from "k6/http";
import { check } from "k6";
import { parseHTML } from "k6/html";

export const options = {
    vus : 10,
    duration: '5s'
};

const url = "https://reqres.in/api/users";

const jsonData = open("./payload.json");


export default function(){
    const response = http.post(url, jsonData)
    console.log("Response code : ",response.status);
    //console.log(response.json());
    console.log(response.body);
    const id = JSON.parse(response.json('id'));

    console.log("ID Extracted : ",id)
    check(response,{
        'Status code check':(response)=>response.status===201,
        'Employee code check' : (response) => response.body.includes('id')
    })
}