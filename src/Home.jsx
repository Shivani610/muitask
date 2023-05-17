import { Container, Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography, Card, CardHeader, Avatar, CardContent } from '@mui/material'
import { TextField, IconButton } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import React from 'react'

export default function Home() {
    const imageStyle = {
        // maxWidth: '50%',
        // maxHeight: '50%', 
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "auto"
    };
    var items = [

        {
            title: "Amazing product and company",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quae, ut.Delectus, voluptatibus officia? Nulla velit adipisci recusandae dicta.Quibusdam dicta fuga soluta possimus ipsam corrupti eaque ea nihil facere iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit, laboriosam quos sint corporis laborum repudiandae natus ipsum totam enim quam ratione, vitae, ex illo expedita saepe velit mollitia pariaturmmmm!"
        },
        {
            img: <img src="./images/card1.png" alt="" />,
            title: "Amazing product and company",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quae, ut.Delectus, voluptatibus officia? Nulla velit adipisci recusandae dicta.Quibusdam dicta fuga soluta possimus ipsam corrupti eaque ea nihil facere iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit, laboriosam quos sint corporis laborum repudiandae natus ipsum totam enim quam ratione, vitae, ex illo expedita saepe velit mollitia pariaturmmmm!"
        },
        {
            img: <img src="./images/card2.png" alt="" />,
            title: "Amazing product and company",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quae, ut.Delectus, voluptatibus officia? Nulla velit adipisci recusandae dicta.Quibusdam dicta fuga soluta possimus ipsam corrupti eaque ea nihil facere iure!yyyy"
        }
    ]
    return <>
        {/* first page start */}
        <Box position="relative">
            <img src="./images/background.png" alt="Image" style={{ width: '100%', height: "100vh" }} />
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
                <img src="./images/loginLogo.png" alt="" sx={{ color: '#46B19D' }} />
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
                        <img src="./images/Group 1431.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <img src="./images/Group 1432.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <img src="./images/Group 1433.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>

                        <img src="./images/Group 1658.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>

                        <img src="./images/Group 1614.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <img src="./images/Group 1615.png" alt="" />
                    </Grid>

                </Grid>
            </Box >
        </Box>
        {/* first page end */}
        {/* second page start */}
        <Box
            style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
                backgroundColor: '#2B2B2B',
            }}
        >
            <Typography variant="h4" sx={{ margin: "20px" }} >Our Key Value</Typography>
            <Grid
                container
                spacing={5}
                style={{
                    // padding: "60px",
                    display: "flex",
                    alignItems: "center",
                    color: 'white'
                }}
            >

                {/* ////////////////////////////////////////// */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        // alignItems: "center",
                    }}
                >
                    <img src="./images/Group 1558.png
                    " alt="Image" style={imageStyle} />
                    <Typography variant="h5" color="initial" sx={{ color: '#FFFFFF', marginTop: "10px" }}>
                        Get notice by right customer
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', paddingX: "47px", marginTop: "10px" }} >Lorem ipsum dolor sit amet consectetur adipisicings ducimus dolorum, sed id maxime provmque modi beatae sed consectetur quisquam ullam dicta dolorum maiores</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        // alignItems: "center",
                    }}
                >
                    <img src="./images/call.png
                    " alt="Image" style={imageStyle} />
                    <Typography variant="h5" color="initial" sx={{ color: '#FFFFFF', marginTop: "10px" }}>
                        Get notice by right customer
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', paddingX: "47px", marginTop: "10px" }} >Lorem ipsum dolor sit amet consectetur adipisicings ducimus dolorum, sed id maxime provmque modi beatae sed consectetur quisquam ullam dicta dolorum maiores</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        // alignItems: "center",
                    }}
                >
                    <img src=".images/Group 1551.png
                    " alt="Image" style={imageStyle} />
                    <Typography variant="h5" color="initial" sx={{ color: '#FFFFFF', marginTop: "10px" }}>
                        Get notice by right customer
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', paddingX: "47px", marginTop: "10px" }} >Lorem ipsum dolor sit amet consectetur adipisicings ducimus dolorum, sed id maxime provmque modi beatae sed consectetur quisquam ullam dicta dolorum maiores</Typography>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={5}
                style={{
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    // backgroundColor: '#2B2B2B',
                    color: 'white'
                }}
            >

                {/* ////////////////////////////////////////// */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        // paddingX: "50px"
                        // alignItems: "center",
                    }}
                >
                    <img src=".images/Group 1554.png
                    " alt="Image" style={imageStyle} />
                    <Typography variant="h5" color="initial" sx={{ color: '#FFFFFF', marginTop: "10px" }}>
                        Get notice by right customer
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', paddingX: "47px", marginTop: "10px" }} >Lorem ipsum dolor sit amet consectetur adipisicings ducimus dolorum, sed id maxime provmque modi beatae sed consectetur quisquam ullam dicta dolorum maiores</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        // alignItems: "center",
                    }}
                >
                    <img src=".images/Vector.png
                    " alt="Image" style={imageStyle} />
                    <Typography variant="h5" color="initial" sx={{ color: '#FFFFFF', marginTop: "10px" }}>
                        Get notice by right customer
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', paddingX: "47px", marginTop: "10px" }} >Lorem ipsum dolor sit amet consectetur adipisicings ducimus dolorum, sed id maxime provmque modi beatae sed consectetur quisquam ullam dicta dolorum maiores</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        // alignItems: "center",
                    }}
                >
                    <img src="./images/Group 1550.png
                    " alt="Image" style={imageStyle} />
                    <Typography variant="h5" color="initial" sx={{ color: '#FFFFFF', marginTop: "10px" }}>
                        Get notice by right customer
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', paddingX: "47px", marginTop: "10px" }} >Lorem ipsum dolor sit amet consectetur adipisicings ducimus dolorum, sed id maxime provmque modi beatae sed consectetur quisquam ullam dicta dolorum maiores</Typography>
                </Grid>
            </Grid>
        </Box >
        {/* second page end */}
        {/* third page start */}
        <Typography variant="h4" color="initial" sx={{ textAlign: "center", margin: "30px" }}>Customer Feedback</Typography>
        <Carousel>
            {
                items.map((item, i) => <>

                    <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}
                        // <Grid container spacing={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            alignItems: "center",
                            // marginLeft: "auto",
                            // marginRight: "auto",


                        }}
                    >
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ minWidth: 275, backgroundColor: "#98bdff" }} >
                                <CardHeader

                                    avatar={
                                        <Avatar aria-label="recipe" sx={{ height: "60px", width: "60px" }}>
                                            {/* {item.img} */}
                                        </Avatar>
                                    }

                                />
                                <CardContent>
                                    <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>


                                        {item.description}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card sx={{ minWidth: 275, backgroundColor: "#98bdff" }}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" sx={{ height: "60px", width: "60px" }}>
                                            {item.img}
                                        </Avatar>
                                    }

                                />
                                <CardContent>
                                    <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                        {item.description}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card sx={{ minWidth: 275, backgroundColor: "#98bdff" }}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" sx={{ height: "60px", width: "60px" }}>
                                            {item.img}
                                        </Avatar>
                                    }

                                />
                                <CardContent>
                                    <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                        {item.description}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </>)
            }
        </Carousel>
        {/* third page end */}
    </>
}
