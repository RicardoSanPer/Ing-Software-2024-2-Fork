from flask import Flask
from sqlalchemy import and_, or_

from alchemyClasses import db
from alchemyClasses.usuarios import Usuarios
from alchemyClasses.peliculas import Peliculas
from alchemyClasses.rentas import Rentas

class Aplicacion():

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
            print("========== MENU PRINCIPAL ================")
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
            elif seleccion == 3:
                self.MenuModificar()
            elif seleccion == 4:
                self.MenuBorrar()

    '''Menu para ver los registros de las tablas'''
    def MenuVerRegistros(self):
        while True:
            print("========== VER REGISTROS ================")
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
            print("========== FILTRAR REGISTROS ================")
            seleccion = self.Menu(["Usuarios", "Peliculas", "Rentas", "Deseleccionar"])
            querySelected = None
            if seleccion == 0:
                break
            else:
                print("Ingresa el ID a buscar: ")
                id = self.UsuarioInt()
                if seleccion == 1:
                    querySelected = Usuarios.query.filter(Usuarios.idUsuario == id).first()
                elif seleccion == 2:
                    querySelected =  Peliculas.query.filter(Peliculas.idPelicula== id).first()
                elif seleccion == 3:
                    querySelected =  Rentas.query.filter(Rentas.idRentar == id).first()
                elif seleccion == 4:
                    querySelected = None
                
                self.PrintRegistroSeleccionado(querySelected)
                
    '''Imprime un registro filtrado
    Params
    ------
    query: registro a imprimir
    '''
    def PrintRegistroSeleccionado(self, query):
            print("\n============================\n")
            print("Resultado: \n")
            if query == None:
                print("Ninguno")
            else:
                print(query)

            print("Presiona Enter para continuar")
            input()

    '''Menu para modificar el valor de un registro'''
    def MenuModificar(self):
        while(True):
            print("========== MODIFICAR REGISTROS ================")
            seleccion = self.Menu(["Usuario", "Pelicula", "Renta"])
            if(seleccion == 0):
                return
            elif seleccion == 1:
                self.ModificarRegistro("usuarios")
            elif seleccion == 2:
                self.ModificarRegistro("peliculas")
            elif seleccion == 3:
                self.ModificarRegistro("rentar")

    '''Menu para borrar'''
    def MenuBorrar(self):
        while(True):
            print("========== BORRAR REGISTROS ================")
            seleccion = self.Menu(["Usuarios", "Peliculas", "Rentas"])

            if(seleccion == 0):
                return
            elif seleccion == 1:
                self.SubMenuBorrar("usuarios")
            elif seleccion == 2:
                self.SubMenuBorrar("peliculas")
            elif seleccion == 3:
                self.SubMenuBorrar("rentar")

    '''Submenu para borrar. Pregunta al usuario si borrar por id o borrar todas las tablas'''
    def SubMenuBorrar(self, nombre):
        while(True):
            print("========== MODO ================")
            seleccion = self.Menu(["Por ID", "Todos"])

            if(seleccion == 0):
                return
            elif seleccion == 1:
                self.BorrarRegistro(nombre)
                return
            elif seleccion == 2:
                self.BorrarTabla(nombre)
                return
    
    '''Borrar tabla
    Params
    ------
    nombreTabla : Nombre de la tabla sobre la cual realizar la operacion
    '''
    def BorrarTabla(self, nombreTabla):
        try:
            if nombreTabla == "usuarios":
                ##Borrar primero de rentas las rentas que referencien al id de usuario
                all_ids = db.session.query(Usuarios.idUsuario).all()
                id_list = []
                for id_tuple in all_ids:
                    id_list.append(id_tuple[0])

                ##Borrar de rentar
                for id in id_list:
                    Rentas.query.filter_by(idUsuario = id).delete()
                ##Borrar usuarios
                db.session.query(Usuarios).delete()

            elif nombreTabla == "peliculas":
                ##Borrar primero de rentas las rentas que referencien al id de pelicula
                all_ids = db.session.query(Peliculas.idPelicula).all()

                id_list = []
                for id_tuple in all_ids:
                    id_list.append(id_tuple[0])
                ##Borrar de rentar
                for id in id_list:
                    Rentas.query.filter_by(idPelicula = id).delete()
                ##Borrar pelicula
                db.session.query(Peliculas).delete()

            elif nombreTabla == "rentar":
                db.session.query(Rentas).delete()

            db.session.commit()
        except Exception as e:
            print("Algo salio mal al borrar el registro")
            print(e)
            
    '''Borra un registro de una tabla
    Params
    ------
    nombreTabla: Nombre de la tabla en la cual se borra el registro
    '''
    def BorrarRegistro(self, nombreTabla):
        if(nombreTabla != "usuarios" and nombreTabla != "peliculas" and nombreTabla != "rentar"):
            return
        
        print("Ingresa el ID del registro a borrar: ")
        id = self.UsuarioInt()

        ##Borrar registros
        ## Se eliminan primero los registros de rentas que referencien a las tablas si aplica
        try:
            queryRentas = None
            ##Usuarios
            if nombreTabla == "usuarios":
                ##Borrar primero registros de rentas que referencien al id de usuario
                queryRentas = Rentas.query.filter_by(idUsuario=id).all()
                for renta in queryRentas:
                    db.session.delete(renta)
                
                Usuarios.query.filter_by(idUsuario = id).delete()
            ##Peliculas
            elif nombreTabla == "peliculas":
                ##Borrar primero registros de rentas que referencien al id de pelicula
                queryRentas = Rentas.query.filter_by(idPelicula=id).all()
                for renta in queryRentas:
                    db.session.delete(renta)
                
                Peliculas.query.filter_by(idPelicula = id).delete()
            ##Rentas
            elif nombreTabla == "rentar":
                Rentas.query.filter_by(idRentar = id).delete()
            
            db.session.commit()
        except Exception as e:
            print("Algo salio mal al borrar el registro")
            print(e)

    '''
    Modifica el valor de nombre para un registro en una tabla dado un id

    Params
    ------
    nombreTabla : nombre de la tabla en la cual está el registro a modificar
    '''
    def ModificarRegistro(self, nombreTabla):
        if(nombreTabla != "usuarios" and nombreTabla != "peliculas" and nombreTabla != "rentar"):
            return
        
        print("Ingresa el ID del registro a modificar: ")
        id = self.UsuarioInt()

        ##Imprimir mensaje de entrada
        if(nombreTabla == "usuarios" or nombreTabla == "peliculas"):
            print("Ingresa un valor para la columna 'nombre':")
        elif(nombreTabla == "rentar"):
            print("Ingresa un valor para la columna 'fecha_renta'[YYYY-MM-DD]:")

        valor = str(input())

        ##Modificar registro
        try:
            if nombreTabla == "usuarios":
                Usuarios.query.filter_by(idUsuario = id).update(dict(nombre = valor))
            elif nombreTabla == "peliculas":
                Peliculas.query.filter_by(idPelicula = id).update(dict(nombre = valor))
            elif nombreTabla == "rentar":
                Rentas.query.filter_by(idRentar = id).update(dict(fecha_renta = valor))
            
            db.session.commit()
        except Exception as e:
            print("Algo salio mal al modificar el registro")
            print(e)



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

    ''' Solicita al usuario un entero como entrada
    Returns
    -------
    int : entrada del usuario
    '''
    def UsuarioInt(self):
        num = 0
        while True:
            try:
                num = int(input())
            except Exception as e:
                print("Por favor ingresa un entero válido")
            else:
                return num