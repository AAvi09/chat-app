import Users from "../models/users.model";
import Message from "../models/message.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = Users.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    res.status(200).json({ users: filteredUsers });
  } catch (error) {
    console.error("Error fetching users for sidebar:", error);
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        {
          senderId: myId,
          receiverId: userToChatId,
        },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
