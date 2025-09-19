import { use } from "react";
import Post from "./Post";

export default function Posts({postPromise}){
    const posts = use(postPromise);
    console.log(posts);
    console.log(postPromise);
    return(
        <div className="card">
            <h3>All post are here : {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}