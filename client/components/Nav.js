import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../context";
import { useRouter } from "next/router";
import { Avatar } from "antd";
import {
  PlusCircleOutlined,
  SkypeOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Nav = () => {
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const { state, setState } = useUser();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid px-md-5">
        <Link href="/">
          <a className="navbar-brand mb-0 h1 d-flex">
            <SkypeOutlined
              style={{
                color: "#fff",
                fontSize: "1.4rem",
                alignSelf: "center",
              }}
            />
            ShareGram
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-1 gap-md-2">
            {!state && (
              <>
                <Link href="/login">
                  <li className="nav-item d-flex gap-2 gap-md-1 mt-2 mt-lg-0">
                    <UserOutlined
                      style={{
                        color: "#0D6EFD",
                        padding: " 2px",
                        background: "#fff",
                        borderRadius: "50%",
                        fontSize: "1rem",
                        alignSelf: "center",
                        cursor: "pointer",
                      }}
                    />
                    <a
                      className={`nav-link nav-me ${
                        current === "/login" && "active"
                      }`}
                    >
                      Login
                    </a>
                  </li>
                </Link>

                <Link href="/register">
                  <li className="nav-item d-flex gap-2 gap-md-1">
                    <PlusCircleOutlined
                      style={{
                        color: "#0D6EFD",
                        padding: " 2px",
                        background: "#fff",
                        borderRadius: "50%",
                        fontSize: "1rem",
                        alignSelf: "center",
                        cursor: "pointer",
                      }}
                    />
                    <a
                      className={`nav-link nav-me ${
                        current === "/register" && "active"
                      }`}
                    >
                      Register
                    </a>
                  </li>
                </Link>
              </>
            )}
            {state != null && (
              <>
                <li className="nav-item dropdown mt-2 mt-lg-0">
                  <a
                    className="nav-link dropdown-toggle nav-me"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hello {state.user.name}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link href="/user/dashboard">
                      <li>
                        <a className="dropdown-item">Dashboard</a>
                      </li>
                    </Link>

                    <Link href="/user/profile/update">
                      <li>
                        <a className="dropdown-item">Profile</a>
                      </li>
                    </Link>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
