import {Box} from "@mui/material";

export default function SecondaryToolTip() {
    return (
        <Box component={"span"} sx={{
            m: 5,
            width: 'fit-content',
            display: 'flex',
            background: '#444444',
            borderRadius: '4px',
            padding: '5px',
            justifyContent: 'center'
        }}>

        </Box>
    );
}
export {}