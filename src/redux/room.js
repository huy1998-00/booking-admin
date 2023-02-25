import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `http://localhost:5000/admin/room`;
export const getRoom = createAsyncThunk("getroom", async () => {
  const request = await axios(url).catch((err) => {
    console.log(err);
  });
  return request;
});
const initialState = {
  RoomList: [],
};
const roomSlice = createSlice({
  name: "Room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoom.fulfilled, (state, action) => {
      state.RoomList = action.payload.data;
    });
  },
});

export default roomSlice.reducer;
