from flask import Blueprint
from flask import request
import os
from .models import GalleryPhoto, db
import json

routes_bp = Blueprint('routes_bp', __name__)


@routes_bp.route('/', methods=['GET'])
def home_get():
    photos_list_raw = GalleryPhoto.query.all()
    photos_list = ''
    for item in photos_list_raw:
        photos_list + item

    return os.getenv('SQLALCHEMY_DATABASE_URI')


@routes_bp.route('/post', methods=['POST'])
def home_post():
    request_body = request.json
    photo = GalleryPhoto(request_body['path']) 
    db.session.add(photo)
    db.commit()