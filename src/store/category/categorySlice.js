import { createSlice } from "@reduxjs/toolkit";

// const tempCategory = {
//     _id: new Date().getTime(),
//     name: 'Margaritas',
//     description: 'Margaritas con tulipanes',
//     user: {
//         _id: '123',
//         name: 'Fernando'
//     }
// }

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
        state.categories = state.categories.map((event) => {
            if (event.id === payload.id) {
            return payload;
            }
            return event;
        });
        state.activeUpdateCategory = true;
        // state.activeCategory = payload;
        },

        onDeleteCategory: (state) => {
        if (state.activeCategory) {
            state.categories = state.categories.filter(
            (event) => event.id !== state.activeCategory.id
            );
        }
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
} = categorySlice.actions;
