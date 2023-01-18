import "./registration.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { createLogin } from "../../actions/user";

const Registration = () => {
  const [adminName, setAdminName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="authpage">
        <div className="authForm">
          <input
            type="text"
            onChange={(event) => setAdminName(event.target.value)}
            value={adminName}
            placeholder="Имя Администратора"
          />
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Телефон"
          />
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

          <button onClick={() => createLogin(email, password,adminName, phone)}>
            Регистрация
          </button>

          <NavLink to="/login">
            <p className="authNavItem">Войти</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Registration;
