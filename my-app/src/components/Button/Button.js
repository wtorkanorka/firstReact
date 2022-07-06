import React, { useEffect, useState } from 'react'
import styles from './button.module.css'

export default function Button() {
  const [count, setState] = useState(0)
  useEffect(() => {
    document.title = `${count}`
  })

  return (
    <button className={styles['button']} onClick={() => setState(count + 1)}>
      Contact Us
    </button>
  )
}
