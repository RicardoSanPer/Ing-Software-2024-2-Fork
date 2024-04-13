import "./Data.css"
import Link from "../navegacion/Link"

/**
 * Contenedor de datos. Despliega todos los datos y botones para modificar o eliminar el registro
 * @param {number} id : id de la entrada del dato a desplegar
 * @param {string} entryType : Tipo de entrada del dato (usuario, pelicula o renta)
 * @param {Object} data : Par de llaves y valores que contienen los datos de la entrada
 * @param {boolean} eliminar: Indicar si incluir el boton de eliminado
 * @returns : Componente de renderizado
 */
const Data = ({id, entryType, data, eliminar=true}) =>
{
    return(
        <div className="data-container">
          <div className="data-container-data">
              {Object.entries(data).map(([key, value]) => (
              <label className="data-info" key={key}>
                <b>{key}:</b> {String(value)}
              </label>
            ))}
          </div>
          <div className="data-buttons">
              <Link url={`/${entryType}/`} texto="Volver" variante="ver"/>
              <Link url={`/${entryType}/modificar/${id}`} texto="Modificar" variante="modificar"/>
              {eliminar && <Link url={`/${entryType}/del/${id}`} texto="Eliminar" variante="eliminar"/>}
          </div>  
      </div>
    );
};

export default Data;