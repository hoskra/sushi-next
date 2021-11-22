import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faPlus} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Collaborators.module.scss'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { addCollaborator, removeCollaborator } from '../redux/collaboratorsSlice'


export default function Collaborator(props) {
    const collabs = useSelector((state) => state.collaborator.value)
    const dispatch = useDispatch()


    return (
        <div className={styles.collaborator}>
            <div className={styles.collaboratorImage}>  <FontAwesomeIcon icon={faUser} /></div>
            <span>{props.data.name}</span>
            <span>

          {collabs.includes(props.data.id) ?
            <button className="sushi-button" onClick={() => {dispatch(removeCollaborator({id: props.data.id}))}}>
             Remove
           </button>
             :
            <button className="sushi-button" onClick={() => {dispatch(addCollaborator({id: props.data.id}))}}>
               Add<FontAwesomeIcon icon={faPlus} />
             </button>
            }
            </span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
  removeCollaborator(id) {
    return () => {
      dispatch(removeCollaborator(id));
    };
  },
});