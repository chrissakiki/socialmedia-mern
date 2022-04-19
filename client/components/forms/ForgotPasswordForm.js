import React from "react";
import { SyncOutlined } from "@ant-design/icons";

const ForgotPasswordForm = ({ handleSubmit, email, setEmail, loading }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group p-2">
        <label className="text-muted">Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group p-2">
        <button disabled={!email} className="btn btn-primary col-12 btn-lg">
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
