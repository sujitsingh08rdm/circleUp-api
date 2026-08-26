import { NextFunction, Request, Response } from "express";
import { CatchError, TryError } from "../util/error";
import AuthModel from "../model/auth.model";
import moment from "moment";
import { SessionInterface } from "./auth.middleware";

const RefreshToken = async (
  req: SessionInterface,
  res: Response,
  next: NextFunction,
) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      throw TryError("failed to refresh token no fresh token", 401);
    }

    const user = await AuthModel.findOne({ refreshToken });

    if (!user) {
      throw TryError("Failed to refresh token user not found", 401);
    }

    const today = moment();
    const expiry = moment(user.expiry);

    const isExpired = today.isAfter(expiry);

    if (isExpired) {
      throw TryError("Failed to refresh Token expired", 401);
    }

    req.session = {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
      mobile: user.mobile,
      image: user.image!,
    };

    next();
  } catch (error) {
    CatchError(error, res);
  }
};

export default RefreshToken;
