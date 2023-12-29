import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let cartTotalPrice = 0
      cartList.forEach(item => {
        cartTotalPrice += item.price * item.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="cart-summary-content-container">
            <h1 className="cart-summary-total-price-details">
              Order Total: <span className="cart-total">{cartTotalPrice}</span>
            </h1>
            <p className="cart-summary-quantity-details">
              {cartList.length} Items in cart
            </p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
