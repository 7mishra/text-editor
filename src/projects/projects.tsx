import {Box, Button, Typography} from "@mui/material";
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';

export default function Projects() {
    return (
        <Box sx={{width: '100%', padding: '20px'}}>
            <Typography sx={{fontFamily: 'Offside, cursive', fontSize: '26px', color: '#ffffff'}}>Your
                Projects</Typography>
            <Box sx={{display: 'flex', mr: 1, justifyContent: 'flex-start', mt: 2, overflowX: 'scroll'}}>
                <Button sx={{
                    display: 'flex',
                    height: '100px',
                    width: '200px',
                    alignItems: 'center',
                }}>
                    <FolderOpenRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#ffffff'
                    }}>Yellow</Typography>
                </Button>
                <Button sx={{
                    display: 'flex',
                    height: '100px',
                    width: '200px',
                    alignItems: 'center',
                }}>
                    <FolderOpenRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#ffffff'
                    }}>Yellow</Typography>
                </Button>
                <Button sx={{
                    display: 'flex',
                    height: '100px',
                    width: '200px',
                    alignItems: 'center',
                }}>
                    <FolderOpenRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#ffffff'
                    }}>Yellow</Typography>
                </Button>
                <Button sx={{
                    display: 'flex',
                    height: '100px',
                    width: '200px',
                    alignItems: 'center',
                }}>
                    <FolderOpenRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#ffffff'
                    }}>Yellow</Typography>
                </Button>
                <Button sx={{
                    display: 'flex',
                    height: '100px',
                    width: '200px',
                    alignItems: 'center',
                }}>
                    <FolderOpenRoundedIcon sx={{color: '#ffffff'}}/>
                    <Typography sx={{
                        ml: 2,
                        fontFamily: 'Sono, sans-serif',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#ffffff'
                    }}>Yellow</Typography>
                </Button>
            </Box>
        </Box>
    );
}
export {};