import './card.scss';
import { FaPlus } from "react-icons/fa6";


function Card() {
    return (
        <div className='card_block'>
            <div className='card_subblock'>
                <FaPlus className='card_plus'/>
            </div>
        </div>
    )
}

export default Card