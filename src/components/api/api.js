import axios from "axios";

export const Login=(user,pass)=>{
    return axios.request({
        url:'static/json/a.json',
        method:"get"
    })
//     axios.get("static/json/a.json")
//     .than(res=>{
//     return res.data
// }).catch(err=>{
//     return err
// })
};

