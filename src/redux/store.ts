import { configureStore } from "@reduxjs/toolkit";
import announcementSlice from "./announcement/announcement.slice";
import socketSlice from "./socket/socket.slice";

export const store = configureStore({
  reducer: {
    announcement: announcementSlice,
    socket: socketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
