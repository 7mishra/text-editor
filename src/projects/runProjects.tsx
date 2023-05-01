import {Box, Button} from "@mui/material";

export default function RunProject() {
    return (
        <Box>
            <Box sx={{mt: 2, display: 'flex', gap: '20px'}}>
                <Button
                    sx={{
                        color: '#BFB2FF',
                        borderColor: '#BFB2FF',
                        fontFamily: 'Sono, sans-serif',
                        '&:hover': {
                            backgroundColor: '#BFB2FF',
                            color: '#fff',
                            borderColor: '#BFB2FF',
                            borderWidth: '2px',
                            cursor: 'pointer',
                        },
                        borderWidth: '2px',
                    }}
                    variant="outlined"
                >
                    Run File
                </Button>
                <Button
                    sx={{
                        color: '#CD5C5C',
                        borderColor: '#CD5C5C',
                        fontFamily: 'Sono, sans-serif',
                        '&:hover': {
                            backgroundColor: '#CD5C5C',
                            color: '#fff',
                            borderColor: '#CD5C5C',
                            borderWidth: '2px',
                            cursor: 'pointer',
                        },
                        borderWidth: '2px',
                    }}
                    variant="outlined"
                >
                    Clean File
                </Button>
            </Box>
            <Box sx={{mt: 2, display: 'flex', gap: '20px'}}>
                <Button
                    sx={{
                        color: '#BFB2FF',
                        borderColor: '#BFB2FF',
                        fontFamily: 'Sono, sans-serif',
                        '&:hover': {
                            backgroundColor: '#BFB2FF',
                            color: '#fff',
                            borderColor: '#BFB2FF',
                            borderWidth: '2px',
                            cursor: 'pointer',
                        },
                        borderWidth: '2px',
                    }}
                    variant="outlined"
                >
                    Inserts Tests Cases
                </Button>
                <Button
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#B2FFBF',
                        fontFamily: 'Sono, sans-serif',
                        borderRadius: '16px',
                        border: '2px solid #B2FFBF',
                        padding: '2px 8px',
                        '&:hover': {
                            backgroundColor: '#B2FFBF',
                            color: '#fff',
                            border: '2px solid #B2FFBF',
                        },
                    }}
                    variant="outlined"
                >Test Case 1</Button>
            </Box>
        </Box>
    )

}
export {};