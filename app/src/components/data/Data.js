import "./Data.css"
import Link from "../navegacion/Link"

const Data = ({data}) =>
{
    return(
        <div className="data-container-data">
            {Object.entries(data).map(([key, value]) => (
            <label className="data-info">
              <b>{key}:</b> {String(value)}
            </label>
          ))}
        </div>
    );
};

export default Data;