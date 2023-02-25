import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `http://localhost:5000/admin/hotel`;
export const getHotel = createAsyncThunk("getHotel", async () => {
  const request = await axios(url).catch((err) => {
    console.log(err);
  });
  return request;
});
const initialState = {
  hotelList: [],
};
const hotelSlice = createSlice({
  name: "Hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHotel.fulfilled, (state, action) => {
      state.hotelList = action.payload.data;
    });
  },
});

export default hotelSlice.reducer;
