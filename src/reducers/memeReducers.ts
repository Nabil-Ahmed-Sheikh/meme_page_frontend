import { 
    FETCH_MEMES_REQUEST, 
    FETCH_MEMES_SUCCESS, 
    FETCH_MEMES_FAIL,
    DELETE_MEMES_REQUEST,
    DELETE_MEMES_SUCCESS,
    DELETE_MEMES_FAIL,
    DELETE_MEMES_RESET,
    ADD_URL_REQUEST,
    ADD_URL_SUCCESS,
    ADD_URL_FAIL,
    UPLOAD_MEME_REQUEST,
    UPLOAD_MEME_SUCCESS,
    UPLOAD_MEME_FAIL
   } 
from '../constants/memeConstants';

interface IAction{
    type:String,
    payload: []
}

export const fetchMemeReducer = (state = { memes: []}, action:IAction) => {
    switch (action.type) {
      case FETCH_MEMES_REQUEST:
        return { loading: true };
      case FETCH_MEMES_SUCCESS:
        return {
          loading: false,
          memes: action.payload
        };
      case FETCH_MEMES_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};

export const deleteMemeReducer = (state = { loading: false}, action:IAction) => {
  switch (action.type) {
    case DELETE_MEMES_REQUEST:
      return { loading: true };
    case DELETE_MEMES_SUCCESS:
      return {
        loading: false,
        success: true
      };
    case DELETE_MEMES_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_MEMES_RESET:
      return {};
    default:
      return state;
  }
};

export const addURLReducer = (state = { loading: false, error: {} }, action:IAction) => {
  switch (action.type) {
    case ADD_URL_REQUEST:
      return { loading: true };
    case ADD_URL_SUCCESS:
      return {
        loading: false,
        success: true
      };
    case ADD_URL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const uploadMemeReducer = (state = { loading: false, error: {} }, action:IAction) => {
  switch (action.type) {
    case UPLOAD_MEME_REQUEST:
      return { loading: true };
    case UPLOAD_MEME_SUCCESS:
      return {
        loading: false,
        success: true
      };
    case UPLOAD_MEME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};