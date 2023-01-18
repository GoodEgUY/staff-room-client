import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { logout } from "../../reducers/adminReducer";
import Login from "../AuthPage/Login";
import Registration from "../AuthPage/Registration";


import "./staffRoom.css";

const StaffRoom = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch()
  return (
    <>
      <BrowserRouter>
        <div className="screenContent"> 
        
          <div className="content">
           
            {isAuth ? (<div ><button onClick={() => dispatch(logout())}>Выход</button> </div>): null}
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default StaffRoom;
