import axios from "axios";
 
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';




export const getPlaceData=async(sw,ne)=>{
  try{
    //request 
    const {data:{data}} =await axios.get(URL, {
  
      params: {
        bl_latitude: sw.lat, 
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        
      },
      headers: {
        'X-RapidAPI-Key': '0c3f2f0e1cmshf46ef398fea9047p194c1fjsn26c9c0d362c6',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  }catch(error){
    console.log(error);

  }
}