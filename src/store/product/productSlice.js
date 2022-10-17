import { createSlice } from "@reduxjs/toolkit";



export const productSlice = createSlice({

  name: "product",

  initialState: {
    products: [
      // tempCategory
    ],
    activeProduct: null,
    activeCreateProduct: false,
    activeUpdateProduct: false,
    activeProduct: {
		code: '',
		name: '',
		description: '',
		price: '',
		stock: '',
		category: '',
		image: ''
    },
    // errorMessage: undefined,
  },

  reducers: {
    onSetActiveProduct: (state, { payload }) => {
      state.activeProduct = payload;
    },

    onAddNewProduct: (state, { payload }) => {
      state.products.push(payload);
      state.activeProduct = null;
      state.activeCreateProduct = true;
      state.activeUpdateProduct = false;
    },

    onUpdateProduct: (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product.id === payload.id) {
          return payload;
        }
        return product;
      });
      state.activeUpdateProduct = true;
      // errorMessage = payload;
    },


    onDeleteProduct: (state, { payload }) => {
      state.products = state.products.filter((product) => product.id !== payload);
    },

    
    onLoadProduct: (state, { payload = [] }) => {
    //   state.isLoadingCategory = false;

      payload.forEach((event) => {
        const exist = state.products.some(
          (product) => product.id === event.id
        );

        if (!exist) {
          state.products.push(event);
        }
      });
    },

    onActiveCreateProduct: (state) => {
      state.activeCreateProduct = true;
      state.activeUpdateProduct = false;
    },

    onActiveUpdateProduct: (state) => {
      state.activeUpdateProduct = true;
      state.activeCreateProduct = false;
    },

    onActiveProduct: (stata, { payload }) => {
      stata.activeProduct = payload;
    },
  },
});


export const {
	onAddNewProduct, 
	onUpdateProduct,
	onDeleteProduct, 
	onLoadProduct, 
	onActiveCreateProduct, 
	onActiveUpdateProduct, 
	onActiveProduct,
  onSetActiveProduct
} = productSlice.actions;