import './back_button.scss'
import type { ReactNode } from 'react';
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  children: ReactNode;
};

function Back_button({children}: Props) {
    return (
        <div className='profile_return_block'>
            <FaArrowLeft className='profile_arrow'/>
            {children}
        </div>
    )
}

export default Back_button