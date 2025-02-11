"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userResource_1 = require("@controller/userResource");
var authMiddleware_1 = require("@middleware/authMiddleware");
var router = express_1.default.Router();
router.get('/fetch-user-data/:id', authMiddleware_1.authMiddleware, userResource_1.getUserData);
router.put('/update-user-data/:id', authMiddleware_1.authMiddleware, userResource_1.modifyUserData);
exports.default = router;
