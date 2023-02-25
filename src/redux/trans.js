import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `http://localhost:5000/admin/trans`;
export const getTrans = createAsyncThunk("getTrans", async () => {
  const request = await axios(url).catch((err) => {
    console.log(err);
  });
  return request;
});
const initialState = {
  tranList: [],
};
const transSlice = createSlice({
  name: "Trans",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrans.fulfilled, (state, action) => {
      state.tranList = action.payload.data;
    });
  },
});

export default transSlice.reducer;
