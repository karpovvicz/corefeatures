
import classes from "./Post.module.css";

export default function Post(props) {



    return (
        <div className={classes.post}>

            <h1>Hello World!</h1>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
            <p>some default text</p>
        </div>

    )

}