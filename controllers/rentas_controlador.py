import datetime as dt

from flask import Blueprint, render_template, request, redirect, url_for, flash
from alchemyClasses import db

from model.model_renta import ModeloRenta

bp_renta = Blueprint("rents", __name__, url_prefix="/rents")

##Pagina principal de peliculas. Imprime la lista de todos los registros
@bp_renta.route("/html")
def html_controller():
    ren = ModeloRenta.obtenerAll()
    today = dt.date.today()

    listData = []
    for r in ren:
        days = r.dias_de_renta
        due = r.fecha_renta + dt.timedelta(days = days)
        late = dt.datetime.combine(today, dt.datetime.min.time()) > due and not r.estatus

        listData.append((r, late))

    return render_template('/rentas/rentas.html', data=listData)

##ver informacion de pelicula
@bp_renta.route("/html/ver", methods =["GET"])
def ver_renta():
    id = request.args["idRentar"]
    data = ModeloRenta.obtenerRenta(id)
    ##si el id no existe
    if(data == None):
        return redirect(url_for("rents.html_controller"))

    today = dt.date.today()
    days = data.dias_de_renta
    due = data.fecha_renta + dt.timedelta(days = days)

    late = dt.datetime.combine(today, dt.datetime.min.time()) > due and not data.estatus

    return render_template('/rentas/verrenta.html', data=data, late=late)

##modificar renta
@bp_renta.route("/html/modificar", methods=["GET"])
def modificar_renta():
    ## Cargar form con datos de la pelicula a modificar
    if request.method == "GET":     
        id = request.args["idRentar"]
        data = ModeloRenta.obtenerRenta(id)

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
        return redirect(url_for("rents.ver_renta", idRentar = id))
    
##Agregar renta
@bp_renta.route("/html/agregar", methods=["GET", "POST"])
def agregar_renta():
    if request.method == "GET":
        ##Pasar la fecha de hoy como fecha por defecto para el formulario
        return render_template("/rentas/agregarrenta.html", fecha=dt.date.today())
    else:
        data = request.form
        if ModeloRenta.agregarRenta(data):
            return redirect(url_for("rents.agregar_renta"))
        ## Si falla el ingreso de datos, enviar los datos ingresados para que el usuario no los tenga que reingresar
        return render_template("/rentas/agregarrenta.html", data=data, fecha=dt.date.today())