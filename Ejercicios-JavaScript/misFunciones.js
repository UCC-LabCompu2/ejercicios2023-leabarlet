/**
 * Permite convertir unidades entre metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id - Id de los elementos en html
 * @param {number} valor - Valor ingresado por el usuario
 * @return
 */

function cambiarUnidades(id,valor) {
    // creacion de variables
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }
    if(isNaN(valor)){
        // Comprobar si el valor ingresado es incorrecto o no
        met ="";
        pul = "";
        pie= "";
        yar = "";
        alert("El valor ingresado es incorrecto");
    }
    else if(id=="metro"){
        // Conversion metro a unidades
        met = valor;
        yar = 1.09361*valor;
        pie = 3.28084*valor;
        pul = 39.3701*valor;
    }
    else if (id="yarda"){
        pul= 36*valor;
        pie = 3*valor;
        met = 0.9144*valor;
    }
    else if (id="pie"){
        pul = 12*valor;
        met = 0.3048*valor;
        yar = 0.333333*valor;
    }
    else if (id="pulgada") {
        met = 0.0254 * valor;
        yar = 0.0277778 * valor;
        pie = 0.0833333 * valor;
    }
    //Asignacion de las valores a los inputs de la UI
    document.lasUnidades.unid_metro.value =Math.round(met*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yar*100)/100;
    document.lasUnidades.unid_pie.value = pie.toFixed(2);
    document.lasUnidades.unid_pulgada.value = pul.toFixed(2);
}

/**
 * Permite convertir unidades gradios a radianes y viceversa
 * @method Nombre de la función
 * @param {string} id -Id del input del formulario
 * @return
 */
let convertirGR=(id)=>{
    let gr, rad;
    if(id=="grados"){
        gr = document.getElementById("grados").value;
        rad = (gr*Math.PI)/180;
    }
    else{
        rad = document.getElementById("radianes").value;
        gr = (rad*180)/Math.PI;

    }
    // Asignacion Final
    document.getElementById("radianes").value = rad;
    document.getElementById("grados").value = gr;
}

/**
 * Permite visualizar y ocultar un dov centro de la pagina
 * @method mostrar_ocultrar
 * @param {string} valor - Valor asociado a un radio button del html
 * @return Valor que retorna
 */
function mostrar_ocultar(valor){
    console.log("El valor enviado a la funcion es "+valor);
    if (valor==="val_mostrar"){
        document.getElementById("unDiv").style.display='block';
    }
    else{
        document.getElementById("unDiv").style.display='none';
    }
}
/**
 * Permite calcular la suma
 * @method sumar
 * @param
 * @return
 */
function sumar() {
    var num1, num2;
    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;

    document.getElementsByName("sum_total")[0].innerHTML = Number(num1) +Number(num2);
}
/**
 * Permite calcular la soustraccion
 * @method sous
 * @param
 * @return
 */
function sous() {
    var num1, num2;
    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;

    document.getElementsByName("res_total")[0].innerHTML = Number(num1) -Number(num2);
}
/**
 * Permite calcular la multiplicacion
 * @method mult
 * @param
 * @return
 */
function mult() {
    var num1, num2;
    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;

    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) *Number(num2);
}
/**
 * Permite calcular la division
 * @method div
 * @param
 * @return
 */
function div() {
    var num1, num2;
    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;

    document.getElementsByName("div_total")[0].innerHTML = Number(num1) /Number(num2);
}

/**
 * Permite cargar la segunda pagina web con la distancia guardada
 * @method cargarWeb
 * @param
 * @return
 */
function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant +"#" +unidad;
    window.open(urlComp);

}

/**
 * Permite cargar la distancia y unidad guardada y mostrarla
 * @method cargarResultado
 * @param
 * @return
 */
function cargarResultado(){
    var urlComp, can, uni;

    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    uni = urlComp.split("#")[2];

    document.getElementById("dist").value = can +  " " + uni;
}

/**
 * Permite guardar la distancia y unidad con el local storage
 * @method guardarLocalStorage
 * @param
 * @return
 */
function guardarLocalStorage(){
    let distancia ,unidad;

    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad)

    window.open("2Web.html");

}

/**
 * Permite cargar y mostrar la distancia y unidad guardada en el local storage
 * @method cargarLocalStorage
 * @param
 * @return
 */
function cargarLocalStorage(){
    let cant, un;

    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadLS");

    document.getElementById("dist").value = cant + " "+ un;

}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333093";
    ctx.fillRect(0+margen,yMax-40 - margen,40,40);

    ctx.arc(xMax/2, yMax/2,20, 0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#464FFR3";
    ctx.fill();

}

var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};
    if (bandera==true) {
        ctx.fillRect(posX,posY,5,5);
        ctx.fill();
    }

}

function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

}