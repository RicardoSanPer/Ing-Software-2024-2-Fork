from flask import Blueprint, render_template, request, redirect, url_for, flash
from alchemyClasses.peliculas import Peliculas
from model.model_pelicula import ModeloPelicula
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
    data = ModeloPelicula.obtenerPelicula(id)
    if(data == None):
        return redirect(url_for("movies.html_controller"))
    
    return render_template('/peliculas/verpelicula.html', data=data)

##borrar pelicula
@bp_pelicula.route("/html/eliminar", methods =["GET"])
def borrar_pelicula():
    id = request.args["idPelicula"]
    if ModeloPelicula.eliminarPelicula(id):
        return redirect(url_for("movies.html_controller"))
    else:
        return redirect(url_for("movies.ver_pelicula", idPelicula = id))


##modificar pelicula
@bp_pelicula.route("/html/modificar", methods=["GET", "POST"])
def modificar_pelicula():
    ## Cargar form con datos de la pelicula a modificar
    if request.method == "GET":     
        id = request.args["idPelicula"]
        data = Peliculas.query.get(id)
        return render_template("/peliculas/modificarpelicula.html", data=data)
    ## Modificar pelicula
    else:
        idPelicula = request.form.get("idPelicula")
        ModeloPelicula.modificarPelicula(request.form)
        return redirect(url_for("movies.ver_pelicula",idPelicula = idPelicula))

    
##Agregar pelicula
@bp_pelicula.route("/html/agregar", methods=["GET", "POST"])
def agregar_pelicula():
    if request.method == "GET":
        return render_template("/peliculas/agregarpelicula.html", data=None)
    else:
        ModeloPelicula.agregarPelicula(request.form)
        return redirect(url_for("movies.agregar_pelicula"))