import "./Data.css"
import Link from "../navegacion/Link"

/**
 * Contenedor de datos de renta. Despliega todos los datos y botones para modificar el registro y abrir los datos de
 * usuario y pelicula a los que hace referencia
 * @param {number} id : id de la entrada del dato a desplegar
 * @param {Object} data : Par de llaves y valores que contienen los datos de la entrada
 * @returns : Componente de renderizado
 */
const DataRenta = ({id, data}) =>
{
    return(
        <div className="data-container-simple">
            <div className="data-container-simple-id">
            <Link url={`/usuarios/ver/${data["ID de Usuario"]}`} texto="Ver Usuario"/>
            <Link url={`/peliculass/ver/${data["ID de Pelicula"]}`} texto="Ver Pelicula"/>
            </div>
          <div className="data-container-data">
              {Object.entries(data).map(([key, value]) => (
              <label className="data-info" key={key}>
                <b>{key}:</b> {String(value)}
              </label>
            ))}
                <div className="data-buttons">
                    <Link url={`/rentas/`} texto="Volver" variante="ver"/>
                    <Link url={`/rentas/modificar/${id}`} texto="Modificar" variante="modificar"/>
                </div>  
          </div>
      </div>
    );
};

export default DataRenta;