import './new_lesson.scss'

type Props = {
    onClose: () => void
}

function New_lesson({onClose}: Props) {

    return (
        <div onClick={onClose}>

        </div>
    )
}

export default New_lesson