import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, CardHeader, Avatar, Card, CardContent, Typography, CardActions, Grid, Container } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
function CardCare(props) {
    var items = [

        {
            title: "Amazing product and company",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quae, ut.Delectus, voluptatibus officia? Nulla velit adipisci recusandae dicta.Quibusdam dicta fuga soluta possimus ipsam corrupti eaque ea nihil facere iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit, laboriosam quos sint corporis laborum repudiandae natus ipsum totam enim quam ratione, vitae, ex illo expedita saepe velit mollitia pariaturmmmm!"
        },
        {
            img: <img src="images/card1.png" alt="" />,
            title: "Amazing product and company",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quae, ut.Delectus, voluptatibus officia? Nulla velit adipisci recusandae dicta.Quibusdam dicta fuga soluta possimus ipsam corrupti eaque ea nihil facere iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit, laboriosam quos sint corporis laborum repudiandae natus ipsum totam enim quam ratione, vitae, ex illo expedita saepe velit mollitia pariaturmmmm!"
        },
        {
            img: <img src="images/card2.png" alt="" />,
            title: "Amazing product and company",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quae, ut.Delectus, voluptatibus officia? Nulla velit adipisci recusandae dicta.Quibusdam dicta fuga soluta possimus ipsam corrupti eaque ea nihil facere iure!yyyy"
        }
    ]

    return <Container>

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
    </Container>
}

function Item(props) {
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2> */}

            {/* <Grid container spacing={4}
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",


                }}
            >
                <Grid item xs={4} >
                    <Card sx={{ minWidth: 275 }}>
                        <CardHeader


                        />
                        <CardContent>
                            <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                                {props.item.title}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>


                                {props.item.description}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} >
                    <Card sx={{ minWidth: 275 }}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    {props.item.img}
                                </Avatar>
                            }

                        />
                        <CardContent>
                            <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                                {props.item.title}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                {props.item.description}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} >
                    <Card sx={{ minWidth: 275 }}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    {props.item.img}
                                </Avatar>
                            }

                        />
                        <CardContent>
                            <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                                {props.item.title}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                {props.item.description}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>

            </Grid> */}



            {/* <p>{props.item.description}</p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}
export default CardCare