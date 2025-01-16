import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { AuthContext } from "../Contexts/AuthContext";
import { showErrorToast, showSuccessToast } from "../HelperFiles/toast";
import { app } from "../firebase";
import { loginAtom } from "../store/login";

function Form({ heading1 }) {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword } = useContext(AuthContext);
  const [, setLogin] = useRecoilState(loginAtom);

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        showSuccessToast("LogIn Successfully");
        setLogin(true);
        navigate("/Netflix");
      })
      .catch((err) => {
        const updatedMsg = err.message.split(":");
        showErrorToast(updatedMsg[1]);
      });
  };

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        showSuccessToast("Account Created Successfully");
        setLogin(true);
        navigate("/Netflix");
      })
      .catch((error) => {
        const updatedMsg = error.message.split(":");
        showErrorToast(updatedMsg[1]);
      });
  };

  function handleEmail(email) {
    const enteredEmail = email.target.value;
    setEmail(enteredEmail);
  }

  function handlePassword(password) {
    const enteredPassword = password.target.value;
    setPassword(enteredPassword);
  }

  function handleSignIn() {
    if (heading1 !== "Sign In") {
      signupUser();
    } else {
      signInUser();
    }
  }

  return (
    <>
      <input
        className="p-3 rounded-lg text-white  bg-[#121312]"
        type="email"
        onChange={handleEmail}
        placeholder="Email Address"
        value={email}
        required
      />
      <input
        className="p-3 rounded-lg text-white bg-[#121312]"
        onChange={handlePassword}
        required
        type="password"
        placeholder="Password"
        value={password}
      />
      <button
        className="p-3 rounded-lg text-white bg-[#C11119]"
        onClick={handleSignIn}
      >
        {heading1}
      </button>
    </>
  );
}
export default Form;
