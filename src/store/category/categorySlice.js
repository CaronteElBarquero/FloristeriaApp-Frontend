import { createSlice } from "@reduxjs/toolkit";



export const categorySlice = createSlice({

  name: "category",

  initialState: {
    isLoadingCategory: true,
    categories: [
      // tempCategory
    ],
    activeCategory: null,
    activeCreateCategory: false,
    activeUpdateCategory: false,
    activeCategoryUpdate: {
      id: '',
      name: '',
      description: ''
    },
    // errorMessage: undefined,
  },

  reducers: {
    onSetActiveCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },


    onAddNewCategory: (state, { payload }) => {
      state.categories.push(payload);
      state.activeCategory = null;
      state.activeCreateCategory = true;
      state.activeUpdateCategory = false;
    },

    onUpdateCategory: (state, { payload }) => {
      state.categories = state.categories.map((category) => {
        if (category.id === payload.id) {
          return payload;
        }
        return category;
      });
      state.activeUpdateCategory = true;
      // errorMessage = payload;
    },


    onDeleteCategory: (state, { payload }) => {
      state.categories = state.categories.filter((category) => category.id !== payload);
    },

    
    onLoadCategory: (state, { payload = [] }) => {
      state.isLoadingCategory = false;

      payload.forEach((event) => {
        const exist = state.categories.some(
          (dbCategory) => dbCategory.id === event.id
        );

        if (!exist) {
          state.categories.push(event);
        }
      });
    },


    onActiveCreateCategory: (state) => {
      state.activeCreateCategory = true;
      state.activeUpdateCategory = false;
    },


    onActiveUpdateCategory: (state) => {
      state.activeUpdateCategory = true;
      state.activeCreateCategory = false;
    },


    onActiveCategory: (stata, { payload }) => {
      stata.activeCategoryUpdate = payload;
    },
  },
});


export const {
  onSetActiveCategory,
  onAddNewCategory,
  onUpdateCategory,
  onDeleteCategory,
  onLoadCategory,
  onActiveCreateCategory,
  onActiveUpdateCategory,
  onActiveCategory
} = categorySlice.actions;
