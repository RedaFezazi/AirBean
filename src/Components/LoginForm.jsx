import axios from "axios";
import useCart from "..//Store/useCart";
import logo from "../assets/blackLogo.svg";

const LoginForm = () => {
  const {
    name,
    email,
    setName,
    setEmail,
    setFailedSignupMsg,
    failedSignupMsg,
    setToken,
    token,
  } = useCart();
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email);
      const response = await axios.post(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/user/login",
        {
          username: name,
          password: email,
        }
      );
      if (!response.data.success) {
        setFailedSignupMsg(response.data.message);
        setTimeout(() => setFailedSignupMsg(""), 3000);
      } else {
        setToken(response.data.token);
        console.log(response.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="profile__center">
      <img src={logo} alt="logo" />
      <h1>Tack för att du är en del av AirBean!</h1>
      <p className="profile__para">Fyll i nedan dina uppgifter!</p>
      <form onSubmit={handelSubmit}>
        <section className="profile__section">
          <label htmlFor="name">Namn</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            required
          />
          <p className="loginError">{failedSignupMsg}</p>
        </section>
        <section className="profile__section">
          <label htmlFor="eMail">Epost</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="eMail"
            id="eMail"
            required
          />
        </section>

        <button className="form__btn" type="submit">
          Logga in!
        </button>
      </form>
    </section>
  );
};
export default LoginForm;
