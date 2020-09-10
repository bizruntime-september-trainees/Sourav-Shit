document.getElementById("button1").addEventListener("click", click);
document.getElementById("button2").addEventListener("click", clickAll);
function click() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Data.json", true);
    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = "";
            output += "<ul>" +
                "<li> Name:" + user.name + "</li>" +
                "<li> Age:" + user.age + "</li>" +
                "<li> City:" + user.city + "</li>" +
                "</ul>"
            document.getElementById("show").innerHTML = output;

        }
    }
    xhr.send();
}
function clickAll() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "AllData.json", true);
    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            var output = "";
            for (i in users) {
                output += "<ul>" +
                    "<li> Name:" + users[i].name + "</li>" +
                    "<li> Age:" + users[i].age + "</li>" +
                    "<li> City:" + users[i].city + "</li>" +
                    "</ul>"
            }
            document.getElementById("show").innerHTML = output;

        }
    }
    xhr.send();
}
