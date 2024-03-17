from alchemyClasses.usuarios import Usuarios
from alchemyClasses.rentas import Rentas

from alchemyClasses import db
from flask import flash

class ModeloUsuario():
    """
    Modifica un usuario

    Params
    ------
    vals : diccionario con el valor nuevo para cada atributo

    Returns
    -------
    bool : indica si la operacion fue exitosa
    """ 
    def modificarUsuario(vals):
        try:
            idUsuario = vals.get("idUsuario")
            nombre = vals.get("nombre")
            apPat = vals.get("apPat")
            apMat = vals.get("apMat")
            email = vals.get("email")
            superUser = vals.get("superUser") == "1"

            usuario = Usuarios.query.get(idUsuario)
            usuario.nombre = nombre
            usuario.apPat = apPat
            usuario.apMat = apMat
            usuario.email = email
            usuario.superUser = superUser

            db.session.commit()
        except Exception as e:
            flash("Algo salió mal al modificar el registro:\n" + str(e), "error")
            return False
        flash("Registro modificado con éxito.", "success")
        return True
    
    """
    Agrega un usuario

    Params
    ------
    vals : diccionario con el valor para cada atributo

    Returns
    -------
    bool : indica si la operacion fue exitosa
    """ 
    def agregarUsuario(vals):
        try:
            nombre = vals.get("nombre")
            apPat = vals.get("apPat")
            apMat = vals.get("apMat")
            email = vals.get("email")
            superUser = vals.get("superUser") == "1"
            password = vals.get("password")

            registro = Usuarios(nombre=nombre, apPat=apPat, apMat=apMat, email=email, superUser=superUser, password=password)
            db.session.add(registro)
            db.session.commit()
        except Exception as e:
            flash("Algo salió mal al agregar el registro:\n" + str(e), "error")
            return False
        flash("Registro agregado con éxito.", "success")
        return True
    """
    Elimina un usuario y las rentas asociadas

    Params
    ------
    id : Id del usuario a eliminar

    Returns
    -------
    bool : indica si la operacion fue exitosa
    """ 
    def eliminarUsuario(id):
        try:
            Rentas.query.filter_by(idUsuario=id).delete()
            Usuarios.query.filter_by(idUsuario = id).delete()
            db.session.commit()
        except Exception as e:
            flash(f"Algo salió mal al eliminar el registro con ID {str(id)}:\n" + str(e), "error")
            return False
        flash(f"Usuario con ID {str(id)} y rentas asociadas eliminadas con éxito.", "success")
        return True
    
    """
    Obtiene el registro de un usuario

    Params
    ------
    id : Id del usuario a buscar

    Returns
    -------
    data : datos del usuario. None si no se encuentra o si ocurre un error
    """
    def obtenerUsuario(id):
        data = None
        try:
            data = Usuarios.query.get(id)
            if data == None:
                raise Exception(f"El registro con ID {str(id)} no existe.")
        except Exception as e:
            flash(f"Algo salió mal al obtener los datos para ID {str(id)}:\n" + str(e), "error")
            return None
        return data
    
    """
    Obtiene todos los registros de la tabla Usuarios

    Returns
    -------
    data : resultado del query. None si ocurre algun error
    """
    def obtenerAll():
        data = None
        try:
            data = Usuarios.query.all()
        except Exception as e:
            flash("Algo salió mal al obtener los datos:\n" + str(e))
        return data