import React, { useState, useEffect } from "react";
import CreatePostForm from "../../components/forms/CreatePostForm";
import UserRoutes from "../../components/routes/UserRoutes";
import { useUser } from "../../context";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import People from "../../components/cards/People";
import Link from "next/link";
import { Modal, Pagination } from "antd";
import CommentForm from "../../components/forms/CommentForm";
import Search from "../../components/Search";
import Post from "../../components/cards/Post";
//socket io
import io from "socket.io-client";
const socket = io(
  process.env.NEXT_PUBLIC_SOCKETIO,
  { path: "/socket.io" },
  {
    reconnection: true,
  }
);

const dashboard = () => {
  const {
    state,
    setState,
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

  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [people, setPeople] = useState([]);

  const [uploading, setUploading] = useState(false);
  //posts
  const [posts, setPosts] = useState([]);

  // pagination
  const [totalPosts, setTotalPosts] = useState(0);
  const [page, setPage] = useState(1);

  const router = useRouter();

  useEffect(() => {
    if (state && state.token) {
      newsFeed();
      findPeople();
    }
  }, [state && state.token, page]);

  useEffect(async () => {
    try {
      const { data } = await axios.get("/total-posts");
      setTotalPosts(data.total);
    } catch (err) {}
  }, []);

  const newsFeed = async () => {
    try {
      const { data } = await axios.get(`/news-feed/${page}`);
      setPosts(data.posts);
    } catch (err) {}
  };

  const findPeople = async () => {
    try {
      const { data } = await axios.get("/find-people");
      setPeople(data);
    } catch (err) {
      toast.error("Couldn't search atm! please try again");
    }
  };
  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/create-post", {
        content,
        image,
      });

      setPage(1);
      newsFeed();
      toast.success("Post submited.");
      setContent("");
      setImage({});
      //socket
      socket.emit("new-post", data);
    } catch (err) {
      toast.error("Couldn't create post! please try again");
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

  const Deleting = (post) => {
    setDeleting(true);
    setDltPost(post);
  };

  const handleDelete = async (post) => {
    try {
      const { data } = await axios.delete(`/delete-post/${post._id}`);
      toast.success("Post Deleted");
      newsFeed();
    } catch (err) {
      toast.error("Couldn't delete post! please try again");
    }
    setDeleting(false);
  };

  const handleFollow = async (user) => {
    try {
      const { data } = await axios.put("/user-follow", { _id: user._id });
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      // update context
      setState({ ...state, user: data });
      setPeople(people.filter((p) => p._id !== user._id));
      newsFeed();
      toast.success(`Following ${user.name}`);
    } catch (err) {
      toast.error("Couldn't follow this user! please try again");
    }
  };

  const handleLike = async (_id) => {
    try {
      const { data } = await axios.put("/like-post", { _id });
      newsFeed();
    } catch (err) {
      toast.error("Couldn't like this post! please try again");
    }
  };

  const handleDislike = async (_id) => {
    try {
      const { data } = await axios.put("/dislike-post", { _id });
      newsFeed();
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
      newsFeed();
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
      newsFeed();
    } catch (err) {
      toast.error("Couldn't remove comment! please try again");
    }
  };

  return (
    <UserRoutes>
      <div className="container-fluid py-3">
        <div className="row py-3">
          <div className="col-md-8">
            <CreatePostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />
            <br />

            {posts.length >= 1 &&
              posts.map((post) => {
                return (
                  <Post
                    key={post._id}
                    post={post}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                    handleComment={handleComment}
                    removeComment={removeComment}
                    Deleting={Deleting}
                  />
                );
              })}

            <Pagination
              current={page}
              total={totalPosts}
              onChange={(value) => setPage(value)}
            />
          </div>

          <div className="col-md-4 my-2">
            <Search />
            <br />
            {state && state.user && state.user.following && (
              <Link href={`/user/following`}>
                <a className="h6 my-5">
                  You are Following{" "}
                  {state &&
                    state.user &&
                    state.user.following &&
                    state.user.following.length}{" "}
                  {state &&
                  state.user &&
                  state.user.following &&
                  state.user.following.length == 1
                    ? "User"
                    : "Users"}
                </a>
              </Link>
            )}
            <br />
            <People people={people} handleFollow={handleFollow} />
          </div>
        </div>
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
          Are you sure you want to delete the post?
        </Modal>
      </div>
    </UserRoutes>
  );
};

export default dashboard;
