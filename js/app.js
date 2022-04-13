const inputs = document.querySelectorAll(".input");

inputs.forEach( input =>{
    input.addEventListener("blur", (input) => {
        valida(input.target)
    });
});

function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container-invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container-invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
};

const tipoDeErrores = ["valueMissing","typeMismatch","patternMismatch","customError", ];

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacío"
    },
    email:{
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    mensaje:{
        valueMissing: "El campo mensaje no puede estar vacío",
    },
}
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
}