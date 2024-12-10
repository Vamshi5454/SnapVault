"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../entities/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// const bcrypt = require("bcryptjs");
// import { getRepository } from "typeorm";
const data_source_1 = __importDefault(require("../data-source"));
const router = express_1.default.Router();
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const salt = await bcryptjs_1.default.genSalt(10);
        const hashedPassword = await bcryptjs_1.default.hash(password, salt);
        const newUser = new User_1.User();
        newUser.name = name;
        newUser.email = email;
        newUser.password = hashedPassword;
        await data_source_1.default.getRepository(User_1.User).save(newUser);
        res.status(201).json({
            message: "User registration successfull",
            userId: newUser.userId,
        });
    }
    catch (err) {
        res.status(500).json({ message: "Intrnal server error" });
    }
});
exports.default = router;
