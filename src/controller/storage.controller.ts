import { Request, Response } from "express";
import { CatchError, TryError } from "../util/error";
import { SessionInterface } from "../middleware/auth.middleware";
import AuthModel from "../model/auth.model";
import { downloadObject, isFileExists, uploadObject } from "../util/s3";

export const downloadFile = async (req: Request, res: Response) => {
  try {
    const path = req.body?.path;
    if (!path) {
      throw TryError("Failed to generate URL, path is missing", 400);
    }

    const isExist = await isFileExists(path);

    if (!isExist) {
      throw TryError("Failed to download, download url path is missing", 404);
    }

    const url = await downloadObject(path);
    res.json({ url });
  } catch (error) {
    CatchError(error, res);
  }
};

export const uploadFile = async (req: SessionInterface, res: Response) => {
  try {
    const path = req.body?.path;
    const type = req.body?.type;

    if (!type || !path) {
      throw TryError("Invalid request, path or type is missing", 400);
    }

    const url = await uploadObject(path, type);
    res.json({ url });
  } catch (error) {
    CatchError(error, res);
  }
};
