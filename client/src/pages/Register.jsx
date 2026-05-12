import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await registerUser(form)
    if(data){
        navigate("/login")
    }
  }
  return (
    <section className="min-h-screen bg-dark pt-28 text-light">
      <div className="mx-auto max-w-md px-6">
        <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-xl">
          
          <h1 className="text-4xl font-bold">
            Register
          </h1>

          <p className="mt-2 text-muted">
            Create account
          </p>

          <form className="mt-8 space-y-5"
                onSubmit={handleSubmit}
          >
            
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-card/60 p-4 outline-none"
            />

            <button className="w-full rounded-2xl bg-primary py-4 font-medium text-white"
                
            >
              Register
            </button>
            <p className="text-center text-sm text-muted">
                Already have an account?{" "}
                
                <span
                    onClick={() => navigate("/login")}
                    className="cursor-pointer text-primary"
                >
                    Login
                </span>
                </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;