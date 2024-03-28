import { NavLink } from 'react-router-dom';

import Link from '../navegacion/Link';

import "./Navigation.css"

//Barra superior de navegacion
const Navigation = () => 
(
    <nav className='nav-bar-container'>
        <Link url="/" texto="Inicio" />
        <Link url="/usuarios" texto="Usuarios" />
    </nav>
);

export default Navigation;