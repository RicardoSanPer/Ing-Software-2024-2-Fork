from flask import Flask
from sqlalchemy import and_, or_

from alchemyClasses import db
from alchemyClasses.usuario import Usuario


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://lab:Developer123!@localhost:3306/RSP_Lab_Ing_P2"
app.config.from_mapping(SECRET_KEY='dev')

db.init_app(app)

if __name__ == '__main__':
    with app.app_context():
        for usuario in Usuario.query.all(): # Select * from usuarios
            print(usuario)

        print("Ejecutado con exito")