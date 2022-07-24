import React from 'react'
import styles from './Genre.module.scss'
const Genre = (props) => {
  return (
    <span className={styles.genre}>
        {props.genre}
    </span>
  )
}

export default Genre