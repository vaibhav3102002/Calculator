
const submit = document.querySelector("#submit")
const output = document.querySelector(".output")
const addon = document.querySelector('.addon')
const form = document.querySelector(".form")
const remove = document.querySelector(".remove")

window.addEventListener("DOMContentLoaded", function () {
  display(2);
})

var value = 2;
addon.addEventListener("click", function (e) {
  e.preventDefault()
  value++;
  display(value);
})
remove.addEventListener("click", function (g) {
  g.preventDefault()
  const list = document.querySelectorAll(".tcontainer")
  if (list.length > 1) {
    const element = list[list.length - 1];
    form.removeChild(element)
    value = list.length;
  }
})
submit.addEventListener("click", function (e) {
  e.preventDefault()
  const operator = document.querySelectorAll("#operators")
  const oplist = []

  operator.forEach(function (p) {
    oplist.push(p.value)
  })

  const input = document.querySelectorAll(".input")
  const inlist = []
  input.forEach(function (g) {
    (inlist.push(g.value))
  })
  let odd = 0;
  let even = 0;
  const list = [];
  for (var i = 0; i < (inlist.length + oplist.length); i++) {
    if (i % 2 === 0) {
      list.push(inlist[even]);
      even++;
    }
    else {
      list.push(oplist[odd])
      odd++;
    }

  }
  output.textContent = eval(list.join(""))


})
display = (x) => {
  let element = document.createElement("div");

  element.classList.add("tcontainer")
  element.innerHTML = ` <div class="section">
    <select id="operators">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
  </div>
  <div class="section">
    <label>${x} value:</label>
    <br />
    <input type="number" id="${x}num" class="input" />
  </div>`

  form.appendChild(element)

}


