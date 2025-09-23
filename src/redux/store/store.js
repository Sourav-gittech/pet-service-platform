import { configureStore } from "@reduxjs/toolkit";
import checkAuthReducer from "../slice/checkAuthSlice";
import userAuthSliceReducer from "../slice/authSlice";
import productCRUDSliceReducer from "../slice/productSlice";
import productCartSliceReducer from "../slice/productCartSlice";

const store = configureStore({
    reducer: {
        checkAuth: checkAuthReducer,
        userAuth: userAuthSliceReducer,
        productcrud: productCRUDSliceReducer,
        productCart: productCartSliceReducer
    }
})

export default store;