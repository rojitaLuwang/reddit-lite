import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import redditLogo from './redditLogo.png';
import './App.css';

import { Header } from './features/header/Header';
import { Posts } from './features/posts/Posts';
import { IndividualPost } from './features/posts/individualPost/IndividualPost';
import { Subreddits } from './features/subreddits/Subreddits';

import { getSubredditPosts } from './app/apiReddit';
import { changePosts } from './features/posts/postsSlice';

function App() {

  const activeSub = useSelector(state => state.subreddits.activeSubreddit);
  const dispatch = useDispatch();

  useEffect(() => getSubredditPosts(activeSub)
    .then(response => {
      dispatch(changePosts(response));
    }), [activeSub]);


  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Subreddits logo={redditLogo} />
          <Switch>
            <Route exact path="/individualPost">
              <IndividualPost />
            </Route>
            <Route exact path="/">
              <Posts />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;