import { getAuth, updateProfile } from "firebase/auth";

export interface UserProfile {
    displayName: string;
    photoURL: string;
}

export const updateUserProfile = async (displayName: string, photoURL: string): Promise<UserProfile> => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        throw new Error("User not authenticated");
    }

    await updateProfile(user, { displayName, photoURL });

    return {
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
    };
};
