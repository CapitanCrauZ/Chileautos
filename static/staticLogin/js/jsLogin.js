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

function generacionLogin(){

    let section_3 = document.createElement("section");
    section_3.classList.add("section_3");

    let div_section_login = document.createElement("div");
    div_section_login.classList.add("div_section_login");

    let div_login = document.createElement("div");
    div_login.classList.add("div_login");

    // Datos Titulo

    let Titulo = document.createElement("h1");
    Titulo.classList.add("Titulo");
    Titulo.innerText = "Acceso a Chileautos";

    // Datos Usuario

    let label_usuario = document.createElement("label");
    label_usuario.classList.add("label_usuario");
    label_usuario.innerText = "Usuario";

    let input_usuario = document.createElement("input");
    input_usuario.classList.add("input_usuario");
    input_usuario.placeholder = "Ingrese Usuario";

    // Datos Contraseña 

    let label_pass = document.createElement("label");
    label_pass.classList.add("label_pass");
    label_pass.innerText = "Contraseña";

    let input_pass = document.createElement("input");
    input_pass.classList.add("input_pass");
    input_pass.type = "password";
    input_pass.placeholder = "Ingrese Contraseña";

    // Datos Botón Entrar

    let submit_entrar = document.createElement("input");
    submit_entrar.classList.add("submit_entrar");
    submit_entrar.type = "submit";
    submit_entrar.value = "Entrar";

    // Datos Enlace Registrar

    let a_registrar = document.createElement("a");
    a_registrar.classList.add("a_registrar");
    a_registrar.href = "#";
    a_registrar.innerText = "Registrarse";
    
    div_login.appendChild(Titulo);

    //div_login.appendChild(label_usuario);
    div_login.appendChild(input_usuario);

    //div_login.appendChild(label_pass);
    div_login.appendChild(input_pass);

    div_login.appendChild(submit_entrar);

    div_login.appendChild(a_registrar);

    div_section_login.appendChild(div_login)

    section_3.appendChild(div_section_login);

    main.appendChild(section_3);

}

generacionLogin();

})(document,window);