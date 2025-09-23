import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../util/supabase";

// add product action in cart
export const addProductInCart = createAsyncThunk('CartSlice/addProductInCart',
    async ({ productData, productImg }) => {
        // console.log('Receive data in add product in cart action', productData,productImg);

        const { error, data } = await supabase.from('product').insert(productData).single();
        if (!error) {
            const res = await supabase.storage.from('product_img').upload(productData.image, productImg);
        }
        // console.log('Error from add product in cart action', error);
        // console.log('Data from add product in cart action', data);
        // console.log('Response from add product image in cart action', res);

        return data;
    }
)

// fetch product action in cart
export const fetchProductInCart = createAsyncThunk('CartSlice/fetchProductInCart',
    async () => {
        const { error, data } = await supabase.from('product').select('*').order('created_at', { ascending: true });

        // Attach public URLs for product images
        const productsWithImages = data.map((product) => {
            if (product.image) {
                const { data: { publicUrl } } = supabase.storage.from('product_img').getPublicUrl(product.image);
                // console.log('Image url',publicUrl);

                return { ...product, imageUrl: publicUrl };
            }
            return product;
        });
        // console.log('Error from add product in cart action', error);

        return productsWithImages;
    }
);


// delete product action in cart
export const deleteProductInCart = createAsyncThunk('CartSlice/deleteProductInCart',
    async (product) => {
        // console.log('Receive id in delete product in cart action', product);

        const res = await supabase.storage.from('product_img').remove(product.image);
        const { error, data } = await supabase.from('product').delete().eq('id', product.id);
        // console.log('Error from delete product in cart action', error);
        // console.log('Data from delete product in cart action', data);
        // console.log('Response from delete product image in cart action', res);

        return data;
    }
)

// update product action in cart
export const updateProductQuantityInCart = createAsyncThunk('CartSlice/updateProductQuantityInCart',
    async ({ id, productData, productImg, prev_image }) => {
        // console.log('Receive id and new data at update product in cart action', id, productData, productImg, prev_image);

        if (prev_image != null) {
            // console.log('Image change occur');

            const res1 = await supabase.storage.from('product_img').remove(prev_image);
            const res2 = await supabase.storage.from('product_img').upload(productData.image, productImg);
        }
        const { error, data } = await supabase.from('product').update(productData).eq('id', id);
        // console.log('Error from update product in cart action', error);
        // console.log('Data from update product in cart action', data);
        // console.log('Response for product image delete in cart action', res1);
        // console.log('Response for product image upload in cart action', res2);

        return data;
    }
)

const initialData = {
    isLoading: true,
    getProductCartData: [],
    productCartError: null
}

export const productCartSlice = createSlice({
    name: 'CartSlice',
    initialState: initialData,
    extraReducers: (builder) => {
        // add product in cart
        builder.addCase(addProductInCart.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(addProductInCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getProductCartData = [];
            state.productCartError = null;
        })
        builder.addCase(addProductInCart.rejected, (state, action) => {
            state.isLoading = false;
            state.getProductCartData = [];
            state.productCartError = action.error?.message;
        })

        // fetch product in cart
        builder.addCase(fetchProductInCart.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProductInCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getProductCartData = action.payload;
            state.productCartError = null;
        })
        builder.addCase(fetchProductInCart.rejected, (state, action) => {
            state.isLoading = false;
            state.getProductCartData = [];
            state.productCartError = action.error?.message;
        })

        // delete product in cart
        builder.addCase(deleteProductInCart.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteProductInCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getProductCartData = [];
            state.productCartError = null;
        })
        builder.addCase(deleteProductInCart.rejected, (state, action) => {
            state.isLoading = false;
            state.getProductCartData = [];
            state.productCartError = action.error?.message;
        })

        // update product quantity in cart
        builder.addCase(updateProductQuantityInCart.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateProductQuantityInCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getProductCartData = [];
            state.productCartError = null;
        })
        builder.addCase(updateProductQuantityInCart.rejected, (state, action) => {
            state.isLoading = false;
            state.getProductCartData = [];
            state.productCartError = action.error?.message;
        })
    }
})

export default productCartSlice.reducer;