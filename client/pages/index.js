import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "../components/cards/Post";
import Head from "next/head";
import { toast } from "react-toastify";
import { Modal } from "antd";
import CommentForm from "../components/forms/CommentForm";
import { useUser } from "../context";
import { useRouter } from "next/router";
//socket io
import io from "socket.io-client";
import { SyncOutlined } from "@ant-design/icons";
const socket = io(
  process.env.NEXT_PUBLIC_SOCKETIO,
  { path: "/socket.io" },
  {
    reconnection: true,
  }
);

const Home = () => {
  const router = useRouter();
  const [postsFeed, setPostsFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    state,
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

  useEffect(() => {
    const handlePosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/posts");
        setPostsFeed(data);
        setLoading(false);
      } catch (err) {
        toast.error("Couldn't get posts feed.");
        setLoading(false);
      }
    };
    handlePosts();
  }, []);

  useEffect(() => {
    socket.on("new-post", (newPost) => {
      setPostsFeed([newPost, ...postsFeed]);
    });
  }, []);

  const handleLike = async (_id) => {
    try {
      if (state === null) {
        router.push("/login");
      } else {
        await axios.put("/like-post", { _id });
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleDislike = async (_id) => {
    try {
      if (state === null) {
        router.push("/login");
      } else {
        await axios.put("/dislike-post", { _id });
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleComment = (post) => {
    if (state === null) {
      router.push("/login");
    } else {
      setCurrentPost(post);
      setVisible(true);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();

    try {
      await axios.put("/add-comment", {
        postId: currentPost._id,
        comment,
      });

      setComment("");
      setVisible(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const removeComment = async (postId, comment) => {
    try {
      await axios.put("/remove-comment", {
        postId,
        comment,
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const Deleting = (post) => {
    setDeleting(true);
    setDltPost(post);
  };

  const handleDelete = async (post) => {
    try {
      await axios.delete(`/delete-post/${post._id}`);
      toast.success("Post Deleted");
    } catch (err) {
      toast.error(err.response.data.message);
    }
    setDeleting(false);
  };

  useEffect(async () => {
    const { data } = await axios.get("/posts");
    setPostsFeed(data);
  }, [handleLike, handleDislike, addComment, removeComment]);

  if (loading) {
    return (
      <SyncOutlined
        spin
        className="d-flex justify-content-center align-items-center display-1 text-primary p-5"
      />
    );
  }

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Share Gram, Social Media Network</title>
        <meta
          name="description"
          content="Share Gram, Social Media Network for free"
        />
        <meta
          property="og:description"
          content="Share Gram, Social Media Network for free"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SHAREGRAM" />
        <meta property="og:url" content="localhost:3000" />
        <meta
          property="og:image:secure_url"
          content="localhost:/3000/image.jpg"
        />
      </Head>

      <div className="container pt-5">
        <div className="row">
          {postsFeed?.map((post) => (
            <div key={post._id} className="col-lg-6 col-sm-12">
              <Post
                commentsCount={1}
                post={post}
                Deleting={Deleting}
                handleLike={handleLike}
                handleDislike={handleDislike}
                handleComment={handleComment}
                removeComment={removeComment}
              />
            </div>
          ))}
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
    </>
  );
};

// export async function getServerSideProps() {
//   const { data } = await axios.get("/posts");
//   return {
//     props: {
//       posts: data,
//     },
//   };
// }

export default Home;
