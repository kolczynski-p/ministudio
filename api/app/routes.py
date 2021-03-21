from flask import Blueprint
from flask import request
import os
from .models import GalleryPhoto, Work, db
import json

routes_bp = Blueprint('routes_bp', __name__)


# Works requests

@routes_bp.route('/works', methods=['GET'])
def get_works():
    result_json = '{"works": ['
    works = [json.dumps(W.make_dict()) for W in Work.query.all()]
    result_json += ', '.join(works) + ']}'

    return result_json


@routes_bp.route('/works/<id>', methods=['GET'])
def get_work(id):
    work = Work.query.filter_by(workId=id).first()
    result_json = json.dumps(work.make_dict())

    return result_json


# GalleryPhotos requests

@routes_bp.route('/works/all/photos', methods=['GET'])
def get_photos():
    result_json = '{"photos": ['
    gallery_photos = [json.dumps(P.make_dict()) for P in GalleryPhoto.query.all()]
    result_json += ', '.join(gallery_photos) + ']}'

    return result_json


@routes_bp.route('/works/<id>/photos/1', methods=['GET'])
def get_preview_image(id):
    preview_image = GalleryPhoto.query.filter_by(workId=id, galleryIndex=1).first()
    result_json = json.dumps(preview_image.make_dict())

    return result_json
    
@routes_bp.route('/works/1/photos/', methods=['GET'])
def get_work_images():
    result_json = '{"photos": ['
    work_photos = [json.dumps(P.photoName) for P in GalleryPhoto.query.filter_by(workId=1)]
    result_json += ', '.join(work_photos) + ']}'

    return result_json


#@routes_bp.route('/post', methods=['POST'])
#def home_post():
#    request_body = request.json
#    photo = GalleryPhoto(path=request_body['path'])
#    db.session.add(photo)
#    db.session.commit()
#    return 'Ok'
#

