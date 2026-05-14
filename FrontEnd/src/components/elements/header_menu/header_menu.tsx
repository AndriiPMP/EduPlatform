import './header_menu.scss'
import { useState } from "react";
import { AnimatePresence ,motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Heater_menu_options from '../heater_menu_options/heater_menu_options';


function Header_menu(){
 const [open, setOpen] = useState(false);

    return (
        <div className='block_header_menu' onClick={() => setOpen(v => !v)}> 

            <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            >
                <IoIosArrowDown className='heater_menu_arrow' />
            </motion.div>

            <div className="user_icon_heater">
                <FiUser className='user_icon_figure'/>
            </div>

            <AnimatePresence>
                {open && (
                     <motion.div
                        className="heater_menu_options"
                        key="menu-options"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                    <Heater_menu_options />
                        </motion.div>
                        )}
            </AnimatePresence>
        </div>
    )
}

export default Header_menu