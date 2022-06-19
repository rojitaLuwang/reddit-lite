import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styles from './SearchBar.module.css';

import {changeSearch} from './searchBarSlice';
import { selectSearch } from './searchBarSlice';

export const SearchBar = () => {
    const dispatch = useDispatch();
    
    const searchBarValue = useSelector(selectSearch);
    
    const onTextChange = (e) => {
        dispatch(changeSearch(e.target.value));
    }

    return (
        <input className={styles.searchBar}
            id="Search"
            value={searchBarValue}
            placeholder="Search in Reddit lite"
            onChange={onTextChange}
        />
    );
};