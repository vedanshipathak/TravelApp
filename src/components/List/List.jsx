import React, { useState } from 'react';
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@material-ui/core';
import useStyles from './style';
import PlaceDetails from '../PlaceDetails/PlaceDetails';


export default function List({places}) {
  const classes=useStyles();
  const[type,setType]=useState('Restaurants');
  const[rating,setRating]=useState('');
  
  return (
    <div className={classes.container}>
        <Typography variant='h4'>
          Restaurants,Hotels & Attractions Around You.
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e)=>setType(e.target.value)}>
            <MenuItem value="Restaurants">Restaurants</MenuItem>
            <MenuItem value="Hotels">Hotels</MenuItem>
            <MenuItem value="Attractions">Attractions</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Ratings</InputLabel>
          <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
            
            <MenuItem value="Attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.List}>
          {places?.map((place,i)=>(
            <Grid item key={i} xs={12}>
              <PlaceDetails place={place}/>
            </Grid>
          ))}
        </Grid>
    </div>
  );
}