document.getElementById("button1").addEventListener("click", doclick);


function doclick() {
    var num=document.getElementById("is").value;
    num="t5";
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Table.json", true);
    xhr.onload = function () {
        if (this.status == 200) {
            var number = JSON.parse(this.responseText);
           
            var output = "";
            output += "<ul>" +
            "<li> values:" + number.t5 + "</li>" +
            "</ul>";
            console.log(num);
            document.getElementById("show").innerHTML = output;
        }
    }
    xhr.send();
}
