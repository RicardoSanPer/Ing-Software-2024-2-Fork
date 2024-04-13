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
import CrearPeliculas from '../../pages/Peliculas/CreatePelicula';
import DelPeliculas from '../../pages/Peliculas/DelPelicula';
import Rentas from '../../pages/Rentas/Rentas';
import ReadRentas from '../../pages/Rentas/ReadRentas';
import ModRentas from '../../pages/Rentas/ModRentas';

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
        <Route path="/peliculas/crear" Component={CrearPeliculas}></Route>
        <Route path="/peliculas/del/:id" Component={DelPeliculas}></Route>

        <Route path='/rentas' Component={Rentas}></Route>
        <Route path="/rentas/ver/:id" Component={ReadRentas}></Route>
        <Route path="/rentas/modificar/:id" Component={ModRentas}></Route>
    </Routes>
);

export default Main;