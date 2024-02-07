class Marcador():
    def __init__(self, numeroSets = 3, jugador1 = "Fulano", jugador2 = "Zutano"):
        self.sets = numeroSets if numeroSets % 2 != 0 else numeroSets + 1
        self.nombre_jugadores = (jugador1, jugador2)
        self.sets_ganados = [0,0]
        self.juego = 0
        self.juegos_ganados = [0,0]
        self.dict_puntos = (15,30,40,"Adv")
        self.puntos = [0,0]
        self.saque = True

    def MarcarPunto(self, jugador):
        self.puntos[jugador] += 1
        contricante = 0 if jugador == 1 else 1

        print("Punto para: " + self.nombre_jugadores(jugador))
        
        ##Si el jugador anota y no entra en ventaja, otorgar juego
        if(self.puntos[jugador] == 4 and self.puntos[contricante] < 3):
            self.marcarJuego(jugador)
            return

        #Si ambos jugadores estan en ventaja, quitar ventaja
        if(self.puntos[jugador] == 4 and self.puntos[contricante] == 4):
            self.puntos[0] = 3
            self.puntos[1] = 3

        ##Si el jugador anota un punto mientras esta en ventaja
        if(self.puntos[jugador] == 5):
            self.marcarJuego(jugador)

        

    def marcarJuego(self, jugador):
        self.juegos_ganados[jugador] += 1
        self.puntos[0] = 0
        self.puntos[1] = 0

        print("Juego para " + self.nombre_jugadores(jugador))

        contricante = 0 if jugador == 1 else 1

        ##Cambio de saque
        self.juego += 1
        if self.juego % 2 == 1: self.saque = not self.saque

        ## Para ganar un set, el jugador debe tener al menos 6 juegos y una diferencia de 2
        ## respecto al contricante
        if(self.juegos_ganados[0] < 6 and self.juegos_ganados[1] < 6):
            return
        
        if(abs(self.juegos_ganados[jugador] - self.juegos_ganados[contricante]) > 1):
            self.marcarSet(jugador)

    def marcarSet(self, jugador):
        self.juegos_ganados[0] = 0
        self.juegos_ganados[1] = 0

        self.sets_ganados[jugador] += 1

        print("Set para " + self.nombre_jugadores(jugador))

        ## Minimo de sets que se deben tener para ganar
        minimo = (self.sets - 1)/2 + 1

        if(self.sets_ganados[0] >= minimo):
            self.declararGanador(0)
        
        elif(self.sets_ganados[1] >= minimo):
            self.declararGanador(1)
        
    def declararGanador(self, ganador):
        print("Juego terminado. Ganador: " + self.nombre_jugadores(ganador))