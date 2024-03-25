import { NavLink } from 'react-router-dom';

import "./Link.css"

const Link = ({url, texto}) =>
(
    <NavLink to={url} className="link-boton"><b>{texto}</b></NavLink>
);

export default Link;