from datetime import date

from alchemyClasses.rentas import Rentas
from alchemyClasses import db

from flask import flash

class ModeloRenta():
    """
    Cambia el estado de la renta

    Params
    ------
    id : id de la renta a modificar

    Returns
    -------
    bool : indica si la operacion fue exitosa
    """ 
    def modificarRenta(id):
        try:
            renta = Rentas.query.get(id)
            renta.estatus = not renta.estatus

            db.session.commit()
        except Exception as e:
            flash("Algo salió ma al modificar el registro:\n" + str(e), "error")
            return False
        flash(f"Registro {id} modificado con éxito", "success")
        return True

    """
    Obtiene el registro de una renta

    Params
    ------
    id : Id de la renta a buscar

    Returns
    -------
    data : datos de la renta. None si no se encuentra o si ocurre un error
    """
    def obtenerRenta(id):
        data = None
        try:
            data = Rentas.query.get(id)
        except Exception as e:
            flash(f"Algo salio mal al obtener los datos para ID {str(id)}:\n" + str(e), "error")
            return None
        return data
    
    """
    Agrega una renta

    Params
    ------
    vals : diccionario con el valor para cada atributo

    Returns
    -------
    bool : indica si la operacion fue exitosa
    """ 
    def agregarRenta(vals):
        try:
            idUsuario = vals.get("idUsuario")
            idPelicula = vals.get("idPelicula")
            fecha_renta = vals.get("fecha_renta")

            ##Si no hay fecha, usar la fecha de hoy como valor por defecto
            if not fecha_renta:
                fecha_renta = date.today()

            dias_de_renta = vals.get("dias_de_renta")

            registro = Rentas(idUsuario=idUsuario, idPelicula=idPelicula, fecha_renta=fecha_renta, dias_de_renta=dias_de_renta)
            db.session.add(registro)
            db.session.commit()
        except Exception as e:
            flash("Algo salió mal al agregar el registro:\n" + str(e), "error")
            return False
        flash("Registro agregado con éxito", "success")
        return True