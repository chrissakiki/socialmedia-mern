import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";
import { useUser } from "../context";
import { SyncOutlined } from "@ant-design/icons";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { state, setState } = useUser();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      // updating context user and token
      setState({
        user: data.user,
        token: data.token,
      });

      // saving user and token to local storage
      window.localStorage.setItem("auth", JSON.stringify(data));
      router.push("/user/dashboard");
    } catch (err) {
      toast.error(err.response.data.message);

      setLoading(false);
    }
  };

  useEffect(() => {
    if (state && state.token) return router.push("/user/dashboard");
  });

  return (
    <div className="container-fluid">
      {!state ? (
        <>
          <div className="row pt-5">
            <div className="col text-center">
              <h1 className="display-5">Login</h1>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 offset-md-3">
              <AuthForm
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                loading={loading}
                page="Login"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="text-center">
                Not yet registered?{" "}
                <Link href="/register">
                  <a> Register</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-center">
                <Link href="/forgot-password">
                  <a className="text-danger"> Forgot your password?</a>
                </Link>
              </p>
            </div>
          </div>
        </>
      ) : (
        <SyncOutlined
          spin
          className="d-flex justify-content-center align-items-center display-1 text-primary p-5"
        />
      )}
    </div>
  );
};

export default login;
