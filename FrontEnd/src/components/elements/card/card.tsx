import './card.scss';
import New_lesson from '../../windows/new_lesson/new_lesson';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

interface CardProps {
    title: string,
    cover: string | null
}

function Card({title = 'New Course'}, cover: CardProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className='card_main_block'>
            <div  className='card_block' onClick={() => setOpen(true)}>
                {cover ? (
                    <img src={cover}/>
                ) : (
                    <div className='card_subblock'>
                        <FaPlus className='card_plus'/>
                    </div>
            )}

            </div>
            <p className='card_name'>{title}</p>
            {open && <New_lesson onClose={() => setOpen(false)} />}
        </div>
    )
}

export default Card