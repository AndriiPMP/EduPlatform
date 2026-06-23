import './card_new.scss';
import New_lesson from '../../windows/new_lesson/new_lesson';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";


function CardNew() {
    const [open, setOpen] = useState(false);

    return (
        <div className='card_main_block'>
            <div  className='card_block' onClick={() => setOpen(true)}>
                <div className='card_subblock'>
                    <FaPlus className='card_plus'/>
                </div>
            </div>
            <p className='card_name'>New Course</p>
            {open && <New_lesson onClose={() => setOpen(false)} />}
        </div>
    )
}

export default CardNew