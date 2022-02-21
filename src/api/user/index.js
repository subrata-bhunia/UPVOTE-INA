import axios from "axios";
import { API_URL } from "../config";

var authUrl = API_URL+'/auth';
var userUrl = API_URL+'/user';
// ------- Change PASSWORD ----------//

export const ChangePassword = (id,data)=>{
    return axios.post(`${authUrl}/change-password/${id}`,data)
}

// Add Photo

export const AddPhoto = async (id,data)=>{
    // const data = new FormData();
    //  data.append('file',image);
    return await axios({
        method:'POST',
        url:`${userUrl}/add-photo/${id}`,
        data:data,
        headers:{
            'Content-Type':'multipart/form-data',
            Accept: "application/json",
        }
    })
}

// Get Photo

export const GetPhoto = id =>{
    return axios.get(`${userUrl}/get-photo/${id}`)
}

// Delete Photo

export const DeletePhoto = id =>{
    return axios.post(`${userUrl}/delete-photo/${id}`)
}

// OTP VERIFIED

export const OtpVerify = (id,data) => {
    return axios.post(`${authUrl}/verifyotp/${id}`,data)
} 