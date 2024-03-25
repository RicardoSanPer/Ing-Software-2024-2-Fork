import "./Data.css"
import Link from "../navegacion/Link"
const DataSimple = ({id, mainData, secondaryData, otherData}) =>
{
    var data = []
    if(mainData)
    {
        data.push(mainData)
    }
    if(secondaryData)
    {
        data.push(secondaryData)
    }
    if(otherData)
    {
        data.push(otherData)
    }
    return(
        <div className="data-container-simple">
            <div className="data-container-simple-id">
                <h1>{id}</h1>
            </div>
            <div className="data-container-data">
                {data.map((item, index)=>(
                    <label className="data-info">{item}</label>
                ))}
                <div class="data-buttons">
                    <Link url="" texto="Ver" variante="ver"/>
                    <Link url="" texto="Modificar" variante="modificar"/>
                    <Link url="" texto="Eliminar" variante="eliminar"/>
                </div>
            </div>
        </div>
    )    
}

export default DataSimple;