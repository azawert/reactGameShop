import React from "react";
import styles from "./Cartblock.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const CartBlock = () => {
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  return (
    <div className={styles.cart__container}>
      <Link to="/cart">
        <div>
          <AiOutlineShoppingCart size={25} className={styles.cart__icon} />
        </div>
        <span className={styles.cart__totalprice}>{totalPrice} руб.</span>
      </Link>
      
    </div>
  );
};

export default CartBlock;
