import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Collaborator from "./Collaborator";
import styles from '../styles/Collaborators.module.scss'

import { useSelector } from 'react-redux'
import { collaborators } from '../constants/data'

export default function Collaborators(onClose) {
  const collabs = useSelector((state) => state.collaborator.value)
  const [query, setQuery] = useState('');

  return (
    <>
      <h2>Collaborators</h2>
      <div className={styles.collaboratorsList}>
      {
        collabs.length === 0 && <span>No Collaborators yet.</span>
      }
      {
        collaborators.filter(collaborator => {
          if (collabs && collabs.includes(collaborator.id)) {
            return collaborator;
          }
        }).map((collaborator, i) => (
          <Collaborator data={collaborator} key={i} onClose={(e) => onClose(e)}></Collaborator>
        ))
      }
      </div>
      <h2>Add Collaborator</h2>
      <div className={styles.collaboratorsSearch}>
        <FontAwesomeIcon icon={faSearch} />
        <input className="sushi-input" placeholder="search" defaultValue="helmut" onChange={event => setQuery(event.target.value)} />
      </div>
      <div className={styles.collaboratorsList}>
        {
          collaborators.filter(collaborator => {
            if (collabs && !collabs.includes(collaborator.id)) {
              if (query === '') {
                return collaborator;
              } else if (collaborator.name.toLowerCase().includes(query.toLowerCase())) {
                return collaborator;
              }
            }
          }).map((collaborator, i) => (
            <Collaborator data={collaborator} key={i} onClose={onClose}></Collaborator>
          ))
        }
      </div>
    </>
  );
};
