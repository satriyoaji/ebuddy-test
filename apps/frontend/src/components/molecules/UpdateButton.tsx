"use client";
import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { updateUserProfile } from "@/apis/userApi";
import { useDispatch } from "react-redux";
import { updateUser, setLoading, setError } from "@/store/userSlice";
import { User } from "@repo/shared";

interface UpdateButtonProps {
    user: User;
}

export default function UpdateButton({ user }: UpdateButtonProps) {
    const dispatch = useDispatch();
    const [loading, setLoadingState] = useState(false);

    const handleUpdate = async () => {
        setLoadingState(true);
        dispatch(setLoading(true));

        try {
            const updatedUser = await updateUserProfile(user);
            dispatch(updateUser(updatedUser));
            dispatch(setError(null));
        } catch (err: any) {
            dispatch(setError(err.message));
        } finally {
            setLoadingState(false);
            dispatch(setLoading(false));
        }
    };

    return (
        <Button variant="contained" color="primary" fullWidth onClick={handleUpdate} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Update Profile"}
        </Button>
    );
}
