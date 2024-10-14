from flask import Flask
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
# Permitir CORS para todas as origens (você pode especificar origens se necessário)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
# no caso coloquei o localhost do meu front-end

from setup.controllers import default