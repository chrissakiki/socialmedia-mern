import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import { useUser } from "../context";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";

const resetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);

  const { state } = useUser();

  const token = router.query.token;

  const verifyToken = async () => {
    setLoading(true);
    if (token) {
      try {
        const { data } = await axios.get(`/resetpasswordtoken?token=${token}`);
        setVerify(true);
        setEmail(data.user.email);
        setLoading(false);
      } catch (err) {
        setVerify(false);
        setLoading(false);
        router.push("/");
      }
    } else {
      setVerify(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Password do not match.");
    }

    try {
      setLoading(true);
      await axios.post("/resetpassword", {
        email,
        password,
        confirmPassword,
      });

      setOk(true);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading(false);
    }

    // // const queryParams = new URLSearchParams(window.location.search);
    // // const term = queryParams.get("token");
    // console.log(term);
  };

  if (state && state.token) router.push("/");

  if (!verify) {
    return (
      <SyncOutlined
        spin
        className="d-flex justify-content-center align-items-center display-1 text-primary p-5"
      />
    );
  }

  return (
    <div className="container-fluid">
      {!loading || verify ? (
        <>
          <div className="row pt-5">
            <div className="col text-center">
              <h1 className="display-5">Reset Password</h1>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                <div className="form-group p-2">
                  <label className="text-muted">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group p-2">
                  <label className="text-muted">Confirm Password</label>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group p-2">
                  <button
                    disabled={!password || !confirmPassword}
                    className="btn btn-primary col-12 btn-lg"
                  >
                    {loading ? (
                      <SyncOutlined spin className="py-1" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
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
                <p style={{ fontSize: "1rem" }}>
                  Your password has been changed.
                </p>
                <Link href="/login">
                  <a className="btn btn-primary btn-sm"> Continue</a>
                </Link>
              </Modal>
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

export default resetPassword;
