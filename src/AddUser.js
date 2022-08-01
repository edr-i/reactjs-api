import React from 'react';

function AddUser({ onAdd }) {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value, e.target.email.value);
        e.target.name.value = "";
        e.target.email.value = "";
    }

    return (
        <div className='adduser-container'>
            <form onSubmit={handleOnSubmit}>
                <h3>Add User</h3>
                <input placeholder="Name" name="name" /> <br />
                <input placeholder="Email" name="email" /> <br/>
                <button onSubmit={handleOnSubmit}>Add</button>
            </form>
        </div>
    )
}

export default AddUser