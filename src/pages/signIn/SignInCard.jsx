import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { StyledCard } from "../../components/styled-reuseables/Card.styled";
import { AppContext } from "../../helper/Context";
import { auth, provider } from "../../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";

function SignUpCard() {
  let navigate = useNavigate();

  const { setIsAuth } = useContext(AppContext);

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
        <p>This is a one-time, password-less login, so you don't need a password.</p>
      </div>
    </StyledCard>
  );
}

export default SignUpCard;
