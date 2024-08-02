import React from 'react'
import Style from './Style.module.css'
import Logo1 from '../img/Logo-Softex-PE_PNG.png'

const Footer = () => {
  return (
    <div className={Style.footer}>
        <div className={Style.logos}>
            <img src={Logo1} alt="LogoSoftex" />
            <img src={Logo1} alt="LogoSoftex" />
            <img src={Logo1} alt="LogoSoftex" />
        </div>
        <div className={Style.email}>
            <p>douglas.aarq95@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer
