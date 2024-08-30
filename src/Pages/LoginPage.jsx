import { useState } from "react";
import Form from "../Components/Form";
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const [showUnreguser, setshowUnreguser] = useState(false);
    const [showReguser, setshowReguser] = useState(true);
    const navigate = useNavigate();
    /**
     * This is implementation to avoid heartbeats which is getting printed in console
     */

    // Save the original console.log function
    const originalConsoleLog = console.log;

    console.log = function (...args) {
        // Check if the log message contains the word "heartbeats"
        if (args.some(arg => typeof arg === 'string' && arg.includes('heartbeats'))) {
            return; // Skip the log message
        }

        // Otherwise, use the original console.log
        originalConsoleLog.apply(console, args);
    }


    function UnregUser() {
        return <>
            <div className="flex flex-col gap-5 bg-black bg-opacity-75 p-10 rounded-lg min-w-96 shadow-lg text-center">
                <Form heading1={"Sign Up"} />
            </div>
        </>
    }

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
            {showUnreguser && <UnregUser />}
        </div>
    </>

}

export default LoginPage;