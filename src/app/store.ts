import {configureStore} from '@reduxjs/toolkit';
import editorReducer from '../reducers/editor';
import newTaskReducer from '../reducers/newTask';

export const store = configureStore({
    reducer: {
        editor: editorReducer,
        newTask: newTaskReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
