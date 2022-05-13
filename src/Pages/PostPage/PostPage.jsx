import Layout from "../../Components/Layout";
import loadPost from './Page';
import {useEffect,useState}  from "react";
import Comments from "../../Components/Comments";

export default function PostPage({id}) {
    const [post, setPost] = useState(null);
    useEffect(() => {
        loadPost(id)
            .then(res=>{setPost(res.data)})
    }, [id]);
    return (<Layout>
        {!post ? <div>Loading...</div> :
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Comments id={id}/>
        </>}

    </Layout>)
}