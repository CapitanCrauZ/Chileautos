(function(d,w){
    //Evento para ver si el DOM esta listo
    d.onreadystatechange = function(){
        if(d.readyState === "interactive"){
            //Podemos empezar a cargar funciones con el dom
        }
    }
    //De aqui pa abajo pega el codigo
//aqui se define el main para generar todo dentro de el
const main = document.querySelector("main");
main.classList.add("main");

function generacionForm(){

    let section_4 = document.createElement("section");
    section_4.classList.add("section_4");

    let div_form = document.createElement("div");
    div_form.classList.add("div_form");

    let form = document.createElement("form");
    form.classList.add("form");

    let titulo = document.createElement("h1");
    titulo.classList.add("titulo")
    titulo.innerText = "Formulario";

    // Datos Color

    let label_color = document.createElement("label");
    label_color.classList.add("label_color");
    label_color.innerText = "Color"

    let input_color = document.createElement("input");
    input_color.classList.add("input_color");
    input_color.placeholder = "Ingrese Color";

    // Datos Marca

    let label_marca = document.createElement("label");
    label_marca.classList.add("label_marca");
    label_marca.innerText = "Marca";

    let input_marca = document.createElement("input");
    input_marca.classList.add("input_marca");
    input_marca.placeholder = "Ingrese Marca";

    // Datos Transmision

    let label_transm = document.createElement("label");
    label_transm.classList.add("label_transm");
    label_transm.innerText = "Transmision";

    let input_transm = document.createElement("input");
    input_transm.classList.add("input_transm");
    input_transm.placeholder = "Ingrese Transmision";

    // Datos Año

    let label_anio = document.createElement("label");
    label_anio.classList.add("label_anio");
    label_anio.innerText = "Año";

    let input_anio = document.createElement("input");
    input_anio.classList.add("input_anio");
    input_anio.placeholder = "Ingrese Año";

    // Datos Telefono

    let label_telefono = document.createElement("label");
    label_telefono.classList.add("label_telefono");
    label_telefono.innerText = "Telefono";

    let input_telefono = document.createElement("input");
    input_telefono.classList.add("input_telefono");
    input_telefono.placeholder = "Ingrese Telefono";

    // Datos Kilometraje

    let label_kilometraje = document.createElement("label");
    label_kilometraje.classList.add("label_kilometraje");
    label_kilometraje.innerText = "Kilometraje";

    let input_kilometraje = document.createElement("input");
    input_kilometraje.classList.add("input_kilometraje");
    input_kilometraje.placeholder = "Ingrese Kilometraje";

    // Datos Imagen

    let label_imagen = document.createElement("label");
    label_imagen.classList.add("label_imagen");
    label_imagen.innerText = "Imagen";

    let input_imagen = document.createElement("input");
    input_imagen.classList.add("input_imagen");
    input_imagen.type = "file";

    // Datos Ingresar

    let submit_ingresar = document.createElement("input");
    submit_ingresar.classList.add("submit_ingresar");
    submit_ingresar.type = "submit";
    submit_ingresar.value = "Ingresar";

    form.appendChild(titulo);

    //form.appendChild(label_color);
    form.appendChild(input_color);

    //form.appendChild(label_marca);
    form.appendChild(input_marca);

    //form.appendChild(label_transm);
    form.appendChild(input_transm);

    //form.appendChild(label_anio);
    form.appendChild(input_anio);

    //form.appendChild(label_telefono);
    form.appendChild(input_telefono);

    //form.appendChild(label_kilometraje);
    form.appendChild(input_kilometraje);

    //form.appendChild(label_imagen);
    form.appendChild(input_imagen);

    form.appendChild(submit_ingresar);

    div_form.appendChild(form)

    section_4.appendChild(div_form);

    main.appendChild(section_4);

}

generacionForm();

})(document,window);