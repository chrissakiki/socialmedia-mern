import Post from "../models/post";
import User from "../models/user";
import cloudinary from "cloudinary";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const createPost = async (req, res) => {
  const { content, image } = req.body;
  if (!content.length) {
    throw new BadRequestError("Content is required");
  }
  if (!image.url) {
    throw new BadRequestError("Photo should be included");
  }

  const post = new Post({
    content,
    image,
    postedBy: req.user._id,
  });
  await post.save();

  const postWithUser = await Post.findById(post._id).populate(
    "postedBy",
    "_id name image username"
  );
  res.status(StatusCodes.OK).json(postWithUser);
};

export const uploadImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.files.image.path);
  res.status(StatusCodes.OK).json({
    url: result.secure_url,
    public_id: result.public_id,
  });
};

export const postByUser = async (req, res) => {
  const posts = await Post.find()
    .populate("postedBy", "_id name image username")
    .sort({ createdAt: -1 })
    .limit(10);
  res.status(StatusCodes.OK).json(posts);
};

export const userPost = async (req, res) => {
  const post = await Post.findById(req.params._id)
    .populate("postedBy", "_id name image username")
    .populate("comments.postedBy", "_id name image");
  res.status(StatusCodes.OK).json(post);
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params._id);
  // remove img from cloudinary
  if (post.image && post.image.public_id) {
    const image = await cloudinary.uploader.destroy(post.image.public_id);
  }
  res.status(StatusCodes.OK).json({ ok: true });
};

export const newsFeed = async (req, res) => {
  const user = await User.findById(req.user._id);

  let following = user.following;
  following.push(req.user._id);
  // pagination
  const page = req.params.page || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const posts = await Post.find({ postedBy: { $in: following } })
    .skip(skip)
    .populate("postedBy", "_id name image username")
    .populate("comments.postedBy", "_id name image")
    .sort({ createdAt: -1 })
    .limit(limit);

  res.status(StatusCodes.OK).json({
    posts,
  });
};

export const likePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.body._id,
    {
      $addToSet: { likes: req.user._id },
    },
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json(post);
};

export const dislikePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.body._id,
    {
      $pull: { likes: req.user._id },
    },
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json(post);
};

export const addComment = async (req, res) => {
  const { postId, comment } = req.body;
  const post = await Post.findByIdAndUpdate(
    postId,
    {
      $push: { comments: { text: comment, postedBy: req.user._id } },
    },
    { new: true }
  )
    .populate("postedBy", "_id name image username")
    .populate("comments.postedBy", "_id name image");

  res.status(StatusCodes.OK).json(post);
};

export const removeComment = async (req, res) => {
  const { postId, comment } = req.body;
  const post = await Post.findByIdAndUpdate(
    postId,
    {
      $pull: { comments: { _id: comment } },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json(post);
};

export const totalPosts = async (req, res) => {
  const total = await Post.find().estimatedDocumentCount();
  res.status(StatusCodes.OK).json({ total });
};

export const posts = async (req, res) => {
  const posts = await Post.find()
    .populate("postedBy", "_id name image username")
    .populate("comments.postedBy", "_id name image")
    .sort({ createdAt: -1 })
    .limit(12);
  res.status(StatusCodes.OK).json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params._id)
    .populate("postedBy", "_id name image username")
    .populate("comments.postedBy", "_id name image");
  res.status(StatusCodes.OK).json(post);
};
