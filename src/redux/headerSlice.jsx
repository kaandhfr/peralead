import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isUserDropdown: false,
};

export const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        toggleUserDropdown: (state) => {
            state.isUserDropdown = !state.isUserDropdown;
        }
    },
});

export const { toggleMenu, toggleUserDropdown } = headerSlice.actions;
export default headerSlice.reducer;