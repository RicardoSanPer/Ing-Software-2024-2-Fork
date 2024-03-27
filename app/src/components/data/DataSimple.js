import "./Data.css"
import Link from "../navegacion/Link"
const DataSimple = ({id, dict}) =>
{
    return(
        <div className="data-container-simple">
            <div className="data-container-simple-id">
                <h1>{id}</h1>
            </div>
            <div className="data-container-data">
                {Object.entries(dict).map(([key, value]) => (
                <label className="data-info">
                <b>{key}:</b> {String(value)}
                </label>
            ))}
                <div class="data-buttons">
                    <Link url="/usuarios/ver" texto="Ver" variante="ver"/>
                    <Link url="" texto="Modificar" variante="modificar"/>
                    <Link url="" texto="Eliminar" variante="eliminar"/>
                </div>
            </div>
        </div>
    )    
}

export default DataSimple;