from sqlalchemy import Column, Integer, String, LargeBinary, Boolean
from alchemyClasses import db

class Usuarios(db.Model):
    __tablename__ = 'usuarios'
    idUsuario = Column(Integer, primary_key = True, nullable = False, autoincrement=True)
    nombre = Column(String(200), nullable = False)
    apPat = Column(String(200), nullable = False)
    apMat = Column(String(200))
    password = Column(String(64), nullable = False)
    email = Column(String(200), unique = True, default=None)
    profilePicture = Column(LargeBinary)
    superUser = Column(Boolean, default=None)

    def __init__(self, nombre, apPat, apMat, password, email=None, superUser=None, profilePicture=None):
        self.nombre = nombre
        self.apPat = apPat
        self.apMat = apMat
        self.password = password
        self.email = email
        self.superUser = superUser
        self.profilePicture = profilePicture

    def __str__(self):
        return f"ID: {self.idUsuario}\t Nombre: {self.nombre}\tApPat: {self.apPat}\tApMat: {self.apMat} \tEmail: {self.email}"
