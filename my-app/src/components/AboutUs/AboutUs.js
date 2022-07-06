import style from './AboutUs.module.css'
import aboutUsImg from '../../assets/images/about-us_img.png'
import Button from '../Button/Button'
import iconFile from '../../assets/icons/icon-file.svg'

export default function AboutUs() {
  return (
    <>
      <div className={style['about-us']}>
        <img
          src={aboutUsImg}
          alt="about-us_img"
          className={style['about-us-img']}
        />
        <p>About Us</p>
        <h2>
          We Are <span>Making Ideas Better</span> For Everyone
        </h2>
        <p className={style['second-description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
          imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean
          Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
          faucibus est, dui interdum ut amet.
        </p>
        <Button />
      </div>
      <div className={style['about-us__second']}>
        <div className={style['about-us-element']}>
          <div className={style['about-us-element__icon']}>
            <img src={iconFile} alt="icon-file" />
          </div>
          <p>World leader in consulting and finance</p>
        </div>
      </div>
    </>
  )
}
