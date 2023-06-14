/**
 * Permite convertir unidades entre metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id - Id de los elementos en html
 * @param {number} value - Valor ingresado por el usuario
 * @return
 */
function cambiarUnidades(id, valor){
    if (isNaN(valor)) {
        alert("valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
    } else if (id == "metro") {
        document.lasUnidades.unid_pulgada.value = valor * 39.3701;
        document.lasUnidades.unid_pie.value = valor * 3.28084;
        document.lasUnidades.unid_yarda.value = valor * 1.09361;
    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_pie.value = valor * 0.08333;
        document.lasUnidades.unid_yarda.value = valor * 0.027778;
    } else if (id == "pie") {
        document.lasUnidades.unid_metro.value = valor * 0.3048;
        document.lasUnidades.unid_pulgada.value = valor * 12;
        document.lasUnidades.unid_yarda.value = valor * 0.333333;
    } else if (id == "yarda") {
        document.lasUnidades.unid_metro.value = valor * 0.9144;
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor * 3;
    }

}
