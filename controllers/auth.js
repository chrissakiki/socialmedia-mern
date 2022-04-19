import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  // validation
  if (!name) {
    throw new BadRequestError("Please provide a name");
  }

  if (!password || password.length < 6) {
    throw new BadRequestError(
      "Password is required and should be 6 characters long at least"
    );
  }

  const exist = await User.findOne({ email });
  if (exist) {
    throw new BadRequestError("Email is already taken");
  }
  //hash password
  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    username: nanoid(6),
  });

  user.verificationEmail();

  res.status(StatusCodes.CREATED).json({
    ok: true,
  });
};

export const verifyEmail = async (req, res) => {
  const { token } = req.query;

  if (!token) return;

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { verified: true },
      { new: true }
    );

    if (!user) {
      throw new NotFoundError("User is not found");
    }

    res.status(StatusCodes.OK).send("Email has been verified");
  } catch (err) {
    throw new NotFoundError("Invalid/Expired Token!");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const match = await comparePassword(password, user.password);
  if (!match) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  if (!user.verified) {
    throw new UnAuthenticatedError("Please verifiy your Email");
  }

  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  user.password = undefined;

  res.status(StatusCodes.OK).json({
    token,
    user,
  });
};

export const currentUser = async (req, res) => {
  const user = await User.findById(req.user._id);

  res.status(StatusCodes.OK).json({
    ok: true,
  });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new BadRequestError("Please provide a valid Email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new NotFoundError("Invalid Email");
  }

  if (!user.verified) {
    throw new UnAuthenticatedError("Email is not verified");
  }

  user.forgotPassword();

  res.status(StatusCodes.OK).json({ message: "Check your email!" });
};

export const resetPasswordToken = async (req, res) => {
  const { token } = req.query;

  if (!token) return;

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    const user = await User.findOne({ email: req.user.email }).select(
      "-password"
    );

    if (!user) {
      throw new NotFoundError("User is not found");
    }

    res.status(StatusCodes.OK).json({ user });
  } catch (err) {
    throw new BadRequestError("Oops");
  }
};

export const resetPassword = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    throw new BadRequestError("Please provide all values");
  }

  if (password !== confirmPassword) {
    throw new BadRequestError("Passwords do not match.");
  }

  if (password.length < 6) {
    throw new BadRequestError(
      "Password is required and should be at least 6 characters"
    );
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.findOneAndUpdate(
    { email },
    {
      password: hashedPassword,
    },
    { new: true }
  );

  res
    .status(StatusCodes.OK)
    .json({ message: "Password has been updated successfully" });
};

export const profileUpdate = async (req, res) => {
  const data = {};

  if (req.body.username) {
    data.username = req.body.username;
  }
  if (req.body.about) {
    data.about = req.body.about;
  }
  if (req.body.name) {
    data.name = req.body.name;
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      throw new BadRequestError(
        "Password is required and should be minimum 6 characters long"
      );
    } else {
      data.password = await hashPassword(req.body.password);
    }
  }

  if (req.body.image) {
    data.image = req.body.image;
  }

  let user = await User.findByIdAndUpdate(req.user._id, data, {
    new: true,
    runValidators: true,
  });

  user.password = undefined;

  res.status(StatusCodes.OK).json(user);
};

export const findPeople = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    throw new NotFoundError("Invalid Credentials");
  }

  let following = user.following;
  following.push(user._id);
  const people = await User.find({ _id: { $nin: following } })
    .select("-password ")
    .limit(10);

  res.status(StatusCodes.OK).json(people);
};

//add follower and userfollow
//middleware
export const addFollower = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.body._id, {
      $addToSet: { followers: req.user._id },
      // add to set is the same as push but without duplicate
    });
    next();
  } catch (err) {
    throw new BadRequestError("Something went wrong.");
  }
};

export const addFollowing = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $addToSet: { following: req.body._id },
    },
    { new: true }
  ).select("-password ");
  res.status(StatusCodes.OK).json(user);
};

export const userFollowing = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    throw new NotFoundError("Unauthorized");
  }
  const following = await User.find({ _id: user.following }).limit(100);
  res.status(StatusCodes.OK).json({
    following,
  });
};

// remove followers
//middleware

export const removeFollower = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.body._id, {
      $pull: { followers: req.user._id },
    });
    next();
  } catch (err) {
    throw new BadRequestError("Something went wrong");
  }
};

export const removeFollowing = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { following: req.body._id },
    },
    { new: true }
  ).select("-password");
  res.status(StatusCodes.OK).json(user);
};

export const SearchUser = async (req, res) => {
  const { query } = req.params;
  if (!query) return;

  const user = await User.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { username: { $regex: query, $options: "i" } },
    ],
  }).select("-password");

  res.status(StatusCodes.OK).json(user);
};

export const getUser = async (req, res) => {
  const user = await User.findOne({ username: req.params.username }).select(
    "-password"
  );

  if (!user) {
    throw new NotFoundError("Unauthorized");
  }

  res.status(StatusCodes.OK).json(user);
};
