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
        self.sets = numeroSets if numeroSets % 2 != 0 else numeroSets + 1
        self.nombre_jugadores = (jugador1, jugador2)
        self.sets_ganados = [0,0]
        self.juego = 0
        self.juegos_ganados = [0,0]
        self.dict_puntos = (0,15,30,40,"Adv")
        self.puntos = [0,0]
        self.saque = True
        self.ganador = -1
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

        print("Juego para " + self.nombre_jugadores[jugador])

        contricante = 0 if jugador == 1 else 1

        ##Cambio de saque
        self.juego += 1
        if self.juego % 2 == 1: self.saque = not self.saque

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

        print("Set para " + self.nombre_jugadores[jugador])

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
        print("Juego terminado. Ganador: " + self.nombre_jugadores[ganador])
        self.ganador = ganador

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

    def ImprimirMarcador(self):
        print("===== MARCADOR =====")
        print("\t" + self.nombre_jugadores[0]+"\t"+self.nombre_jugadores[1])
        print("SETS:\t" + str(self.sets_ganados[0]) +"\t"+ str(self.sets_ganados[1]) + "\tMEJOR DE " + str(self.sets))
        print("JUEGOS:\t" + str(self.juegos_ganados[0])+"\t"+str(self.juegos_ganados[1]))
        print("PUNTOS:\t" +str(self.dict_puntos[self.puntos[0]])+"\t"+str(self.dict_puntos[self.puntos[1]]))