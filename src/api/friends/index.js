import axios from "axios";
import { API_URL } from "../config";

const apiUrl = `${API_URL}/friends`
const apiUrl1 = `${API_URL}/friendsBlock`

export const AddFriend = data =>{
    return axios.post(`${apiUrl}/add-friends`,data)
}

export const TotalFriend = user_ID => {
    return axios.get(`${apiUrl}/total-friends/${user_ID}`)
}

export const BlockFriend =  data => {
    return axios.post(`${apiUrl1}/add-block-friends`,data)
}

export const UnblockFriend = (user_ID,data) =>{
    return axios.post(`${apiUrl1}/unblock-friends/${user_ID}`,data )
}