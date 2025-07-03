import classes from "./Post.module.css";
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import { useState } from "react";
import Modal from "./Modal.jsx";

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }

    function authorChangeHandler(e) {
        setEnteredAuthor(e.target.value);
    }

    return (
        <>
            <Modal>
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler} />
            </Modal>
        <ul className={classes.post}>

                <Post author={enteredAuthor} body={enteredBody} />
                <Post author={enteredAuthor} body={enteredBody} />

        </ul>
        </>
    )
}


 export default PostsList;
