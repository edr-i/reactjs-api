import React from 'react'

function User(props) {

    function handleDelete() {
        props.onDelete(props.id)
    }

    return (
        <div className='user'>
            <span><strong>{props.name}</strong></span>
            <span>{props.email}</span>
            <span>
                <button onClick={handleDelete}>Delete</button>
            </span>
        </div>
    )
}

export default User