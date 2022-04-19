import React from "react";
import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  page,
  username,
  setUsername,
  about,
  setAbout,
  profileUpdate,
}) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {profileUpdate && (
        <div className="form-group p-2">
          <label className="text-muted">Username</label>
          <input
            value={username}
            onChange={(e) =>
              setUsername(e.target.value.replace(/[^a-zA-Z-0-9-_]/gi, ""))
            }
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
      )}
      {page !== "Login" && (
        <div className="form-group p-2">
          <label className="text-muted">Your Name</label>
          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value.replace(/[^a-zA-Z\s]/gi, ""))
            }
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
      )}
      <div className="form-group p-2">
        <label className="text-muted">Email address</label>
        <input
          value={email}
          disabled={profileUpdate}
          onChange={(e) =>
            setEmail(e.target.value.replace(/[^a-z-0-9-@.]/gi, ""))
          }
          type="email"
          className="form-control"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group p-2">
        <label className="text-muted">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="new-password"
        />
      </div>
      {profileUpdate && (
        <div className="form-group p-2">
          <label className="text-muted">About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="form-control"
            style={{ resize: "none" }}
            placeholder="write more about yourself"
          ></textarea>
        </div>
      )}

      <div className="form-group p-2">
        <button
          disabled={
            profileUpdate
              ? loading
              : page === "Login"
              ? !email || !password || loading
              : !name || !email || !password || loading
          }
          className="btn btn-primary col-12 btn-lg"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
