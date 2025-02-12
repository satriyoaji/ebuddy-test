"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { TextField, Box, Typography, Stack } from "@mui/material";
import UpdateButton from "@/components/molecules/UpdateButton";
import { User } from "@repo/shared"; // Adjust based on monorepo import path

export default function UpdateUserForm() {
    const user = useSelector((state: RootState) => state.user.user) as User;
    const [updatedUser, setUpdatedUser] = useState<User>({
        id: user?.id || "",
        name: user?.name || "",
        email: user?.email || "",
        age: user?.age || 0,
        photoURL: user?.photoURL || "",
    });

    return (
        <Box sx={{ maxWidth: 400, margin: "auto", p: 3, boxShadow: 2, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
                Update Profile
            </Typography>

            <Stack spacing={2}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={updatedUser.name}
                    onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={updatedUser.email}
                    disabled // Email should not be editable
                />
                <TextField
                    label="Age"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={updatedUser.age}
                    onChange={(e) => setUpdatedUser({ ...updatedUser, age: Number(e.target.value) })}
                />
                <UpdateButton user={updatedUser} />
            </Stack>
        </Box>
    );
}
