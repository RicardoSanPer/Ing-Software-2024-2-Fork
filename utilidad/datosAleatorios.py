import json
import random

"""Clase RandomData que lee un archivo json para obtener datos de muestra"""
class RandomData():
    '''
    Constructor

    Params
    ------
    fileName : Nombre del archivo json que contiene los datos que se quieren leer
    '''
    def __init__(self, fileName):
        self.dataLength = 0
        try:
            self.file = open("utilidad/" + fileName)
            self.data = json.load(self.file)
            self.file.close()
            self.dataLength = len(self.data)
        except Exception as e:
            print("Algo salio mal al intentar leer los datos")
            print("\t" + str(e))
            self.file = None
            self.data = None
            self.dataLength = 0
        
    '''
    Dado el nombre de una columna, obtiene un dato aleatorio de dicha columna

    Params
    ------
    dato : nombre de la columna de la cual se quiere extraer un dato

    Returns
    -------
    datoObtenido : dato aleatorio
    '''
    def GetRandomData(self, dato):
        if self.dataLength == 0:
            return None
        
        index = random.randint(0, self.dataLength)
        datoObtenido = None

        try:
            datoObtenido = self.data[index][dato]
        except Exception as e:
            print("Ocurrio un error al tratar de obtener un dato aleatorio:")
            print("\t"+ str(e))

        return datoObtenido
