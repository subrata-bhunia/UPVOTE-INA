import axios from "axios";
import { API_URL } from "../config";

const apiUrl = `${API_URL}/group`

export const CreateNewGroupAPI= data =>{
    return axios.post(`${apiUrl}/add-groups`,data)
}

export const EditGroup = (group_ID,data) => {
    return axios.post(`${apiUrl}/edit-groups/${group_ID}`,data)
}

export const JoinGroup =(group_ID,data) => {
    return axios.post(`${apiUrl}/join-groups/${group_ID}`,data)
}

export const UserRemove =(group_ID,data) => {
    return axios.post(`${apiUrl}/remove-groups/${group_ID}`,data)
}