import styles from '../styles/Toggle.module.scss'

export default function Toggle() {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  )
}