import React, { useState } from "react";

import styles from '../styles/User.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { editUser } from '../redux/userSlice';

export function Settings({setComponent, list}) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.data);
  const [user, setUser] = useState(currentUser);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value
    })
  }

  return (
    <form >
      <div className="sushi-input-container">
        <label>Email</label>
        <input name="email" className="sushi-input" type="text" value={user.email} onChange={(e) => handleChange(e)}/>
      </div>
      <div className="sushi-input-container">
        <label>Password</label>
        <input name="password" className="sushi-input" autoComplete="cc-csc" type="password" value={user.password} onChange={(e) => handleChange(e)}/>
      </div>
      <div className="sushi-input-container">
        <label>Name</label>
        <input name="name" className="sushi-input" type="text" value={user.name} onChange={(e) => handleChange(e)}/>
      </div>
      <div className="sushi-input-container">
        <label>Description</label>
        <textarea name="description" className="sushi-input" autoComplete="cc-csc" type="text" value={user.description} onChange={(e) => handleChange(e)}></textarea>
      </div>
      <div className={styles.save_button}>
        <button type="button" className="sushi-button"
          onClick={() => { !list && setComponent(true) ; dispatch(editUser(user))}}>
          Save
        </button>
      </div>
    </form>
  )
}