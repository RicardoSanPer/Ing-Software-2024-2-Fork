class Marcador():
    def __init__(self, numeroSets = 3, jugador1 = "Fulano", jugador2 = "Zutano"):
        self.sets = numeroSets if numeroSets % 2 != 0 else numeroSets + 1
        self.nombre_jugadores = (jugador1, jugador2)
        self.sets_ganados = [0,0]
        self.juegos = 0
        self.juegos_ganados = [0,0]
        self.dict_puntos = (15,30,40,"Adv")
        self.puntos = [0,0]
        self.saque = True

    