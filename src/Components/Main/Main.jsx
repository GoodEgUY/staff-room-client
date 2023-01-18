import "./main.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Main = () => {
  const [user1Point, setUser1Point] = useState(0);
  const [user2Point, setUser2Point] = useState(0);
  const [user3Point, setUser3Point] = useState(0);
  const plusIlya = () => {
    setUser1Point(user1Point + 1);
  };
  const plusNastya = () => {
    setUser2Point(user2Point + 1);
  };
  const plusStas = () => {
    setUser3Point(user3Point + 1);
  };

  return (
    <div className="main">
      <div className="mainMenu">
        <NavLink to="/stafftoday">
          <button className="mainMenuItem">На смене</button>
        </NavLink>
        <NavLink to="/stafftoday">
          <button className="mainMenuItem">Персонал</button>
        </NavLink>
        <NavLink to="/stafftoday">
          <button className="mainMenuItem">График работы</button>
        </NavLink>
        <div className="dashboard">
          <div className="staffList">
            <h1>Илья</h1>
            <h1>Настя</h1>
            <h1>Стас</h1>
          </div>
          <div className="pointView">
            <p>Сервис</p>
            <button className="pointButton" onClick={plusIlya}>
              -
            </button>
            <button className="pointButton" onClick={plusNastya}>
              -
            </button>
            <button className="pointButton" onClick={plusStas}>
              -
            </button>
          </div>
          <div className="pointView">
            <p>Продажи</p>
            <button className="pointButton" onClick={plusIlya}>
              -
            </button>
            <button className="pointButton" onClick={plusNastya}>
              -
            </button>
            <button className="pointButton" onClick={plusStas}>
              -
            </button>
          </div>
          <div className="pointView">
            <p>Опоздание</p>
            <button className="pointButton" disabled onClick={plusIlya}>
              -
            </button>
            <button className="pointButton" onClick={plusNastya}>
              -
            </button>
            <button className="pointButton" onClick={plusStas}>
              -
            </button>
          </div>
          <div className="pointView">
            <p>Уборка</p>
            <button className="pointButton" onClick={plusIlya}>
              -
            </button>
            <button className="pointButton" onClick={plusNastya}>
              -
            </button>
            <button className="pointButton" onClick={plusStas}>
              -
            </button>
          </div>
        </div>

      <div className="dashboardPoints"><p className="pointsScreen">Илья {user1Point}</p>
      <p className="pointsScreen">Настя {user2Point}</p>
      <p className="pointsScreen">Стас {user3Point}</p></div>
      </div>
    </div>
  );
};

export default Main;