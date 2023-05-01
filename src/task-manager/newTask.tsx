import React, {useState} from 'react';
import {
    Box,
    Button,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from '@mui/material';
import {AppDispatch} from "../app/store";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {
    ADD_TAGS,
    NEW_TASK_STATE,
    REMOVE_TAGS,
    SET_DESCRIPTION,
    SET_DUE_DATA,
    SET_PRIORITY,
    SET_STATUS,
    SET_TASK_NAME
} from "../reducers/newTask";

const NewTask: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([] as string[]);
    const newTaskState = useAppSelector(NEW_TASK_STATE);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (inputValue.trim()) {
                dispatch(ADD_TAGS(inputValue.trim()))
                setInputValue('');
            }
        } else if (event.key === 'Backspace' && !inputValue) {
            dispatch(REMOVE_TAGS());
        }
    };

    const handleDeleteTag = (tag: string) => {
        setTags(tags.filter((value) => value !== tag));
    };


    const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SET_TASK_NAME(event.target.value));
    };

    const handleStatusChange = (event: SelectChangeEvent) => {
        const status = event.target.value as string;
        if (status === 'Todo') dispatch(SET_STATUS('Todo'));
        else if (status === 'In-progress')
            dispatch(SET_STATUS('In-progress'));
        else if (status === 'Done')
            dispatch(SET_STATUS('Done'));
        else dispatch(SET_STATUS('Todo'));
    };

    const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(SET_DESCRIPTION(event.target.value));
    };

    const handleDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SET_DUE_DATA(event.target.value));
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        console.log(newTaskState);
    };

    function handlePriorityChange(event: SelectChangeEvent) {
        const priority = event.target.value as string;
        if (priority === 'Low') dispatch(SET_PRIORITY('Low'));
        else if (priority === 'Medium')
            dispatch(SET_PRIORITY('Medium'));
        else if (priority === 'High')
            dispatch(SET_PRIORITY('High'));
        else dispatch(SET_PRIORITY('Medium'));
    }

    return (
        <Box sx={{mt: 10, ml: 3, mr: 3, display: "flex", flexDirection: 'column', overflowY: 'auto'}}>
            <Typography sx={{fontFamily: 'Offside, cursive', fontSize: '24px', color: '#ffffff'}}>Create A New
                Task</Typography>
            <TextField label="Task Name" variant="outlined" value={newTaskState.name}
                       onChange={handleTaskNameChange}
                       sx={{
                           mt: 2, ml: 2, width: '400px',
                           fontSize: '18px', color: '#ffffff',
                           borderColor: '#BFB2FF',
                           fontFamily: 'Sono, sans-serif',
                       }}
            />

            <FormControl sx={{mt: 2, ml: 2, width: '400px'}} variant="outlined">
                <InputLabel id="status-label">Status</InputLabel>
                <Select labelId="status-label" label="Status" value={newTaskState.status}
                        onChange={handleStatusChange}>
                    <MenuItem value="todo">Todo</MenuItem>
                    <MenuItem value="In-progress">In Progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>
            </FormControl>

            <Box sx={{mt: 2, ml: 2, width: '400px'}}>
                <Typography sx={{fontFamily: 'Sono, sans-serif', fontSize: '16px', mb: 1, color: '#ffffff'}}>Add a
                    Description</Typography>
                <textarea
                    onChange={handleDescChange}
                    placeholder="Description"
                    value={newTaskState.description}
                    style={{
                        height: '200px',
                        width: '600px',
                        color: '#FFFFFF',
                        fontFamily: 'Sono, sans-serif',
                        background: '#333333',
                        border: '1px solid #BFB2FF',
                        borderRadius: '16px',
                        padding: '10px'
                    }}/>
            </Box>
            <TextField
                label={'Attach Tags to your Task'}
                variant="outlined"
                sx={{mt: 2, ml: 2, pl: '1', minWidth: '400px'}}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                InputProps={{
                    startAdornment: newTaskState!.tags.map((tag) => (
                        <Chip key={tag} label={tag} onDelete={() => handleDeleteTag(tag)}/>
                    )),
                }}
            />

            <FormControl sx={{mt: 2, ml: 2, width: '400px'}} variant="outlined">
                <InputLabel id="priority-label">Priority</InputLabel>
                <Select labelId="priority-label" label="Priority" value={newTaskState.priority}
                        onChange={handlePriorityChange}>
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </Select>
            </FormControl>

            <TextField sx={{mt: 2, ml: 2, width: '400px'}} type={"date"} variant="outlined" value={newTaskState.dueDate}
                       onChange={handleDueDateChange}/>

            <Button onClick={handleSubmit}>Create Task</Button>
        </Box>
    );
}

export default NewTask;
