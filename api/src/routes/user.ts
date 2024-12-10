import express, { Router } from "express";
import { User } from "../entities/User";
import bcrypt from "bcryptjs";
// const bcrypt = require("bcryptjs");
// import { getRepository } from "typeorm";
import AppDataSource from "../data-source";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = hashedPassword;

    await AppDataSource.getRepository(User).save(newUser);

    res.status(201).json({
      message: "User registration successfull",
      userId: newUser.userId,
    });
  } catch (err) {
    res.status(500).json({ message: "Intrnal server error" });
  }
});

export default router;
