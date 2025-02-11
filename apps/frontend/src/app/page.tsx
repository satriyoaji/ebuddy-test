"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { logout } from "@/store/userSlice";
import { auth } from "@/apis/firebaseConfig";
import { signOut } from "firebase/auth";
import UpdateUserForm from "@/components/organisms/UpdateUserForm";
import UpdateButton from "@/components/molecules/UpdateButton";
import { Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);

    const handleLogout = async () => {
        await signOut(auth);
        dispatch(logout());
        router.push("/login");
    };

    if (!user) {
        return <Button onClick={() => router.push("/login")}>Login</Button>;
    }

    return (
        <Box sx={{ textAlign: "center", padding: 4 }}>
            <Typography variant="h4">Welcome, {user.displayName || "User"}!</Typography>

            {/* Update Profile Form */}
            <UpdateUserForm />

            {/* Button for updating user profile */}
            <UpdateButton displayName={user.displayName || ""} photoURL={user.photoURL || ""} />

            <Button variant="contained" color="error" onClick={handleLogout} sx={{ marginTop: 2 }}>
                Logout
            </Button>
        </Box>
    );
}
