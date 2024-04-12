import { NavLink, Route, Routes } from 'react-router-dom';
import Usuarios from '../../pages/Usuarios/Usuarios';
import Home from "../../pages/Home";
import ReadUsuarios from '../../pages/Usuarios/ReadUsuarios';
import ModUsuarios from '../../pages/Usuarios/ModUsuarios';
import CrearUsuarios from '../../pages/Usuarios/CreateUsuario';
import DelUsuarios from '../../pages/Usuarios/DelUsuario';
import Peliculas from '../../pages/Peliculas/Peliculas';
import ReadPeliculas from '../../pages/Peliculas/ReadPeliculas';
import ModPeliculas from '../../pages/Peliculas/ModPeliculas';

//Main. Contiene las rutas de la aplicacion
const Main = () =>
(
    <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/usuarios" Component={Usuarios}></Route>
        <Route path="/usuarios/ver/:id" Component={ReadUsuarios}></Route>
        <Route path="/usuarios/modificar/:id" Component={ModUsuarios}></Route>
        <Route path="/usuarios/crear" Component={CrearUsuarios}></Route>
        <Route path="/usuarios/del/:id" Component={DelUsuarios}></Route>

        <Route path='/peliculas' Component={Peliculas}></Route>
        <Route path="/peliculas/ver/:id" Component={ReadPeliculas}></Route>
        <Route path="/peliculas/modificar/:id" Component={ModPeliculas}></Route>
    </Routes>
);

export default Main;