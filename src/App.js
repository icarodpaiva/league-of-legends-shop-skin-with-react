import React, { Component } from 'react'
import './App.css'
import SkinsForSale from './components/SkinsForSale'
import Cart from './components/Cart'
import load from './images/load.jpg'
import load2 from './images/load2.png'
import top from './images/top.png'
import jg from './images/jg.png'
import mid from './images/mid.png'
import adc from './images/adc.png'
import sup from './images/sup.png'

// Use o método getProducts para buscar os produtos simulando uma requisição e substituindo a importação do arquivo products.json.
import { getProducts } from './utils/product'

let request = []
let skinShow = []
let cart = JSON.parse(localStorage.getItem('cart')) || []
let skinsAdded = JSON.parse(localStorage.getItem('skinsAdded')) || []

const cartStart = (
  <div className="poro">
    <img src={load2} alt="Poro" width={'60%'} />
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this)
    this.asideDisplay = this.asideDisplay.bind(this)
    this.skin = this.skin.bind(this)
    this.totalPrice = this.totalPrice.bind(this)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.finish = this.finish.bind(this)
    this.cart = this.cart.bind(this)
  }

  state = {
    skin: (
      <>
        <h1>Aguarde...</h1>
        <img src={load} alt="Poro" width={'100%'} />
      </>
    ),
    cart: cartStart,
    cartMobile: 0,
    rpTotal: 0,
    rsTotal: 0,
    filter: ''
  }

  componentDidMount() {
    getProducts.then(skins => {
      request = skins
      this.skin()
      this.cart()
      this.totalPrice()
    })
  }

  asideDisplay() {
    window.addEventListener('resize', () => {
      if (window.screen.width >= 800) {
        document.querySelector('aside').style.display = 'block'
      } else {
        document.querySelector('aside').style.display = 'none'
      }
    })
  }

  skin(filter = '') {
    this.setState({
      filter: filter
    })
    skinShow = request.map((skin, index) => {
      if (skin.description.toLowerCase().includes(filter.toLowerCase())) {
        return (
          <SkinsForSale
            key={index}
            index={index}
            image={skin.image}
            alt={`Skin de ${skin.name}`}
            name={skin.name}
            description={skin.description}
            price={skin.price}
            add={this.add}
          />
        )
      }
      if (skin.category === filter) {
        this.setState({
          filter: ''
        })
        return (
          <SkinsForSale
            key={index}
            index={index}
            image={skin.image}
            alt={`Skin de ${skin.name}`}
            name={skin.name}
            description={skin.description}
            price={skin.price}
            add={this.add}
          />
        )
      }
      return ''
    })
    this.setState({
      skin: skinShow
    })
  }

  cart() {
    if (cart.length === 0) {
      document.querySelector('.removeAll').style.display = 'none'
    } else {
      document.querySelector('.removeAll').style.display = 'inline-block'
    }

    const cartShow = cart.map((skin, index) => {
      return (
        <Cart
          key={index}
          index={index}
          image={skin.image}
          alt={`Skin de ${skin.name}`}
          name={skin.name}
          description={skin.description}
          price={skin.price}
          remove={this.remove}
        />
      )
    })
    if (cartShow.length === 0) {
      this.setState({
        cart: cartStart
      })
    } else {
      this.setState({
        cart: cartShow
      })
    }
    this.setState({
      cartMobile: cart.length
    })
  }

  totalPrice() {
    let rpTotal = 0
    let rsTotal = 0
    for (let i in cart) {
      rpTotal = rpTotal + cart[i].price
      rsTotal = (rpTotal / 40.625).toFixed(2)
    }
    this.setState({
      rpTotal: rpTotal,
      rsTotal: rsTotal
    })
  }

  add(add) {
    if (!skinsAdded.includes(add)) {
      skinsAdded.push(add)
      for (let i in request) {
        if (request[i].description === add) {
          cart.push({
            name: request[i].name,
            description: request[i].description,
            price: request[i].price,
            image: request[i].image
          })
        }
      }
    }

    localStorage.setItem('skinsAdded', JSON.stringify(skinsAdded))
    localStorage.setItem('cart', JSON.stringify(cart))

    this.cart()
    this.totalPrice()
  }

  remove(remove) {
    if (remove === 'removeAll') {
      cart = []
      localStorage.setItem('cart', JSON.stringify(cart))

      skinsAdded = []
      localStorage.setItem('skinsAdded', JSON.stringify(skinsAdded))
    } else {
      for (let i in cart) {
        if (remove === cart[i].description) {
          cart.splice(i, 1)
        }
      }

      for (let j in skinsAdded) {
        if (skinsAdded[j].includes(remove)) {
          skinsAdded.splice(j, 1)
        }
      }
    }

    localStorage.setItem('skinsAdded', JSON.stringify(skinsAdded))
    localStorage.setItem('cart', JSON.stringify(cart))

    this.cart()
    this.totalPrice()
  }

  finish() {
    if (cart.length > 0) {
      skinShow = []
      cart = []
      skinsAdded = []

      localStorage.setItem('skinsAdded', JSON.stringify(skinsAdded))
      localStorage.setItem('cart', JSON.stringify(cart))

      this.setState({
        skin: '',
        cart: cartStart,
        cartMobile: 0,
        rpTotal: 0,
        rsTotal: 0,
        filter: ''
      })

      this.componentDidMount()

      if (window.screen.width >= 800) {
        document.querySelector('aside').style.display = 'block'
      } else {
        document.querySelector('aside').style.display = 'none'
      }

      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })

      return alert('Pedido realizado')
    }
  }

  render() {
    return (
      <>
        {this.asideDisplay()}
        <div className="container">
          <main>
            <div className="cart-mobile">
              <button
                onClick={() => {
                  document.querySelector('aside').style.display = 'block'
                }}
              >
                {this.state.cartMobile} &#x1F6D2;
              </button>
            </div>
            <h1>Skins à Venda</h1>
            <div className="filters">
              <input
                type="text"
                placeholder="Campeão..."
                onChange={e => {
                  this.skin(e.target.value)
                }}
                value={this.state.filter}
              />
              <img
                src={top}
                alt="Top"
                onClick={() => {
                  this.skin('Top')
                }}
              />
              <img
                src={jg}
                alt="Jungle"
                onClick={() => {
                  this.skin('Jg')
                }}
              />
              <img
                src={mid}
                alt="Mid"
                onClick={() => {
                  this.skin('Mid')
                }}
              />
              <img
                src={adc}
                alt="Adc"
                onClick={() => {
                  this.skin('Adc')
                }}
              />
              <img
                src={sup}
                alt="Sup"
                onClick={() => {
                  this.skin('Sup')
                }}
              />
              <button
                onClick={() => {
                  this.skin('')
                }}
              >
                &#x274C;
              </button>
            </div>
            <div className="banners">{this.state.skin}</div>
          </main>
          <aside>
            <div className="cart-mobile">
              <button
                onClick={() => {
                  document.querySelector('aside').style.display = 'none'
                }}
              >
                &#x274C;
              </button>
            </div>
            <h1>Carrinho</h1>
            <h2>Preço Total RP: {this.state.rpTotal}</h2>
            <h2>Preço Total R$: {this.state.rsTotal}</h2>
            <button className="finish" onClick={() => this.finish()}>
              &#x1F49C; Finalizar Compra &#x1F49C;
            </button>
            <div className="cart">{this.state.cart}</div>
            <button
              className="removeAll"
              onClick={() => {
                this.remove('removeAll')
              }}
            >
              &#x274C;
            </button>
          </aside>
        </div>
      </>
    )
  }
}

export default App
