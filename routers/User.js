import express from "express"
import { addTask, forgetPassword, getMyProfile, login, logout, register, removeTask, resetPassword, updatePassword, updateProfile, updateTask, verify } from "../controllers/User.js";
import { isAuthenicated } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register)
router.route("/verify").post(isAuthenicated ,verify)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/newtask").post(isAuthenicated, addTask)
router.route("/me").get(isAuthenicated,getMyProfile)
router
.route("/task/:taskId")
.get(isAuthenicated,updateTask)
.delete(isAuthenicated, removeTask)
router.route("/updateprofile").put(isAuthenicated,updateProfile)
router.route("/updatepassword").put(isAuthenicated,updatePassword)
router.route("/forgetpassword").post(forgetPassword)
router.route("/resetpassword").put(resetPassword)
export default  router; 