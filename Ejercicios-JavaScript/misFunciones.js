/**
 * Permite convertir unidades entre metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id - Id de los elementos en html
 * @param {number} value - Valor ingresado por el usuario
 * @return
 */

let conversorUnidades=(id,valor)=> {
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
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_yarda.value = 0.333333*valor;
    }
    else if (id="pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_yarda.value = 0.0277778 * valor;
        document.lasUnidades.unid_pie.value = 0.0833333 * valor;
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