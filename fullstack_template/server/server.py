import os

from flask import Flask, redirect, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "oscarNoms.db"))

app = Flask(
    __name__,
    static_folder="../static/dist",
    template_folder="../static")
app.config["SQLALCHEMY_DATABASE_URI"] = database_file

db = SQLAlchemy(app)

class Nominee(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    category_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)

class Category(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String, nullable=False)
    points = db.Column(db.Integer, nullable=False)

    def nominees(self):
        return Nominee.query.filter_by(category_id=self.id).all()

    # Do we need this?
    # def __repr__(self):
    #     return "<Answer: {}>".format(self.answer)

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/categories", methods=["GET"])
def categories():
    categories = Category.query.all()
    return jsonify(categories)

# @app.route("/categories/:id/nominees", methods=["GET"])

@app.route("/submission", methods=["POST"])
def submission():
    # print(request.form["erin"])
    # store submissions in database
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
