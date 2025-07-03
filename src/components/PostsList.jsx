import classes from "./Post.module.css";
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import { useState} from "react";
import Modal from "./Modal.jsx";

function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting ? <Modal onClose={onStopPosting}>
                <NewPost
                    onAddPost={addPostHandler}

                    onCancel={onStopPosting}
                />
            </Modal> : false}
            {posts.length > 0 && (
                <ul className={classes.post}>


                    {posts.map((post) => (
                        <Post author={post.author} key={post.body} body={post.body}/>
                    ))}

                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet</h2>
                    <p>Start adding some!</p>
                </div>
            )}

        </>
    )
}


export default PostsList;
