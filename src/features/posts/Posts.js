import React from 'react';
import styles from './Posts.module.css';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { PostHeader } from './postHeader/PostHeader';
import { PostFooter } from './postFooter/PostFooter';
import {changeActivePostId} from './individualPost/individualPostSlice';

export const Posts = () => {
    const activeSearchInput = useSelector(state => state.search);
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(activeSearchInput.toLowerCase()));

    return (
        <section className={styles.posts}>
            
            {filteredPosts.map(post => (
                <section className={styles.post} key={post.id}>
                    <div className={styles.postBody}>
                        <PostHeader 
                            postId={post.id}
                            postAuthor={post.author}
                            postCreated={post.created_utc}
                        />
                        <Link to={"/individualPost"} onClick={() => dispatch(changeActivePostId(post.name))}>
                            <h2>{post.title}</h2>
                            <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? " [...]" : "")}</p>
                            {post.selftext.length > 600 ? <p className={styles.readMore}>read more...</p> : null}
                            <img src={post.url} onError={(e) => e.target.style.display = "none"} />
                        </Link>
                        <PostFooter postId={post.id}
                            postPermalink={post.permalink}
                            postComments={post.num_comments}
                            postUrl={post.url}
                            visible={false}
                        />
                    </div>
                </section>
            ))}
        </section>
    );
}