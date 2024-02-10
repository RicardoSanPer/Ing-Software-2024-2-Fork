class Marcador():
    '''
    Constructor

    Params
    ------
    numeroSets : Numero de sets que se pueden jugar como máximo. Debe ser impar para evitar empates. En caso de
        ser par, se cambia al siguiente numero impar

    jugador1 : Nombre del primer jugador

    jugador2 : Nombre del segundo jugador
    '''
    def __init__(self, numeroSets = 3, jugador1 = "Fulano", jugador2 = "Zutano"):

        jugador1 = jugador1.strip()
        jugador2 = jugador2.strip()

        ##Si ambos jugadores tienen el mismo nombre, agregar un 2 al final del nombre del segundo
        jugador2 = jugador2 + "-2" if jugador1.lower() == jugador2.lower() or jugador1 == jugador2 else jugador2

        self.sets = numeroSets if numeroSets % 2 != 0 else numeroSets + 1
        self.nombre_jugadores = (jugador1, jugador2)
        self.sets_ganados = [0,0]
        self.juego = 0
        self.juegos_ganados = [0,0]
        self.dict_puntos = (0,15,30,40,"Adv")
        self.puntos = [0,0]
        self.cambioSaque = False
        self.cambioCancha = False
        self.ganador = -1

    '''
    Anota un punto para el jugador indicado

    Params
    ------
    nombre : nombre del jugador

    Returns
    -------
    bool : indica si se anoto el punto o no (ie no hay un jugador con el nombre indicado)
    '''
    def JugadorAnota(self, nombre):
        nombre = str(nombre)
        nombre = nombre.lower().strip()

        if(nombre == self.nombre_jugadores[0].lower()):
            self.MarcarPunto(0)
            return True
        
        elif (nombre == self.nombre_jugadores[1].lower()):
            self.MarcarPunto(1)
            return True
        
        else:
            print("No se encontro un jugador con ese nombre. Intenta de nuevo.")
            print("Los jugadores son: " + str(self.nombre_jugadores[0]) +", " + str(self.nombre_jugadores[1]))
            return False
    '''
    Marca un punto para el jugador indicado

    Params
    ------
    jugador : Numero del jugador (0 para el 1 y 1 para el 2)
    '''
    def MarcarPunto(self, jugador):
        self.puntos[jugador] += 1
        contricante = 0 if jugador == 1 else 1

        print("Punto para: " + self.nombre_jugadores[jugador])
        
        ##Si el jugador anota y no entra en ventaja, otorgar juego
        if(self.puntos[jugador] == 4 and self.puntos[contricante] < 3):
            self.__marcarJuego(jugador)
            return

        #Si ambos jugadores estan en ventaja, quitar ventaja
        if(self.puntos[jugador] == 4 and self.puntos[contricante] == 4):
            self.puntos[0] = 3
            self.puntos[1] = 3

        ##Si el jugador anota un punto mientras esta en ventaja
        if(self.puntos[jugador] == 5):
            self.__marcarJuego(jugador)

    '''
    Marca un juego para el jugador indicado y reinicia los puntos del juego

    Params
    ------
    jugador : Numero del jugador (0 para el 1 y 1 para el 2)

    '''
    def __marcarJuego(self, jugador):
        self.juegos_ganados[jugador] += 1
        self.puntos[0] = 0
        self.puntos[1] = 0

        print("\n========== Juego para " + self.nombre_jugadores[jugador] + " ==========\n")
        print("Presiona enter para continuar")
        input()

        contricante = 0 if jugador == 1 else 1

        ##Cambio Saque
        self.cambioSaque = not self.cambioSaque

        ##Cambio de cancha
        self.juego += 1
        if self.juego % 2 == 1:
            print("\n======> Cambio de cancha\n") 
            self.cambioCancha = not self.cambioCancha

        ## Para ganar un set, el jugador debe tener al menos 6 juegos y una diferencia de 2
        ## respecto al contricante
        if(self.juegos_ganados[0] < 6 and self.juegos_ganados[1] < 6):
            return
        
        if(abs(self.juegos_ganados[jugador] - self.juegos_ganados[contricante]) > 1):
            self.__marcarSet(jugador)

    '''
    Marca un set para el jugador indicado y reinicia los juegos

    Params
    ------
    jugador : Numero del jugador (0 para el 1 y 1 para el 2)

    '''
    def __marcarSet(self, jugador):
        self.juegos_ganados[0] = 0
        self.juegos_ganados[1] = 0

        self.sets_ganados[jugador] += 1

        print("\n========== Set para " + self.nombre_jugadores[jugador] + " ==========\n")
        print("Presiona enter para terminar ")
        input()

        ## Minimo de sets que se deben tener para ganar
        minimo = (self.sets - 1)/2 + 1

        if(self.sets_ganados[0] >= minimo):
            self.__declararGanador(0)
        
        elif(self.sets_ganados[1] >= minimo):
            self.__declararGanador(1)
        
    '''
    Declara un ganador
    
    Params
    ------
    ganador : Numero del jugador ganador (0 para el 1 y 1 para el 2)

    '''
    def __declararGanador(self, ganador):
        print("\n========== Juego terminado. Ganador: " + self.nombre_jugadores[ganador] + " ==========\n")
        print("Presiona enter para terminar.")
        input()
        self.ganador = ganador

    '''
    Reinicia el marcador
    '''
    def Reiniciar(self):
        self.puntos[0] = self.puntos[1] = 0
        self.sets_ganados[0] = self.sets_ganados[1] = 0
        self.juegos_ganados[0] = self.juegos_ganados[1] = 0
        self.juego = 0

    ##Getters
    def GetPuntosJugador(self, jugador):
        return self.puntos[jugador]
    
    def GetJuegosJugador(self, jugador):
        return self.juegos_ganados[jugador]
    
    def GetSetsJugador(self, jugador):
        return self.sets_ganados[jugador] 
    
    ##Setters
    def SetPuntosJugador(self, jugador, puntos):
        self.puntos[jugador] = puntos
    
    def SetJuegosJugador(self, jugador, juegos):
        self.juegos_ganados[jugador] = juegos
    
    def SetSetsJugador(self, jugador, sets):
        self.sets_ganados[jugador] = sets

    ## Marcar puntos
    def MarcarJuego(self, jugador):
        self.__marcarJuego(jugador)

    ## Marcar set
    def MarcarSet(self, jugador):
        self.__marcarSet(jugador)

    ## Imprime en consola el marcador
    def ImprimirMarcador(self):
        print("\n===== MARCADOR =====")

        n1 = self.nombre_jugadores[0]
        n2 = self.nombre_jugadores[1]
        ##Indicar el jugador que saca con @
        if(self.cambioSaque) : n1 = "🎾" + n1
        else: n2  = "🎾" + n2

        j0 = 0
        j1 = 1

        if(self.cambioCancha):
            j0 = 1
            j1 = 0
            print("\t" + n2+"\t"+n1)
        else:
            print("\t" + n1+"\t"+n2)
        
        print("SETS:\t" + str(self.sets_ganados[j0]) +"\t"+ str(self.sets_ganados[j1]) + "\tMEJOR DE " + str(self.sets))
        print("JUEGOS:\t" + str(self.juegos_ganados[j0])+"\t"+str(self.juegos_ganados[j1]))
        print("PUNTOS:\t" +str(self.dict_puntos[self.puntos[j0]])+"\t"+str(self.dict_puntos[self.puntos[j1]])+"\n")

