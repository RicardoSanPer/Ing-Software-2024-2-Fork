from flask import Blueprint, render_template, request, redirect, url_for
from alchemyClasses import db

from alchemyClasses.usuarios import Usuarios
from model.model_usuario import ModeloUsuario

bp_usuario = Blueprint("users", __name__, url_prefix="/users")

##Pagina principal de usuarios. Imprime la lista de todos los registros
@bp_usuario.route("/html")
def html_controller():
    users = Usuarios.query.all()
    return render_template('/usuarios/usuarios.html',data=users)

##ver informacion de usuario
@bp_usuario.route("/html/ver", methods =["GET"])
def ver_usuario():
    id = request.args["idUsuario"]
    data = ModeloUsuario.obtenerUsuario(id)

    ##Si el id no existe
    if(data == None):
        return redirect(url_for("users.html_controller"))

    return render_template('/usuarios/verusuario.html', data=data)

##borrar usuario
@bp_usuario.route("/html/eliminar", methods =["GET"])
def borrar_usuarios():
    id = request.args["idUsuario"]
    if ModeloUsuario.eliminarUsuario(id):
        return redirect(url_for("users.html_controller"))
    else:
        return redirect(url_for("users.ver_pelicula", idUsuario = id))


##modificar_usuario
@bp_usuario.route("/html/modificar", methods=["GET", "POST"])
def modificar_usuario():
    if request.method == "GET":     
        id = request.args["idUsuario"]
        data = Usuarios.query.get(id)
        
        ##Si se intenta modificar un id inexistente
        if(data == None):
            return redirect(url_for("users.html_controller"))
        
        return render_template("/usuarios/modificarusuario.html", data=data)
    else:
        idUsuario = request.form.get("idUsuario")
        ModeloUsuario.modificarUsuario(request.form)
        return redirect(url_for("users.ver_usuario",idUsuario = idUsuario))
    
## Agregar usuario
@bp_usuario.route("/html/agregar", methods=["GET", "POST"])
def agregar_usuario():
    if request.method == "GET":
        return render_template("/usuarios/agregarusuario.html", data=None)
    else:
        data = request.form
        if ModeloUsuario.agregarUsuario(request.form):
            return redirect(url_for("users.agregar_usuario"))
        ## Si falla el ingreso de datos, enviar los datos ingresados para que el usuario no los tenga que reingresar
        return render_template("/usuarios/agregarusuario.html", data=data)