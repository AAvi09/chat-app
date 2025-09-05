import jwt from "jsonwebtoken";
import User from "../models/users.model";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "unauthorized , no token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "unauthorized , invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "unauthorized , user not found" });
    }
    req.user = user; // req.user will be available in the next middleware or route handler
    next();
  } catch (error) {}
};
