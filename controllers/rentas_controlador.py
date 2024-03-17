from datetime import date

from flask import Blueprint, render_template, request, redirect, url_for, flash
from alchemyClasses import db

from alchemyClasses.rentas import Rentas
from model.model_renta import ModeloRenta

bp_renta = Blueprint("rents", __name__, url_prefix="/rents")

##Pagina principal de peliculas. Imprime la lista de todos los registros
@bp_renta.route("/html")
def html_controller():
    ren = Rentas.query.all()
    return render_template('/rentas/rentas.html',data=ren)

##ver informacion de pelicula
@bp_renta.route("/html/ver", methods =["GET"])
def ver_renta():
    id = request.args["idRentar"]
    data = ModeloRenta.obtenerRenta(id)
    
    ##si el id no existe
    if(data == None):
        return redirect(url_for("rents.html_controller"))
    
    return render_template('/rentas/verrenta.html', data=data)

##modificar renta
@bp_renta.route("/html/modificar", methods=["GET"])
def modificar_pelicula():
    ## Cargar form con datos de la pelicula a modificar
    if request.method == "GET":     
        id = request.args["idRentar"]
        data = Rentas.query.get(id)

        ## Si se intenta modificar una pelicula inexistente
        if(data == None):
            return redirect(url_for("rents.html_controller")) 
        
        ModeloRenta.modificarRenta(id)
        return redirect(url_for("rents.html_controller"))
    
##borrar renta
@bp_renta.route("/html/eliminar", methods =["GET"])
def borrar_renta():
    id = request.args["idRenta"]
    if ModeloRenta.eliminarRenta(id):
        return redirect(url_for("rents.html_controller"))
    else:
        return redirect(url_for("rents.ver_pelicula", idRentar = id))
    
##Agregar pelicula
@bp_renta.route("/html/agregar", methods=["GET", "POST"])
def agregar_renta():
    if request.method == "GET":
        ##Pasar la fecha de hoy como fecha por defecto para el formulario
        return render_template("/rentas/agregarrenta.html", data=date.today())
    else:
        ModeloRenta.agregarRenta(request.form)
        return redirect(url_for("rents.agregar_renta"))