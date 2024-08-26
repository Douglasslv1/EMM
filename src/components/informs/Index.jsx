import React from 'react'
import Style from './Style.module.css'

const Informs = (props) => {
  return (
    <>
        <div className={Style.container}>
            <p className={Style.tex}>{props.text1}</p>
            <p className={Style.tex}>{props.text2}</p>
            <p className={Style.tex}>{props.text3}</p>
        </div>
    </>
  )
}

export default Informs
