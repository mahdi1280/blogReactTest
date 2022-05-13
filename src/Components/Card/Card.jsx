import './style.css';
import {A} from 'hookrouter';

export default function Card({target,background,title,summary,variant}){
    return  <div className={variant}>
        <A href={target} className="card">
            <div className="thumb"
                 style={{backgroundImage: `url(${background})`}}>
            </div>
            <article>
                <h1>{title}</h1>
                <span>{summary}</span>
            </article>
        </A>
    </div>;
}