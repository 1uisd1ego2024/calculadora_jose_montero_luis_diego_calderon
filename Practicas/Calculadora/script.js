const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const pantallap = document.getElementById("pantallaporcentaje");
const selector = document.getElementById("habilitar");


/****Obtiene elementos del HTML por la clase y el id respectivamente ******/


let numero = 0.0;
let raizcuadrada = 0.0;

botones.forEach(boton => {
    boton.addEventListener("click", () => {         //Crea un evento addListener para cada botón asignado a la variable botones previamente declarada y asignada por la clase btn
        const botonApretado = boton.textContent;  //Asigna a una constante el contenido del botón apretado previamente

        if (boton.id === "C") {
            pantalla.textContent = "0";         //Borra los datos previamente digitados en las pantallas de la calculadora
            pantallap.value = "";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {    //Hace un retorno de carro similar al del teclado para borrar dígito a dígito los datos de las pantallas de la calculadora
                pantallap.value = "";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);  //Realiza los cálculos matemáticos digitados en la primera pantalla de la calculadora
            } catch {
                pantalla.textContent = "Error!";
            }
            pantalla.textContent = eval(pantalla.textContent);
            return;
        }
        if (boton.id === "raiz") {

            numero = parseFloat(pantalla.textContent);  //Realiza el cálculo de la raíz cuadrada de un número, según el número digitado en la primera pantalla. Ésto lo hace, una vez presionado el botón de raíz cuadrada de la calculadora
            raizcuadrada = numero ** (1 / 2);
            try {
                pantalla.textContent = raizcuadrada + "";
            } catch {
                pantalla.textContent = "Error!";
            }
            pantalla.textContent = raizcuadrada + "";
            return;
        }
        if (boton.id === "desahibilitar") {         //Éste botón, esconde la segunda pantalla de la calculadora, para poder hacer el cálculo del porcentaje de un número. De igual manera, borra los datos ingresado en la segunda pantalla y en la primera, asigna 0
            pantalla.textContent = "0";
            pantallap.value = "";
            pantallap.style.display = "none";
            return;
        } else {

            if (boton.id === "segunda_pantalla" && boton.id !== "0") {   //Muestra la segunda pantalla de la calculadora para calcular el porcentaje
                pantallap.value = "";
                pantallap.style.display = "block";

                return;
            }
        }
        if (boton.id === "porcentaje") {   // Calcula el porcentaje de un número según las posibilidades detalladas más adelante
            let salida = "";
            let porcentaje = 0.0;

            if (pantallap.value === "") {
                alert("Favor dar click al botón segunda pantalla (SP) para calcular el porcentaje y/o digitar el valor correspondiente a la segunda pantalla");   //En caso de no poser ningún dato digitado en la segunda pantalla de la calculadora, muestra éste mensaje
                return;
            } else {
                porcentaje = (parseFloat(pantallap.value) * parseFloat(pantalla.textContent)) / 100;  //Calcula el porcentaje de un número tomando en cuenta que en la segunda pantalla corresponde al porcentaje a sustraer, mientras que en la primera, el número que deseo aplicarle el porcentaje. Por ejemplo: El 20% (Asignado a la segunda pantalla) de 20 (Primera pantalla) es 4 (Asignado a la variable porcentaje)
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
            pantalla.textContent = botonApretado;  //En caso que la pantalla tenga un 0 o tiene un mensaje de error asignado previamente, éstos valores son asignados a la primera pantalla
        } else {
            pantalla.textContent += botonApretado;   //Concatena los valores asignados en los botones de la calculadora
        }
    })
})











