import matplotlib.pyplot as plt

maxIterations = 256

xmin = -2.0
xmax = 0.50

ymin = -1.15
ymax = 1.15

xresolution = 200
yresolution = 200

vals = []

for j in range(0, yresolution):
    row = []
    for i in range(0, xresolution):
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

plt.imshow(vals, cmap="hot", interpolation="nearest", extent=(xmin, xmax, ymin,ymax))
plt.show()
