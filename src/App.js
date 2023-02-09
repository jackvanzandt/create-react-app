document.querySelector(".add").addEventListener("click", function (e) {
  const div = document.querySelector("div");
  let div2 = div.cloneNode(true);
  div2.classList.add("div2");
  document.body.appendChild(div2);
});

document.querySelector(".delete").addEventListener("click", function (e) {
  const div2 = document.querySelector(".div2");
  document.body.removeChild(div2);
});

document.querySelector(".details").addEventListener("click", function (e) {
  const p = document.querySelector("p");
  if (p.style.visibility == "hidden") {
    p.style.visibility = "visible";
  } else {
    p.style.visibility = "hidden";
  }
});

document.querySelector(".changeB").addEventListener("click", function (e) {
  const div = document.querySelector("div");
  if (div.style.backgroundColor == "yellow") {
    div.style.backgroundColor = "lightblue";
  } else {
    div.style.backgroundColor = "yellow";
  }
});

let h1 = document.getElementById("h1");
let changeH = document.getElementById("changeH");
changeH.addEventListener("click", () =>{
  if(h1.innerHTML=="George Pickens"){
    h1.innerHTML = "Antonio Brown";
  }else{
  h1.innerHTML = "George Pickens";
  }
});