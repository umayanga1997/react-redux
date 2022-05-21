import { createSlice } from "@reduxjs/toolkit";

// Make initial value object for use to defferent things
const initialStateValue = {
  name: "",
  age: "",
  email: "",
};

// Create Slice for declireing state variables, action functions and etc
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout(state) {
      state.value = initialStateValue;
    },
  },
});

// export actions functions
export const { login, logout } = userSlice.actions;
// Export the total of configurations of the reduser
export default userSlice.reducer;
