import "./Data.css"
import Link from "../navegacion/Link"


/**
 * Contenedor de datos. Despliega todos el id del registro, los datos y botones para modificar o eliminar el registro.
 * Su propósito es mostrar una lista simplificada de datos de un registro.
 * @param {number} id : id de la entrada del dato a desplegar
 * @param {string} entryType : Tipo de entrada del dato (usuario, pelicula o renta)
 * @param {Object} data : Par de llaves y valores que contienen los datos de la entrada
 * @returns : Componente de renderizado
 */
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
                    <Link url={`/${entryType}/del/${id}`} texto="Eliminar" variante="eliminar"/>
                </div>
            </div>
        </div>
    )    
}

export default DataSimple;