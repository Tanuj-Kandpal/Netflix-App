import { useState } from "react";
import Form from "../Components/Form";
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const [, setshowUnreguser] = useState(false);
    const [showReguser, setshowReguser] = useState(true);
    const navigate = useNavigate();

    function handleUnreguser() {
        navigate("/SignUp");
        setshowUnreguser(true);
        setshowReguser(false);
    }

    function RegUser() {
        return <>
            <div className="flex flex-col gap-5 bg-black bg-opacity-75 p-10 rounded-lg min-w-96 h-2/4 shadow-lg text-center">
                <Form heading1={"Sign In"} ></Form>
                <h1 className="text-white" >OR</h1>
                <button className="p-3 rounded-lg text-white bg-[#302C2F] bg-opacity-95" onClick={handleUnreguser}>Create a new User</button>
            </div>
        </>
    }

    return <>
        <div className="bg-netflix flex justify-center items-center h-screen">
            {showReguser && <RegUser />}
        </div>
    </>

}

export default LoginPage;