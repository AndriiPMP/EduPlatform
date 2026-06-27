import './materials_page.scss'
import { useState ,useEffect } from 'react'
import Page_space from "../../components/page_space/page_space"
import Header_menu from "../../components/elements/header_menu/header_menu"
import SideBar from "../../components/elements/side_bar/side_bar"
import CardLesson from '../../components/elements/card_lesson/card_lesson'
import CardNew from '../../components/elements/card_new/card_new'
import Line from '../../components/elements/line/line'
import getCourseData from '../../services/getCourseData'
import type { CourseDataProps } from '../../services/getCourseData'
import { handleError } from '../../utils/HandleError'


function MaterialsPage() {

    const [cardData, setCardsData] = useState<CourseDataProps[]> ([]) 

    useEffect(() => {
    const fetchData = async () => {

        try {
            const courses = await getCourseData.getAll();
            setCardsData(courses)
        } catch (error) {
                console.error(handleError(error));
        }
    }
        fetchData()
    }, [])

    return (
        <div>
            <SideBar/>
            <Page_space className='materials_page_space'>
                <Header_menu className='heater_profile_page'/>
                <p className="materials_p">Materials</p>
                <Line/>
                <div className='material_card_block'>
                    <CardNew/>
                    {cardData.map(card => (
                        <CardLesson
                        key={card.id}
                        title={card.title}
                        cover={card.cover}
                        />  
                    ))}
                </div>           
            </Page_space>
        </div>
    )
}

export default MaterialsPage