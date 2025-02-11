import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Load from .env

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Bearer Token
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
        req.body.userId = decoded.userId; // Attach userId to request
        next(); // Continue to next middleware/controller
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};
