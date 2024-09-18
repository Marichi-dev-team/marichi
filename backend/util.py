from flask import Flask
import os


def create_app(template_folder, static_folder, root_path=None, static_url_path="/"):
    if root_path is None:
        root_path = os.path.abspath(__file__)
    return Flask(
        __name__,
        template_folder=template_folder,
        static_folder=static_folder,
        static_url_path=static_url_path,
        root_path=root_path,
    )


def base_route(app):
    from flask import render_template

    @app.get("/")
    def index():
        return render_template("index.html")
