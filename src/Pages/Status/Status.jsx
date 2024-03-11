import "./Status.scss";
import drone from "../../assets/drone.svg";
import { useNavigate } from "react-router-dom";
import useCart from "../../Store/useCart";

const Status = () => {
  const navigate = useNavigate();
  let { newOrder } = useCart();

  return (
    <main className="status">
      <p className="status__orderNumber">
        Ordernummer <span>{" " + newOrder.orderNr}</span>
      </p>
      <img src={drone} alt="Drone carrying a cup coffe" />

      <article className="status__article">
        <h1 className="status__header">Din beställning är på väg!</h1>
        <p className="article__para">
          <span className="status__minutes">{newOrder.eta + " "} </span>
          minuter
        </p>
      </article>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="status__button"
      >
        Ok, cool!
      </button>
    </main>
  );
};
export default Status;
