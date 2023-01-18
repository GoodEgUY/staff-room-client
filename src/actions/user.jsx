import axios from "axios";
import { setUser } from "../reducers/adminReducer";

export const createLogin = async (email, password,adminName, phone ) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      { email, password, adminName, phone }
    );
    alert(response.data.message)
  } catch (e) {
    alert("пизда тебе исправляй ошибку");
  }
};
export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (e) {
      alert(e);
    }
  };
};
