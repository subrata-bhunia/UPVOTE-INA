import {API_URL} from '../config';
import axios from 'axios';

var pollUrl = `${API_URL}/poll`;
var pollBlockUrl = `${API_URL}/pollBlock`;
var pollShareUrl = `${API_URL}/pollShare`;
var pollLikeUrl = `${API_URL}/pollLike`;
var pollCommentUrl = `${API_URL}/pollComment`;
// Post Poll
export const PostPoll = data => {
  return axios.post(`${pollUrl}/create-post-pole`, data);
};

// update

export const UpdatePoll = (poll_id, data) => {
  return axios.post(`${pollUrl}/update-post-pole/${poll_id}`, data);
};

// View single poll

export const ViewSinglePoll = poll_id => {
  return axios.get(`${pollUrl}/view-post-pole/${poll_id}`);
};

// Delete Poll

export const DeletePoll = poll_id => {
  return axios.post(`${pollUrl}/delete-post-pole/${poll_id}`);
};

// Poll List

export const PollList = user_id => {
  return axios.get(`${pollUrl}/my-pole-list/${user_id}`);
};

// Block Poll

// export const BlockPoll = data => {
//     return axios.post(`${pollBlockUrl}/add-poll-block`,data)
// }

export const BlockPoll = (poll_id, data) => {
  return axios.post(`${pollUrl}/poll-block/${poll_id}`, data);
};

// Unblock Poll

// export const UnblockPoll = (user_id,data) => {
//     return axios.post(`${pollBlockUrl}/delete-poll-block/${user_id}`,data)
// }

export const UnblockPoll = (poll_id, data) => {
  return axios.post(`${pollUrl}/poll-unblock/${poll_id}`, data);
};

// Poll Share

export const pollShare = data => {
  return axios.post(`${pollShareUrl}/add-poll-share`, data);
};

// Share Count

export const pollShareCount = poll_id => {
  return axios.get(`${pollShareUrl}/total-sahre/${poll_id}`);
};

// Like ----

export const PollLike = data => {
  return axios.post(`${pollLikeUrl}/add-poll-like`, data);
};

// Remove Like

export const RemovePollLike = (poll_id, data) => {
  return axios.post(`${pollLikeUrl}/remove-poll-like/${poll_id}`, data);
};

// Total Like

export const PollLikeCount = poll_id => {
  return axios.get(`${pollLikeUrl}/total-like/${poll_id}`);
};

// Like List

export const PollLikelist = poll_id => {
  return axios.get(`${pollLikeUrl}/like-list/${poll_id}`);
};

/**
 * Poll Comment Add
 * @param data - { poll_user_id, comment_user_id, poll_id, poll_comment}
 * @returns
 */
export const AddPollComment = data => {
  return axios.post(`${pollCommentUrl}/add-poll-comment`, data);
};

/**
 * Edit Poll Comment
 * @param {* poll_cmnt_id Poll Comment id  }
 * @param {*data {poll_user_id, comment_user_id, poll_id, poll_comment}}
 * @returns
 */
export const EditPollComment = (poll_cmnt_id, data) => {
  return axios.post(
    `${pollCommentUrl}/edit-poll-comment/${poll_cmnt_id}`,
    data,
  );
};

/**
 * Delete Poll Comment
 * @param  poll_cmnt_id Poll Comment Id
 * @returns
 */
export const DeletePollComment = poll_cmnt_id => {
  return axios.post(`${pollCommentUrl}/delete-poll-comment/${poll_cmnt_id}`);
};

/**
 * Total Poll Comment
 * @param  poll_id Poll Id
 * @returns
 */
export const CountPollComment = poll_id => {
  return axios.get(`${pollCommentUrl}/total-comment/${poll_id}`);
};

/**
 * Poll Comment List
 * @param  poll_id Poll Id
 * @returns
 */
export const PollCommentList = poll_id => {
  return axios.get(`${pollCommentUrl}/comment-friends-list/${poll_id}`);
};
