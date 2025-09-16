export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = Users.find({ _id: { $ne: loggedInUserId } }).select(
      "_id name email"
    );
    res.status(200).json({ users: filteredUsers });
  } catch (error) {}
};
