import {Login}  from '../../components/api/login.js'
export default {
   
        state:{
            user:"", //角色
            username:'',//用户
            password:'',//密码
            company:'',//公司
            
        },
        mutations:{},
        getters:{},
        actions:{
            handleLogin(userName,password){
                userName = userName.trim();
                return new Promise((resolve,reject)=>{
                    Login(userName,password).than(res=>{
                       
                    }).catch(err=>{

                    })
                })
               

                
            }
            
        }
}