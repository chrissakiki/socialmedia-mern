import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { useUser } from "../../context";

const UserRoutes = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  const { state } = useUser();

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get("/current-user");
      if (data.ok) setOk(true);
    } catch (err) {
      router.push("/login");
    }
  };

  process.browser &&
    state === null &&
    setTimeout(() => {
      getCurrentUser();
    }, 1000);

  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, [state && state.token]);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center align-items-center display-1 text-primary p-5"
    />
  ) : (
    <>{children}</>
  );
};

export default UserRoutes;
