import './settings_page.scss'
import Page_space from "../../components/page_space/page_space"
import Header_menu from "../../components/elements/header_menu/header_menu"
import SideBar from '../../components/elements/side_bar/side_bar';
import { FiUser } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Setting_page() {
    const navigate = useNavigate()

    return (
        <div>
            <SideBar/>
            <Page_space>
                <Header_menu/>
                    <p className='settings'>Settings</p>
                    <div className='card1' onClick={() => navigate('/profile')}>
                        <div className='card1_inner'>
                            <FiUser className='user_icon_figure_card1'/>
                            <p className="card_description">Your profile</p>
                            <FaArrowRight className='arrow_hover'/>
                        </div>
                    </div>
                    <div className='card2'></div>
            </Page_space>
        </div>
    )
}

export default Setting_page