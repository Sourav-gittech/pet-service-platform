import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// user register action 
export const userRegister = createAsyncThunk('userAuthSlice/userRegister',
    async (userData) => {
        // console.log('Receive data for user register in register action',userData);

        const { error, data } = await supabase.from('product').insert(userData).single();
        // console.log('Error from user register action', error);
        // console.log('Data from user register action', data);
        // console.log('Response from user register action', res);

        return data;
    }
)

// user login action 
export const userLogin = createAsyncThunk('userAuthSlice/userLogin',
    async (userData) => {
        // console.log('Receive data for user login in login action',userData);

        const { error, data } = await supabase.from('product').insert(userData).single();
        // console.log('Error from user login action', error);
        // console.log('Data from user login action', data);
        // console.log('Response from user login action', res);

        return data;
    }
)

const initialState = {
    isLoading: true,
    getuserData: [],
    userError: null
}

export const userAuthSlice = createSlice({
    name: 'userAuthSlice',
    initialState,
    extraReducers: (builder) => {

        // user register
        builder.addCase(userRegister.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(userRegister.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getuserData = [];
            state.userError = null;
        })
        builder.addCase(userRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.getuserData = [];
            state.userError = action.error?.message;
        })

        // user login
        builder.addCase(userLogin.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getuserData = [];
            state.userError = null;
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.getuserData = [];
            state.userError = action.error?.message;
        })
    }
})

export default userAuthSlice.reducer;