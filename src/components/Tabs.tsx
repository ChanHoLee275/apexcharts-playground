import { Box, Tabs as MUITabs, Tab } from '@mui/material';
import React from 'react';

export default function Tabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box>
            <MUITabs value={value} onChange={handleChange}>
                <Tab label="Bar Chart" />
                <Tab label="Line Chart" />
                <Tab label="Stacked Bar Chart" />
                <Tab label="Line And Column Chart" />
            </MUITabs>
        </Box>
    );
}
