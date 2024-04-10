import "./Data.css"
import Link from "../navegacion/Link"

const DataSimple = ({id, entryType, dict}) =>
{
    //Contenedor simple de datos. Muestra el id, algunos datos y los botones para ver/modificar/eliminar
    return(
        <div className="data-container-simple">
            <div className="data-container-simple-id">
                <h1>{id}</h1>
            </div>
            <div className="data-container-data">
                {Object.entries(dict).map(([key, value]) => (
                <label className="data-info" key={key}>
                <b>{key}:</b> {String(value)}
                </label>
            ))}
                <div className="data-buttons">
                    <Link url={`/${entryType}/ver/${id}`} texto="Ver" variante="ver"/>
                    <Link url={`/${entryType}/modificar/${id}`} texto="Modificar" variante="modificar"/>
                    <Link url="" texto="Eliminar" variante="eliminar"/>
                </div>
            </div>
        </div>
    )    
}

export default DataSimple;