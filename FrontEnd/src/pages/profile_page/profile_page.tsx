import './profile_page.scss'
import { FiUser } from "react-icons/fi";
import Line from '../../components/elements/line/line'
import Page_space from '../../components/page_space/page_space'
import Header_menu from '../../components/elements/header_menu/header_menu'

function Profile_page() {

    return (            
        <Page_space>
            <Header_menu className='heater_profile_page'/>

            <div className='profile_block_column'>
                <div className='profile_icon_block'>
                    <FiUser className='user_icon_heater'/>
                    <div className='profile_icon_edit'/>
                </div>
                
                <div className='block1'>
                    <div className='profile_page_subblock_input'>
                        <p className='profile_page_p'>Name</p>
                        <input
                        className='profile_page_input'
                        type="text"
                        />
                    </div>
                    <Line/>


                    <div className='profile_page_subblock_input'>
                        <p className='profile_page_p'>Email</p>
                        <input
                        className='profile_page_input'
                        type="text"
                        />
                    </div>
                    <Line/>

                    <div className='profile_page_subblock_input'>
                        <p className='profile_page_p'>Password</p>
                        <input
                        className='profile_page_input'
                        type="text"
                        />
                    </div>
                    <Line/>
                </div>
            </div>
        </Page_space>
    )
}

export default Profile_page