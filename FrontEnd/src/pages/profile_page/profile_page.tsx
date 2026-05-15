import './profile_page.scss'
import Page_space from '../../components/page_space/page_space'
import Header_menu from '../../components/elements/header_menu/header_menu'

function Profile_page() {

    return (            
        <Page_space>
            <Header_menu className='heater_profile_page'/>
            <div className='block1'>
                <input
                type="text"
                />
            </div>
        </Page_space>
    )
}

export default Profile_page