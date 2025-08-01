import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/work", (req, res) => {
  res.send("This route is working");
});
export default router;
