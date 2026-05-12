import React, { useState } from 'react'
import { loginUser } from '../services/userService'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[form,setForm] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await loginUser(form)
    localStorage.setItem("userInfo",JSON.stringify(data))
    navigate("/")
  }
  return (
    <section className='pt-28 min-h-screen bg-dark text-light'>
      <div className='mx-auto max-w-md px-6'>
        <div className='bg-card/60 p-8 backdrop-blur-xl border border-white/10 rounded-3xl'>
          <h1 className='text-4xl font-bold'>Login</h1>
          <p className='mt-2 text-muted'>Welcome back</p>
          <form className='mt-2 space-y-5' 
                onSubmit={handleSubmit}
          >
            <input 
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={form.email}
                  className ="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
                  onChange={handleChange}
            />
              <input 
                  type='password'
                  placeholder='password'
                  name='password'
                  value={form.password}
                  className ="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
                  onChange={handleChange}
            ></input>
            <button className='w-full rounded-2xl bg-primary py-4 font-medium text-white'>
              Login
            </button>
            <p className="text-center text-sm text-muted">
              Don’t have an account?{" "}
              
              <span
                onClick={() => navigate("/register")}
                className="cursor-pointer text-primary"
              >
                Register
              </span>
            </p>
            
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
