"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Memory_1 = require("./entities/Memory");
const AppDataSource = new typeorm_1.DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // Automatically sync schema in development
  logging: false,
  entities: [User_1.User, Memory_1.Memory],
  migrations: [__dirname + "/migrations/*.ts"], // Optional: for migrations
});
exports.default = AppDataSource;
