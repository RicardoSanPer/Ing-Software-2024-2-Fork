/**
 * Convierte una fecha en string en formato YYYY-MM-DD a un objeto de fecha
 * @param {string} date : decha a convertir
 * @returns 
 */
function EstadoRenta(renta)
{
    const [y, m, d] = renta.fecha_renta.split("-").map(Number);
    let date =  new Date(y, m-1, d);
    let current = new Date();

    date.setDate(current.getDate() + renta.dias_de_renta);

        
    let expirado = date.getTime() < current.getTime() && !renta.estatus;
    let message = expirado ? "En Retraso" : renta.estatus ? "Devuelto" : "Sin Devolver";

    return message;
}

export default EstadoRenta;