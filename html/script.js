var buttonClicked = false;

document.addEventListener("DOMContentLoaded", function (event) {
  let info = document.getElementById("info");
  let display = document.getElementById("displayData");
  display.addEventListener("click", function () {
    if (buttonClicked === false) {
      fetch("../json.json")
        .then((response) => response.json())
        .then((data) => {
          console.log("My Data ", data);

          const table = document.createElement("table");

          let tr = document.createElement("tr");
          let th1 = document.createElement("th");
          let th2 = document.createElement("th");
          let th3 = document.createElement("th");
          let th4 = document.createElement("th");

          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");

          let content = document.createTextNode("School");
          th1.appendChild(content);

          content = document.createTextNode("Major");
          th2.appendChild(content);

          content = document.createTextNode("Type");
          th3.appendChild(content);

          content = document.createTextNode("Year");
          th4.appendChild(content);

          tr.appendChild(th1);
          tr.appendChild(th2);
          tr.appendChild(th3);
          tr.appendChild(th4);

          table.appendChild(tr);

          data.degrees.forEach((element, index) => {
            console.log("Row data ", element);

            tr = document.createElement("tr");
            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");
            td4 = document.createElement("td");

            content = document.createTextNode(element.school);
            td1.appendChild(content);

            content = document.createTextNode(element.major);
            td2.appendChild(content);

            content = document.createTextNode(element.type);
            td3.appendChild(content);

            content = document.createTextNode(element.year);
            td4.appendChild(content);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            table.appendChild(tr);
          });
          document.getElementById("datahere").appendChild(table);
        });
      buttonClicked = true;
      
      if(buttonClicked == true){
        display.remove();
        info.remove();
      }
    }
  });
});
