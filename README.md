# Ingeniería de Software 2024-2
Repositorio oficial de la materia de Ingenieria de Software de la Facultad de Ciencias de la UNAM del semestre 2024-2

## Profesores:

- Francisco Valdes Souto
- Valeria Garcia Landa
- Fernando Fong
- Erick Martínez Piza
- Rogelio Alcantar Arenas

## Ejecucion

Para la sección 2.1 de la practica, se crearon las funciones en Script1.py. 

- mysqlconnect() crea la conexion a la base de datos 'RSP_Lab_Ing_P2' en 'localhost' con usuario 'lab'. Se debe modificar con los datos de conexion.
- InsertarEnCadaTabla() inserta un registro en cada tabla. 
- FiltrarUsuarios() filtra los usuarios por apellido.
- ActualizarGenero() cambia el genero de un titulo.
- EliminarRentas() elimina las rentas de antes de 3 dias.

Se usa el archivo 'datosAleatorios.py' en el directorio 'utilidad' para generar los registros aleatoriamente a partir de datos contenidos en archivos JSON.

Para la seccion 2.2 de la practica, se creó la clase Aplicacion en app.py con las funciones para que el usuario pueda realizar las tareas a traves de un menu.
Al fondo del script en main se debe modificar la url con los datos de conexion a la base de datos.

## Notas

Se modifico el script IngSoftLab.sql para utilizar un nombre distinto para la base de datos

## Creditos

Datos de muestra obtenidos de Mockaroo