import React from "react";
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { all, trending, sharedWithMe, myTextbooks, favourites } from '../redux/tabSlice'


export default function Tabs() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.value);
  const tabState = useSelector((state) => state.tab.value);

  return (
    <ul className="tabs">
      <li onClick={() => dispatch(all())} className={tabState == 0 ? "active" : undefined}>All</li>
      <li onClick={() => dispatch(trending())} className={tabState == 1 ? "active" : undefined}>Trending</li>
      {loggedIn ?
        <>
        <li onClick={() => dispatch(sharedWithMe())} className={tabState == 2 ? "active" : undefined}>Shared with me</li>
        <li onClick={() => dispatch(myTextbooks())} className={tabState == 3 ? "active" : undefined}>My Textbooks</li>
        <li onClick={() => dispatch(favourites())} className={tabState == 4 ? "active" : undefined}>Favourites</li>
        </>
      : null}
    </ul>
  );
};
