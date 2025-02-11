import { Request, Response } from "express";
import {generateToken} from "../utils/auth";

export const loginUser = (req: Request, res: Response) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

    const token = generateToken(userId);
    return res.status(200).json({ token });
};
