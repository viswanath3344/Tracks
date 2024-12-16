import axios from "../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";

const defaultPayload = { token: null, errorMessage: null }

const reducer = (state, action) => {
  switch (action.type) {
    case 'signup' || 'signin':
      return action.payload

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
      console.log("email",email);
      console.log("password", password);
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
  return async (username, password) => {
    try {
      const response = await axios.post("/signin", { username, password });
      const { token } = response.data
      await AsyncStorage.setItem("token", token);
      dispatch({
        type: 'signin',
        payload: { token, errorMessage: null }
      })
    }
    catch (err) {
      console.log(err)
      dispatch({
        type: 'signin',
        payload: { token: null, errorMessage: "Signup failed" }
      })
    }
  }
}

const signOut = (dispatch) => {
  return async () => {
    console.log("Token removed");
    await AsyncStorage.removeItem("token");
    dispatch({ type: 'signout' })

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
  { signUp, signIn, signOut, isSignIn },
  getDefaults()
);