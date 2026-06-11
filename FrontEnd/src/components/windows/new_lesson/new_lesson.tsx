import './new_lesson.scss'

type Props = {
    onClose: () => void
}

function New_lesson({onClose}: Props) {

    return (
        <div className='new_lesson_overlay' onClick={onClose}>
            <div className='new_lesson_block' onClick={(e) => e.stopPropagation()}>
                
            </div>

        </div>
    )
}

export default New_lesson