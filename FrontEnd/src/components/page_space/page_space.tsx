import './page_space_style.scss';
import type { ReactNode } from "react"

    type Page_spaceProps = {
        children: ReactNode
    }

function Page_space({children}: Page_spaceProps) {

    return (
        <div className='page'>
            <div className='heater'/>
            {children}
        </div>
    )
}

export default Page_space