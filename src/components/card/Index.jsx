import React from 'react'
import Style from './Style.module.css'

const Card = (props) => {
  return (
    <>
      <div className={Style.card}>
        <h1 className={Style.inform1}>{props.inform1}</h1>
        <p className={Style.inform2}>{props.inform2}</p>
      </div>
    </>
  )
}

export default Card
