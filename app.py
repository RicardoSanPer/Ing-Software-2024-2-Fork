import pymysql
from utilidad import datosAleatorios as da

def mysqlconnect(): 
    # To connect MySQL database 
    conn = pymysql.connect( 
        host='localhost', 
        user='lab',  
        password = 'Developer123!', 
        db='RSP_Lab_Ing_P2', 
        ) 
    
    return conn

def InsertarUsuario(conexion):
    usuarios = da.RandomData("usuarios.json")
    datos = usuarios.GenerateRandomEntry()
    return Insertar(datos, "usuarios", conexion)

def Insertar(datos, tabla, conexion):
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


if __name__ == "__main__" : 
    con = mysqlconnect()
    InsertarUsuario(con)
    con.close()