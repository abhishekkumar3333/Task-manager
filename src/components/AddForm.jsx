import React, { useState } from 'react'

const AddForm = ({ onAdd }) => {
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim()) {
            onAdd(title);
            setTitle("");
        }
    }

    return (
        <form className="add-form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter task title'
            />
            <button type='submit'>Add Task</button>
        </form>
    )
}

export default AddForm;
