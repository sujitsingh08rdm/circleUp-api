import { Router } from "express";
import {
  addFriend,
  deleteFriend,
  fetchFriends,
  friendRequest,
  suggestedFriends,
  updateFriendRequestStatus,
} from "../controller/friend.controller";
const FriendRouter = Router();

FriendRouter.post("/", addFriend);
FriendRouter.put("/:id", updateFriendRequestStatus);
FriendRouter.get("/", fetchFriends);
FriendRouter.get("/suggestion", suggestedFriends);
FriendRouter.get("/request", friendRequest);
FriendRouter.delete("/:id", deleteFriend);

export default FriendRouter;
