import { PhotoCamera } from '@mui/icons-material'
import { TextField, Box, Typography, Paper, IconButton, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

function OwnExperience() {

  const url = 'http://localhost:9000/api/'

  //states
  const [location, setLocation] = useState('')
  const [costTravel, setCostTravel] = useState('')
  const [heritage, setHeritage] = useState('')
  const [placesVisit, setPlacesVisit] = useState('')
  const [slctTransportation, setSlctTransportation] = useState('')
  const [sftyLvl, setSftyLvl] = useState('')
  const [files, setFile] = useState(null)

  //event handlers
  const changeHandler = (e) => {
    // console.log(e.target.files[0].name)
    if (e.target.name === 'location') {
      setLocation(e.target.value)
    }
    else if (e.target.name === 'costTravel') {
      setCostTravel(e.target.value)
    }
    else if (e.target.name === 'heritage') {
      setHeritage(e.target.value)
    }
    else if (e.target.name === 'placesVisit') {
      setPlacesVisit(e.target.value)
    }
    else if (e.target.name === 'slctTransportation') {
      setSlctTransportation(e.target.value)
    }
    else if (e.target.name === 'sftyLvl') {
      setSftyLvl(e.target.value)
    }
    else if (e.target.name === 'files') {
      setFile(e.target.files[0])
    }
  }

  const formHandler = (e) => {
    e.preventDefault();
    // console.log(file);
    const data = new FormData();
    data.append('location', location)
    data.append('costTravel', costTravel)
    data.append('heritage', heritage)
    data.append('placesVisit', placesVisit)
    data.append('slctTransportation', slctTransportation)
    data.append('sftyLvl', sftyLvl)
    data.append('files', files)

    console.log(data)

    axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      alert(res.data)
    }).catch((err) => {
      alert('An error occured: ' + err.message);
    })
  }


  return (
    <Div>
      <Box className="header">

        <Paper elevation={20} className="" >

          <form onSubmit={formHandler} method='post' encType="multipart/form-data" className="ppr">

            <Typography variant="h4">Your Experience</Typography>

            <TextField onChange={changeHandler} name='location' label="Add Location" className="tfs" required />
            <TextField onChange={changeHandler} name='costTravel' label="Cost of Travel" type='number' className="tfs" required />
            <TextField onChange={changeHandler} name='heritage' label="Heritage of Location" className="tfs" required />
            <TextField onChange={changeHandler} name='placesVisit' label="Places to Visit" className="tfs" required />

            <FormControl>
              <InputLabel>Ease of Transportation</InputLabel>
              <Select onChange={changeHandler} name='slctTransportation' label="Ease of Transportation" value={slctTransportation} required>
                <MenuItem value="Bad">Bad</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel>Safety Level</InputLabel>
              <Select onChange={changeHandler} name='sftyLvl' label="safety level" value={sftyLvl} required>
                <MenuItem value="Bad">Bad</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
              </Select>
            </FormControl>

            <label>
              <input accept="image/*" onChange={changeHandler} name='files' type="file" required className="inputDis" />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton> {files ? 'pic chosen' : 'choose pic'}
            </label>

            <Button type='submit' variant="contained" className="color">Submit</Button>

          </form>

        </Paper>

      </Box>

    </Div>
  )
}

const Div = styled.div`

  .header{
    margin-top:95px;
    margin-bottom:15px;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
  }
  .ppr{
    display: flex;
    flex-direction: column;
    padding:2rem 2rem 2rem 2rem;
    gap:10px;
    width:20rem;
  }
  .inputDis{
    display:none;
  }

`

export default OwnExperience
