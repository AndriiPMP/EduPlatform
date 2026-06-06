import './side_bar.scss'
import Line from '../line/line';
import { HiMiniAcademicCap } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { FaBookBookmark } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";



function SideBar() {
    return (
        <div className='side_bar_block'>
            
            <div className='side_bar_item_block'>
                <HiMiniAcademicCap className='side_bar_item'/>
            </div>

            <Line/>

            <div className='side_bar_item_block'>
                <FiUser className='side_bar_item'/>
            </div>

            <Line/>

            <div className='side_bar_item_block'>
                <FaBookBookmark className='side_bar_item'/>
            </div>

            <Line/>

            <div className='side_bar_item_block'>
                <FaCalendarAlt className='side_bar_item'/>
            </div>

            <Line/>

            <div className='side_bar_item_block'>
                <FaGear className='side_bar_item'/>
            </div>

        </div>
    )
}

export default SideBar