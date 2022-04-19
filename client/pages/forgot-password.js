import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import { useUser } from "../context";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
const forgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const { state } = useUser();

  useEffect(() => {
    if (state && state.token) {
      router.push("/");
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please provide your email!");
    }
    try {
      setLoading(true);
      const { data } = await axios.post("/forgot-password", {
        email,
      });

      setEmail("");
      setOk(true);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      {!state ? (
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col text-center">
              <h1 className="display-5">Forgot Password</h1>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 offset-md-3">
              <ForgotPasswordForm
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                loading={loading}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Modal
                title={"Successfully"}
                visible={ok}
                onCancel={() => setOk(false)}
                footer={null}
              >
                <p style={{ fontSize: "1rem" }}>Please check your email!</p>
              </Modal>
            </div>
          </div>
        </div>
      ) : (
        <SyncOutlined
          spin
          className="d-flex justify-content-center align-items-center display-1 text-primary p-5"
        />
      )}
    </>
  );
};

export default forgotPassword;
