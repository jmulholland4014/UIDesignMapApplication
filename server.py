from flask import Flask
from flask import render_template
from flask import Response, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/learn/id=<id>')
def learn(id):
    return render_template('learn.html', id=id)

@app.route('/quiz/id=<id>')
def quiz(id):
    return render_template('quiz.html', id=id)

@app.route('/results/score=<score>')
def results(score):
    return render_template('results.html', score=score)

if __name__ == '__main__':
    app.run(debug=True)
