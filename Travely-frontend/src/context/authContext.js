import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const storedData = localStorage.getItem("user");

let user = null;
try {
  if (storedData) {
    user = JSON.parse(storedData);
  }
} catch (err) {
  console.error("Invalid JSON:", err);
}


const INITIAL_STATE = {
  user: user,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const logout = () => {
    localStorage.removeItem("user"); // remove the user from localStorage
    axios.get("/api/logout").then(() => {
      // make a request to your backend to clear cookies and session
      dispatch({ type: "LOGOUT" }); // update the state to clear the user
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
        logout, // add the logout function to the context
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
