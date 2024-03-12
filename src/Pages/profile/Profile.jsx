import Nav from "../../Components/Nav";
import "./Profile.scss";
import SignUpForm from "../../Components/SignUpForm";
import LoginForm from "../../Components/LoginForm";
import useCart from "../../Store/useCart";
import PrivateProfil from "../../Components/PrivateProfil";
import { useNavigate } from "react-router-dom";
import DecoTop from "../../Components/Decoration/DecoTop";

const Profile = () => {
  const { isSignUP, token, setToken, setOrderHistory } = useCart();
  const navigate = useNavigate();

  return (
    <main className="profile">
      {token ? <PrivateProfil /> : isSignUP ? <SignUpForm /> : <LoginForm />}

      <DecoTop />

      <Nav />
      {token ? (
        <p
          className="loggaUt"
          onClick={() => {
            setOrderHistory([]);

            setToken("");
            navigate("/");
          }}
        >
          Logga ut
        </p>
      ) : null}
    </main>
  );
};
export default Profile;
