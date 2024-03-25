import { NavLink, Route, Routes } from 'react-router-dom';
import Usuarios from '../../pages/Usuarios';
import Home from "../../pages/Home";

const Main = () =>
(
    <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/usuarios" Component={Usuarios}></Route>
    </Routes>
);

export default Main;