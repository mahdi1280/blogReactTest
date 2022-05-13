import Layout from "../../Components/Layout";
import './style.css';
import Card from "../../Components/Card";
import {get} from '../../services/http';
import {useEffect,useState} from "react";

export default function BlogPage() {
    const [posts,setPost] = useState([]);

    useEffect(() => {
        get("/posts")
            .then(res=>{setPost(res.data)})
    },[]);

    // target,background,title,summary,variant
    const cardsPost= posts.map((post,index) => {
        const variant=index ===0 ? 'item-1' : 'item-2';
        return <Card key={post.id} target={"/post/"+post.id} title={post.title} background={post.image} summary={post.summary} variant={variant}/>
    });
    return (
        <Layout>
            <header>
                <h1>Cool Articles</h1>
            </header>
            <div className="band">
                {cardsPost}
            </div>
        </Layout>
    );
}