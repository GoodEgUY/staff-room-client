import "./registration.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../actions/user";
import { useDispatch } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  return (
    <>
      <div className="authpage">
        <div className="authForm">
         
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Электронная почта"
            />
            <input
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              
              placeholder="Пароль"
            />
            <button onClick={() => dispatch(signIn(email, password))}>Войти</button>
          
          <NavLink to="/registration">
            <p className="authNavItem">Создать аккаунт</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
