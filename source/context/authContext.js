import axios from "../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";

const defaultPayload = { token: null, errorMessage: null }

const reducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return action.payload
      case 'signin': 
      return action.payload
    case 'clearError': 
      return {...state, errorMessage: null}
    case 'signout':
      return defaultPayload
    default:
      return state;
  }
}

const getDefaults = () => {
  const loadData = async () => {
    const token = await AsyncStorage.getItem("token");
    return { token, errorMessage: null }
  }

  return loadData();
}

const signUp = (dispatch) => {
  return async (email, password) => {
    try {
      const response = await axios.post("/signup", { email, password });
      const { token } = response.data
      await AsyncStorage.setItem("token", token);
      dispatch({
        type: 'signup',
        payload: { token, errorMessage: null }
      })
    }
    catch (err) {
      dispatch({
        type: 'signup',
        payload: { token: null, errorMessage: "Signup failed" }
      })
    }
  }
}

const signIn = (dispatch) => {
  return async (email, password) => {
    try {
      const response = await axios.post("/signin", { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem("token", token);
      dispatch({
        type: 'signin',
        payload: { token, errorMessage: null }
      })
    }
    catch (err) {
      dispatch({
        type: 'signup',
        payload: { token: null, errorMessage: "SignIn failed" }
      })
    }
  }
};

const signOut = (dispatch) => {
  return async () => {
    console.log("Token removed");
    await AsyncStorage.removeItem("token");
    dispatch({ type: 'signout' })

  }
}

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: 'clearError' })
  }
}

const isSignIn = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    console.log("Token saved", token);
    dispatch({
      type: 'signin',
      payload: { token: token, errorMessage: null }
    })
  }
}

export const { Provider, Context } = createDataContext(
  reducer,
  { signUp, signIn, signOut, isSignIn, clearErrorMessage },
  getDefaults()
);