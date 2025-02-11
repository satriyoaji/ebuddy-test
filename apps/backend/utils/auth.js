"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Ensure this is set in .env
var generateToken = function (userId) {
    return jsonwebtoken_1.default.sign({ userId: userId }, SECRET_KEY, { expiresIn: "1h" });
};
exports.generateToken = generateToken;
