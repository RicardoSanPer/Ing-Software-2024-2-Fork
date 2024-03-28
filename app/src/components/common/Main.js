import { NavLink, Route, Routes } from 'react-router-dom';
import Usuarios from '../../pages/Usuarios/Usuarios';
import Home from "../../pages/Home";
import ReadUsuarios from '../../pages/Usuarios/ReadUsuarios';
import ModUsuarios from '../../pages/Usuarios/ModUsuarios';

const Main = () =>
(
    <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/usuarios" Component={Usuarios}></Route>
        <Route path="/usuarios/ver/:id" Component={ReadUsuarios}></Route>
        <Route path="/usuarios/modificar/:id" Component={ModUsuarios}></Route>
    </Routes>
);

export default Main;