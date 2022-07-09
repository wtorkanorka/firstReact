import React from 'react'
import style from './OurExperienceElement.module.css'

export default function OurExperienceElement(props) {
  console.log(props.file.file)
  let container = props.file.file.map(item => (
    <div className={style['our-experience-block']}>
      <h3>{item.text}</h3>
      <p>{item.description}</p>
    </div>
  ))
  return <>{container}</>
}
