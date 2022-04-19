import express from "express";
const router = express.Router();
import { authenticateUser } from "../middleware/auth";

// controllers
import {
  register,
  login,
  currentUser,
  forgotPassword,
  profileUpdate,
  findPeople,
  addFollower,
  addFollowing,
  userFollowing,
  removeFollower,
  removeFollowing,
  SearchUser,
  getUser,
  resetPassword,
  resetPasswordToken,
  verifyEmail,
} from "../controllers/auth";

router.post("/register", register);
router.get("/verifyemail", verifyEmail);
router.post("/login", login);
router.get("/current-user", authenticateUser, currentUser);
router.post("/forgot-password", forgotPassword);
router.get("/resetpasswordtoken", resetPasswordToken);
router.post("/resetpassword", resetPassword);
router.put("/profile-update", authenticateUser, profileUpdate);
router.get("/find-people", authenticateUser, findPeople);
router.put("/user-follow", authenticateUser, addFollower, addFollowing);
router.get("/user-following", authenticateUser, userFollowing);
router.put("/user-unfollow", authenticateUser, removeFollower, removeFollowing);
router.get("/search-user/:query", SearchUser);
router.get("/user/:username", getUser);
module.exports = router;
