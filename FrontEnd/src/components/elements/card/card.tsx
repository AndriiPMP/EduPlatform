import './card.scss';
import New_lesson from '../../windows/new_lesson/new_lesson';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";


function Card() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div  className='card_block' onClick={() => setOpen(true)}>
                <div className='card_subblock'>
                    <FaPlus className='card_plus'/>
                </div>
            </div>
            {open && <New_lesson onClose={() => setOpen(false)} />}
        </div>
    )
}

export default Card