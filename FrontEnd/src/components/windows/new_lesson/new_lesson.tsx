import './new_lesson.scss'
import { useState ,useRef } from 'react';
import Line from '../../elements/line/line';
import { CiImageOn } from "react-icons/ci";

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);

        if (form.cover) {
            formData.append('cover', form.cover);
        }

        const res = await fetch("http://127.0.0.1:8000/create_course/", {
            method: 'POST', 
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            body: formData,
        })
    }


    return (
        <div className='new_lesson_overlay' onClick={onClose}>
            <div className='new_lesson_block' onClick={(e) => e.stopPropagation()}>

                <p className='new_lesson_p1'>Create new course</p>

                <Line/>
                
                <div className='new_lesson_image_block'>
                    <CiImageOn className='new_lesson_image_symbol' />
                    <button className='new_lesson_image_button' type="button" onClick={() => fileRef.current?.click()}>
                        Choose image
                    </button>
                </div>

                <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                />

                <p className='new_lesson_p'>Title</p>
                <input
                value={form.title}
                onChange = {(e) => setForm({...form, title: e.target.value})}
                />

                <p className='new_lesson_p'>Description</p>
                <input
                value={form.description}
                onChange = {(e) => setForm({...form, description: e.target.value})}
                />

                <button>Confirm</button>

            </div>

        </div>
    )
}

export default New_lesson