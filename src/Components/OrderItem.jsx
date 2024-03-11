import useCart from "../Store/useCart";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

const OrderItem = ({ item }) => {
  const { title, price, id, total, totalPrice } = item;
  const { cart, addToCart, deleteFromCart, deleteItem } = useCart();

  return (
    <li>
      <div className="orders--item">
        <p className="orders--title">{title}</p>
        <p className="orders--price">{price + " kr"}</p>
      </div>
      <div className="counter">
        {total ? (
          <p className="total">{totalPrice + " kr"}</p>
        ) : (
          <>
            {cart[id] === 0 ? (
              <FaTimes onClick={() => deleteItem(item)} className="times" />
            ) : null}
            <IoIosArrowUp className="arrows" onClick={() => addToCart(item)} />
            <p>{cart[id]}</p>
            <IoIosArrowDown
              className="arrows"
              onClick={() => {
                if (cart[id] !== 0) deleteFromCart(item);
              }}
            />
          </>
        )}
      </div>
    </li>
  );
};
export default OrderItem;
