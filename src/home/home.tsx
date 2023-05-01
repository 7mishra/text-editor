import {Box} from "@mui/material";
import Sidebar from "./sidebar";
import NewTask from "../task-manager/newTask";

export default function Home() {
    return (
        <Box sx={{display: 'flex', height: '100%', width: '100%'}}>
            <Box sx={{width: '20%', height: '100%'}}>
                <Sidebar/>
            </Box>
            <Box sx={{width: '80%', height: '100%', ml: 2}}>
                <NewTask/>
            </Box>
        </Box>
    )
}
export {}