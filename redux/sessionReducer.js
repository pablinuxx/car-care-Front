import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: { token: null, user: null },

  reducers: {
    setLoggedUser(state, action) {
      return action.payload;
    },
  },
});

export const { setLoggedUser } = sessionSlice.actions;
export default sessionSlice.reducer;
