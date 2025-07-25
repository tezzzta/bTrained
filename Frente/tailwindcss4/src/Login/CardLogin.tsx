// import Login from './Login';
import { useState, useEffect } from 'react';
import SignUP from './SignUp';
// import styles from "./CardLog.module.css";
import { SessionGlobal } from '../Store/Session';

const CardLogin = () => {
    const {sesion} = SessionGlobal()

     const [isLoginOpen, setIsLoginOpen] = useState(false);
    //   const [isSignUpOpen, setIsSignUpOpen] = useState(false);
      useEffect(() => {
        if (!sesion) {
            setIsLoginOpen(true);
        }
        }, [sesion]);
    return (
        <div >
            <img src='../public/guacamayita.png' className='w-3/4 h-1/2 p-5 m-auto rounded shadow-[0_0_15px_#fff] ' ></img>
                <SignUP  isOpen={isLoginOpen}  onClose={() => setIsLoginOpen(false)}   />
        </div>
    );
};

export default CardLogin;