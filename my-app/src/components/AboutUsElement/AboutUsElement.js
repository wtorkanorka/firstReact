import React from 'react'
import style from './AboutUsElement.module.css'

export default function AboutUsElement(props) {
  const styles = {
    boxShadow: props.file.boxShadow,
    paddingTop: '25px',
    paddingLeft: '27px',
    paddingRight: '17px',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '21px',
    alignItems: 'center',
    background: props.file.backgroundColor,
  }
  console.log(styles.background, '123')

  let file = props.file.map(item => (
    <div className={styles.background} key={item.id}>
      <div className={style['about-us-element__icon']}>
        <img src={item.icon} alt="123" />
      </div>
      <p>{item.text}</p>
    </div>
  ))
  return <>{file}</>
}
