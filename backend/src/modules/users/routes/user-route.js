import express from "express";
import { AppConstant } from "../../../shared/utils/appConstant.js";
import { usersControllers } from "../controllers/user-conroller.js";
const USER_ROUTES = AppConstant.ROUTES.USERS;
const userRouter = express.Router();

userRouter.post(USER_ROUTES.ADD, usersControllers.addUser);
userRouter.get(USER_ROUTES.GET_ALL_USER,usersControllers.getUser);
userRouter.post(USER_ROUTES.GET_USER,usersControllers.getSingleUser);


export default userRouter;