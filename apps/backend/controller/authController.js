"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
var auth_1 = require("../utils/auth");
var loginUser = function (req, res) {
    var userId = req.body.userId;
    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }
    var token = (0, auth_1.generateToken)(userId);
    return res.status(200).json({ token: token });
};
exports.loginUser = loginUser;
