import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {TaskInterface} from "../task-manager/task.interface";


const initialState: TaskInterface = {
    id: '',
    name: '',
    createdAt: '',
    createdBy: '',
    status: 'Todo',
    description: '',
    dueDate: '',
    priority: 'Medium',
    comments: [],
    attachments: [],
    tags: [],
    subTasksIds: [],
    parentTask: '',
    isHidden: false,
    updatedAt: '',
    updatedBy: '',
};
export const newTaskSlice = createSlice({
    name: 'newTask',
    initialState,
    reducers: {
        SET_TASK_NAME: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        RESET_TASK_NAME: (state) => {
            state.name = initialState.name;
        },

        SET_TASK_ID: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        RESET_TASK_ID: (state) => {
            state.id = initialState.id;
        },

        SET_CREATED_AT: (state) => {
            state.createdAt = Date.now().toString();
        },
        RESET_CREATED_AT: (state) => {
            state.createdAt = initialState.createdAt;
        },

        SET_CREATED_BY: (state, action: PayloadAction<string>) => {
            state.createdBy = action.payload;
        },
        RESET_CREATED_BY: (state) => {
            state.createdAt = initialState.createdBy;
        },

        SET_STATUS: (state, action: PayloadAction<'Todo' | 'In-progress' | 'Done'>) => {
            state.status = action.payload;
        },
        RESET_STATUS: (state) => {
            state.status = initialState.status;
        },

        SET_DESCRIPTION: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        RESET_DESCRIPTION: (state) => {
            state.description = initialState.description;
        },
        SET_DUE_DATA: (state, action: PayloadAction<string>) => {
            state.dueDate = action.payload;
        },
        RESET_DUE_DATA: (state) => {
            state.dueDate = initialState.dueDate;
        },

        SET_PRIORITY: (state, action: PayloadAction<'Low' | 'Medium' | 'High'>) => {
            state.priority = action.payload;
        },
        RESET_PRIORITY: (state) => {
            state.priority = initialState.priority;
        },

        ADD_TAGS: (state, action: PayloadAction<string>) => {
            state.tags.push(action.payload);
        },
        REMOVE_TAGS: (state) => {
            state.tags.pop();
        },
        RESET_TAGS: (state) => {
            state.tags = initialState.tags;
        },

        ADD_COMMENTS: (state, action: PayloadAction<string>) => {
            state.comments.push(action.payload);
        },
        REMOVE_COMMENTS: (state, action: PayloadAction<string>) => {
            const index = state.comments.indexOf(action.payload);
            if (index > -1) {
                state.comments = state.comments.splice(index, 1)
            }
        },
        RESET_COMMENTS: (state) => {
            state.comments = initialState.comments;
        },

        ADD_ATTACHMENTS: (state, action: PayloadAction<string>) => {
            state.attachments.push(action.payload);
        },
        REMOVE_ATTACHMENTS: (state, action: PayloadAction<string>) => {
            const index = state.attachments.indexOf(action.payload);
            if (index > -1) {
                state.attachments = state.attachments.splice(index, 1)
            }
        },
        RESET_ATTACHMENTS: (state) => {
            state.attachments = initialState.attachments;
        },

        ADD_SUB_TASK_IDS: (state, action: PayloadAction<string>) => {
            state.subTasksIds.push(action.payload);
        },
        REMOVE_SUB_TASK_IDS: (state, action: PayloadAction<string>) => {
            const index = state.subTasksIds.indexOf(action.payload);
            if (index > -1) {
                state.subTasksIds = state.subTasksIds.splice(index, 1)
            }
        },
        RESET_SUB_TASK_IDS: (state) => {
            state.subTasksIds = initialState.subTasksIds;
        },

        SET_PARENT_TASK: (state, action: PayloadAction<string>) => {
            state.parentTask = action.payload;
        },
        RESET_PARENT_TASK: (state) => {
            state.parentTask = initialState.parentTask;
        },

        SET_AS_HIDDEN: (state, action: PayloadAction<boolean>) => {
            state.isHidden = action.payload;
        },
        RESET_AS_HIDDEN: (state) => {
            state.isHidden = initialState.isHidden;
        },

        SET_UPDATED_AT: (state, action: PayloadAction<string>) => {
            state.updatedAt = action.payload;
        },
        RESET_UPDATED_AT: (state) => {
            state.updatedAt = initialState.updatedAt;
        },

        SET_UPDATED_BY: (state, action: PayloadAction<string>) => {
            state.updatedBy = action.payload;
        },
        RESET_UPDATED_BY: (state) => {
            state.updatedBy = initialState.updatedBy;
        },


    },
});

export const {
    SET_AS_HIDDEN,
    SET_UPDATED_BY,
    SET_UPDATED_AT,
    SET_DESCRIPTION,
    SET_CREATED_AT,
    SET_CREATED_BY,
    SET_PARENT_TASK,
    SET_PRIORITY,
    SET_STATUS,
    SET_TASK_ID,
    SET_TASK_NAME,
    SET_DUE_DATA,
    REMOVE_SUB_TASK_IDS,
    RESET_SUB_TASK_IDS,
    RESET_AS_HIDDEN,
    RESET_PARENT_TASK,
    RESET_UPDATED_BY,
    RESET_UPDATED_AT,
    RESET_ATTACHMENTS,
    RESET_COMMENTS,
    RESET_DESCRIPTION,
    RESET_DUE_DATA,
    RESET_PRIORITY,
    RESET_TASK_NAME,
    RESET_STATUS,
    RESET_TAGS,
    RESET_TASK_ID,
    RESET_CREATED_AT,
    RESET_CREATED_BY,
    REMOVE_COMMENTS,
    REMOVE_TAGS,
    REMOVE_ATTACHMENTS,
    ADD_TAGS,
    ADD_ATTACHMENTS,
    ADD_COMMENTS,
    ADD_SUB_TASK_IDS
} = newTaskSlice.actions;
export const NEW_TASK_STATE = (state: RootState) => state.newTask;
export default newTaskSlice.reducer;