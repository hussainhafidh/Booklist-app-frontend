import React from 'react';


const EditBook = () => {

    const [name, setName] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [publish, setPublish] = React.useState('');
    // const [error, setError] = React.useState(false);

    const addProduct = async () => {
        if (!name || !author || !genre) {
            // setError(true);
            return false
        }


    }


    return (
        <div className='product'>
            <h1>Edit Books</h1>
            <input type='text' placeholder='Title' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }} />

            <input type='text' placeholder='Author' className='inputBox'
                value={author} onChange={(e) => { setAuthor(e.target.value) }} />


            <input type='text' placeholder='Enter genre' className='inputBox'
                value={genre} onChange={(e) => { setGenre(e.target.value) }} />

            <input type='text' placeholder='Enter description' className='inputBox'
                value={description} onChange={(e) => { setdescription(e.target.value) }} />

            <input type='text' placeholder='Enter publish' className='inputBox'
                value={publish} onChange={(e) => { setPublish(e.target.value) }} />



            <button onClick={addProduct} className='appButton'>Add Book</button>



        </div>
    )
}

export default EditBook