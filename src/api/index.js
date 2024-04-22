import axios from "axios";
 
// const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';




export const getPlaceData=async(type,sw,ne)=>{
  try{
    //request 
    const {data:{data}} =await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
  
      params: {
        bl_latitude: sw.lat, 
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        
      },
      headers: {
        'X-RapidAPI-Key': '458ad5b7e9msh50289a5e4fd5113p1e9e9fjsn9b49726a02d0',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  }catch(error){
    console.log(error);

  }
}