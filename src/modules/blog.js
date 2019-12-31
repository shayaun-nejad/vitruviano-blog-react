import { push } from 'connected-react-router';
import axios from 'axios';

export const SET_BLOG_POST = 'SET_BLOG_POST';
export const UNSET_BLOG_POST = 'UNSET_BLOG_POST';

export const GET_BLOG = 'GET_BLOG';


const initialState = {
    currentBlog: {},
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_BLOG_POST:
        return {
            ...state,
            currentBlog: action.blog,
        }
      case UNSET_BLOG_POST:
        return {
          ...state,
          currentBlog: {},
        }
      case GET_BLOG:
        return {
            ...state,
            currentBlog: action.blog,
        }
      default:
        return state
    }
  }

  export const setBlog = (blog) => {
    return dispatch => {
        dispatch({
            type: SET_BLOG_POST,
            blog: blog,
        });

        dispatch(push('blog-post/1'))
    }
  }

  export const unsetBlog = () => {
      return dispatch => {
          dispatch({
              type: UNSET_BLOG_POST,
              blog: {},
          })
      }
  }

  export const getBlog = (blogId) => {
      return dispatch => {
          axios.get(`https://rp5sec0lw9.execute-api.us-east-1.amazonaws.com/latest/blog/${blogId}`).then(response => {
              dispatch({
                  type: GET_BLOG,
                  blog: response.data,
              })
          })
          .catch(error => {
              console.log(error);
          })
      }
  }