import Nav from "../../Components/Nav";
import "./Profile.scss";
import SignUpForm from "../../Components/SignUpForm";
import LoginForm from "../../Components/LoginForm";
import useCart from "../../Store/useCart";
import PrivateProfil from "../../Components/PrivateProfil";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { isSignUP, token, setToken, setOrderHistory } = useCart();
  const navigate = useNavigate();

  return (
    <main className="profile">
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
      {token ? <PrivateProfil /> : isSignUP ? <SignUpForm /> : <LoginForm />}
    </main>
  );
};
export default Profile;
