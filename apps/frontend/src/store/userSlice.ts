import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: {
        uid: string;
        email: string;
        displayName: string;
        photoURL: string;
    } | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState["user"]>) => {
            state.user = action.payload;
            state.error = null; // Reset error on successful login
        },
        updateUser: (state, action: PayloadAction<{ displayName: string; photoURL: string }>) => {
            if (state.user) {
                state.user.displayName = action.payload.displayName;
                state.user.photoURL = action.payload.photoURL;
            }
        },
        logout: (state) => {
            state.user = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setUser, updateUser, logout, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
