import axios from "axios";
import useCart from "..//Store/useCart";
import logo from "../assets/blackLogo.svg";

const SignUpForm = () => {
  const {
    name,
    email,
    setName,
    setEmail,
    failedSignupMsg,
    setFailedSignupMsg,
    setIsSignUP,
  } = useCart();
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/user/signup",
        {
          username: name,
          password: email,
        }
      );
      if (!response.data.success) {
        setFailedSignupMsg(response.data.message);
        setTimeout(() => setFailedSignupMsg(""), 3000);
      } else {
        setIsSignUP();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="profile__center">
      <img src={logo} alt="logo" />
      <h1>Välkommen till AirBean-familjen!</h1>
      <p className="profile__para">
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
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
          <p className="signupNameError">{failedSignupMsg}</p>
        </section>
        <section className="profile__section">
          <label htmlFor="eMail">Password</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="password"
            name="eMail"
            id="eMail"
            minLength={5}
            required
          />
        </section>
        <section className="profile__section form__checkBox">
          <input type="checkbox" name="gdpr" id="gdpr" required />
          <label htmlFor="gdpr">GDPR Ok!</label>
        </section>
        <button className="form__btn" type="submit">
          Brew me a cup!
        </button>
      </form>
    </section>
  );
};
export default SignUpForm;
