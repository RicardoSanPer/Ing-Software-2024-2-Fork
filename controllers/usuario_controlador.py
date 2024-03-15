from flask import Blueprint, render_template, request, redirect, url_for
from alchemyClasses.usuarios import Usuarios
from alchemyClasses.rentas import Rentas

from alchemyClasses import db

bp_usuario = Blueprint("users", __name__, url_prefix="/users")

##Pagina principal de usuarios. Imprime la lista de todos los registros
@bp_usuario.route("/html")
def html_controller():
    users = Usuarios.query.all()
    return render_template('/usuarios/usuarios.html',data=users)

##ver informacion de usuario
@bp_usuario.route("/html/ver", methods =["GET"])
def ver_usuarios():
    id = request.args["idUsuario"]
    data = Usuarios.query.filter(Usuarios.idUsuario == id).first()
    return render_template('/usuarios/verusuario.html', data=data)

##borrar usuario
@bp_usuario.route("/html/eliminar", methods =["GET"])
def borrar_usuarios():
    id = request.args["idUsuario"]
    queryRentas = Rentas.query.filter_by(idUsuario=id).delete()
    
    Usuarios.query.filter_by(idUsuario = id).delete()

    db.session.commit()
    return render_template("/usuarios/eliminarusuario.html")


##modificar_usuario
@bp_usuario.route("/html/modificar", methods=["GET", "POST"])
def modificar_usuario():
    if request.method == "GET":     
        id = request.args["idUsuario"]
        data = Usuarios.query.filter_by(idUsuario = id).first()
        return render_template("/usuarios/modificarusuario.html", data=data)
    else:
        idUsuario = request.form["idUsuario"]
        nombre = request.form["nombre"]
        apPat = request.form["apPat"]
        apMat = request.form["apMat"]
        email = request.form["email"]
        superUser = request.form.get("superUser") == "1"

        usuario = Usuarios.query.get(idUsuario)
        usuario.nombre = nombre
        usuario.apPat = apPat
        usuario.apMat = apMat
        usuario.email = email
        usuario.superUser = superUser

        db.session.commit()

        usuario = Usuarios.query.get(idUsuario)
        return render_template('/usuarios/verusuario.html', data=usuario)
    
##modificar_usuario
@bp_usuario.route("/html/agregar", methods=["GET", "POST"])
def agregar_usuario():
    if request.method == "GET":
        return render_template("/usuarios/agregarusuario.html", data=None)
    else:
        nombre = request.form["nombre"]
        apPat = request.form["apPat"]
        apMat = request.form["apMat"]
        email = request.form["email"]
        superUser = request.form.get("superUser") == "1"
        password = request.form["password"]

        registro = Usuarios(nombre=nombre, apPat=apPat, apMat=apMat, email=email, superUser=superUser, password=password)
        db.session.add(registro)
        db.session.commit()
        
        return redirect(url_for("users.html_controller"))