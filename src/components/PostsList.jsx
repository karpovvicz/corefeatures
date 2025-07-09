import classes from "./Post.module.css";
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import { useState, useEffect} from "react";
import Modal from "./Modal.jsx";

function PostsList({isPosting, onStopPosting}) {


    useEffect(() => {
        async function fetchPosts() {
           const response = await fetch('http//:localhost:8080/posts')
            const resData =  await response.json();
                    setPosts(resData.posts);
        }
        fetchPosts();
    }, []);

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            }
        });
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
