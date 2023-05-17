import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import { TextField, IconButton } from '@mui/material';


import React from 'react'

export default function Pra() {



    return <  >
        <Box position="relative">
            <img src="images/background.png" alt="Image" style={{ width: '100%', height: '40%' }} />
            <Button
                variant="contained"
                sx={{
                    position: 'absolute',
                    top: '50px',
                    right: '100px',
                    borderRadius: '30px',
                    '@media (max-width: 600px)': {
                        top: '10px',
                        right: '10px',
                        padding: "10px"
                    },
                }}
            >
                <img src="images/loginLogo.png" alt="" sx={{ color: '#46B19D' }} />
                <span>Login</span>
            </Button>
            <Box
                position="absolute"
                top="40%"
                left="25%"
                right="25%"
                color="white"
                textAlign="center"
                sx={{
                    '@media (max-width: 600px)': {
                        top: '30%',
                        left: '5%',
                        right: '5%',
                    },
                }}
            >
                <Typography variant="h5" color="white" sx={{ marginY: '20px' }}>
                    Search Engines Of Construction Industry
                </Typography>
                <form>
                    <TextField
                        label="search anything anywhere"
                        variant="outlined"

                        size="large"
                        fullWidth
                        InputProps={{
                            endAdornment: <IconButton type="submit" aria-label="search"></IconButton>,
                        }}
                        sx={{
                            borderRadius: '40px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '40px',
                                borderColor: 'white',
                                border: '4',
                                backgroundColor: "white"
                            },
                        }}
                    ></TextField>
                </form>
                <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    sx={{ marginTop: '20px' }}
                >
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{ color: 'white' }}>
                        Search By:
                    </FormLabel>
                    <FormControl component="fieldset" sx={{ marginLeft: '10px' }}>
                        <RadioGroup row aria-label="searchBy">
                            <FormControlLabel value="Y" control={<Radio />} label="Company Name" sx={{ color: 'white' }} />
                            <FormControlLabel value="N" control={<Radio />} label="Product Name" />
                            <FormControlLabel value="Z" control={<Radio />} label="All Profile" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Box>
            <Box position="absolute"
                top="75%"
                left="20%"
                right="20%"
                bottom="10%"
                color="white "
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    spacing={4}
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        color: "white",
                        marginTop: "20px",
                        // marginBottom: "20px"

                    }}
                >
                    <Grid item xs={12} sm={4} md={6}>
                        <img src="images/Group 1431.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <img src="images/Group 1432.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <img src="images/Group 1433.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>

                        <img src="images/Group 1658.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>

                        <img src="images/Group 1614.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <img src="images/Group 1615.png" alt="" />
                    </Grid>

                </Grid>
            </Box >
        </Box>
    </ >
}
