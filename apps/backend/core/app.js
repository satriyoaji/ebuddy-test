"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var userRoute_1 = __importDefault(require("@routes/userRoute"));
var authRoute_1 = __importDefault(require("@routes/authRoute"));
var body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Register routes
app.use("/api/auth", authRoute_1.default);
app.use("/api/users", userRoute_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
