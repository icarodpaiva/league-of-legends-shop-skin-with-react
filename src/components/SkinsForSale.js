import React from 'react'
import './SkinsForSale.css'

export default function SkinsForSale(props) {
  return (
    <div className="banner">
      <img src={props.image} alt={props.alt} />

      <p>
        <span>Personagem:</span> {props.name}
      </p>
      <p>
        <span>Skin:</span> {props.description}
      </p>
      <p>
        <span>Preço em RP:</span> {props.price}
      </p>
      <p>
        <span>Preço aproximado em R$:</span> {(props.price / 40.625).toFixed(2)}
      </p>

      <button onClick={() => props.add(props.description)}>
        &#x1F6D2; Adicionar &#x1F6D2;
      </button>
    </div>
  )
}
