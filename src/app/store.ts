import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import editorReducer from '../reducers/editor';

export const store = configureStore({
    reducer: {
        editor: editorReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
