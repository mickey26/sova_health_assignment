import axios from "axios";
const SEARCH_URL = "http://www.omdbapi.com/?s=";
const DETAIL_URL = "http://www.omdbapi.com/?i=";
const API_KEY = "&apikey=cd54167d";

export const LandingAction = (data) => {
  return (dispatch) => {
    dispatch({ type: "temp", payload: data });
  };
};

export const SearchAction = (data) => {
  let temp = data;
  return (dispatch) => {
    dispatch({ type: "IS_LOADING" });
    axios.get(SEARCH_URL + data + API_KEY).then((res) => {
      if (res.status === 200) {
        let result = res.data.Search;
        dispatch({ type: "search", payload: result, temp });
      }
    });
  };
};

export const LandingResult = (data) => {
  let temp = data;
  return (dispatch) => {
    axios.get(SEARCH_URL + data + API_KEY).then((res) => {
      if (res.status === 200) {
        let result = res.data.Search;
        dispatch({ type: "result", payload: result, temp });
      }
    });
  };
};

export const DetailAction = (data) => {
  return (dispatch) => {
    axios.get(DETAIL_URL + data + API_KEY).then((res) => {
      if (res.status === 200) {
        let result = res.data;
        dispatch({ type: "detail", payload: result });
      }
    });
  };
};
