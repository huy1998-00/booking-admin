import { configureStore } from "@reduxjs/toolkit";

import TransReducer from "./trans";
import RoomReducer from "./room";
import HotelReducer from "./hotel";
import UserReducer from "./user";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    trans: TransReducer,
    hotel: HotelReducer,
    room: RoomReducer,
  },
});
