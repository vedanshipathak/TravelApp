import React,{useEffect,useState} from 'react';
import Header from './components/Header/Header';
import {getPlaceData} from './api';
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline ,Grid} from '@mui/material';
//import SignIn from './components/SignIn/SignIn';
//simport SignUp from './components/SignUp/SignUp';


function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [childClicked,setChildClicked]=useState(null);
  
  const[places,setPlaces]=useState([]);

  const[coordinates,setCoordinates]=useState({});
  const[bounds,setBounds]=useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);
    
  useEffect(()=>{
    setIsLoading(true);
    getPlaceData(bounds.sw,bounds.ne)
         .then((data)=>{
         console.log(data);
        setPlaces(data);
        setIsLoading(false);
    })
  },[coordinates,bounds]);
  return (
    <>
    

   
    <CssBaseline/>
    <Header setCoordinates={setCoordinates} />
    <Grid container spacing={3} style={{width:'100%'}}>
      <Grid item  xs={12} md={4}>
       <List places={places} childClicked={childClicked} isLoading={isLoading}/>
      
        
      </Grid>
      <Grid item xs={12} md={8}>
        <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={places} setChildClicked={setChildClicked}/>
      </Grid>
    </Grid>
    
    </>
  );
}

export default App;