import CommentLoader from './CommentLoad';
import {useEffect,useState} from "react";

export default function Comments({id}) {
    const [comment,setComment]=useState([]);
    useEffect(() => {
        CommentLoader(id)
            .then(res => {console.log(res.data);setComment(res.data)});
    },[id]);

    const comments= comment.map(c => {return <li>{c.summary}</li>})
    return <ul>
        {comments}
    </ul>
}