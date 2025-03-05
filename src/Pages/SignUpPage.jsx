import { useNavigate } from "react-router-dom";
import Form from "../Components/Form";
import { AuthContext } from "../Contexts/AuthContext";
import { memo, useContext, useEffect } from "react";

function SignUpPage() {
  const navigate = useNavigate();
  const { setEmail, setPassword } = useContext(AuthContext);

  function handleNavigation() {
    navigate("/Login");
  }

  useEffect(() => {
    // Reset values when the component mounts
    setEmail("");
    setPassword("");
  }, [setEmail, setPassword]); // Dependencies ensure reset happens on navigation
  return (
    <>
      <div className="bg-netflix flex justify-center items-center h-screen">
        <div className="flex flex-col gap-5 bg-black bg-opacity-75 p-10 rounded-lg min-w-96 shadow-lg text-center">
          <Form heading1={"Sign Up"} />
          <button
            className="p-3 rounded-lg text-white bg-[#302C2F] bg-opacity-95"
            onClick={handleNavigation}
          >
            Navigate to LogIn Page
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(SignUpPage);
