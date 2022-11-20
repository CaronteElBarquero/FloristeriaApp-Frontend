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
    activeUploadImage: false,
    activeImage: {
      public_id: "",
      secure_url: "",
    },
    
    activeProduct: {
      code: '',
      name: '',
      description: '',
      price: '',
      stock: '',
      category: null,
      image: {
        public_id: '',
        secure_url: '',
      },
    },
    // errorMessage,: undefined,
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
      // state.activeImage.public_id = "";
      // state.activeImage.secure_url = "";
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

    setPhotosToProduct: (state, { payload }) => {
      state.activeUploadImage = payload;
    },

    getPhotosToProduct: (state, { payload }) => {
      state.activeImage.public_id = payload.public_id;
      state.activeImage.secure_url = payload.secure_url;

    },

    startPhotoUpload: (state) => {
      state.activeImage.public_id;
      state.activeImage.secure_url;
    },

    // startUpdatePhoto: (state, { payload }) => {
 
    //   if ( payload ) {
    //     state.activeImage.public_id = payload.public_id;
    //     state.activeImage.secure_url = payload.secure_url;
    //   }
    // }


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
  onSetActiveProduct,
  setPhotosToProduct,
  getPhotosToProduct,
  startPhotoUpload,

} = productSlice.actions;