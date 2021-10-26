import React from 'react'
import './Cart.css'

export default function Cart(props) {
  return (
    <div className="skin">
      <img src={props.image} alt={props.alt} />

      <div className="skin-info">
        <p>{props.description}</p>
        <p>RP: {props.price}</p>
        <p>R$: {(props.price / 40.625).toFixed(2)}</p>
      </div>

      <button
        onClick={() => {
          props.remove(props.description)
        }}
      >
        &#x274C;
      </button>
    </div>
  )
}
