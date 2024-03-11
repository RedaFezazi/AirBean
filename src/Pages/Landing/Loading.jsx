import DecoLeft from "../../Components/Decoration/DecoLeft";
import DecoRight from "../../Components/Decoration/DecoRight";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

import "./Loading.scss";

const Loading = () => {
  const navigate = useNavigate();
  return (
    <main
      style={{
        backgroundColor: "#3e846e",
        position: "relative",
      }}
    >
      <DecoLeft />
      <DecoRight />
      <button onClick={() => navigate("/menu")} className="central-section">
        <img src={logo} alt="logo" style={{ marginBottom: "1rem" }} />
        <p
          style={{
            fontFamily: "Rufina",
            fontSize: "2.625rem",
            fontWeight: "700",
          }}
        >
          AIR BEAN
        </p>
        <p
          style={{
            fontFamily: "Work Sans",
            fontSize: "0.5625rem",
            fontWeight: "400",
            marginTop: "0.3rem",
            letterSpacing: "0.3em",
          }}
        >
          DRONEDELIVERED COFFEE
        </p>
      </button>
    </main>
  );
};
export default Loading;
