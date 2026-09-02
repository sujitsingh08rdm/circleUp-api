import mongoose from "mongoose";
import ChatModel from "../model/chat.model";
import { Response } from "express";
import { CatchError, TryError } from "../util/error";
import { SessionInterface } from "../middleware/auth.middleware";
import { downloadObject } from "../util/s3";

interface PayloadInterface {
  from: mongoose.Types.ObjectId;
  to: mongoose.Types.ObjectId;
  message: string;
  file: {
    path: string;
    type: string;
  };
}

export const createChat = (payload: PayloadInterface) => {
  ChatModel.create(payload).catch((err) => console.log(err.message));
};

export const fetchChats = async (req: SessionInterface, res: Response) => {
  try {
    if (!req.session) {
      throw TryError("Failed to fetch Chats");
    }
    const chats = await ChatModel.find({
      $or: [
        {
          from: req.session.id,
          to: req.params.id,
        },
        {
          from: req.params.id,
          to: req.session.id,
        },
      ],
    })
      .populate("from", "fullname image email mobile")
      .lean();

    const modifiedChats = await Promise.all(
      chats.map(async (item) => {
        if (item.file) {
          return {
            ...item,
            file: {
              path: item.file.path && (await downloadObject(item.file.path)),
              type: item.file.type,
            },
          };
        } else {
          return item;
        }
      }),
    );

    res.json(modifiedChats);
  } catch (error) {
    CatchError(error, res);
  }
};
