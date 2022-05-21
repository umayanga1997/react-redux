import { createSlice } from "@reduxjs/toolkit";

// Create Slice for declireing state variables, action functions and etc
export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "",
  },
  reducers: {
    changeColor(state, action) {
      state.value = action.payload;
    },
  },
});

// export actions functions
export const { changeColor } = colorSlice.actions;

// Export the total of configurations of the reduser
export default colorSlice.reducer;
