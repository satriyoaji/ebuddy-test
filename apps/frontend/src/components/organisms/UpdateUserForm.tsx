"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { TextField, Box, Typography, Stack } from "@mui/material";
import UpdateButton from "@/components/molecules/UpdateButton";

export default function UpdateUserForm() {
    const user = useSelector((state: RootState) => state.user.user);
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    return (
        <Box sx={{ maxWidth: 400, margin: "auto", p: 3, boxShadow: 2, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
                Update Profile
            </Typography>

            <Stack spacing={2}>
                <TextField
                    label="Display Name"
                    variant="outlined"
                    fullWidth
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <TextField
                    label="Photo URL"
                    variant="outlined"
                    fullWidth
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                />
                <UpdateButton displayName={displayName} photoURL={photoURL} />
            </Stack>
        </Box>
    );
}
