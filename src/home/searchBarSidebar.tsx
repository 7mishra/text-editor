import {Box, IconButton, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function SearchBarSidebar() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', borderRadius: 2, background: '#333333'}}>
            <IconButton sx={{p: 1, pl: 2}} aria-label="search">
                <SearchIcon/>
            </IconButton>
            <InputBase sx={{
                ml: 1, flex: 1, "& input": {
                    color: '#9e9e9e',
                }
            }} placeholder="Search..."/>
            <IconButton sx={{p: 1}} aria-label="go">
                <ChevronRightIcon/>
            </IconButton>
        </Box>
    );
}
export {};