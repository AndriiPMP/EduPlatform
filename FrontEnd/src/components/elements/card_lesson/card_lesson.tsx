import './card_lesson.scss';
import ChooseLesson from '../../windows/choose_lesson/choose_lesson';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

interface CardProps {
    title: string,
    cover: string | null,
}

function CardLesson({title = 'New Course', cover}: CardProps) {

    const [openWindow, setOpenWindow] = useState(false)

    return (
        <div className='card_main_block'>
            <div  className='card_block' onClick={() => setOpenWindow(true)}>
                {cover ? (
                    <img src={cover}/>
                ) : (
                    <div className='card_subblock'>
                        <FaPlus className='card_plus'/>
                    </div>
            )}
            </div>
            <p className='card_name'>{title}</p>
            {openWindow && <ChooseLesson onClose = {() => setOpenWindow(false)}/>}
        </div>
    )
}

export default CardLesson
