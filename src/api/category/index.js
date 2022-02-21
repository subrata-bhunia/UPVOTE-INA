import { API_URL } from "../config";
import axios from "axios";

var categoryUrl=API_URL+'/category';

// add

export const AddCategory = data =>{
    return axios.post(`${categoryUrl}/add-category`,data)
}

// list

export const ListCategory = () => {
    return axios.get(`${categoryUrl}/list-category`)
}

// edit

export const EditCategory = (cat_id,data) => {
    return axios.post(`${categoryUrl}/edit-category/${cat_id}`,data)
}

// delete 

export const DeleteCategory = cat_id => {
    return axios.post(`${categoryUrl}/delete-category/${cat_id}`)
}