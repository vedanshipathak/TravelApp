import React, { useState ,useEffect,createRef} from 'react';
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@material-ui/core';
import useStyles from './style';
import PlaceDetails from '../PlaceDetails/PlaceDetails';


export default function List({places,childClicked,isLoading,type,setType,rating,setRating}) {
  const classes=useStyles();
  
  console.log({childClicked});

  const [elRefs, setElRefs] = useState([]);
  
  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  
  
  return (
    <div className={classes.container}>
        <Typography variant='h4'>
          Restaurants,Hotels & Attractions Around You.
        </Typography>
        {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) :(<>
        <div className={classes.controls}>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e)=>setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Ratings</InputLabel>
          <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
            
            {/* <MenuItem value="Attractions">Attractions</MenuItem> */}
          </Select>
        </FormControl>
        </div>
        <div className={classes.scrollContainer}>
        <Grid container spacing={3} className={classes.List}>
          {places?.map((place,i)=>(
            <Grid ref={elRefs[i]} item key={i} xs={12}>
              <PlaceDetails place={place} selected={Number(childClicked) === i} refProp={elRefs[i]}/>
            </Grid>
          ))}
        </Grid>
        </div>
        </>
      )}
    </div>
  );
}