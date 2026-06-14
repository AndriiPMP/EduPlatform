import './new_lesson.scss'
import { useState ,useRef } from 'react';

type Props = {
    onClose: () => void
}

function New_lesson({onClose}: Props) {

    const fileRef = useRef<HTMLInputElement | null>(null);

    const [form, setForm] = useState({
        title: '',
        description: '',
        cover: null as File | null,
    })

    return (
        <div className='new_lesson_overlay' onClick={onClose}>
            <div className='new_lesson_block' onClick={(e) => e.stopPropagation()}>
                <p>Create new course</p>

                <p >Title</p>
                <input
                value={form.title}
                onChange = {(e) => setForm({...form, title: e.target.value})}
                />

                <p>Description</p>
                <input
                value={form.description}
                onChange = {(e) => setForm({...form, description: e.target.value})}
                />

                <button type="button" onClick={() => fileRef.current?.click()}>
                    Choose image
                </button>

                <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                />

                <button>Confirm</button>

            </div>

        </div>
    )
}

export default New_lesson