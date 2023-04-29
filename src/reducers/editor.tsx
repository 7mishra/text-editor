import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

export interface editorStateInterface {
    value: number;
    status: string;
}

const initialState: editorStateInterface = {
    value: 0,
    status: 'idle',
};
export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const {increment, decrement, incrementByAmount} = editorSlice.actions;
export const editorState = (state: RootState) => state.editor;
export default editorSlice.reducer;