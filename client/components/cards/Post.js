import React from "react";
import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from "../images/PostImage";

import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useUser } from "../../context";
import { useRouter } from "next/router";
import { imageSource } from "../../Functions";
import Link from "next/link";

const Post = ({
  post,
  handleDelete,
  handleLike,
  handleDislike,
  handleComment,
  commentsCount = 2,
  removeComment,
  Deleting,
}) => {
  const router = useRouter();
  const { state } = useUser();

  return (
    <>
      {post && post.postedBy && (
        <div key={post._id} className="card mb-5">
          <div className="card-header">
            {/* <Avatar size={40}>{post.postedBy.name[0]}</Avatar> */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Avatar size={40} src={imageSource(post.postedBy)} />
                <span
                  className="text-primary"
                  style={{
                    marginLeft: "1rem",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  {" "}
                  <Link href={`/user/${post.postedBy.username}`}>
                    {post.postedBy.name}
                  </Link>{" "}
                </span>
              </div>
              <span className="" style={{ marginLeft: "1rem" }}>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
          </div>
          <div className="card-body">{renderHTML(post.content)}</div>
          <div className="card-footer">
            {post.image && <PostImage url={post.image.url} />}
            <div className="d-flex pt-2">
              {state &&
              state.user &&
              post.likes &&
              post.likes.includes(state.user._id) ? (
                <HeartFilled
                  onClick={() => handleDislike(post._id)}
                  className="text-danger pt-2 h5"
                />
              ) : (
                <HeartOutlined
                  onClick={() => handleLike(post._id)}
                  className="text-danger pt-2 h5"
                />
              )}
              <div
                className="pt-2"
                style={{ marginLeft: "0.3rem", marginRight: "1rem" }}
              >
                {post.likes && post.likes.length}{" "}
                {post.likes.length == 1 ? "like" : "likes"}
              </div>
              <CommentOutlined
                onClick={() => handleComment(post)}
                className="text-danger pt-2 h5"
              />
              <div className="pt-2" style={{ marginLeft: "0.3rem" }}>
                <Link href={`/post/${post._id}`}>
                  <a>
                    {post.comments && post.comments.length}{" "}
                    {post.comments.length == 1 ? "comment" : "comments"}
                  </a>
                </Link>
              </div>
              {state && state.user && state.user._id === post.postedBy._id && (
                <div className="ms-auto">
                  <EditOutlined
                    onClick={() => router.push(`/user/post/${post._id}`)}
                    className="text-danger pt-2 h5 px-4"
                  />
                  <DeleteOutlined
                    onClick={() => Deleting(post)}
                    className="text-danger pt-2 h5"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Showing 2 Comments for each post */}
          {post.comments && post.comments.length > 0 && (
            <ol className="list-group">
              {post.comments.slice(0, commentsCount).map((comment) => (
                <li
                  key={comment._id}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div>
                      <Avatar
                        size={20}
                        className="mb-1 mr-3"
                        src={imageSource(comment.postedBy[0])}
                      />
                      <span className="mx-2 text-primary">
                        {comment.postedBy[0].name}
                      </span>
                    </div>
                    <div className="mt-2">{comment.text}</div>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="badge bg-primary rounded-pill">
                      {moment(comment.created).fromNow()}
                    </span>
                    {state &&
                      state.user &&
                      state.user._id === comment.postedBy[0]._id && (
                        <div>
                          <DeleteOutlined
                            onClick={() => removeComment(post._id, comment._id)}
                            className="mt-2  text-danger"
                          />
                        </div>
                      )}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </>
  );
};

export default Post;
