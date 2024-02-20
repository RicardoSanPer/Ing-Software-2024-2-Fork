from flask import Flask
from sqlalchemy import and_, or_

from alchemyClasses import db
from alchemyClasses.Alumno import Alumno
from cryptoUtils.CryptoUtils import cipher
from hashlib import sha256

from model.model_alumno import borra_alumno

from utilidad import datosAleatorios

#mysql+pymysql://ferfong:Developer123!@localhost:3306/ing_soft
#<dialecto>+<driver>://<usuario>:<passwd>@localhost:3306/<db>
#mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_soft
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://lab:Developer123!@localhost:3306/RSP_Lab_Ing_P2'
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)

if __name__ == '__main__':
    with app.app_context():
        a = datosAleatorios.RandomData("usuarios.json")

        print(a.GenerateRandomEntry())
        print("Borrado con éxito!")