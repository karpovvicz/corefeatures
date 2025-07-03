import classes from './NewPost.module.css';
import {useState} from "react";


function NewPost({onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');



    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }

    function authorChangeHandler(e) {
        setEnteredAuthor(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor,
        }
        onAddPost(postData);
        onCancel();
    }

    return (
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" onChange={authorChangeHandler} />
                </p>
                <p className={classes.actions}>

                    <button type='button' onClick={onCancel}>Cancel</button>
                    <button>Submit</button>
                </p>
            </form>

        </>
    )
        ;
}

export default NewPost;