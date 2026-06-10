import './materials_page.scss'
import Page_space from "../../components/page_space/page_space"
import Header_menu from "../../components/elements/header_menu/header_menu"
import SideBar from "../../components/elements/side_bar/side_bar"
import Card from '../../components/elements/card/card'
import Line from '../../components/elements/line/line'


function MaterialsPage() {
    return (
        <div>
            <SideBar/>
            <Page_space>
                <Header_menu className='heater_profile_page'/>
                <p className="materials_p">Materials</p>
                <Line/>
                <Card/>
            </Page_space>
        </div>
    )
}

export default MaterialsPage