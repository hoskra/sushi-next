import React from "react";
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import modalStyles from '../styles/Modal.module.scss'
import { deleteTextbook } from '../redux/textbookSlice'

export default function DeleteTextbook({disableDeleteModal, id}) {
  const router = useRouter();
  const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      router.push("/");
      dispatch(deleteTextbook(id));
    }

    return (
      <form onSubmit={handleSubmit} className={modalStyles.modalContent}>
      <div className="sushi-input-container">
          <p>Given textbook will be permanently deleted.</p>
        </div>
        <div className={modalStyles.buttons}>
          <button className="sushi-button" type="submit">Delete</button>
          <button className="sushi-button" onClick={(e) => disableDeleteModal(e)}>Cancel</button>
        </div>
      </form>
    )
};

