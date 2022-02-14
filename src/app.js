/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["amazing", "best"];
let noun = ["music", "love"];

function domainGen(part1, part2, part3) {
  for (let a = 0; a < part1.length; a++) {
    for (let b = 0; b < part2.length; b++) {
      for (let c = 0; c < part3.length; c++) {
        let newName = document.createTextNode(
          part1[a] + part2[b] + part3[c] + ".com"
        );
        let list = document.getElementById("domainList");
        let element = document.createElement("div");
        element.className = "alert alert-dark";
        list.appendChild(element);
        element.appendChild(newName);
        let choose = document.createElement("input");
        choose.className = "form-check-input";
        choose.setAttribute("type", "radio");
        choose.setAttribute("name", "option");
        choose.setAttribute("value", newName.textContent);
        element.appendChild(choose);
      }
    }
  }
  const selectors = document.querySelectorAll("input");
  for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("input", function() {
      if (selectors[i].checked) {
        let chosen = selectors[i].value;
        let title = document.querySelector("#title");
        title.innerHTML = chosen;
      }
    });
  }
}
document.querySelector("#buttonName").addEventListener("click", function() {
  domainGen(pronoun, adj, noun);
  document.querySelector("#buttonName").style.display = "none";
});
