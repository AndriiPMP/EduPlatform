import './page_space_style.scss';
import type { ReactNode } from "react"


    type Page_spaceProps = {
        children: ReactNode;
        className?: string;
    } 
function Page_space({children, className = ''}: Page_spaceProps) {

    return (
        <div className='page'>
            <div className='heater'/>
            <div className={`block ${className}`.trim()}> 
            {children}
            </div>
        </div>
    )
}

export default Page_space