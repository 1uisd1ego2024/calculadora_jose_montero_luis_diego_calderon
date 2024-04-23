const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

const pantallap = document.getElementById("pantallaporcentaje");
const selector = document.getElementById("habilitar");



let numero = 0.0;
let raizcuadrada = 0.0;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "C") {
            pantalla.textContent = "0";
            pantallap.value = "";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
                pantallap.value = "";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {


                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            pantalla.textContent = eval(pantalla.textContent);
            return;
        }




        if (boton.id === "raiz") {

            numero = parseFloat(pantalla.textContent);
            raizcuadrada = numero ** (1 / 2);
            try {
                pantalla.textContent = raizcuadrada + "";
            } catch {
                pantalla.textContent = "Error!";
            }
            pantalla.textContent = raizcuadrada + "";
            return;
        }




        if (boton.id === "desahibilitar") {
            pantalla.textContent = "0";
            pantallap.value = "";
            pantallap.style.display = "none";
            return;




        } else {

            if (boton.id === "segunda_pantalla" && boton.id !== "0") {
                pantallap.value = "";
                pantallap.style.display = "block";

                return;


            }


        }







        if (boton.id === "porcentaje") {


            let salida = "";
            let porcentaje = 0.0;

            if (pantallap.value === "") {
                alert("Favor dar click al botón segunda pantalla (SP) para calcular el porcentaje y/o digitar el valor correspondiente a la segunda pantalla");
                return;

            } else {


                porcentaje = (parseFloat(pantallap.value) * parseFloat(pantalla.textContent)) / 100;



                try {
                    pantalla.textContent = porcentaje + "";
                } catch {
                    pantalla.textContent = "Error!";
                }
                pantalla.textContent = porcentaje + "";
                return;


            }

        }






        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})











