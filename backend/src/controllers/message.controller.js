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
