from Practica3 import Aplicacion as P3
from flask import Flask, render_template
from alchemyClasses import db

"""

MAIN

"""



if __name__ == '__main__':
    app = Flask(__name__)
    ##Modificar url de conexion
    app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://lab:Developer123!@localhost:3306/RSP_Lab_Ing_P2"
    app.config.from_mapping(SECRET_KEY='dev')

    db.init_app(app)
    with app.app_context():
        '''
        aplicacion = P3.Aplicacion()
        aplicacion.MenuPrincipal()
        '''