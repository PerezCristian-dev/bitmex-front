import { SocketI } from '@interfaces/app.interface';
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { CreateCardPayloadI } from './socket.type';

export const initialData: {
    data: SocketI[]
    card?: CreateCardPayloadI
} = { data: [], };

export const SocketSlice = createSlice({
    initialState: initialData,
    name: 'socket',
    reducers: {
        setSocketData: (state: any, action: PayloadAction<SocketI>) => {
        
            if(state.data.length >= 10) state.data.shift()
            
            state.data.push(action.payload)
        },
    },
});
export const { setSocketData } = SocketSlice.actions;
export default SocketSlice.reducer;