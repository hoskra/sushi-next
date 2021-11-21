import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Collaborators.module.scss'

export default function Collaborator(props) {

    return (
        <div className={styles.collaborator}>
            <span className={styles.collaboratorImage}></span>
            <span>{props.data.name}</span>
            <span>
                <button className="sushi-button" onClick={event => props.onClose}>
                  {props.data.wasAdded ? 'Remove' : 'Add'}
                  {!props.data.wasAdded ? <FontAwesomeIcon icon={faPlus} />: ""}
                </button>
            </span>
        </div>
    );
};
