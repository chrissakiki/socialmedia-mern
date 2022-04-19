import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useUser } from "../context";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
const register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const { state } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });

      setOk(data.ok);
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading(false);
    }
  };

  if (state && state.token) router.push("/user/dashboard");
  return (
    <div className="container-fluid">
      {!state ? (
        <>
          <div className="row pt-5">
            <div className="col text-center">
              <h1 className="display-5">Registration</h1>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 offset-md-3">
              <AuthForm
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                loading={loading}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Modal
                title={"Registered Successfully"}
                visible={ok}
                onCancel={() => setOk(false)}
                footer={null}
              >
                <p style={{ fontSize: "1rem" }}>
                  You have successfully registered, a verification has been sent
                  to your email.{" "}
                </p>
                <Link href="/login">
                  <a className="btn btn-primary btn-sm"> Continue</a>
                </Link>
              </Modal>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-center">
                Already registered?{" "}
                <Link href="/login">
                  <a> Login</a>
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

export default register;
