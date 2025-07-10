import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList.jsx";
import {Fragment} from "react";


function Posts() {

  return (
      <Fragment>
          <Outlet />
 <main >
<PostsList />
 </main>
      </Fragment>
  )
}

export default Posts;

export async function loader() {
    const response = await fetch('http://localhost:8080/posts');
    const resData = await response.json();
    return resData.posts;
}
