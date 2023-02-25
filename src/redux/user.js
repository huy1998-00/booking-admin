import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `http://localhost:5000/admin/user`;
export const getUser = createAsyncThunk("getUser", async () => {
  const request = await axios(url).catch((err) => {
    console.log(err);
  });
  return request;
});
const initialState = {
  userList: [],
};
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userList = action.payload.data;
    });
  },
});

export default userSlice.reducer;
