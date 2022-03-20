import { Box, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import styled from 'styled-components';

function Experiences() {

  //api url
  const url = "http://localhost:9000/api/"

  //states
  const [exp, setExp] = useState([])

  useEffect(() => {
    axios.get(url).then((res) => {
      setExp(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  if (exp[0]) {
    return (
      <Div>

        <Box
          variant='div'
          className='header'>

          <Typography
            variant='h3'
            color="white"> User Experiences
          </Typography>

        </Box>

        <Box
          variant='div'
          className='cards'>

          {/* mapping data */}
          {exp.map((data) =>
            <div className="" key={data._id}>
              <Cards data={data} />
            </div>
          )}

        </Box>

      </Div>
    )
  }
  else {
    return (
      <Div>

        <Box
          variant='div'
          className='header no-exp'>

          <Paper
            elevation={20}
            style={{ padding: '22px' }}>

            <Typography
              variant='h4'
              color="Black"> No Experiences Added Yet
            </Typography>

          </Paper>

        </Box>

      </Div>
    )
  }
}

//styles
const Div = styled.div`
  .header{
    height: 20vh;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .cards{
      display:flex;
      align-items: center;
      justify-content: center;
      color:white;
      flex-wrap:wrap; 
      gap:5px;
  }
  .cards >*{
      flex:0 0 30%;
      margin:10px;
  }
  .no-exp{
    height:70vh;
  }
`

export default Experiences