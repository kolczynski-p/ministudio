from flask import Blueprint
from flask import request
import os
from .models import GalleryPhoto, Work, db
import json

routes_bp = Blueprint('routes_bp', __name__)


# Works requests

@routes_bp.route('/works', methods=['GET'])
def get_works():
    result_json = '{works: ['
    works = [json.dumps(W.make_dict()) for W in Work.query.all()]
    result_json += ', '.join(works) + ']}'

    return result_json


@routes_bp.route('/works/<id>', methods=['GET'])
def get_work(id):
    work = Work.query.filter_by(workId=id).first()
    result_json = json.dumps(work.make_dict())

    return result_json


# GalleryPhotos requests

@routes_bp.route('/works/photos', methods=['GET'])
def get_photos():
    result_json = '{photos: ['
    gallery_photos = [json.dumps(P.make_dict()) for P in GalleryPhoto.query.all()]
    result_json += ', '.join(gallery_photos) + ']}'

    return result_json


@routes_bp.route('/works/photos/<index>', methods=['GET'])
def get_photo(index):
    gallery_photo = GalleryPhoto.query.filter_by(galleryIndex=index).first()
    result_json = json.dumps(gallery_photo.make_dict())

    return result_json


@routes_bp.route('/post', methods=['POST'])
def home_post():
    request_body = request.json
    photo = GalleryPhoto(path=request_body['path'])
    db.session.add(photo)
    db.session.commit()
    return 'Ok'


