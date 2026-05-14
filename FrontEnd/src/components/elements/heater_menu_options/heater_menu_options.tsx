import './heater_menu_options.scss'
import { FaGear } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

function Heater_menu_options({ className = "" }) {

    return (
        <div className={`block_heater_menu_options ${className}`}>
            <div className='subblock_heater_menu_options'>
                <FaGear className='heater_menu_options_icon'/>
                <p className='heater_menu_options_text'>settings</p>
            </div>

            <div className='subblock_heater_menu_options'>
                <FaMoon className='heater_menu_options_icon'/>
                <p className='heater_menu_options_text'>dark mode</p>
            </div>

            <div className='subblock_heater_menu_options'>
                <MdOutlineLogout className='heater_menu_options_icon'/>
                <p className='heater_menu_options_text'>log out
                </p>
            </div>
        </div>
    )
}

export default Heater_menu_options