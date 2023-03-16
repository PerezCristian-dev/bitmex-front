


import { CreateCardPayloadI } from './announcement.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialData: {
    data: CreateCardPayloadI[]
    card?: CreateCardPayloadI
} = { data: [], };

export const AnnouncementSlice = createSlice({
    initialState: initialData,
    name: 'announcements',
    reducers: {
        setAnnouncement: (state: any, action: PayloadAction<CreateCardPayloadI>) => {
            state.data = action.payload
        },
    },
});
export const { setAnnouncement } = AnnouncementSlice.actions;
export default AnnouncementSlice.reducer;