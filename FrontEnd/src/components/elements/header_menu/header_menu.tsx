import './header_menu.scss'
import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import Heater_menu_options from '../heater_menu_options/heater_menu_options';


function Header_menu(){
 const [open, setOpen] = useState(false);

    return (
        <div className='block_header_menu' onClick={() => setOpen(v => !v)}> 

            <motion.div
            animate={{ rotate: open ? 90 : -90 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            >
                <IoIosArrowBack className='heater_menu_arrow' />
            </motion.div>

            <div className="user_icon_heater">
                <FiUser className='user_icon_figure'/>
            </div>

            <Heater_menu_options className ='heater_menu_options'/>
        </div>
    )
}

export default Header_menu