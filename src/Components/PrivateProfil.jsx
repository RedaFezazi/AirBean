import useCart from "../Store/useCart";
import profilePic from "../assets/profilePic.svg";
import { useEffect } from "react";
import axios from "axios";

import "./PrivateProfile.scss";

const PrivateProfil = () => {
  const { name, email, token, orderHistory, setOrderHistory } = useCart();
  let totalSpent = 0;
  useEffect(() => {
    const fetchHistory = async () => {
      if (token) {
        try {
          const response = await axios(
            "https://airbean-api-xjlcn.ondigitalocean.app/api/user/history",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.data.success) {
            console.log("No previous orders");
          } else {
            setOrderHistory(response.data.orderHistory);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchHistory();
  }, []);
  return (
    <section className="private__profile">
      <img
        src={profilePic}
        className="private__picture"
        alt="profile Picture"
      />
      <h1>{name}</h1>
      {/* <p className="private__email">{email}</p> */}
      <ul className="history__list">
        <h2 className="history__h2">Orderhistorik</h2>
        {orderHistory.map((item, index) => {
          totalSpent += item.total;
          return (
            <li key={index} className="history__li">
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#ffffffB2",
                  }}
                >
                  #{item.orderNr}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    color: "#ffffff80",
                    marginTop: "0.3rem",
                  }}
                >
                  total ordersumma
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    color: "#ffffffB2",
                  }}
                >
                  {item.orderDate}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    color: "#ffffff80",
                    marginTop: "0.3rem",
                  }}
                >
                  {item.total} kr
                </p>
              </div>
            </li>
          );
        })}
        <li className="history__total">
          <p
            style={{
              textAlign: "left",
            }}
          >
            Totalt spenderat
          </p>
          <p
            style={{
              textAlign: "right",
            }}
          >
            {totalSpent} kr
          </p>
        </li>
      </ul>
    </section>
  );
};
export default PrivateProfil;
