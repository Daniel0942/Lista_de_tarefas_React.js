from flask import Flask
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
# Permitir CORS para todas as origens (você pode especificar origens se necessário)
CORS(app, resources={r"/*": {
    "origins": ["http://localhost:3000", "https://lista-de-tarefas-react-js-seven.vercel.app"],
    "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}})
# no caso coloquei o localhost do meu front-end, e a url da hospedagem dele

from setup.controllers import default