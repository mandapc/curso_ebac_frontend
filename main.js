const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const campoA = form.querySelector("input[name='campoA']").value;
  const campoB = form.querySelector("input[name='campoB']").value;
  if (campoB > campoA) {
    alert("o formulário está valido!")
  } else {
    alert("o campo b precisa maior que o campo a!");
  }
});

