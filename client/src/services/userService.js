import axios from "axios"
import toast from "react-hot-toast";

const API =
  "http://localhost:5000/api/users";

export const loginUser = async(userData)=>{
    try {
        const res = await axios.post(`${API}/login`,userData)
        toast.success("Login success")
        return res.data
    } catch (error) {
        toast.error("Login Failed")
        
    }
}

export const registerUser = async(userData) =>{
    try {
        const res = await axios.post(`${API}/register`,userData)
        toast.success("Account created")
    } catch (error) {
        toast.error(error.response.data.message)
    }
}