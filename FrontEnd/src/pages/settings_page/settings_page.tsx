import Page_space from "../../components/page_space/page_space"
import Header_menu from "../../components/elements/header_menu/header_menu"

function Setting_page() {

    return (
        <Page_space>
            <div className='heater'>
                <Header_menu/>
            </div>
            <div className='block'> 
                <p className='settings'>Settings</p>
                <div className='card1'></div>
                <div className='card2'></div>
            </div>
        </Page_space>
    )
}

export default Setting_page