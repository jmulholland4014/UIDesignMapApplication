from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import random

app = Flask(__name__)

seconds = 0
quiz_list = [
    {"location" : "../static/quiz/Cuba.png", "answer" : "Cuba"},
]
leaderboard_list = [
    {"name": "Jim Halpert", "time": 6.456},
    {"name": "Pam Beesly", "time": 5.678},
    {"name": "Michael Scott", "time": 4.567},
    {"name": "Dwight Schrute", "time": 3.456},
    {"name": "Stanley Hudson", "time": 2.345}
]

def sortLeaderboardInReverseOrder(leaderboard_list):
    sortedLeaderboard = sorted(leaderboard_list, key=lambda k: k['time'])
    return sortedLeaderboard


@app.route('/getSeconds', methods=['GET'])
def getSeconds():
    return jsonify(seconds)

@app.route('/setSeconds', methods=['POST'])
def setSeconds():
    global seconds
    seconds = request.json['seconds']

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/leaderboard', methods=['GET', 'POST'])
def get_leaderboard():
    sortedLeaderboard = sortLeaderboardInReverseOrder(leaderboard_list)
    return jsonify(sortedLeaderboard)

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

@app.route('/getRandomIsland', methods=['GET', 'POST'])
def getRandomIsland():
    choice = random.choice(quiz_list)
    return jsonify(choice)