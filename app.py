import pymysql
from utilidad import datosAleatorios as da
import random

'''
Funcion para conectarse a la base de datos RSP_Lab_Ing_P2 con el usuario lab

Returns
-------
conn : Conexcion a la bd
'''
def mysqlconnect(): 
    # To connect MySQL database 
    conn = pymysql.connect( 
        host='localhost', 
        user='lab',  
        password = 'Developer123!', 
        db='RSP_Lab_Ing_P2', 
        ) 
    
    return conn

'''
Inserta datos aleatorios en la tabla usuarios de la base de datos

Params
------
conexion : Conexion a la base de datos

Returns
-------
bool : indica si la insercion fue exitosa
'''
def InsertarUsuario(conexion):
    usuarios = da.RandomData("usuarios.json")
    datos = usuarios.GenerateRandomEntry()
    return Insertar(datos, "usuarios", conexion)

'''
Inserta datos aleatorios en la tabla peliculas de la base de datos

Params
------
conexion : Conexion a la base de datos

Returns
-------
bool : indica si la insercion fue exitosa
'''
def InsertarPelicula(conexion):
    usuarios = da.RandomData("peliculas.json")
    datos = usuarios.GenerateRandomEntry()
    return Insertar(datos, "peliculas", conexion)

def InsertarRenta(conexion):
    ##Obtiene todos los id existentes para las tablas usuarios y peliculas
    usuarios = ObtenerTodosValoresAtributo("idUsuario", "usuarios", conexion)
    peliculas = ObtenerTodosValoresAtributo("idPelicula", "peliculas", conexion)
    
    ##Elige un id aleatorio
    randomUser = da.GetRandomElement(usuarios)
    randomPelicula = da.GetRandomElement(peliculas)

    ##Generar aleatoriamente el resto de los datos
    fechaRenta = da.GenerateRandomDate()
    diasRenta = random.randint(1, 6)
    estatus = random.randint(0,4)

    entry = {
        "idUsuario": randomUser,
        "idPelicula": randomPelicula,
        "fecha_renta": fechaRenta,
        "dias_de_renta": diasRenta,
        "estatus": estatus
    }

    return Insertar(entry, "rentar", conexion)

'''
Inserta un registro en una tabla

Params
------
datos : registros en forma de dict
tabla : nombre de la tabla en la cual insertar
conexion : conexion a la base de datos

Returns
-------
bool : Indica si la operacion fue exitosa
'''
def Insertar(datos: dict, tabla: str, conexion):
    try:
        cols = ', '.join(datos.keys())
        vals = ', '.join(['%s'] * len(datos))
        query = f"INSERT INTO {tabla} ({cols}) VALUES ({vals})"

        with conexion.cursor() as cursor:
            cursor.execute(query, tuple(datos.values()))

        conexion.commit()
    except Exception as e:
        print("Algo salio mal al insertar los datos")
        print(e)
        return False

    return True

'''
Realiza una consulta de todos los datos de un atributo de una tabla

Params
------
atributo : nombre del atributo a consultar
tabla : nombre de la tabla a consutlar
conexion : conexion a la tabla

Returns
-------
resultado : todos los valores para el atributo de la tabla
'''
def ObtenerTodosValoresAtributo(atributo: str, tabla: str, conexion):
    resultado = []
    try:
        with conexion.cursor() as cursor:
            query = f"SELECT {atributo} from {tabla}"
            cursor.execute(query)
            rquery = cursor.fetchall()
            
            for q in rquery:
                resultado.append(q[0])

    except Exception as e:
        print("Algo salio mal al consultar los datos")
        print(e)
    
    return resultado
    

if __name__ == "__main__" : 
    con = mysqlconnect()
    InsertarRenta(con)
    con.close()