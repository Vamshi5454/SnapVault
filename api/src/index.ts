import { Request, Response } from "express";
import AppDataSource from "./data-source";
import { Memory } from "./entities/Memory";
import { User } from "./entities/User";
import user from "./routes/user";
// import tag from "./routes/";
import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
const port = 3002;

// app.use(cors())

// export const createMemory = async (req: Request, res: Response) => {
//   try {
//     const { userId, title, fileUrl, uploadDate } = req.body;

//     const userRepository = AppDataSource.getRepository(User);
//     const memoryRepository = AppDataSource.getRepository(Memory);

//     const user = await userRepository.findOneBy({ userId: userId });
//     if (!user) return res.status(404).json({ error: "User not found" });

//     const memory = new Memory();
//     memory.user = user;
//     memory.title = title;
//     memory.file_url = fileUrl;
//     memory.upload_date = new Date(uploadDate);

//     await memoryRepository.save(memory);
//     return res.status(201).json({ message: "Memory created", memory });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

import mysql from "mysql2";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "12345678",
//   database: "snapvault",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//   } else {
//     console.log("Connected to the MySQL database");
//   }
// });

AppDataSource.initialize()
  .then(() => {
    console.log("Database created successfully");
  })
  .catch((err) => {
    console.error("Not connected beacuse", err);
  });

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/auth", user);

try {
  app.listen(3002, () => {
    console.log("Server is running on http://localhost:3002");
  });
} catch (error) {
  console.error("Error starting server:", error);
}
