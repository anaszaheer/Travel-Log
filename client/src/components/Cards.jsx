import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import dayjs from 'dayjs'

function Cards({ data }) {
    console.log(__dirname + '../server/uploads/1647332025866pexels-belle-co-1000445.jpg');
    console.log('check this' + data)

    return (
        <div >
            <Card style={{ width: '28rem' }} elevation={20}>

                <CardHeader
                    title={data.location}
                    subheader={data.createdAt ? "Posted On: " + dayjs(data.createdAt).format('DD/MM/YYYY') : "Posted On: no date"}
                />

                <CardMedia
                    component="img"
                    height="200"
                    image={'http://localhost:9000/images/' + data.images}
                    // image={data.images}
                    alt={data.location}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" className="content">
                        Places to visit: {data.places_to_visit ? data.places_to_visit : 'no place added'}<br />
                        Price: {data.cost_of_travel ? data.cost_of_travel : 'no price added'}<br />
                        Heritage: {data.heritage_of_location ? data.heritage_of_location : 'no heriatge added'}<br />
                        Ease of Transportation: {data.ease_of_transportation ? data.ease_of_transportation : 'no transportation  data added'}<br />
                        Safety: {data.safety ? data.safety : 'no safety data added'}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )

}

export default Cards