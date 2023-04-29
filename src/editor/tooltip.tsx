import {Box, Divider, IconButton, Typography} from "@mui/material";
import HighlightRoundedIcon from '@mui/icons-material/HighlightRounded';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import FormatUnderlinedRoundedIcon from '@mui/icons-material/FormatUnderlinedRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

export default function ToolTip() {
    return (
        <Box component={"span"} sx={{
            opacity: '0.75',
            m: 5,
            width: 'fit-content',
            display: 'flex',
            background: '#444444',
            borderRadius: '4px',
            padding: '5px',
            justifyContent: 'center'
        }}>

            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <Typography sx={{fontSize: '14px'}}>24</Typography>
                </IconButton>
            </Box>
            <Divider variant="middle" sx={{background: '#353535', width: '1px', ml: 1}} orientation="vertical"
                     flexItem/>
            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <FormatItalicRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>
            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <FormatBoldRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>
            <Divider variant="middle" sx={{background: '#353535', width: '1px', ml: 1}} orientation="vertical"
                     flexItem/>
            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <HighlightRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>

            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <ColorLensRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>

            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <FormatUnderlinedRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>

            <Divider variant="middle" sx={{background: '#353535', width: '1px', ml: 1}} orientation="vertical"
                     flexItem/>

            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <LinkRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>


            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <CodeRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>

            <Divider variant="middle" sx={{background: '#353535', width: '1px', ml: 1}} orientation="vertical"
                     flexItem/>

            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1}}>
                <IconButton>
                    <AlternateEmailRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>

            <Box component={"span"} sx={{background: '#353535', borderRadius: '8px', ml: 1, mr: 1}}>
                <IconButton>
                    <ShareRoundedIcon fontSize={"small"} sx={{color: '#ffffff'}}/>
                </IconButton>
            </Box>

        </Box>
    );
}
export {};