import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index";
import Post from "../models/post";

export const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("unauthorized");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    throw new UnAuthenticatedError("unauthorized");
  }
};

export const canEditDeletePost = async (req, res, next) => {
  const post = await Post.findById(req.params._id);
  if (req.user._id != post.postedBy) {
    throw new UnAuthenticatedError("unauthorized");
  } else {
    next();
  }
};
