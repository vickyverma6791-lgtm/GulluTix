import axios from "axios";
import toast from "react-hot-toast";

const API = "http://localhost:5000/api/movies";

export const getMovies = async () => {
  try {
     const res = await axios.get(API);
    return res.data;
  } catch (error) {
    toast.error(
      "Failed to load movies"
    )
    return []
  }
   
  };

export const addMovie = async(movieData) =>{
  try{
    const userInfo = JSON.parse(
      localStorage.getItem("userInfo")
    );
    const res = await axios.post(API,movieData,
      {
        headers:{
          Authorization: `Bearer ${userInfo.token}`
        }
      }
    )
    toast.success("Movie Added")
    return res.data;
  } catch (error){
    toast.error("Failed to add movie")
  }
  
}  

export const deleteMovie = async(id)=>{
  try {
    await axios.delete(`${API}/${id}`,{
       headers: {
    Authorization: `Bearer ${userInfo.token}`,
  },
}
    )
    toast.success("Movie deleted")
    
  } catch (error) {
    toast.error("Failed to delete movie")
    
  }
}
export default getMovies