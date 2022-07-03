import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { StyledCard } from "../../components/styled-reuseables/Card.styled";
import { AppContext } from "../../helper/Context";
import { auth, provider } from "../../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";

function SignUpCard(props) {
  let navigate = useNavigate();

  const { isAuth, setIsAuth } = useContext(AppContext);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      const profilePic = res.user.photoURL;
      const userName = res.user.displayName;
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("username", userName);
    });
  };
  return (
    <StyledCard>
      <div className="card-col col">
        <h3>Welcome, BookWorm!</h3>
        <button onClick={signInWithGoogle}>
          <FcGoogle style={{ fontSize: "1.2rem" }} />
          Continue with Google
        </button>
      </div>

      <div className="card-text">
        <p>
          To create your account, Google will share your name, email address,
          and profile picture with <span>BOOKSY</span>. Learn more about
          Google's <a href="/">Terms of Service</a> and{" "}
          <a href="/">Privacy Policy</a>.{" "}
        </p>
      </div>
    </StyledCard>
  );
}

export default SignUpCard;
