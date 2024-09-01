import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext, PasswordContext } from "../Context";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

function Form({ heading1 }) {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/Netflix');
        }).catch(() => {

        })
    }

    const signupUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value) => {
            console.log(value);
            navigate('/Netflix');
        }).catch(() => {

        });
    }

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
            signupUser()
        }
        signInUser()
    }


    return <>
        <EmailContext.Provider value={{ email, setEmail }}>
            <PasswordContext.Provider value={{ password, setPassword }}>
                <input className="p-3 rounded-lg text-white  bg-[#121312]" type="text" onChange={handleEmail} placeholder="Email Address" value={email} />
                <input className="p-3 rounded-lg text-white bg-[#121312]" onChange={handlePassword} type="text" placeholder="Password" value={password} />
                <button className="p-3 rounded-lg text-white bg-[#C11119]" onClick={handleSignIn}>{heading1}</button>
            </PasswordContext.Provider>
        </EmailContext.Provider>
    </>
}
export default Form;