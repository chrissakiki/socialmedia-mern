import express from "express";
import formidable from "express-formidable";

const router = express.Router();
import { authenticateUser, canEditDeletePost } from "../middleware/auth";

// controllers
import {
  createPost,
  uploadImage,
  postByUser,
  userPost,
  updatePost,
  deletePost,
  newsFeed,
  likePost,
  dislikePost,
  addComment,
  removeComment,
  totalPosts,
  posts,
  getPost,
} from "../controllers/post";

router.post("/create-post", authenticateUser, createPost);
router.post(
  "/upload-image",
  authenticateUser,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImage
);

router.get("/user-posts", authenticateUser, postByUser);
router.get("/user-post/:_id", authenticateUser, userPost);
router.get(
  "/user-post-full/:_id",
  authenticateUser,
  canEditDeletePost,
  userPost
);
router.put(
  "/update-post/:_id",
  authenticateUser,
  canEditDeletePost,
  updatePost
);
router.delete(
  "/delete-post/:_id",
  authenticateUser,
  canEditDeletePost,
  deletePost
);
router.get("/news-feed/:page", authenticateUser, newsFeed);
router.put("/like-post", authenticateUser, likePost);
router.put("/dislike-post", authenticateUser, dislikePost);
router.put("/add-comment", authenticateUser, addComment);
router.put("/remove-comment", authenticateUser, removeComment);
router.get("/total-posts", totalPosts);
router.get("/posts", posts);
router.post("/posts/:_id", getPost);
module.exports = router;
