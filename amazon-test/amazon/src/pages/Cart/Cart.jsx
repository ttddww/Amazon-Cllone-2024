import React, { useContext } from 'react'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css'
import { Type } from '../../Utility/action.type';
import { IoArrowUpCircle } from "react-icons/io5";
import { IoArrowDownCircle } from "react-icons/io5";

function Cart() {
  const [{basket,user}, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)

  const increment = (item)=>{
    dispatch({type:Type.ADD_TO_BASKET, item})
  }
  const decrement = (id)=>{
    dispatch({type:Type.REMOVE_FROM_BASKET, id})
  }
  return (
    <section className={classes.cart_container}>
      <div className={classes.cart_in_container}>
        <h2>Hello</h2>
        <h3>Your Shopping Cart</h3>
        <hr />
        {basket?.length === 0 ? (
          <p>Ops Your Cart is empty</p>
        ) : (
          basket?.map((item, id) => {
            return (
              <section className={classes.cart_product}>
                <ProductCard
                  key={id}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoArrowUpCircle size={40} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoArrowDownCircle size={40} />
                  </button>
                </div>
              </section>
            );
          })
        )}
      </div>
      {basket?.length > 0 && (
        <div className={classes.subtotal}>
          <div>
            <p>Subtotal ({basket?.length} items)</p>
            <CurrencyFormat amount={total} />
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>
          <Link to="/payments">Continue to checkout</Link>
        </div>
      )}
    </section>
  );
}

export default Cart