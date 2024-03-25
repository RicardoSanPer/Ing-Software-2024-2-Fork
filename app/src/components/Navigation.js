import { NavLink } from 'react-router-dom';

const Navigation = () => 
(
    <nav>
        <ul>
            <li><NavLink to="/usuarios">Usuarios</NavLink></li>
            <li>Peliculas</li>
            <li>Rentas</li>
        </ul>
    </nav>
);

export default Navigation;