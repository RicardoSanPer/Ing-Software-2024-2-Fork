import { NavLink } from 'react-router-dom';

import Link from '../navegacion/Link';

import "./Navigation.css"

/**
 * Componente que renderiza una barra de navegación en todas las páginas
 * @returns : Componente de barra de navegacion
 */
const Navigation = () => 
(
    <nav className='nav-bar-container'>
        <Link url="/" texto="Inicio" />
        <Link url="/usuarios" texto="Usuarios" />
    </nav>
);

export default Navigation;