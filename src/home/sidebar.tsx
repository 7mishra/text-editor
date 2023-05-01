import {Box, Button, Typography} from "@mui/material";
import SearchBarSidebar from "./searchBarSidebar";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
// font-family: 'Offside', cursive;
// font-family: 'Sono', sans-serif;
export default function Sidebar() {
    return (
        <Box sx={{padding: '10px', height: '100%', width: '100%'}}>
            <Typography sx={{fontFamily: 'Offside, cursive', fontSize: '30px', color: '#ffffff'}}>Seven</Typography>
            <SearchBarSidebar/>
            <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '100px'}}>
                <Button sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <HomeRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        color: '#ffffff',
                        fontWeight: '300',
                    }}>Home</Typography>
                </Button>
                <Button sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <NumbersRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#ffffff'
                    }}>Projects</Typography>
                </Button>
                <Button sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <ViewStreamRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#ffffff'
                    }}>Tasks</Typography>
                </Button>
                <Button sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <CalendarTodayRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#ffffff'
                    }}>Calendar</Typography>
                </Button>
            </Box>
        </Box>
    )
}