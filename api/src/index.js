"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemory = void 0;
const data_source_js_1 = require("./data-source.js");
const Memory_js_1 = require("./entities/Memory.js");
const User_js_1 = require("./entities/User.js");
const user_js_1 = __importDefault(require("./routes/user.js"));
// import tag from "./routes/";
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3002;
// app.use(cors())
const createMemory = async (req, res) => {
  try {
    const { userId, title, fileUrl, uploadDate } = req.body;
    const userRepository = data_source_js_1.AppDataSource.getRepository(
      User_js_1.User
    );
    const memoryRepository = data_source_js_1.AppDataSource.getRepository(
      Memory_js_1.Memory
    );
    const user = await userRepository.findOneBy({ userId: userId });
    if (!user) return res.status(404).json({ error: "User not found" });
    const memory = new Memory_js_1.Memory();
    memory.user = user;
    memory.title = title;
    memory.file_url = fileUrl;
    memory.upload_date = new Date(uploadDate);
    await memoryRepository.save(memory);
    return res.status(201).json({ message: "Memory created", memory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
exports.createMemory = createMemory;
app.use(express_1.default.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/auth", user_js_1.default);
app.use("/tag");
