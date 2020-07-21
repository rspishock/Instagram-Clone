import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt='Ryan' src="/static/images/avatar/1.jpg"></Avatar>
                <h3>{ username }</h3>
            </div>
            

            <img class="post__image" src={ imageUrl }></img>

            <h4 className="post__text"><strong>{ username }: </strong>{ caption }</h4>
        </div>
    )
}

export default post
