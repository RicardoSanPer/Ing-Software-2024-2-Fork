import re

'''
Funcion Caminante. Dado un string que representa un viaje subiendo o bajando (U y D respectivamente), cuenta
el numero de valles completos recorridos, siendo un valle aquel que empieza a la altura 0 y regresa a la altura 0
pasando por debajo de la altura original.

Params
------
camino : string que representa el camino

Returns
-------
int : numero de valles completos en el recorrido. Valor es -1 si el formato de entrada es incorrecto
'''
def Caminante(camino):
    ## Comprobar que es string y convertir a minuscula
    try:
        camino = camino.lower()
    except:
        return -1
    
    ## Comprobar que la cadena contiene solo "u" y "d"
    matches = re.findall("^[ud]+$", camino)
    if len(matches) == 0:
        return -1
    
    currentLevel = 0
    cuentaValles = 0

    ## Recorrido
    for c in camino:
        ## Si se sube
        if c == 'u':
            currentLevel += 1
            previousStep = 1
        ## Si se baja
        elif c == 'd':
            currentLevel -= 1
            previousStep = -1
        
        ## Si se llega al nivel del mar y el paso anterior fue de subida (esta saliendo de un valle)
        if currentLevel == 0 and previousStep == 1:
            cuentaValles += 1

    return cuentaValles
    