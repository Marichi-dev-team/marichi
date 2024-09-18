import logging
import os

from flask import Flask
from settings import (
    DEBUG,
    HOST,
    PORT,
    ROOT_PATH,
    STATIC_FOLDER,
    STATIC_URL_PATH,
    TEMPLATE_FOLDER,
)
from util import base_route, create_app

app = create_app(
    template_folder=TEMPLATE_FOLDER,
    static_folder=STATIC_FOLDER,
    root_path=ROOT_PATH,
    static_url_path=STATIC_URL_PATH,
)
base_route(app)
app.logger.setLevel(logging.DEBUG if DEBUG else logging.WARNING)

if __name__ == "__main__":
    if DEBUG:
        print("App url map:\n", app.url_map)
    print("Template folder", app.template_folder)
    print(os.listdir(app.template_folder))
    print("Root path:", app.root_path)
    print("Absolute path of the template folder:", os.path.abspath(app.template_folder))
    app.run(debug=DEBUG, host=HOST, port=PORT)
