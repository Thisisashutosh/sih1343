import User from "../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.json({status:"error", message: "User does not exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.json({status:"error", message: "Invalid credentials" });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id },"test");

    res.status(200).json({status:"success", result: {existingUser, token} });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.json({status:"error", message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({ email, password: hashedPassword });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test");

    res.status(200).json({status:"success", result:{ newUser, token }});
  } catch (error) {
    res.status(500).json(error);
  }
};
