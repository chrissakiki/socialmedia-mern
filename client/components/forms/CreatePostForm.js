import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css";
import { Avatar } from "antd";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const CreatePostForm = ({
  content,
  setContent,
  postSubmit,
  handleImage,
  uploading,
  image,
}) => {
  return (
    <div className="card">
      <form className="form-group" onSubmit={postSubmit}>
        <div className="card-body pb-3" style={{ height: "140px" }}>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(e) => setContent(e)}
            className="form-control"
            placeholder="Add Caption here"
          ></ReactQuill>
        </div>

        <div className="card-footer d-flex justify-content-between text-muted">
          <button className="btn btn-primary btn-md mt-1">Post</button>

          <label>
            {image && image.url ? (
              <Avatar size={30} src={image.url} className="mt-1" />
            ) : uploading ? (
              <LoadingOutlined className="my-3" />
            ) : (
              <CameraOutlined className="h4 text-primary mt-1" />
            )}

            <input
              onChange={handleImage}
              type="file"
              accept="images/*"
              hidden
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
