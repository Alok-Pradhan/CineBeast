// src/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Updated initial state with another variable
const initialState = {
    carouselInfo:[]
};

// Create a slice for the UI state
const uiSlice = createSlice({
  name: "cineBeast",
  initialState,
  reducers: {
    set: (state, action) => {
      // Update the state with the payload
      return { ...state, ...action.payload };
    },
  },
});

// Export the action creators
export const { set } = uiSlice.actions;

// Configure the store
const store = configureStore({
  reducer: uiSlice.reducer,
});

export default store;
