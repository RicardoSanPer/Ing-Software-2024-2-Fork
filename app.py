from Practica3 import Aplicacion as P3
from flask import Flask, render_template
from alchemyClasses import db

from controllers import usuario_controlador
from controllers import pelicula_controlador

"""

MAIN

"""
app = Flask(__name__)
##Modificar url de conexion
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://lab:Developer123!@localhost:3306/RSP_Lab_Ing_P2"
app.config.from_mapping(SECRET_KEY='dev')

db.init_app(app)

app.register_blueprint(usuario_controlador.bp_usuario)
app.register_blueprint(pelicula_controlador.bp_pelicula)

@app.route('/')
def hello_world():  # put application's code here
    return render_template('index.html')

if __name__ == '__main__':
    

    app.run()

    '''
    app = Flask(__name__)
    ##Modificar url de conexion
    app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://lab:Developer123!@localhost:3306/RSP_Lab_Ing_P2"
    app.config.from_mapping(SECRET_KEY='dev')

    db.init_app(app)
    with app.app_context():
        aplicacion = P3.Aplicacion()
        aplicacion.MenuPrincipal()
    '''
        