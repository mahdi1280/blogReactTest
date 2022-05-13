import {get} from "../../services/http";

export default function CommentLoad(id) {
    return get(`/comments?post-id=${id}`);
}