"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/apis/firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        setError(null); // Clear previous errors
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Ensure email is always a string (convert null to empty string)
            dispatch(setUser({
                uid: user.uid,
                email: user.email ?? "", // Fix: Convert `null` to `""`
                displayName: user.displayName ?? "",
                photoURL: user.photoURL ?? "",
            }));
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
