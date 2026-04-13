import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    avatar: 'banu.png',
    name: 'Banu Prakash'
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeProfilePic: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload
        }
    }
});

export const {changeProfilePic} = profileSlice.actions
export const profileReducer = profileSlice.reducer