# Script 1: Tenis

## Ejecucion

El script está ubicado en el directorio penv-1 bajo el nombre Script1.py.

La prueba unitaria del mismo se encuentra en el mismo directorio bajo el nombre test_Script1.py, y
se ejecuta usando pytest.

## Entrada de Usuario

El programa acepta cualquier nombre para los jugadores. Sin embargo, no diferencia entre mayusculas y minusculas.
En caso de ingresar el mismo nombre para ambos, se distingue agregando "-2" al segundo jugador.

El usuario puede especificar el numero de sets maximos a jugar. Puesto que debe ser una cantidad impar, si se
ingresa una cantidad par, el programa tomara el siguiente impar (por ejemplo, si se ingresa 2 el programa se
ejecuta con 3).

Para indicar el jugador que anota un punto, se debe ingresar su nombre. El programa no distingue entre mayusculas
y minusculas.