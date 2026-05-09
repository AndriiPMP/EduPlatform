import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './login_page.scss'

function Login_page() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        identifier: "",
        password: "",
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
    
    const res = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || "Login failed")
    }

    localStorage.setItem("access_token", data.access)
    navigate("/")

    }
    return (
    <div className="sreen_loginPage">
      <form onSubmit={handleSubmit} className="form_loginPage">
        <input
          type="text"
          name="identifier"
          className="input_loginPage"
          value={form.identifier}
          onChange={handleChange}
          placeholder="Nick name or email"
        />

        <input
          type="password"
          name="password"
          className="input_loginPage"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit" className="button_log_loginPage">Login</button>
        <button type="button" className="button_reg_loginPage" onClick={() => navigate("/register")}>Register</button>
      </form>
    </div>
    )
}

export default Login_page