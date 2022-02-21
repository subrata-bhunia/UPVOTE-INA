/*
http://upvoteapi.inawebtech.com/api/v1/language/add-language
http://upvoteapi.inawebtech.com/api/v1/language/list-language
http://upvoteapi.inawebtech.com/api/v1/language/edit-language/{id}
http://upvoteapi.inawebtech.com/api/v1/language/delete-language/{id}
*/
import { API_URL } from "../config";
import axios from "axios";

var langUrl=API_URL+'/language';
// add lang

export const AddLanguage = data=>{
    return axios.post(`${langUrl}/add-language`,data)
}

// list 

export const ListLanguage =()=>{
    return axios.get(`${langUrl}/list-language`)
}

// edit

export const EditLanguage = (langId,data) =>{
    return axios.post(`${langUrl}/edit-language/${langId}`,data)
}

// delete

export const DeleteLanguage = langId =>{
    return axios.post(`${langUrl}/delete-language/${langId}`)
}