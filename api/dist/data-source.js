"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Memory_1 = require("./entities/Memory");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mysql2_1 = __importDefault(require("mysql2"));
const connection = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "snapvault",
});
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    }
    else {
        console.log("Connected to the MySQL database");
    }
});
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    url: "mysql://root:12345678@localhost:3306/snapvault?charset=utf8mb4",
    // host: "localhost",
    // port: 3306,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    synchronize: true, // Automatically sync schema in development
    logging: false,
    entities: [User_1.User, Memory_1.Memory],
    migrations: [__dirname + "/migrations/*.ts"], // Optional: for migrations
});
exports.default = AppDataSource;
