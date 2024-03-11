import "./Orders.scss";
import OrderItem from "./OrderItem";
import useCart from "../Store/useCart";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { cart, menu, setNewOrder, emptyCart, setIsOrders, token } = useCart();

  const navigate = useNavigate();
  const postOrder = async (order) => {
    try {
      const response = await axios.post(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
        {
          details: {
            order,
          },
        },
        token
          ? {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          : null
      );

      setNewOrder(response.data);
      navigate("/status");
      emptyCart();
      setIsOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const itemsCart = Object.keys(cart).map((item) =>
    menu.find((i) => i.id === item)
  );
  let totalPrice = 0;

  const countTotal = () => {
    Object.keys(cart).map((item) => {
      const price = menu.find((i) => i.id === item).price;
      totalPrice += price * cart[item];
    });
  };
  countTotal();

  return (
    <aside className="orders">
      <section className="orders--center">
        <h1>Din beställning</h1>
        <ul>
          {itemsCart.map((item) => {
            return <OrderItem key={item.id} item={item} />;
          })}
          <div style={{ marginTop: "3rem" }}>
            <OrderItem
              item={{
                title: "Total",
                price: "inkl moms + drönarleverans",
                total: true,
                totalPrice: totalPrice,
              }}
            />
          </div>
        </ul>

        <button
          onClick={() => {
            const order = [].concat.apply(
              [],
              Object.keys(cart).map((id) => {
                const { title, price } = menu.find((f) => f.id === id);
                let sameProductArray = [];

                for (let index = 0; index < cart[id]; index++) {
                  sameProductArray.push({ name: title, price });
                }

                return sameProductArray;
              })
            );

            postOrder(order);
          }}
          disabled={totalPrice === 0}
          className="orders--button"
        >
          Take my money!
        </button>
      </section>
    </aside>
  );
};
export default Orders;
