import './side_bar.scss'
import { useNavigate, NavLink } from 'react-router-dom';
import Line from '../line/line';
import { HiMiniAcademicCap } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { FaBookBookmark } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";



function SideBar() {
    const navigate = useNavigate()

    return (
        <div className='side_bar_block'>
            

            <div className='side_bar_item_block'>
                <HiMiniAcademicCap className='side_bar_item'/>
                <p className='side_bar_text'>Classes</p>
            </div>

            <Line/>

            <div className='side_bar_item_block'>
                <FiUser className='side_bar_item'/>
                <p className='side_bar_text'>Students</p>
            </div>

            <Line/>

            <NavLink to="/materials" className={({ isActive }) => isActive ? 'side_bar_link active' : 'side_bar_link'}>
                <div onClick={() => navigate("/materials")} className='side_bar_item_block'>
                    <FaBookBookmark className='side_bar_item'/>
                    <p className='side_bar_text'>Materials</p>
                </div>
            </NavLink>

            <Line/>

            <div className='side_bar_item_block'>
                <FaCalendarAlt className='side_bar_item'/>
                <p className='side_bar_text'>Schedule</p>
            </div>

            <Line/>

            <NavLink to="/" className={({ isActive }) => isActive ? 'side_bar_link active' : 'side_bar_link'}>
                <div className='side_bar_item_block'>
                    <FaGear className='side_bar_item'/>
                    <p className='side_bar_text'>Settings</p>
                </div>
            </NavLink>

        </div>
    )
}

export default SideBar