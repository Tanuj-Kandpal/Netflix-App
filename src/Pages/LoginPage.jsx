import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showUnreguser, setshowUnreguser] = useState(false);
    const [showReguser, setshowReguser] = useState(true);
    const navigate = useNavigate();

    // const auth = getAuth();
    createUserWithEmailAndPassword()
        .then((userCredential) => {
            // Signed up 
            // const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
        });

    function handleEmail(email) {
        const enteredEmail = email.target.value;
        setEmail(enteredEmail);
    }

    function handlePassword(password) {
        const enteredPassword = password.target.value;
        setPassword(enteredPassword);
    }

    function UnregUser() {
        return <>
            <div className="flex flex-col gap-5 bg-black bg-opacity-75 p-10 rounded-lg min-w-96 h-3/4 shadow-lg text-center">
                <input className="p-3 rounded-lg text-white  bg-[#121312]" type="text" onChange={handleEmail} placeholder="Email Address" value={email} />
                <input className="p-3 rounded-lg text-white bg-[#121312]" onChange={handlePassword} type="text" placeholder="Password" value={password} />
            </div>
        </>
    }
    function handleUnreguser() {
        setshowUnreguser(true);
        setshowReguser(false);
    }

    function handleSignIn() {
        navigate('/Netflix');
    }

    function RegUser() {
        return <>
            <div className="flex flex-col gap-5 bg-black bg-opacity-75 p-10 rounded-lg min-w-96 h-3/4 shadow-lg text-center">
                <h1 className="font-[700] self-start text-white text-3xl">SignIn</h1>
                <input className="p-3 rounded-lg text-white  bg-[#121312]" type="text" onChange={handleEmail} placeholder="Email Address" value={email} />
                <input className="p-3 rounded-lg text-white bg-[#121312]" onChange={handlePassword} type="text" placeholder="Password" value={password} />
                <button className="p-3 rounded-lg text-white bg-[#C11119]" onClick={handleSignIn}>Sign In</button>
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