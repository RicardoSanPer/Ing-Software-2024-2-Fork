## Pruebas unitarias para el script 1

import pytest
from Script1 import Marcador

## Prueba de marcacion de puntos
def test_creacion_marcador():
    marcador = Marcador(4, "Pepito", "Clarita")
    assert marcador.sets == 5