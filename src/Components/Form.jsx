import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { AuthContext } from "../Contexts/AuthContext";
import { showErrorToast, showSuccessToast } from "../HelperFiles/toast";
import { app } from "../firebase";
import { loginAtom } from "../store/login";
import ReCAPTCHA from "react-google-recaptcha";
const googleSiteKey = import.meta.env.VITE_SITE_KEY;

function Form({ heading1 }) {
  const auth = getAuth(app);

  const navigate = useNavigate();
  const [localemail, setLocalEmail] = useState("dummyuser@getnada.com");
  const [localpassword, setLocalPassword] = useState("dummy123@@");
  const [captchaValue, setCaptchaValue] = useState(false);
  const { setEmail, setPassword } = useContext(AuthContext);
  const [, setLogin] = useRecoilState(loginAtom);

  const signInUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, localemail, localpassword);
      showSuccessToast("LogIn Successfully");
      setLogin(true);
      navigate(`/Netflix/?email=${localemail}&encryption='true'`);
    } catch (err) {
      const updatedMsg = err.message.split(":");
      showErrorToast(updatedMsg[1]);
    }
  };

  const signupUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, localemail, localpassword);
      showSuccessToast("Account Created Successfully");
      setLogin(true);
      navigate(`/Netflix/?email=${localemail}&encryption='true'`);
    } catch (error) {
      const updatedMsg = error.message.split(":");
      showErrorToast(updatedMsg[1]);
    }
  };

  function handleEmail(e) {
    setLocalEmail(e.target.value);
  }

  function handlePassword(e) {
    setLocalPassword(e.target.value);
  }

  function handleSubmit(e) {
    if (captchaValue) {
      e.preventDefault();
      setEmail(localemail);
      setPassword(localpassword);
      if (heading1 !== "Sign In") {
        signupUser();
      } else {
        signInUser();
      }
    } else {
      showErrorToast("Select Captcha Please to proceed");
    }
  }

  function onChange() {
    setCaptchaValue(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          className="p-3 rounded-lg text-white  bg-[#121312]"
          type="email"
          onChange={handleEmail}
          placeholder="Email Address"
          value={localemail}
          required
        />
        <input
          className="p-3 rounded-lg text-white bg-[#121312]"
          onChange={handlePassword}
          required
          type="password"
          placeholder="Password"
          value={localpassword}
        />
        <ReCAPTCHA sitekey={googleSiteKey} onChange={onChange} />
        <button
          className="p-3 rounded-lg text-white bg-[#C11119]"
          type="submit"
        >
          {heading1}
        </button>
      </form>
    </>
  );
}
export default Form;
