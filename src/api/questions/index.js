import axios from 'axios';
import {API_URL} from '../config';

const apiUrl_question = `${API_URL}/question`;
const apiUrl_questionLike = `${API_URL}/questionLike`;
const apiUrl_questionShare = `${API_URL}/questionShare`;
const apiUrl_questionComments = `${API_URL}/questionComments`;

// ---------------Question-----------

export const CreateQuestion = data => {
  console.log(data);
  return axios.post(`${apiUrl_question}/post-question`, data);
};

export const ViewQuestion = question_id => {
  return axios.get(`${apiUrl_question}/view-question/${question_id}`);
};

export const DeleteQuestion = question_id => {
  return axios.post(`${apiUrl_question}/delete-question/${question_id}`);
};

export const MyQuestions = user_ID => {
  return axios.get(`${apiUrl_question}/my-question/${user_ID}`);
};
// --------- block ---------- //

export const BlockQuestion = (question_id, data) => {
  return axios.post(`${apiUrl_question}/qns-block/${question_id}`, data);
};

export const UnblockQuestion = (question_id, data) => {
  return axios.post(`${apiUrl_question}/qns-unblock/${question_id}`, data);
};

// -----------------Like--------------------------

export const QuestionLike = data => {
  return axios.post(`${apiUrl_questionLike}/add-question-like`, data);
};

export const RemoveQuestionLike = (question_id, data) => {
  return axios.post(
    `${apiUrl_questionLike}/remove-question-like/${question_id}`,
    data,
  );
};

export const QuestionLikeCount = question_id => {
  return axios.get(`${apiUrl_questionLike}/total-like-question/${question_id}`);
};

// --------------------------Share-----------------------

export const QuestionShare = data => {
  return axios.post(`${apiUrl_questionShare}/add-question-share`, data);
};

export const QuestionShareCount = question_id => {
  return axios.get(
    `${apiUrl_questionShare}/total-question-sahre/${question_id}`,
  );
};

// -------------------------Comment------------------------------

export const AddQuestionComment = data => {
  return axios.post(`${apiUrl_questionComments}/add-question-comment`, data);
};

export const EditQuestionComment = (qns_commnt_id, data) => {
  return axios.post(
    `${apiUrl_questionComments}//edit-qns-cmnt/${qns_commnt_id}`,
    data,
  );
};
