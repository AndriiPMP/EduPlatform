import './back_button.scss'
import type { ReactNode, HTMLAttributes } from 'react';
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;;

function Back_button({children, ...props}: Props) {
    return (
        <div className='return_block' {...props}>
            <FaArrowLeft className='profile_arrow'/>
            {children}
        </div>
    )
}

export default Back_button