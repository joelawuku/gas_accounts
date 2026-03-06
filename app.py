from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def index():

    result=None
    variance=None
    status=None

    if request.method=="POST":

        p1_open=float(request.form["p1_open"])
        p1_close=float(request.form["p1_close"])

        p2_open=float(request.form["p2_open"])
        p2_close=float(request.form["p2_close"])

        price=float(request.form["price"])
        expense=float(request.form["expense"])
        cash=float(request.form["cash"])

        pump1=p1_close-p1_open
        pump2=p2_close-p2_open

        total_litres=pump1+pump2
        sales=total_litres*price

        cash_to_bank=sales-expense

        variance=cash-cash_to_bank

        if variance>0:
            status="over"
        elif variance<0:
            status="short"
        else:
            status="balanced"

        result={
            "pump1":round(pump1,2),
            "pump2":round(pump2,2),
            "litres":round(total_litres,2),
            "sales":round(sales,2),
            "bank":round(cash_to_bank,2)
        }

    return render_template("index.html",
                           result=result,
                           variance=variance,
                           status=status)


if __name__=="__main__":
    app.run(debug=True)