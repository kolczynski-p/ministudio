from flask_sqlalchemy import SQLAlchemy
from datetime import date
from string import Template

db = SQLAlchemy()


class Work(db.Model):
    __tablename__ = 'Works'
    workId = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(512), nullable=False)
    additionDate = db.Column(db.Date(), nullable=False)
    photos = db.relationship('GalleryPhoto', backref='Works', lazy=True)

    def __init__(self, title='example title', description='example description'):
        self.title = title
        self.description = description
        date_stamp = date.today()
        self.additionDate = date_stamp

    def __repr__(self):
        return '<WORK: ID {}, TITLE {}, DESCRIPTION {}, ADDITIONDATE {}>'.format(self.workId, self.title, self.description, self.additionDate)

    def make_dict(self):
        additionDate_string = self.additionDate.strftime('%d/%m/%Y')
        dictionary = dict(workId=self.workId, title=self.title, description=self.description, additionDate=additionDate_string)
        return dictionary


class GalleryPhoto(db.Model):
    __tablename__ = 'GalleryPhotos'
    photoName = db.Column(db.String(255), primary_key=True)
    galleryIndex = db.Column(db.Integer)
    workId = db.Column(db.Integer, db.ForeignKey('Works.workId'), nullable=False)

    def __init__(self, photoName, workId, galleryIndex=None):
        self.photoName = photoName
        self.workId = workId
        self.galleryIndex = galleryIndex

    def __repr__(self):
        return '<PHOTO: NAME {}, WORKID {}, INDEX {}>'.format(self.photoName, self.workId, self.galleryIndex)

    def make_dict(self):
        dictionary = dict(photoName=self.photoName, galleryIndex=self.galleryIndex, workId=self.workId, )
        return dictionary


# example db populating for testing
def TestPopulate():
    work = Work('Człowiek-robot nr. jeden', 'Robotyczny cyborg czlowiek-maszyna')
    db.session.add(work)
    db.session.commit()

    db.session.add_all([GalleryPhoto('work1_1.jpg', work.workId, 1), GalleryPhoto('work1_2.jpg', work.workId, 2), GalleryPhoto('work1_3.jpg', work.workId, 3), GalleryPhoto('work1_4.jpg', work.workId, 4)])
    db.session.commit()

#  from app.models import db, Work, GalleryPhoto, TestPopulate