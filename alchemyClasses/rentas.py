from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from alchemyClasses import db

class Rentas(db.Model):
    __tablename__="rentar"
    idRentar = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    idUsuario = Column(Integer, ForeignKey("usuarios.idUsuario"), nullable=False)
    idPelicula = Column(Integer, ForeignKey("peliculas.idUsuarios"), nullable=False)
    fecha_renta = Column(DateTime, nullable=False)
    dias_de_renta = Column(Integer, default=5)
    estatus = Column(Boolean, default=False)

    def __init__(self, idUsuario, idPelicula, fecha_renta, dias_de_renta=5, estatus=False):
        self.idUsuario = idUsuario
        self.idPelicula = idPelicula
        self.fecha_renta = fecha_renta
        self.dias_de_renta = dias_de_renta
        self.estatus = estatus

    def __str__(self):
        return f"ID: {self.idRentar}\t ID Usuario: {self.idUsuario}\t ID Pelicula: {self.idPelicula}\t Fecha:{self.fecha_renta}\t Dias: {self.dias_de_renta}\t Estatus: {self.estatus}"
    