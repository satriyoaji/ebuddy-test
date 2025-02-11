"use client";
import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { updateUserProfile } from "@/apis/userApi";
import { useDispatch } from "react-redux";
import { updateUser, setLoading, setError } from "@/store/userSlice";

interface UpdateButtonProps {
    displayName: string;
    photoURL: string;
}

export default function UpdateButton({ displayName, photoURL }: UpdateButtonProps) {
    const dispatch = useDispatch();
    const [loading, setLoadingState] = useState(false);

    const handleUpdate = async () => {
        setLoadingState(true);
        dispatch(setLoading(true));

        try {
            const updatedUser = await updateUserProfile(displayName, photoURL);
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
