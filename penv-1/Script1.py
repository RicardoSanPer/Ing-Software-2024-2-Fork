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

        ##Cambio de saque
        self.juego += 1
        if self.juego % 2 == 1: self.saque = not self.saque