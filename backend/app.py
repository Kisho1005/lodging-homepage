import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chat.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app, resources={r"/*": {"origins": "*"}})

class Message(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user = db.Column(db.String(50), nullable=False)
  content = db.Column(db.String(200), nullable=False)

# データベースを初期化するための関数
def init_db():
  with app.app_context():
    db.create_all()




if __name__ == '__main__':