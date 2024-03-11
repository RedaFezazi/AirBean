import "./Nav.scss";
import burgerMenu from "../assets/burgerMenu.svg";
import { LiaTimesSolid } from "react-icons/lia";
import useCart from "../Store/useCart";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const {
    isNav,
    setIsNav,
    isSubProfile,
    setIsSubProfile,
    isSignUP,
    setIsSignUP,
    token,
    setEta,
    setNoOrderMsg,
    setOrderNumber,
  } = useCart();

  const navigate = useNavigate();

  return (
    <>
      <aside onClick={setIsNav} className="burgerMenu">
        {isNav ? (
          <LiaTimesSolid style={{ fontSize: "2rem", color: "black" }} />
        ) : (
          <img src={burgerMenu} alt="Menu button" />
        )}
      </aside>
      {isNav ? (
        <main className="nav">
          <a
            onClick={() => {
              setIsNav();
              navigate("/menu");
            }}
          >
            <span>Meny</span>
          </a>
          <hr />
          <a
            onClick={() => {
              setIsNav();
              navigate("/about");
            }}
          >
            <span>Vårt kaffe</span>
          </a>
          <hr />

          <a>
            <span
              onClick={() => {
                if (token) {
                  setIsNav();
                  navigate("/profile");
                  return;
                }
                setIsSubProfile();
              }}
            >
              Min profil
            </span>
            {isSubProfile ? (
              <aside className="subProfile">
                <p
                  onClick={() => {
                    if (isSignUP) {
                      setIsSignUP();
                    }

                    navigate("/profile");
                    setIsNav();
                    setIsSubProfile();
                  }}
                >
                  Logga in
                </p>
                <p
                  onClick={() => {
                    if (!isSignUP) {
                      setIsSignUP();
                    }

                    navigate("/profile");
                    setIsNav();
                    setIsSubProfile();
                  }}
                >
                  Registrera dig
                </p>
              </aside>
            ) : null}
          </a>
          <hr className={isSubProfile ? "marginTop" : null} />

          <a
            onClick={() => {
              setIsNav();
              setEta("");
              setNoOrderMsg("");
              setOrderNumber("");
              navigate("/FetchOrder");
            }}
          >
            <span>Orderstatus</span>
          </a>
        </main>
      ) : null}
    </>
  );
};
export default Nav;
