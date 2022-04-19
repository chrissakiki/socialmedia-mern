import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Avatar } from "antd";
import AuthForm from "../../../components/forms/AuthForm";
import { useUser } from "../../../context";
import { useRouter } from "next/router";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";
import UserRoutes from "../../../components/routes/UserRoutes";
const ProfileUpdate = () => {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  const { state, setState } = useUser();

  useEffect(() => {
    if (state && state.user) {
      setUsername(state.user.username);
      setAbout(state.user.about);
      setName(state.user.name);
      setEmail(state.user.email);
      setImage(state.user.image);
    }
  }, [state && state.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.put("/profile-update", {
        username,
        name,
        email,
        password,
        about,
        image,
      });

      // upating user in local storage
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      // update context
      setState({ ...state, user: data });
      setOk(true);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading(false);
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const { data } = await axios.post("/upload-image", formData);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (err) {
      toast.error(err.response.data.message);
      setUploading(false);
    }
  };
  return (
    <UserRoutes>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-md-6 offset-md-3">
            {/* avatar image */}

            <label className="d-flex justify-content-center py-2">
              {image && image.url ? (
                <Avatar size={100} src={image.url} className="mt-1 h1" />
              ) : uploading ? (
                <LoadingOutlined className="my-3" />
              ) : (
                <div className="d-flex  flex-column">
                  <CameraOutlined size={60} className="my-3 h1 text-primary" />
                  <p> Set a profile picture </p>
                </div>
              )}

              <input
                onChange={handleImage}
                type="file"
                accept="images/*"
                hidden
              />
            </label>

            <AuthForm
              profileUpdate={true}
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              loading={loading}
              username={username}
              setUsername={setUsername}
              about={about}
              setAbout={setAbout}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Modal
              title={"Updated Successfully"}
              visible={ok}
              onCancel={() => setOk(false)}
              footer={null}
            >
              <p>Updated Successfully</p>
            </Modal>
          </div>
        </div>
      </div>
    </UserRoutes>
  );
};

export default ProfileUpdate;
