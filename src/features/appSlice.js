import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    value: 0,
  },
  reducers: {

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.app.value)`
export const selectCount = (state) => state.app.value;

export default appSlice.reducer;
