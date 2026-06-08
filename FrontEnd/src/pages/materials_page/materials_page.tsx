import Page_space from "../../components/page_space/page_space"
import Header_menu from "../../components/elements/header_menu/header_menu"
import SideBar from "../../components/elements/side_bar/side_bar"


function MaterialsPage() {
    return (
        <div>
            <SideBar/>
            <Page_space>
                <Header_menu className='heater_profile_page'/>
            </Page_space>
        </div>
    )
}

export default MaterialsPage