import React from "react";
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Tabs from "./Tabs";

export default function HomepageTools() {
  const loggedIn = useSelector((state) => state.user.value)

  return (
    <div className="tools">
      <Tabs/>
      { loggedIn &&
        <button className="sushi-button">
          Add new textbook 
          <FontAwesomeIcon icon={faPlus} /> 
        </button>
      }
    </div>
  );
};