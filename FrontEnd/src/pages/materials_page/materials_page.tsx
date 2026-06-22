import './materials_page.scss'
import { useState ,useEffect } from 'react'
import Page_space from "../../components/page_space/page_space"
import Header_menu from "../../components/elements/header_menu/header_menu"
import SideBar from "../../components/elements/side_bar/side_bar"
import Card from '../../components/elements/card/card'
import Line from '../../components/elements/line/line'


function MaterialsPage() {

    const [cardData, setCardsData] = useState ([]) 

    useEffect(() => {
    const courseData = async () => {

        try {

        const res = await fetch("http://127.0.0.1:8000/get_course_data/", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
            })

            if (!res.ok){
                throw new Error('Failed to load courses data')
            }

        const data = await res.json()
        setCardsData(data.courses)
        } catch (error) {
            console.error(error)
        }
    }
        courseData()

    }, [])


    return (
        <div>
            <SideBar/>
            <Page_space className='materials_page_space'>
                <Header_menu className='heater_profile_page'/>
                <p className="materials_p">Materials</p>
                <Line/>
                <div className='material_card_block'>
                    <Card/>  
                </div>           
            </Page_space>
        </div>
    )
}

export default MaterialsPage