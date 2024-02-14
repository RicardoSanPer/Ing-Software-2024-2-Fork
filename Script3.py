import matplotlib.pyplot as plt

maxIterations = 256

## Rangos de la grafica
## Por defecto el rango es -2.0, 0.5 para x y -1.15, 1.15 para ver el fractal completo.
## Se pueden modificar para visualizar diferentes secciones (como hacer zoom) del mismo
xmin = -2.0
xmax = 0.50

ymin = -1.15
ymax = 1.15

## Muestreos discretos. Basicamente la resolucion de la gráfica
xresolution = 256
yresolution = 256

vals = []

## Calcular el valor de cada muestra
for j in range(0, yresolution):
    row = []
    for i in range(0, xresolution):
        ## Transformar a coodernadas dentro del rango
        x0 = xmin + i*((xmax - xmin)/ xresolution)
        y0 = ymin + j*((ymax - ymin)/ yresolution)

        x = 0
        y = 0

        iteration = 0
        while(x*x + y*y <= 2*2 and iteration < maxIterations):
            xtemp = x*x - y*y + x0
            y = 2 * x * y + y0
            x = xtemp
            iteration += 1
        
        row.append(iteration / maxIterations)
    vals.append(row)

## Graficar como mapa de calor
plt.imshow(vals, cmap="magma", interpolation="nearest", extent=(xmin, xmax, ymin,ymax))
plt.colorbar()
plt.title("Conjunto de Mandelbrot")
plt.show()
