import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Collaborator from "./Collaborator";
import styles from '../styles/Collaborators.module.scss'

import { collaborators } from '../constants/data'

export default function Collaborators(onClose) {
  const [query, setQuery] = useState('');

  return (
    <div>
        <div className={styles.collaboratorsList}>
          <div className={styles.collaboratorsSearch}>
            <FontAwesomeIcon icon={faSearch} />
            <input className="sushi-input" placeholder="search" onChange={event => setQuery(event.target.value)} />
          </div>
          {
            collaborators.filter(collaborator => {
              if (!collaborator.wasAdded) {
                if (query === '') {
                  return collaborator;
                } else if (collaborator.name.toLowerCase().includes(query.toLowerCase())) {
                  return collaborator;
                }
              }
            }).map(collaborator => (
              <Collaborator data={collaborator} onClose={onClose}></Collaborator>
            ))
          }
        </div>
      <div>
        {
          collaborators.filter(collaborator => {
            if (collaborator.wasAdded) {
              return collaborator;
            }
          }).map(collaborator => (
            <Collaborator data={collaborator} onClose={event => onClose}></Collaborator>
          ))
        }
      </div>
    </div>
  );
};
