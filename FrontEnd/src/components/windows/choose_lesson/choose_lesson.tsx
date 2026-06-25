import './choose_lesson.scss'

interface Props {
    onClose: () => void
}

function ChooseLesson ({onClose}: Props) {
    return (
        <div onClick={onClose} className='choose_lesson_overlay'>
            <div className='choose_lesson_main_block'> 

            </div>
        </div>
    )
}

export default ChooseLesson