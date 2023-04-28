let box = document.querySelector("#box");
box.innerHTML = "LECTURE 6"; 
// const btn = document.createElement("button");
// btn.innerHTML = "Hello DOM";
// box.appendChild(btn);
const h3 = document.createElement("h3")
h3.innerHTML = "Table of contents:";
box.appendChild(h3);
const paragraph1 = document.createElement("p");
paragraph1.innerHTML = "*Introduction to DOM";

const paragraph2 = document.createElement("p");
paragraph2.innerHTML = "*Introduction to BOM";

const paragraph3 = document.createElement("p");
paragraph3.innerHTML = "*DOM Methods";

box.appendChild(paragraph1)
box.appendChild(paragraph2)
box.appendChild(paragraph3)

let section = document.querySelector('.section')
const para = document.createElement("p")
const node = document.createTextNode("DOM - Структурированное представление документов HTML. DOM позволяет JavaScript получать доступ к HTML-элементам и стилям для управления ими")
para.appendChild(node);
section.appendChild(para)







