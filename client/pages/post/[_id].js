import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Post from "../../components/cards/Post";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";
import CommentForm from "../../components/forms/CommentForm";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { useUser } from "../../context";

const PostComments = () => {
  const [post, setPost] = useState({});

  const {
    comment,
    setComment,
    visible,
    setVisible,
    currentPost,
    setCurrentPost,
    deleting,
    setDeleting,
    dltPost,
    setDltPost,
  } = useUser();

  const router = useRouter();
  const _id = router.query._id;

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
    } catch (err) {}
  };

  const handleLike = async (_id) => {
    try {
      const { data } = await axios.put("/like-post", { _id });
      fetchPost();
    } catch (err) {
      toast.error("Couldn't like this post! please try again");
    }
  };

  const handleDislike = async (_id) => {
    try {
      const { data } = await axios.put("/dislike-post", { _id });
      fetchPost();
    } catch (err) {
      toast.error("Couldn't dislike this post! please try again");
    }
  };

  const handleComment = (post) => {
    setCurrentPost(post);
    setVisible(true);
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/add-comment", {
        postId: currentPost._id,
        comment,
      });

      setComment("");
      setVisible(false);
      fetchPost();
    } catch (err) {
      toast.error("Couldn't add a comment! please try again");
    }
  };

  const removeComment = async (postId, comment) => {
    try {
      const { data } = await axios.put("/remove-comment", {
        postId,
        comment,
      });
      fetchPost();
    } catch (err) {
      toast.error("Couldn't remove this comment! please try again");
    }
  };

  const Deleting = (post) => {
    setDeleting(true);
    setDltPost(post);
  };

  const handleDelete = async (post) => {
    try {
      const { data } = await axios.delete(`/delete-post/${post._id}`);
      toast.success("Post Deleted");

      router.push("/user/dashboard");
    } catch (err) {
      toast.error("Couldn't delete this post! please try again");
    }
    setDeleting(false);
  };

  return (
    <div className="container-fluid">
      <div className="col-md-8 offset-md-2 mt-5">
        <Post
          commentsCount={100}
          post={post}
          handleLike={handleLike}
          handleDislike={handleDislike}
          handleComment={handleComment}
          removeComment={removeComment}
          Deleting={Deleting}
        />
      </div>
      <Link href="/user/dashboard">
        <a className="d-flex justify-content-center p-5 h3">
          <RollbackOutlined />
        </a>
      </Link>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title="Comment"
        footer={null}
      >
        <CommentForm
          comment={comment}
          setComment={setComment}
          addComment={addComment}
        />
      </Modal>
      <Modal
        visible={deleting}
        onCancel={() => setDeleting(false)}
        title="Delete"
        onOk={() => handleDelete(dltPost)}
      >
        Are you sure you want to delete this post?
      </Modal>
    </div>
  );
};

export default PostComments;
