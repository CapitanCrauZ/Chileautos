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

function generacionRegistro(){

    let section_2 = document.createElement("section");
    section_2.classList.add("section_2");

    let div_registro = document.createElement("div");
    div_registro.classList.add("div_registro");

    //Datos Titulo

    let Titulo = document.createElement("h1");
    Titulo.classList.add("Titulo");
    Titulo.innerText = "Registrese Ingresando sus Datos";

    //Datos Nombre
    let label_nombre = document.createElement("label");
    label_nombre.classList.add("label_nombre");
    label_nombre.innerText = "Nombre";

    let input_nombre = document.createElement("input");
    input_nombre.classList.add("input_nombre");
    input_nombre.placeholder = "Ingrese Nombre"

    //Datos Apellido
    let label_apellido = document.createElement("label");
    label_apellido.classList.add("label_apellido");
    label_apellido.innerText = "Apellido";

    let input_apellido = document.createElement("input");
    input_apellido.classList.add("input_apellido");
    input_apellido.placeholder = "Ingrese Apellido";

    //Datos Edad
    let label_edad = document.createElement("label");
    label_edad.classList.add("label_edad");
    label_edad.innerText = "Edad";

    let input_edad = document.createElement("input");
    input_edad.classList.add("input_edad");
    input_edad.placeholder = "Ingrese Edad";

    //Datos Correo
    let label_correo = document.createElement("label");
    label_correo.classList.add("label_correo");
    label_correo.innerText = "Correo";

    let input_correo = document.createElement("input");
    input_correo.classList.add("input_correo");
    input_correo.placeholder = "Ingrese Correo";

    //Datos Contraseña
    let label_contrasena = document.createElement("label");
    label_contrasena.classList.add("label_contrasena");
    label_contrasena.innerText = "Contraseña";

    let input_contrasena = document.createElement("input");
    input_contrasena.classList.add("input_contrasena");
    input_contrasena.type = "password";
    input_contrasena.placeholder = "Ingrese Contraseña";

    //Datos Verificar Contraseña 
    let label_contrasena_v = document.createElement("label");
    label_contrasena_v.classList.add("label_contrasena_v");
    label_contrasena_v.innerText = "Verifique Contraseña";

    let input_contrasena_v = document.createElement("input");
    input_contrasena_v.classList.add("input_contrasena_v");
    input_contrasena_v.type = "password";
    input_contrasena_v.placeholder = "Ingrese Contraseña Nuevamente";

    //Datos Botón Registrar

    let submit_registrar = document.createElement("input");
    submit_registrar.classList.add("submit_registrar");
    submit_registrar.type = "submit";
    submit_registrar.value = "Registrar";
    

    div_registro.appendChild(Titulo);

    //div_registro.appendChild(label_nombre);
    div_registro.appendChild(input_nombre);

    //div_registro.appendChild(label_apellido);
    div_registro.appendChild(input_apellido);

    //div_registro.appendChild(label_edad);
    div_registro.appendChild(input_edad);

    //div_registro.appendChild(label_correo);
    div_registro.appendChild(input_correo);

    //div_registro.appendChild(label_contrasena);
    div_registro.appendChild(input_contrasena);

    //div_registro.appendChild(label_contrasena_v);
    div_registro.appendChild(input_contrasena_v);

    div_registro.appendChild(submit_registrar);

    section_2.appendChild(div_registro);

    main.appendChild(section_2);

}

//----------------------------------------------
generacionRegistro();
//----------------------------------------------

})(document,window);