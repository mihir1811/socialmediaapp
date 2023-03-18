const url = "http://localhost:9090"
import axios from "axios"
import Cookies from "js-cookie"

const jwt_Token = Cookies.get("JWT_TOKEN")

export const commenHeaders = {
    "Content-Type": "application/json",
}

// axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
//         .then(res => {
//             console.log(res.data);
//         this.setState({
//             items: res.data,  /*set response data in items array*/
//             isLoaded : true,
//             redirectToReferrer: false
//         })

export const getUrl = (endpoint, apiConfig = {}) => {
	if (Object.keys(apiConfig).length) {
		return `${url}/${endpoint}`;
	}
	else return API_HOST + "/v1" + endpoint;
	// return API_HOST + `${apiType == "node" ? "/v2" : "/v1"}` + endpoint;
};

export const postWithToken = async (endpoint, data, otherHeaders, apiConfig = {}) => {
	axios.defaults.headers.common["authorization"] = await ParseToken(
		Cookies.get("jwtToken") 
	);
	return axios.post(getUrl(endpoint, apiConfig), data, {
		headers: { ...commenHeaders, ...otherHeaders },
	});
};


export const registrationApi = async (payload) =>{
    const res = await axios({
        method:"post",
        url:`${url}/auth/registration`,
        headers: { "Content-Type": "application/json" },
        data:JSON.stringify(payload)
    })
    return res;
}

export const loginApi =async (payload) =>{
    const res = await axios({
        method:"post",
        url:`${url}/auth/login`,
        headers: { "Content-Type": "application/json" },
        data:JSON.stringify(payload),
        withCredentials:true
    } )
    return res;
}