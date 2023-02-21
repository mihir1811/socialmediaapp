const url = "http://localhost:9090"
import axios from "axios"



export const registrationApi = async (payload) =>{
    const res = await axios({
        method:"post",
        url:`${url}/registration`,
        headers: { "Content-Type": "application/json" },
        data:JSON.stringify(payload)
    })
    return res
}

export const loginApi =async (payload) =>{
    const res = await axios({
        method:"post",
        url:`${url}/login`,
        headers: { "Content-Type": "application/json" },
        data:JSON.stringify(payload),
        withCredentials:true
        
    } )
    return res
}