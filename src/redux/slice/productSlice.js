import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../util/supabase";

// add product action 
export const addProduct = createAsyncThunk('ProductCRUDSlice/addProduct',
    async ({ productData, productImg }) => {
        // console.log('Receive data in add product action', productData,productImg);

        const { error, data } = await supabase.from('product').insert(productData).single();
        if (!error) {
            const res = await supabase.storage.from('product_img').upload(productData.image, productImg);
        }
        // console.log('Error from add product in action', error);
        // console.log('Data from add product in action', data);
        // console.log('Response from add product image in action', res);

        return data;
    }
)

// fetch product action
export const fetchProduct = createAsyncThunk('ProductCRUDSlice/fetchProduct',
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
        // console.log('Error from add product in action', error);

        return productsWithImages;
    }
);


// delete product action
export const deleteProduct = createAsyncThunk('ProductCRUDSlice/deleteProduct',
    async (product) => {
        // console.log('Receive id in delete product action', product);

        const res = await supabase.storage.from('product_img').remove(product.image);
        const { error, data } = await supabase.from('product').delete().eq('id', product.id);
        // console.log('Error from delete product in action', error);
        // console.log('Data from delete product in action', data);
        // console.log('Response from delete product image in action', res);

        return data;
    }
)

// update product action
export const updateProduct = createAsyncThunk('ProductCRUDSlice/updateProduct',
    async ({ id, productData, productImg, prev_image }) => {
        // console.log('Receive id and new data in update product action', id, productData, productImg, prev_image);

        if (prev_image != null) {
            // console.log('Image change occur');

            const res1 = await supabase.storage.from('product_img').remove(prev_image);
            const res2 = await supabase.storage.from('product_img').upload(productData.image, productImg);
        }
        const { error, data } = await supabase.from('product').update(productData).eq('id', id);
        // console.log('Error from update product in action', error);
        // console.log('Data from update product in action', data);
        // console.log('Response for product image delete in action', res1);
        // console.log('Response for product image upload in action', res2);

        return data;
    }
)

const initialData = {
    isLoading: true,
    getProductData: [],
    productError: null
}

export const productCRUDSlice = createSlice({
    name: 'ProductCRUDSlice',
    initialState: initialData,
    extraReducers: (builder) => {
        // add product 
        builder.addCase(addProduct.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getProductData = [];
            state.productError = null;
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.getProductData = [];
            state.productError = action.error?.message;
        })

        // fetch product 
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getProductData = action.payload;
            state.productError = null;
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.getProductData = [];
            state.productError = action.error?.message;
        })

        // delete product 
        builder.addCase(deleteProduct.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getProductData = [];
            state.productError = null;
        })
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.getProductData = [];
            state.productError = action.error?.message;
        })

        // update product 
        builder.addCase(updateProduct.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getProductData = [];
            state.productError = null;
        })
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.getProductData = [];
            state.productError = action.error?.message;
        })
    }
})

export default productCRUDSlice.reducer;