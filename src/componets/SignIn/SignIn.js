import React, {useRef} from "react";
import "./SignIn.scss";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then(response => 
            console.log(response)
        ).catch(error => 
            alert(error.message)
        );
    };
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then(response => 
            console.log(response)
        ).catch(error => console.log(error.message));
}
    return (
        <div className="sign-in">
                <div className="sign-in__inner">
            <form className="sign-in__form">
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button className="sign-in__button" type="submit" onClick={signIn}>Sign In</button>
                <h4><span className="sign-in__new">New to Netflix?</span>
                <span className="sign-in__link" onClick={register}> Signup now</span>
                </h4>
            </form>
                </div>
        </div>
    )
}

export default SignUp;