import os

# Retrieve the PORT environment variable, or use 5000 as the default port if not set
PORT = os.getenv("PORT") or 5000

# Retrieve the HOST environment variable, or use "0.0.0.0" as the default host if not set
HOST = os.getenv("HOST") or "0.0.0.0"

# Retrieve the DEBUG environment variable and check if it is set to "true" (case-sensitive).
# If the environment variable is not set or not "true", default to False.
DEBUG = os.getenv("DEBUG") == "true" or False

# Define the paths to the frontend build folders.
# Template folder for the application
TEMPLATE_FOLDER = "frontend/dist/"
# Static folder for the application
STATIC_FOLDER = "frontend/dist/"
# Static url path for the application
STATIC_URL_PATH = ""
# Root path of the application
ROOT_PATH = os.getenv("ROOT_PATH")
