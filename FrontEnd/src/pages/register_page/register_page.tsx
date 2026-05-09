import './register_page.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Register_page(){

    const navigate = useNavigate()

    const [form, setForm] = useState({

    nick_name: "",
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({
        ...prev,
        [name]: value,
        }))
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        
        e.preventDefault()

        const res = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
    })

    const data = await res.json()

    if (!res.ok) {
    throw new Error(data.error || "Register failed")
    }

    localStorage.setItem("access_token", data.access)
    navigate("/")
    }

    return (
      <div className="screen">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="input"
            value={form.nick_name}
            onChange={handleChange}
            placeholder="Nick name"
          />

          <input
            type="text"
            className="input"
            value={form.first_name}
            onChange={handleChange}
            placeholder="First name"
          />

          <input
            type="text"
            className="input"
            value={form.last_name}
            onChange={handleChange}
            placeholder="Last name"
          />

        <input
          type="email"
          className="input"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="password"
          className="input"
          value={form.password1}
          onChange={handleChange}
          placeholder="Password"
        />

        <input
          type="password"
          className="input"
          value={form.password2}
          onChange={handleChange}
          placeholder="Repeat password"
        />

        <button type="submit" className='button_reg'>Register</button>
        <button type="button" className='button_log' onClick={() => navigate("/login")}>Log in</button>
      </form>
    </div>
  )
}

export default Register_page