function laCajaDePandora(numero){
    if (Number.isInteger(numero)) {
        if (numero % 2 === 0) {  
            return numero.toString(2);
        } else {
            return numero.toString(16);
        }
    } else {
        return "El parámetro no es un número entero.";
    }
}
console.log(laCajaDePandora(4));
console.log(laCajaDePandora(37));
function datos(){
    return{
        nombre: "Gonzalo",
        edad:"19 años",
        nacionalidad: "Argentina",
    };
}
console.log(datos());