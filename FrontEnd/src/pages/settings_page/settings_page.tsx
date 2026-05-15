import './settings_page.scss'
import Page_space from "../../components/page_space/page_space"
import Header_menu from "../../components/elements/header_menu/header_menu"
import { FiUser } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";


function Setting_page() {

    return (
        <Page_space>
            <div className='heater'>
                <Header_menu/>
            </div>
            <div className='block'> 
                <p className='settings'>Settings</p>
                <div className='card1'>
                    <div className='card1_inner'>
                        <FiUser className='user_icon_figure_card1'/>
                        <p className="card_description">Your profile</p>
                        <FaArrowRight className='arrow_hover'/>
                    </div>
                </div>
                <div className='card2'></div>
            </div>
        </Page_space>
    )
}

export default Setting_page