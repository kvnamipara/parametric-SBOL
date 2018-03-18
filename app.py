from flask import Flask, render_template
from flask import url_for

app = Flask(__name__)
app.secret_key = 'skjdfajsldkjfask'

@app.route("/",methods=['GET'])
def index():
    return render_template("test-svg.html")

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5000)
