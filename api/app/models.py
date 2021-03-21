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
    author = db.Column(db.String(255), nullable=False)
    photos = db.relationship('GalleryPhoto', backref='Works', lazy=True)

    def __init__(self, title='example title', description='example description', author='Bartek'):
        self.title = title
        self.description = description
        date_stamp = date.today()
        self.additionDate = date_stamp
        self.author = author

    def __repr__(self):
        return '<WORK: ID {}, TITLE {}, DESCRIPTION {}, ADDITIONDATE {}>'.format(self.workId, self.title, self.description, self.additionDate)

    def make_dict(self):
        additionDate_string = self.additionDate.strftime('%d/%m/%Y')

        dictionary = dict(workId=self.workId, title=self.title,
                          description=self.description, additionDate=additionDate_string)
        return dictionary


class GalleryPhoto(db.Model):
    __tablename__ = 'GalleryPhotos'
    photoName = db.Column(db.String(255), primary_key=True)
    galleryIndex = db.Column(db.Integer)
    workId = db.Column(db.Integer, db.ForeignKey(
        'Works.workId'), nullable=False)

    def __init__(self, photoName, workId, galleryIndex=None):
        self.photoName = photoName
        self.workId = workId
        self.galleryIndex = galleryIndex

    def __repr__(self):
        return '<PHOTO: NAME {}, WORKID {}, INDEX {}>'.format(self.photoName, self.workId, self.galleryIndex)

    def make_dict(self):
        dictionary = dict(photoName=self.photoName,
                          galleryIndex=self.galleryIndex, workId=self.workId, )
        return dictionary


# example db populating for testing
def test_populate():
    work1 = Work('Skitarii Ranger ', 'My first work for commision from 2020')
    work2 = Work('Skitarii Ranger',
                 'The second skitarii painted for commision')
    work3 = Work('Skitarii Ranger', 'One of many skitariis painted by me')
    work4 = Work('Skitarii Ranger',
                 'Part of skitarri army painted for commission')
    db.session.add_all([work1, work2, work3, work4])
    db.session.commit()

    db.session.add_all([GalleryPhoto('work1_1.jpg', work1.workId, 1), GalleryPhoto('work1_2.jpg', work1.workId, 2),
                        GalleryPhoto('work1_3.jpg', work1.workId, 3), GalleryPhoto('work1_4.jpg', work1.workId, 4)])

    db.session.add_all([GalleryPhoto('work2_1.jpg', work2.workId, 1), GalleryPhoto('work2_2.jpg', work2.workId, 2),
                        GalleryPhoto('work2_3.jpg', work2.workId, 3), GalleryPhoto('work2_4.jpg', work2.workId, 4)])

    db.session.add_all([GalleryPhoto('work3_1.jpg', work3.workId, 1), GalleryPhoto('work3_2.jpg', work3.workId, 2),
                        GalleryPhoto('work3_3.jpg', work3.workId, 3), GalleryPhoto('work3_4.jpg', work3.workId, 4)])

    db.session.add_all([GalleryPhoto('work4_1.jpg', work4.workId, 1), GalleryPhoto('work4_2.jpg', work4.workId, 2),
                        GalleryPhoto('work4_3.jpg', work4.workId, 3), GalleryPhoto('work5_4.jpg', work4.workId, 4)])
    db.session.commit()

# from app.models import db, Work, GalleryPhoto, test_populate
# db.create_all()
# test_populate()
