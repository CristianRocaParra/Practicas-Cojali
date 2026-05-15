	//guarda el cuerpo en una constante para ir cambiando el tema al pulsar los botones
	const body = document.body;
	const btnClaro = document.getElementById("btnClaro");
	const btnOscuro = document.getElementById("btnOscuro");

	// Cargar tema guardado
	const temaGuardado = localStorage.getItem("tema");

	if (temaGuardado) {
		//si hay un tema guardado en el localstorage
	    body.classList.add(temaGuardado);
	} else {
		//sino hay ninguno se autopondrá el tema claro
		body.classList.add("light");
	}

	// Botón tema claro
	btnClaro.addEventListener("click", () => {
		body.classList.remove("dark");
		body.classList.add("light");
		//se guarda en el localstorage al atributo tema el valor light
		localStorage.setItem("tema", "light");
	});

	// Botón tema oscuro
	btnOscuro.addEventListener("click", () => {
		body.classList.remove("light");
		body.classList.add("dark");
		//se guarda en el localstorage al atributo tema el valor dark
		localStorage.setItem("tema", "dark");
	});