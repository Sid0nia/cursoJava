
botonCafe.addEventListener("click", function() {
	if (opcionSeleccionada === "cafe") {
		mensaje.innerHTML = "Elegiste café";
	} else {
		mensaje.innerHTML = "Por favor, elige una opción";
	}
});

botonTe.addEventListener("click", function() {
	if (opcionSeleccionada === "te") {
		mensaje.innerHTML = "Elegiste té";
	} else {
		mensaje.innerHTML = "Por favor, elige una opción";
	}
});