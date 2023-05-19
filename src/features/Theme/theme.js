import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: { color: "white" },
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default theme.reducer;
export const { changeTheme } = theme.actions;
