let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function (e) {
  let inpt = document.querySelector("input");

  let li = document.createElement("li");

  li.innerText = inpt.value;

  let del = document.createElement("button");
  del.innerText = "Delete";
  del.classList.add("delBtn");

  li.appendChild(del);
  ul.appendChild(li);
  inpt.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    let par = event.target.parentElement;
    par.remove();
    console.log("hi");
  }
});
