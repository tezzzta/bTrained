import {  useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';
import { AtSign } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsLoggedIn: (value: boolean) => void;
}


const Login = ({ isOpen, onClose, setIsLoggedIn }: LoginModalProps) => {

  if (!isOpen) return null;
const [actualData, setActualData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    setActualData(
      {
        ...actualData,
        [e.target.name]: e.target.value
      });

  };

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        try{
          console.log("eee")
          const res = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers:{
           'Content-Type': 'application/json'
 
            }, 
            body: JSON.stringify(actualData)
          });
          console.log("erre")
          const data = await res.json();
            if (res.ok) {
            localStorage.setItem('token', data.token);
            alert('Usuario logeado exitosamente');
            console.log(data.token);
            setIsLoggedIn(true); // ✅ actualiza estado global
            onClose(); // ✅ cierra modal
          }
          else if(res.status === 400){
            alert('Credenciales incorrectas, por favor intente de nuevo');

          }
          else{
            alert('Error al iniciar sesión: ' + data.error || data.message);
          }
        } catch(error){
          console.error('Error al enviar los datos:', error);
        }

  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <StyledWrapper>
      <form className="form" onSubmit={handleSumbit}>
        <button onClick={onClose} className='flex font-semibold pt-3 justify-end'>  <X/></button>
        <p id="heading" className='font-semibold'>Login</p>
        <div className="field">
                     <span><AtSign/></span>

          <input autoComplete="off" placeholder="email" className="input-field" type="email" name="email" onChange={handleChange} />
        </div>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          <input placeholder="Password" className="input-field" type="password" name="password" onChange={handleChange} />
        </div>
        <div className="btn">
          <button className="button2" type='submit'> Start</button>
        </div>
        <button className="button3">Forgot Password</button>
      </form>
    </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 25px;
    transition: .4s ease-in-out;
  }

  .form:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }

  #heading {
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 1.2em;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: white;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2.5em;
  }

  .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button1:hover {
    background-color: black;
    color: white;
  }

  .button2 {
    padding: 0.5em;
    padding-left: 2.3em;
    padding-right: 2.3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button2:hover {
    background-color: black;
    color: white;
  }

  .button3 {
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button3:hover {
    background-color: red;
    color: white;
  }`;

export default Login;
