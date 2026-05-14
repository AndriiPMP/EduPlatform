import './header_menu.scss'
import { FiUser } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";


function Header_menu(){

    return (
        <div className='block_header_menu'>
            <IoIosArrowBack />
            <div className="user_icon_heater">
                <FiUser className='user_icon_figure'/>
            </div>
        </div>
    )
}

export default Header_menu