'''
Obtiene input del usuario en forma de string

Returns
-------
str : String
'''
def GetUserInputString():
    while True:
        text = ""
        try:    
            text = input()
            text = text.strip() 
        except:
            print("Por favor ingresa un nombre válido")
        else:
            return text

'''
Obtiene un entero positivo del usuario

Returns
-------
int : entero positivo
'''
def GetUserPositiveInt():
    while True:
        n = 0
        try:
            n = int(input())
            if n < 0:
                raise
        except:
            print("Por favor ingresa un entero positivo.")
        else:
            return n

## Main
if __name__ == "__main__":
    print("Ingresa el nombre del Jugador 1: ")
    j1 = GetUserInputString()

    print("Ingresa el nombre del Jugador 2: ")
    j2 = GetUserInputString()

    print("Ingresa el número máximo de sets a jugar:")
    sets = GetUserPositiveInt()

    marcador = Marcador(sets, j1, j2)
    print("====== " + j1 + " VS " + j2 + " ======")
    print("Jugando a mejor de " + str(marcador.sets))

    print("Presiona enter para continuar")
    input()

    ## Bucle principal. Termina cuando hay un ganador
    while(marcador.ganador == -1):
        marcador.ImprimirMarcador()
        print("Ingresa el nombre del jugador que marca punto: ")
        j = GetUserInputString()

        ## Si no rs valido, perguntar por un nombre de nuevo
        while(not marcador.JugadorAnota(j)):
            j = GetUserInputString()