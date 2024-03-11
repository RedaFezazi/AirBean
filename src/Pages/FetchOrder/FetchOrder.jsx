import "../Status/Status.scss";
import drone from "../../assets/drone.svg";
import useCart from "../../Store/useCart";
import axios from "axios";
import Nav from "../../Components/Nav";

const FetchOrder = () => {
  let {
    token,
    orderNumber,
    setOrderNumber,
    eta,
    setEta,
    setNoOrderMsg,
    noOrderMsg,
  } = useCart();
  const fetchUpdate = async () => {
    try {
      const response = await axios(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/${orderNumber}`,
        token
          ? {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          : null
      );
      if (response.data.success === false) {
        setNoOrderMsg(response.data.message);
      } else {
        if (response.data.message) {
          setNoOrderMsg(response.data.message);
        } else {
          setEta(response.data.eta);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="status">
      <Nav />

      <img src={drone} alt="Drone carrying a cup coffe" />

      <article className="status__article">
        <h1 className="status__header">Kontrollera Orderstatus</h1>
        <form
          className="status__form"
          onSubmit={(e) => {
            e.preventDefault();
            setNoOrderMsg("");
            setEta("");
            fetchUpdate();
          }}
        >
          <label className="status__label" htmlFor="order">
            Skriv in ditt ordernummer
          </label>
          <input
            placeholder="Ex: AB1710058384203Y"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
            className="status__input"
            type="text"
            name="order"
            id="order"
            required
          />
          <button className="status__btn" type="submit">
            Sök
          </button>
        </form>
        {eta ? (
          <p
            style={{
              marginTop: "1rem",
            }}
            className="article__para"
          >
            Din beställning kommer om
            <span className="status__minutes">{" " + eta + " "}</span>
            minuter
          </p>
        ) : null}

        {noOrderMsg ? (
          <p
            style={{
              marginTop: "1rem",
            }}
            className="article__para"
          >
            {noOrderMsg}
          </p>
        ) : null}
      </article>
    </main>
  );
};
export default FetchOrder;
