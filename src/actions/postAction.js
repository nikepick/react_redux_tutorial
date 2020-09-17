import axios from 'axios';
import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>
      dispatch({
        type: FETCH_POSTS,
        payload: res.data
      })
    );
};

export const createPosts = (postData) => dispatch => {
  console.log('action called');
  axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: postData.title,
      body: postData.body
    }, {
      headers: {
        ContentType: 'application-json'
      }
    })
    .then(res => dispatch({
      type: NEW_POST,
      payload: res.data
    }));
};