import json
import random

class RandomData():
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
