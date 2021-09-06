import axios from "axios";
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
} from "../constants/memeConstants";

export const getMemes = () =>
  async (dispatch:any) => {
    try {
      dispatch({ type: FETCH_MEMES_REQUEST });

      const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://meme-page-headless-tech-ltd.herokuapp.com/api/meme`);

      dispatch({
        type: FETCH_MEMES_SUCCESS,
        payload: data,
      });
    } catch (error:any) {
      dispatch({
        type: FETCH_MEMES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const memeDelete = (id: String) =>
async (dispatch:any) => {
  try {
    dispatch({ type: DELETE_MEMES_REQUEST });

    await axios.delete(`https://cors-anywhere.herokuapp.com/https://meme-page-headless-tech-ltd.herokuapp.com/api/meme/${id}`);

    dispatch({
      type: DELETE_MEMES_SUCCESS
    });
  } catch (error:any) {
    dispatch({
      type: DELETE_MEMES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addMemeURL = (url: String) =>
async (dispatch:any) => {
  try {
    dispatch({ type: ADD_URL_REQUEST });
    const reqBody= {
      url: url
    }
    await axios.post(`https://cors-anywhere.herokuapp.com/https://meme-page-headless-tech-ltd.herokuapp.com/api/meme/`, reqBody);

    dispatch({
      type: ADD_URL_SUCCESS
    });
  } catch (error:any) {
    dispatch({
      type: ADD_URL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

