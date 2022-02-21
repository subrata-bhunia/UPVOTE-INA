import axios from "axios";
import { API_URL } from "../config";

var interestsUrl=API_URL+'/interest'

// Add Interest

export const AddInterest= data =>{
    return axios.post(`${interestsUrl}/add-interest`,data)
}

// List Interest

export const ListInterest = () =>{
    return axios.get(`${interestsUrl}/list-interests`)
}

// Edit Interest

export const EditInterest = int_id =>{
    return axios.post(`${interestsUrl}/edit-interests/${int_id}`)
}

// Delete 

export const DeleteInterest = int_id =>{
    return axios.post(`${interestsUrl}/delete-interests/${int_id}`)
}