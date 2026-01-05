import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk(
    "user/signup",
    async (userData) => {
        const res = await axios.post(
            `${import.meta.env.VITE_API_ENDPOINT}/api/user/signup`,
            userData
        );
        return res.data;
    }
);

export const signInUser = createAsyncThunk(
    "user/login",
    async (userData) => {
        const res = await axios.post(
            `${import.meta.env.VITE_API_ENDPOINT}/api/user/login`,
            userData
        );
        return res.data;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        token: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;
