from flask import Blueprint, render_template, request, redirect, url_for
from alchemyClasses.peliculas import Peliculas
from alchemyClasses.rentas import Rentas

from alchemyClasses import db

bp_pelicula = Blueprint("movies", __name__, url_prefix="/movies")

##Pagina principal de peliculas. Imprime la lista de todos los registros
@bp_pelicula.route("/html")
def html_controller():
    mov = Peliculas.query.all()
    return render_template('/peliculas/peliculas.html',data=mov)

##ver informacion de pelicula
@bp_pelicula.route("/html/ver", methods =["GET"])
def ver_pelicula():
    id = request.args["idPelicula"]
    data = Peliculas.query.get(id)
    return render_template('/peliculas/verpelicula.html', data=data)

##borrar usuario
@bp_pelicula.route("/html/eliminar", methods =["GET"])
def borrar_pelicula():
    id = request.args["idPelicula"]
    queryRentas = Rentas.query.filter_by(idPelicula=id).delete()
    
    Peliculas.query.filter_by(idPelicula = id).delete()

    db.session.commit()
    return render_template("/peliculas/eliminarpelicula.html")


##modificar pelicula
@bp_pelicula.route("/html/modificar", methods=["GET", "POST"])
def modificar_pelicula():
    if request.method == "GET":     
        id = request.args["idPelicula"]
        data = Peliculas.query.get(id)
        return render_template("/peliculas/modificarpelicula.html", data=data)
    else:
        idPelicula = request.form.get("idPelicula")
        nombre = request.form["nombre"]
        genero = request.form["genero"]
        duracion = request.form.get("duracion", None)

        if(not duracion):
            duracion = None

        inventario = request.form["inventario"]

        pelicula = Peliculas.query.get(idPelicula)
        pelicula.nombre = nombre
        pelicula.genero = genero
        pelicula.duracion = duracion
        pelicula.inventario = inventario

        db.session.commit()

        pelicula = Peliculas.query.get(idPelicula)
        return render_template('/peliculas/verpelicula.html', data=pelicula)
    
##Agregar pelicula
@bp_pelicula.route("/html/agregar", methods=["GET", "POST"])
def agregar_pelicula():
    if request.method == "GET":
        return render_template("/peliculas/agregarpelicula.html", data=None)
    else:
        nombre = request.form["nombre"]
        genero = request.form["genero"]
        duracion = request.form.get("duracion")

        inventario = int(request.form["inventario"])
        if(not duracion):
            duracion = None

        registro = Peliculas(nombre=nombre, genero=genero, duracion=duracion, inventario=inventario)
        db.session.add(registro)
        db.session.commit()
        
        return redirect(url_for("movies.html_controller"))