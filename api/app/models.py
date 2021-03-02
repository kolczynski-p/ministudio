from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class GalleryPhoto(db.Model):
    __tablename__ = "gallery_photos"
    id = db.Column(db.Integer, primary_key=True)
    path = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<PHOTO: ID {},  PATH {}>'.format(self.id, self.path)