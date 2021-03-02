from flask import Flask
import os
from flask_migrate import Migrate
from .models import db 
from .routes import routes_bp

migrate = Migrate()


def create_app():
    app = Flask('__name__')

    with app.app_context():
        app.register_blueprint(routes_bp)
        app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
        db.init_app(app)
        migrate.init_app(app, db)
        
        return app

