import './heater_menu_options.scss'
import type { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

function Heater_menu_options({ className = "" }) {
    const navigate = useNavigate();

    const handleLogout = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const res = await fetch("http://127.0.0.1:8000/logout/", {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      localStorage.removeItem("access_token");
      navigate("/login");
    }
  };

    return (
        <div className={`block_heater_menu_options ${className}`}>
            <div className='subblock_heater_menu_options' onClick={() => navigate("/")}>
                <FaGear className='heater_menu_options_icon'/>
                <p className='heater_menu_options_text'>settings</p>
            </div>

            <div className='subblock_heater_menu_options'>
                <FaMoon className='heater_menu_options_icon'/>
                <p className='heater_menu_options_text'>dark mode</p>
            </div>

            <div className='subblock_heater_menu_options' onClick={handleLogout}>
                <MdOutlineLogout className='heater_menu_options_icon'/>
                <p className='heater_menu_options_text'>log out</p>
            </div>
        </div>
    )
}

export default Heater_menu_options