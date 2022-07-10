import React from 'react'
import style from './OurWork.module.css'

export default function OurWork() {
  return (
    <div className={style['our-work']}>
      <div className={style['our-work__first-section']}>
        <p>Our Work</p>
        <h2>
          We Have Some <span>Designed & Development</span> Projects
        </h2>
        <div className={style['catagories']}>
          <button>All</button>
          <button>Graphic Design</button>
          <button>UI/UX Design</button>
          <button>Web Development</button>
        </div>
      </div>
      <div className={style['our-work__second-section']}></div>
    </div>
  )
}
