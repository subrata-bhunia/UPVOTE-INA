import axios from "axios";
import { API_URL } from "../config";

const apiUrl_magic = `${API_URL}/magic`
const apiUrl_magicLike = `${API_URL}/magicLike`
const apiUrl_magicShare = `${API_URL}/magicShare`
const apiUrl_magicComments = `${API_URL}/magicComments`

// ------------------Magic Questions-----------------------

export const CreateMagicQuestion = data => {
    // console.log(data)
    return axios.post(`${apiUrl_magic}/create-magic-question`,data,{headers:{
        Accept: "application/json",
    //   "Content-Type": "multipart/form-data",
    }})
}

export const ViewMagicQuestion = magic_ID => {
    return axios.get(`${apiUrl_magic}/view-magic-question/${magic_ID}`)
}

export const DeleteMagicQuestion = magic_ID => {
    return axios.post(`${apiUrl_magic}/delete-magic-question/${magic_ID}`)
}

export const UpdateMagicQuestion = (magic_ID,data) => {
    return axios.post(`${apiUrl_magic}/update-magic-qns/${magic_ID}`,data)
}

export const MyMagicQuestion = user_ID => {
    return axios.get(`${apiUrl_magic}/my-magic-question/${user_ID}`)
}

export const MagicQuestionUnblock = (magic_ID,data) => {
    return axios.post(`${apiUrl_magic}/magic-unblock/${magic_ID}`,data)
}

// ---------------Like----------------------

export const MagicLike = data => {
    return axios.post(`${apiUrl_magicLike}/add-magic-like`,data)
}

export const MagicLikeRemove = (magic_ID,data) => {
    return axios.post(`${apiUrl_magicLike}/remove-magic-like/${magic_ID}`,data)
}

export const MagicLikeList = magic_ID => {
    return axios.get(`${apiUrl_magicLike}/magic-like-list/${magic_ID}`)
}

export const MagicLikeCount = magic_ID => {
    return axios.get(`${apiUrl_magicLike}/total-magic-like/${magic_ID}`)
}

// -------------------Share-----------------------

export const MagicShare = data => {
    return axios.post(`${apiUrl_magicShare}/add-magic-share`,data)
}

export const MagicShareCount = magic_ID => {
    return axios.get(`${apiUrl_magicShare}/total-magic-share/${magic_ID}`)
}

// ---------------------Comments----------------------------

export const AddMagicComment = data => {
    return axios.post(`${apiUrl_magicComments}/add-magic-comment`,data)
}

export const EditMagicComment = (magic_cmnt_ID,data) => {
    return axios.post(`${apiUrl_magicComments}/edit-magic-comment/${magic_cmnt_ID}`,data)
}

export const DeleteMagicComment = magic_cmnt_ID => {
    return axios.post(`${apiUrl_magicComments}/delete-magic-comment/${magic_cmnt_ID}`)
}

export const MagicCommentList = magic_ID => {
    return axios.get(`${apiUrl_magicComments}/magic-cmmnt-list/${magic_ID}`)
}
export const MagicCommentCount = magic_ID => {
    return axios.get(`${apiUrl_magicComments}/total-magic-cmmnt/${magic_ID}`)
}

