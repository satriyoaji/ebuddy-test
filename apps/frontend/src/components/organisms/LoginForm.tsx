"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/apis/firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { User } from "@repo/shared"; // Import shared User type
import { TextField, Button, Box, Typography } from "@mui/material";

export default function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        setError(null);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            // Construct a User object based on the shared structure
            const user: User = {
                id: firebaseUser.uid,
                name: firebaseUser.displayName ?? "No Name",
                email: firebaseUser.email ?? "", // Ensure non-null
                photoURL: firebaseUser.photoURL ?? "", // Ensure non-null
                age: 18, // Default value (update as needed)
            };

            dispatch(setUser(user));
        } catch (error: any) {
            console.error("Login failed:", error);
            setError(error.message || "Login failed");
        }
    };

    return (
        <Box>
            <Typography variant="h4">Login</Typography>
            <TextField label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth onChange={(e) => setPassword(e.target.value)} />
            {error && <Typography color="error">{error}</Typography>}
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </Box>
    );
}
