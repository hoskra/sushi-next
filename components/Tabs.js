import React from "react";
import { useSelector } from 'react-redux'

const loggedInBookmarks = ["Trending", "Shared with me", "My Textbooks", "Favourites"];
const defaultBookmarks = ["Trending"];

export default function Tabs() {
  const loggedIn = useSelector((state) => state.user.value)

  return (
    <ul className="bookmarks">
      {loggedIn ? 
        loggedInBookmarks.map(bookmark => <li key={bookmark}>{bookmark}</li>) 
        : defaultBookmarks.map(bookmark => <li key={bookmark}>{bookmark}</li>)
      }
    </ul>
  );
};