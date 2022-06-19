import React from 'react';
import { useState, useEffect } from 'react';

import { Comments } from '../comments/Comments';

import styles from './PostFooter.module.css';
import { commentsIcon, shareIcon} from '../../../app/utils';


export const PostFooter = (props) => {
    const [active, setActive] = useState(false);
    const [share, setShare] = useState('');
    

    const onCommentsClicked = () => {
        const postComments = document.getElementById(props.postId);
        if (active) {
            postComments.style.display = "none";
            setActive(false);
        } else {
            postComments.style.display = "block";
            setActive(true);
        }
    }

    const onShareClicked = () => {
        navigator.clipboard.writeText(props.postUrl);
        setShare('Link Copied to clipboard !!');
    }

    useEffect(() => {
        setTimeout(() => {
            setShare('');
        }, 2000);
        
      }, [share]);  

    return (
        <footer>
            <ul className={styles.postInfos}>
                <li onClick={onCommentsClicked} className={styles.commentsIcon}>{commentsIcon}<span>{props.postComments}</span></li>
                <li><span>{share}</span></li>
                <li onClick={onShareClicked} className={styles.commentsIcon} >{shareIcon}<span>Share</span></li>
            </ul>
            <Comments permalink={props.postPermalink}
                id={props.postId}
                visible={props.visible}
            />
        </footer>
    );
};