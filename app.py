from flask import Flask
from sqlalchemy import and_, or_

from alchemyClasses import db
from alchemyClasses.usuarios import Usuarios
from alchemyClasses.peliculas import Peliculas
from alchemyClasses.rentas import Rentas

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://lab:Developer123!@localhost:3306/RSP_Lab_Ing_P2"
app.config.from_mapping(SECRET_KEY='dev')

db.init_app(app)

class Aplicacion():

    def __init__(self):
        self.querySelected = None

    '''
    Imprime un menu con opciones y agrega automaticamente la opcion para volver.
    Solicita tambien una entrada del usuario

    Params
    ------
    opciones : lista de strings con las opciones del menu

    Returns
    -------
    int : entero representando la opcion elegida por el usuario
    '''
    def Menu(self, opciones: list):
            print("\n============================\n")
            for i in range(0, len(opciones)):
                print(str(i+1)+": " + opciones[i])
            print("\n0: Volver")
            return self.UsuarioSeleccion(len(opciones))

    '''Menu principal de la aplicacion'''
    def MenuPrincipal(self):
        while True:
            seleccion = self.Menu(["Ver Registros",
                    "Filtrar por ID",
                    "Actualizar",
                    "Eliminar Registros"])

            if seleccion == 0:
                break
            elif seleccion == 1:
                self.MenuVerRegistros()
            elif seleccion == 2:
                self.MenuFiltrar()

    '''Menu para ver los registros de las tablas'''
    def MenuVerRegistros(self):
        while True:
            seleccion = self.Menu(["Usuarios", "Peliculas", "Rentas"])
            
            if seleccion == 0:
                break
            elif seleccion == 1:
                for usuario in Usuarios.query.all():
                    print(usuario)
            elif seleccion == 2:
                for pelicula in Peliculas.query.all():
                    print(pelicula)
            elif seleccion == 3:
                for renta in Rentas.query.all():
                    print(renta)

    '''Menu para filtrar. Guarda un registro con el id de la tabla como el registro seleccionado'''
    def MenuFiltrar(self):
        while True:
            
            print("\n============================\n")
            print("Registro Seleccionado: \n")
            if self.querySelected == None:
                print("Ninguno")
            else:
                print(self.querySelected)

            seleccion = self.Menu(["Usuarios", "Peliculas", "Rentas", "Deseleccionar"])

            if seleccion == 0:
                break
            else:
                print("Ingresa el ID a buscar: ")
                id = self.UsuarioInt()
                if seleccion == 1:
                    self.querySelected = Usuarios.query.filter(Usuarios.idUsuario == id).first()
                elif seleccion == 2:
                    self.querySelected =  Peliculas.query.filter(Peliculas.idPelicula== id).first()
                elif seleccion == 3:
                    self.querySelected =  Rentas.query.filter(Rentas.idRentar == id).first()
                elif seleccion == 4:
                    self.querySelected = None

    '''
    Solicita entrada del usuario en forma de un entero entre 0 y un maximo para
    navegar menus

    Params
    ------
    max : maxima opcion disponible

    Returns
    -------
    int : entero representando la opcion elegida por el usuario
    '''
    def UsuarioSeleccion(self, max):
        seleccion = -1
        print("\nIngresa una opcion [0~"+str(max)+"]")
        while True:
            try:
                seleccion = int(input())
                if seleccion < 0 or seleccion > max:
                    raise
            except Exception as e:
                print("Por favor ingresa un número válido entre 0 y " + str(max))
            else:
                return seleccion

    def UsuarioInt(self):
        num = 0
        while True:
            try:
                num = int(input())
            except Exception as e:
                print("Por favor ingresa un entero válido")
            else:
                return num

if __name__ == '__main__':
    with app.app_context():
        aplicacion = Aplicacion()
        aplicacion.MenuPrincipal()