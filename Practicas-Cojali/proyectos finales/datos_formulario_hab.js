const btnHab = document.getElementById("btnHab");
const habilidadInput = document.getElementById("input_hab");
const listaUl = document.getElementById("lista_habilidades");
//creando un objeto de la clase formData tambien podemos obtener los elementos del formulario
// LÓGICA PARA EL FORMULARIO (Recoger y guardar el valor del input en un array en el localstorage)
//NOTA: sino compruebo que existe la lista o el boton con el if no funciona
if (btnHab){
    btnHab.addEventListener("click", (e) => {
        e.preventDefault();
        //Introducimos en una variable el valor del input sin espacios
        const valor = habilidadInput.value.trim();        
        guardarValor(valor);
    });
}
function guardarValor(valor){
    if (valor !== "") {
        // 1. Creamos un array de habilidades o escogemos el que ya existe
        let habilidades = JSON.parse(localStorage.getItem("misHabilidades") || "[]");
            
        // 2. Introducimos al final del array el valor del input
        habilidades.push(valor);
            
        // 3. Guardamos la lista completa convertida en texto en localStorage
        localStorage.setItem("misHabilidades", JSON.stringify(habilidades));

        //4. Una vez guardado el valor del input en localstorage nos redirigimos al portfolio
        window.location.href = "portfolio_4avance.html";
    }
}
//LÓGICA PARA EL PORTFOLIO (Añadir a la lista los elementos del localstorge) 
if (listaUl) {
    // 1. Obtenemos el array de habilidades completo
    const habilidades = JSON.parse(localStorage.getItem("misHabilidades") || "[]");

    // 2. Recorremos el array y creamos un <li> por cada elemento en la lista
    habilidades.forEach(hab => {
        const li = document.createElement("li");
        li.textContent = hab;
        listaUl.appendChild(li);
    });
    //para borrar el array (opcional)
    localStorage.removeItem("misHabilidades");
}