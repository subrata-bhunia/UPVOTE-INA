import axios from "axios";
import { API_URL } from "../config";

var durationUrl=API_URL+'/duration';


// ADD

export const AddDuration = data=> {
    return axios.post(`${durationUrl}/add-duration`,data)
}

// list

export const ListDuration = () => {
    return axios.get(`${durationUrl}/list-duration`)
}

// edit

export const EditDuration = (dur_id,data) => {
    return axios.post(`${durationUrl}/edit-duration/${dur_id}`,data)
}

// delete

export const DeleteDuration = dur_id => {
    return axios.post(`${durationUrl}/delete-duration/${dur_id}`)
}

