import { db } from '@config/firebaseConfig';
import { User } from "@repo/shared";
import {Constant} from "../utils/constants";

const USERS_COLLECTION = Constant.USER_COLLECTION;

export const fetchUserData = async (userId: string): Promise<User | null> => {
    const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();
    return userDoc.exists ? (userDoc.data() as User) : null;
};

export const updateUserData = async (userId: string, userData: Partial<User>): Promise<void> => {
    await db.collection(USERS_COLLECTION).doc(userId).set(userData, { merge: true });
};
