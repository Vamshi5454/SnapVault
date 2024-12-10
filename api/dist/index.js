"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("./data-source"));
const user_1 = __importDefault(require("./routes/user"));
// import tag from "./routes/";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3002;
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
data_source_1.default.initialize()
    .then(() => {
    console.log("Database created successfully");
})
    .catch((err) => {
    console.error("Not connected beacuse", err);
});
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/auth", user_1.default);
try {
    app.listen(3002, () => {
        console.log("Server is running on http://localhost:3002");
    });
}
catch (error) {
    console.error("Error starting server:", error);
}
