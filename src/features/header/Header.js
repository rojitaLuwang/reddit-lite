import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import { FaReddit } from "react-icons/fa";

import { useDispatch } from 'react-redux';
import { changeActiveSubreddit } from '../subreddits/subredditsSlice';

import { SearchBar } from '../searchBar/SearchBar';

export const Header = () => {
    const dispatch = useDispatch();

    const onClicked = () => {
        dispatch(changeActiveSubreddit("/r/Home/"));
    }

    return (
        <header className={styles.header}>
            <Link to="/">
                <h1 onClick={onClicked}><FaReddit className={styles.icon} />Reddit<span>lite</span></h1>
            </Link>
            <SearchBar className={styles.searchBar} />
        </header>
    );
}