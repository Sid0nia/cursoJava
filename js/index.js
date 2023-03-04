
let botonCafe = document.getElementById("cafe");
let botonTe = document.getElementById("te");
let mensaje = document.getElementById("mensaje");


botonCafe.addEventListener("click", function() {
	mensaje.innerHTML = "Elegiste café";
});

botonTe.addEventListener("click", function() {
	mensaje.innerHTML = "Elegiste té";
});
