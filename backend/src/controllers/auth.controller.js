import express from "express";

export const signup = (req, res) => {
  res.json({ message: "signup route" });
};
export const login = (req, res) => {
  res.send("Login route");
};
export const logout = (req, res) => {
  res.send("Logout route");
};
