const form = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  form.style.display = "none";
  respuesta.textContent = "Formulario enviado correctamente. Gracias por preferir WILKIN, INC.";
  respuesta.style.display = "block";
  form.reset();
  setTimeout(() => {
    respuesta.style.display = "none";
  }, 3000);
});