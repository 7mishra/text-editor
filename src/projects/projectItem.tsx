import {Box, Tab, Tabs, Typography} from "@mui/material";

import RunProject from "./runProjects";
import CodeEditor from "./projectEditor";
import {useEffect} from "react";
import axios from "axios";

export default function ProjectItem() {
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects').then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
        return () => {

        };
    }, []);


    return (
        <Box sx={{height: '100%', width: '100%', maxWidth: '100%', padding: '20px', overflow: 'auto'}}>
            <Typography sx={{fontFamily: 'Offside, cursive', fontSize: '26px', color: '#ffffff'}}>Projects
                Name</Typography>
            <Tabs
                sx={{mt: 5}}
                scrollButtons={false}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab
                    label="Tab 1"
                    sx={{
                        color: '#BFB2FF',
                        fontFamily: 'Sono, sans-serif',
                        minWidth: '200px',
                        minHeight: 48,
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                        borderBottom: '2px solid #BFB2FF',
                        borderTopLeftRadius: '100px',
                        borderTopRightRadius: '100px',
                        backgroundColor: '#333333',
                        '&:hover': {
                            backgroundColor: '#2C2C2C',
                        },
                        '&.Mui-selected': {
                            borderBottom: '2px solid #fff',
                            backgroundColor: '#fff',
                            borderTopLeftRadius: '0',
                            borderTopRightRadius: '0',
                        },
                    }}
                />
            </Tabs>
            <RunProject/>
            <CodeEditor/>
        </Box>
    );
}
export {};