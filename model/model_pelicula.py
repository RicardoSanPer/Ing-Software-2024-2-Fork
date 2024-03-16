from alchemyClasses.peliculas import Peliculas
from alchemyClasses.rentas import Rentas
from alchemyClasses import db

from flask import flash

class ModeloPelicula():       
    """
    Modifica una pelicula

    Params
    ------
    vals : diccionario con el valor nuevo para cada atributo

    Returns
    -------
    bool : indica si la operacion fue exitosa
    """ 
    def modificarPelicula(vals):
        try:
            idPelicula = vals.get("idPelicula")
            nombre = vals.get("nombre")
            genero = vals.get("genero")
            duracion = vals.get("duracion", None)

            if(not duracion):
                duracion = None

            inventario = vals.get("inventario")

            pelicula = Peliculas.query.get(idPelicula)
            pelicula.nombre = nombre
            pelicula.genero = genero
            pelicula.duracion = duracion
            pelicula.inventario = inventario

            db.session.commit()
        except Exception as e:
            flash("Algo salió ma al modificar el registro:\n" + str(e), "error")
            return False
        flash("Registro modificado con éxito", "success")
        return True
    
    """
    Agrega una pelicula

    Params
    ------
    vals : diccionario con el valor para cada atributo

    Returns
    -------
    bool : indica si la operacion fue exitosa
    """ 
    def agregarPelicula(vals):
        try:
            nombre = vals.get("nombre")
            genero = vals.get("genero")
            duracion = vals.get("duracion")

            if(not duracion):
                duracion = None

            inventario = vals.get("inventario")

            registro = Peliculas(nombre=nombre, genero=genero, duracion=duracion, inventario=inventario)
            db.session.add(registro)
            db.session.commit()
        except Exception as e:
            flash("Algo salió mal al agregar el registro:\n" + str(e), "error")
            return False
        flash("Registro agregado con éxito", "success")
        return True
    """
    Elimina una pelicula y las rentas asociadas

    Params
    ------
    id : Id de la pelicula a eliminar

    Returns
    -------
    bool : indica si la operacion fue exitosa
    """ 
    def eliminarPelicula(id):
        try:
            Rentas.query.filter_by(idPelicula=id).delete()
            Peliculas.query.filter_by(idPelicula = id).delete()
            db.session.commit()
        except Exception as e:
            flash(f"Algo salio mal al eliminar el registro con ID {str(id)}:\n" + str(e), "error")
            return False
        flash(f"Pelicula con ID {str(id)} y rentas asociadas eliminadas con exito.", "success")
        return True
    """
    Obtiene el registro de una pelicula

    Params
    ------
    id : Id de la pelicula a buscar

    Returns
    -------
    data : datos de la pelicula. None si no se encuentra o si ocurre un error
    """
    def obtenerPelicula(id):
        data = None
        try:
            data = Peliculas.query.get(id)
        except Exception as e:
            flash(f"Algo salio mal al obtener los datos para ID {str(id)}:\n" + str(e), "error")
            return None
        return data