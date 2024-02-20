from sqlalchemy import Column, Integer, String, LargeBinary, Boolean
from alchemyClasses import db

class Usuario(db.Model):
    __tablename__ = 'usuarios'
    idUsuario = Column(Integer, primary_key = True, nullable = False, autoincrement=True)
    nombre = Column(String(200), nullable = False)
    apPat = Column(String(200), nullable = False)
    apMat = Column(String(200))
    password = Column(String(64), nullable = False)
    email = Column(String(200), unique = True)
    profilePicture = Column(LargeBinary)
    superUser = (Boolean)

    def __init__(self, nombre, apPat, apMat, password, email=None):
        self.nombre = nombre
        self.apPat = apPat
        self.apMat = apMat
        self.password = password
        self.email = email

    def __str__(self):
        return f"Nombre: {self.nombre}\t ApPat: {self.apPat}"
