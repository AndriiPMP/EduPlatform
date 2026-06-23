import './card_lesson.scss';
import { FaPlus } from "react-icons/fa6";

interface CardProps {
    title: string,
    cover: string | null,
}

function CardLesson({title = 'New Course', cover}: CardProps) {


    return (
        <div className='card_main_block'>
            <div  className='card_block'>
                {cover ? (
                    <img src={cover}/>
                ) : (
                    <div className='card_subblock'>
                        <FaPlus className='card_plus'/>
                    </div>
            )}
            </div>
            <p className='card_name'>{title}</p>
        </div>
    )
}

export default CardLesson
