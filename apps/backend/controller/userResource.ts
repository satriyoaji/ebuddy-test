import { Request, Response } from 'express';
import { fetchUserData, updateUserData } from '@repository/userCollection';

export const getUserData = async (req: Request, res: Response) => {
    try {
        const user = await fetchUserData(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: 'Error fetching user data' });
    }
};

export const modifyUserData = async (req: Request, res: Response) => {
    try {
        await updateUserData(req.params.id, req.body);
        res.json({ message: 'User data updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user data' });
    }
};
