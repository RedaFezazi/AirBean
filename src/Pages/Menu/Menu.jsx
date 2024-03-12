import { useEffect } from "react";
import cartLogo from "../../assets/cartLogo.svg";

import plusBtn from "../../assets/plusBtn.svg";
import "./Menu.scss";
import useCart from "../../Store/useCart";
import Orders from "../../Components/Orders";
import Nav from "../../Components/Nav";
import DecoTop from "../../Components/Decoration/DecoTop";
import DecoBottom from "../../Components/Decoration/DecoBottom";

const Menu = () => {
  const { cart, addToCart, menu, fetchMenu, setIsOrders, isOrders, isNav } =
    useCart();

  let sum = 0;
  for (let key in cart) {
    sum += cart[key];
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#f3e4e2",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DecoTop />
      <DecoBottom />
      {isNav ? null : (
        <aside onClick={setIsOrders} className="cartLogo">
          <img src={cartLogo} alt="cart" />
          <p>{sum}</p>
        </aside>
      )}
      <section className="center-section">
        <h1
          style={{
            fontFamily: "PT Serif",
            fontSize: "2.425rem",
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          Meny
        </h1>
        <ul className="menuList">
          {menu ? (
            menu.map((item) => {
              return (
                <li key={item.id}>
                  <button onClick={() => addToCart(item)}>
                    <img src={plusBtn} />
                  </button>
                  <div>
                    <p className="menuList--title">{item.title}</p>
                    <p className="menuList--desc">{item.desc}</p>
                  </div>
                  <p className="menuList--price">{item.price + " kr"}</p>
                </li>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </section>
      {isOrders ? <Orders /> : null}
      <Nav />
    </main>
  );
};
export default Menu;
