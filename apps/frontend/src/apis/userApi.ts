import { getAuth, updateProfile } from "firebase/auth";
import { User } from "@repo/shared"; // Adjust import path based on your monorepo structure

export const updateUserProfile = async (updatedUser: User): Promise<User> => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        throw new Error("User not authenticated");
    }

    await updateProfile(user, {
        displayName: updatedUser.name,
        photoURL: "", // Assuming no photoURL in shared User model, modify if needed
    });

    return {
        id: user.uid,
        name: user.displayName || updatedUser.name,
        email: user.email || updatedUser.email,
        photoURL: user.photoURL || updatedUser.photoURL,
        age: updatedUser.age, // Assuming age is coming from the shared User model
    };
};
