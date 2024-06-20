document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById("user-input");

    document.querySelectorAll(".numbers").forEach(function(item) {
        item.addEventListener("click", function(e) {
            if (inputValue.innerText === "0") {
                inputValue.innerText = "";
            }
            inputValue.innerText += e.target.innerText.trim();
        });
    });

    document.querySelectorAll(".operations").forEach(function(item) {
        item.addEventListener("click", function(e) {
            let lastValue = inputValue.innerText.slice(-1);
            console.log(lastValue);

            if (e.target.innerText === "=") {
                try {
                    inputValue.innerText = eval(inputValue.innerText);
                } catch {
                    inputValue.innerText = "Error";
                }
            } else if (e.target.innerText === "AC") {
                inputValue.innerText = "0";
            } else if (e.target.innerText === "%") {
                let value = parseFloat(inputValue.innerText);
                inputValue.innerText = (value / 100).toFixed(2).toString() + "%";
            } else if (e.target.innerText === "x²") {
                let value = parseFloat(inputValue.innerText);
                inputValue.innerText = (value * value).toFixed(2).toString();
            } else if (e.target.innerText === "∛x") {
                let value = parseFloat(inputValue.innerText);
                inputValue.innerText = Math.cbrt(value).toFixed(2).toString();
            } else if (e.target.innerText === "√X") {
                let value = parseFloat(inputValue.innerText);
                inputValue.innerText = Math.sqrt(value).toFixed(2).toString();
            } else if (e.target.innerText === "DEL") {
                inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
            } else {
                if (isNaN(lastValue) && isNaN(e.target.innerText)) {
                    inputValue.innerText = inputValue.innerText.slice(0, -1) + e.target.innerText;
                } else {
                    inputValue.innerText += e.target.innerText;
                }
            }
        });
    });
});