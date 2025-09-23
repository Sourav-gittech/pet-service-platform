import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    authData: {}
}

export const checkAuth = createSlice({
    name: 'CheckAuth',
    initialState,
    reducers: {
        isLoggedIn: (state) => {
            const token = sessionStorage.getItem('auth_token');
            if (token) {
                state.isAuth = true;
            }
        },
        loggedOut: (state) => {

            const token = sessionStorage.getItem('auth_token');
            if (token) {
                sessionStorage.removeItem('auth_token');

                state.isAuth = false;
                state.authData = {};
            }
        }
    }
});

export default checkAuth.reducer;

export const { isLoggedIn, loggedOut } = checkAuth.actions;