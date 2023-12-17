import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  data: {} as Product
};

export const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    onOpen: (state, action: { payload: Product }) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    onClose: (state) => { state.isOpen = false; }
  }
});

export const { onOpen, onClose } = previewSlice.actions;
export default previewSlice.reducer;