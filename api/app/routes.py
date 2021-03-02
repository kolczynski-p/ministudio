from flask import Blueprint
from flask import request
import os
from .models import GalleryPhoto, db
import json

routes_bp = Blueprint('routes_bp', __name__)


@routes_bp.route('/', methods=['GET'])
def home_get():
    gallery_photos_raw = [P.__repr__() for P in GalleryPhoto.query.all()]
    photos_list_string = ' '.join(gallery_photos_raw)

    return photos_list_string


@routes_bp.route('/item/<photo_path>', methods=['GET'])
def get_item(photo_path):
    gallery_photo = GalleryPhoto.query.filter_by(path=photo_path).first()

    return gallery_photo.__repr__()




@routes_bp.route('/post', methods=['POST'])
def home_post():
    request_body = request.json
    photo = GalleryPhoto(path=request_body['path']) 
    db.session.add(photo)
    db.session.commit()
    return 'Ok'