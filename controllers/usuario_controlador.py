from flask import Blueprint, render_template

bp_usuario = Blueprint("users", __name__, url_prefix="/users")

@bp_usuario.route("/html")
def html_controller():
    return render_template('/usuarios/usuarios.html')

@bp_usuario.route("/html/ver")
def ver_usuarios():
    return render_template('/usuarios/verusuarios.html')