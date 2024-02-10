## Pruebas unitarias para el script 1

import pytest
from Script1 import Marcador

## Prueba de marcacion de puntos
def test_creacion_marcador():
    marcador = Marcador(4, "Pepito", "Clarita")
    assert marcador.sets == 5

    marcador = Marcador()
    assert marcador.sets == 3

    marcador = Marcador(7)
    assert marcador.sets == 7

## Prueba de marcacion de puntos
def test_marcar_punto():
    marcador = Marcador()

    ##Marcar punto
    marcador.MarcarPunto(0)
    marcador.MarcarPunto(1)
    assert marcador.GetPuntosJugador(0) == 1
    assert marcador.GetPuntosJugador(1) == 1

    ##Colocar un jugador en ventaja
    marcador.SetPuntosJugador(0, 3)
    marcador.SetPuntosJugador(1, 3)
    marcador.MarcarPunto(1)
    assert marcador.GetPuntosJugador(1) == 4

    ##Colocar ambos jugadores en ventaja (elimina la ventaja)
    marcador.MarcarPunto(0)
    assert marcador.GetPuntosJugador(0) == 3
    assert marcador.GetPuntosJugador(1) == 3

## Prueba de otorgar juego
def test_ganar_juego():
    marcador = Marcador()

    ##Colocar un jugador en ventaja y ganar
    marcador.SetPuntosJugador(0,3)
    marcador.SetPuntosJugador(1,3)
    marcador.MarcarPunto(0)
    marcador.MarcarPunto(0)

    assert marcador.GetPuntosJugador(0) == 0
    assert marcador.GetPuntosJugador(1) == 0
    assert marcador.GetJuegosJugador(0) == 1

    ##Ganar juego sin ventaja
    marcador.SetPuntosJugador(1,3)
    marcador.MarcarPunto(1)

    assert marcador.GetPuntosJugador(0) == 0
    assert marcador.GetPuntosJugador(1) == 0
    assert marcador.GetJuegosJugador(1) == 1

## Preba para otorgar set
def test_ganar_set():
    marcador = Marcador()

    ##Ganar con 6 y al menos 2 de diferencia
    marcador.SetJuegosJugador(1,5)
    marcador.SetJuegosJugador(0,0)
    marcador.MarcarJuego(1)

    assert marcador.GetJuegosJugador(0) == 0
    assert marcador.GetJuegosJugador(1) == 0
    assert marcador.GetSetsJugador(1) == 1

    marcador.Reiniciar()
    marcador.SetJuegosJugador(1,5)
    marcador.SetJuegosJugador(0,4)
    marcador.MarcarJuego(1)

    assert marcador.GetJuegosJugador(0) == 0
    assert marcador.GetJuegosJugador(1) == 0
    assert marcador.GetSetsJugador(1) == 1

    ## Mas de 6 y 2 de diferencia
    marcador.Reiniciar()
    marcador.SetJuegosJugador(1,5)
    marcador.SetJuegosJugador(0,5)
    marcador.MarcarJuego(1)

    assert marcador.GetJuegosJugador(0) == 5
    assert marcador.GetJuegosJugador(1) == 6
    assert marcador.GetSetsJugador(1) == 0

    marcador.MarcarJuego(1)

    assert marcador.GetJuegosJugador(0) == 0
    assert marcador.GetJuegosJugador(1) == 0
    assert marcador.GetSetsJugador(1) == 1

##Prueba de juego terminado
def test_ganador():
    marcador = Marcador(4)
    marcador.SetSetsJugador(0,2)
    marcador.SetSetsJugador(1,2)
    marcador.MarcarSet(0)

    assert marcador.ganador == 0

##Prueba del formato del marcador
def test_imprimir_marcadores():
    marcador = Marcador()
    marcador.SetPuntosJugador(0,4)
    marcador.SetPuntosJugador(1,3)
    marcador.SetJuegosJugador(0,3)
    marcador.SetJuegosJugador(1,4)
    marcador.SetSetsJugador(0,1)
    marcador.SetSetsJugador(1,1)
    marcador.ImprimirMarcador()

    assert False, "Esta prueba falla deliberadamente para imprimir en consola el marcador"

## Prueba para marcar punto por nombre de jugador
def test_punto_por_nombre():
    marcador = Marcador()
    marcador.JugadorAnota("Fulano")

    assert marcador.GetPuntosJugador(0) == 1