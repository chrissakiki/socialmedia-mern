import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../context";

const verifyemail = () => {
  const router = useRouter();
  const { state } = useUser();
  const token = router.query.token;
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);

  const verifyToken = async () => {
    setLoading(true);
    if (token) {
      try {
        const { data } = await axios.get(`/verifyemail?token=${token}`);
        setVerify(true);
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

  if (state && state.token) {
    router.push("/");
  }

  return (
    <>
      {loading || !verify ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center align-items-center display-1 text-primary p-5"
        />
      ) : (
        <div className="pt-5 d-flex justify-content-center align-items-center flex-column ">
          {verify && (
            <>
              <h3 style={{ fontSize: "1.8rem", fontWeight: "normal" }}>
                Your account has been verified!
              </h3>

              <p style={{ fontSize: "1.2rem" }}>
                <Link href="/login">
                  <a> Click here to login</a>
                </Link>
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default verifyemail;
