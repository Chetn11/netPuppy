import React from 'react'
import styles from "./BasicCard.module.css"

function BasicCard({heading,dec,url}) {
  return (
    <div>
      <div className={styles.card} style={{backgroundImage: `url(${url})`}}>
      <div>
        <h2>{heading}</h2>
        <p>{dec}</p>
      </div>
    </div>
    </div>
  )
}

export default BasicCard
