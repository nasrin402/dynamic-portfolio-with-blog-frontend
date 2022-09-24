import React, { createContext, useState } from "react";
import { axiosPublicInstance } from "../../config/axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const signedInUser = JSON.parse(localStorage.getItem("user"));
const signedInToken = JSON.parse(localStorage.getItem("token"));

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(signedInUser ? signedInUser : null);
  const [token, setToken] = useState(signedInToken ? signedInToken : null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const registerUser = async (data) => {
    try {
      const response = await axiosPublicInstance.post(
        "/auth/local/register",
        data
      );
      const { user, jwt } = response.data;
      setUser(user);
      setToken(jwt);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(jwt));

      toast.success("Register successfully redirecting...");
      //redirecting the user
      navigate("/blog");
    } catch (err) {
      console.log(err.message);
    }
  };

  const loginUser = async (data) =>{
     try{
      const response = await axiosPublicInstance.post('/auth/local', 
      data )

      //console.log(response.data)
      const {user, jwt} = response.data;
      setUser(user);
      setToken(jwt);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(jwt));
      toast.success("Login successfully redirecting...");
      navigate(location?.state?.from ? location?.state?.from : "/blog");
     } catch (err) {
      console.log(err.message);
     }
  }
const logout = () =>{
  //remove data from local storage
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  //romove data from state
  setUser(null);
  setToken(null);
  toast.success("Logout successful redirecting...");
    navigate("/");
}
  const value = {
    registerUser,
    user,
    token,
    loginUser,
    logout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
