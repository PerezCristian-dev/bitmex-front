

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateCardPayloadI } from './socket.type';

export const initialData: {
    data: CreateCardPayloadI[]
    card?: CreateCardPayloadI
} = { data: [], };

export const SocketSlice = createSlice({
    initialState: initialData,
    name: 'socket',
    reducers: {
        setSocketData: (state: any, action: PayloadAction<CreateCardPayloadI>) => {
            state.data = action.payload
        },
    },
});
export const { setSocketData } = SocketSlice.actions;
export default SocketSlice.reducer;