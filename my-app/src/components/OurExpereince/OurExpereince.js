import React from 'react'
import style from './OurExpereince.module.css'
import Button from '../Button/Button'

export default function OurExpereince() {
  return (
    <div className={style['our-experience']}>
      <p>Our Expereince</p>
      <h2>
        We Have Completed <span>150+ Projects</span> Succesfully
      </h2>
      <p className={style['our-description__second-paragraph']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
        imperdiet at a augue ullamcorper. Ornare etiam erat volutpat tempor
        fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.
      </p>
      <Button />
      <div className={style['our-experience__blocks']}>
        <div className={style['our-experience-block']}>
          <h3>250+</h3>
          <p>Global Customer</p>
        </div>
        <div className={style['our-experience-block']}>
          <h3>156+</h3>
          <p>Project Completed</p>
        </div>
        <div className={style['our-experience-block']}>
          <h3>50+</h3>
          <p>Team Member</p>
        </div>
        <div className={style['our-experience-block']}>
          <h3>15+</h3>
          <p>Our Company</p>
        </div>
      </div>
    </div>
  )
}
