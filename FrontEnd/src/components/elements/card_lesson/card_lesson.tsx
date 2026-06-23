import './card_lesson.scss';
import { FaPlus } from "react-icons/fa6";

interface CardProps {
    title: string,
    cover: string | null,
    onClick?: () => void,
}

function CardLesson({title = 'New Course', cover, onClick}: CardProps) {


    return (
        <div className='card_main_block'>
            <div  className='card_block' onClick={onClick}>
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
