import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [state, setState] = useState({
    user: {},
    token: "",
  });
  const [comment, setComment] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const [deleting, setDeleting] = useState(false);
  const [dltPost, setDltPost] = useState([]);

  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem("auth")));
  }, []);

  const token = state && state.token ? state.token : "";
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        setState(null);
        window.localStorage.removeItem("auth");
        router.push("/login");
      }
      return Promise.reject(error);
    }
  );

  const values = {
    state,
    setState,
    comment,
    setComment,
    visible,
    setVisible,
    currentPost,
    setCurrentPost,
    deleting,
    setDeleting,
    dltPost,
    setDltPost,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};
