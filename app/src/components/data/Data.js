import "./Data.css"
import Link from "../navegacion/Link"


//Contenedor de datos. Despliega todos los datos y botones para modificar o eliminar el registro
const Data = ({id, entryType, data}) =>
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
              <Link url={`/${entryType}/modificar/${id}`} texto="Modificar" variante="modificar"/>
              <Link url="" texto="Eliminar" variante="eliminar"/>
          </div>  
      </div>
    );
};

export default Data;