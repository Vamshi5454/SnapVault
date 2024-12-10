import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Memory } from "./entities/Memory";

import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "snapvault",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the MySQL database");
  }
});

const AppDataSource = new DataSource({
  type: "mysql",
  url: "mysql://root:12345678@localhost:3306/snapvault?charset=utf8mb4",
  // host: "localhost",
  // port: 3306,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  synchronize: true, // Automatically sync schema in development
  logging: false,
  entities: [User, Memory],
  migrations: [__dirname + "/migrations/*.ts"], // Optional: for migrations
});
export default AppDataSource;
