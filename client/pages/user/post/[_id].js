import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import UserRoutes from "../../../components/routes/UserRoutes";
import CreatePostForm from "../../../components/forms/CreatePostForm";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

const EditPost = () => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const _id = router.query._id;

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/user-post-full/${_id}`);
      setPost(data);
      setContent(data.content);
      setImage(data.image);
      setLoading(false);
    } catch (err) {
      router.push("/");
    }
  };

  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/update-post/${_id}`, {
        content,
        image,
      });

      toast.success("Post updated");
      router.push("/user/dashboard");
    } catch (err) {
      toast.error("Couldn't update post! please try again");
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
      toast.error("Couldn't upload image! please try again");
      setUploading(false);
    }
  };
  return (
    <UserRoutes>
      {loading ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center align-items-center display-1 text-primary p-5"
        />
      ) : (
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col text-center">
              <h1 className="display-5">Edit Post</h1>
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-8 offset-md-2">
              <CreatePostForm
                content={content}
                setContent={setContent}
                postSubmit={postSubmit}
                handleImage={handleImage}
                uploading={uploading}
                image={image}
              />
            </div>
          </div>
        </div>
      )}
    </UserRoutes>
  );
};

export default EditPost;
