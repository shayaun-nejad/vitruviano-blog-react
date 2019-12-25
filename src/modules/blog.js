import { push } from 'connected-react-router';

export const SET_BLOG_POST = 'SET_BLOG_POST';
export const UNSET_BLOG_POST = 'UNSET_BLOG_POST';


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

        dispatch(push('blog-post'))


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