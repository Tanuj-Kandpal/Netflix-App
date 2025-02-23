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
import { randomId } from "../HelperFiles/constants";

function Form({ heading1 }) {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword } = useContext(AuthContext);
  const [, setLogin] = useRecoilState(loginAtom);

  // const { setAuthenticatedUser } = useContext(IsUserAuthenticated);

  const signInUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showSuccessToast("LogIn Successfully");
      setLogin(true);
      navigate(`/Netflix/${randomId}?email=${email}&encryption='true'`);
    } catch (err) {
      const updatedMsg = err.message.split(":");
      showErrorToast(updatedMsg[1]);
    }
  };

  // // Get the currently signed-in user
  // const user = auth.currentUser;

  // // Get the ID token (if the user is signed in)
  // if (user) {
  //   user
  //     .getIdToken()
  //     .then((idToken) => {
  //       // Send the ID token to your backend server for verification
  //       console.log("ID Token:", idToken);
  //     })
  //     .catch((error) => {
  //       console.error("Error getting ID token:", error);
  //     });
  // }

  const signupUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showSuccessToast("Account Created Successfully");
      setLogin(true);
      navigate(`/Netflix/${randomId}?email=${email}&encryption='true'`);
    } catch (error) {
      const updatedMsg = error.message.split(":");
      showErrorToast(updatedMsg[1]);
    }
  };

  function handleEmail(email) {
    const enteredEmail = email.target.value;
    setEmail(enteredEmail);
  }

  function handlePassword(password) {
    const enteredPassword = password.target.value;
    setPassword(enteredPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (heading1 !== "Sign In") {
      signupUser();
    } else {
      signInUser();
    }
  }

  return (
    <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
            type="submit"
          >
            {heading1}
          </button>
        </form>
    </>
  );
}
export default Form;
