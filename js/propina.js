// Declaracion de variable globales
const keynumber = document.getElementsByName("data-porcent");

var tip;
var totalbill;
var tipbyperson;
var totalbillbyperson;
var porcent1 = 0;
var identificadorid;

// funcion para detectar cual tecla es pulsada y obtener su texto y si id...
keynumber.forEach(function (key) {
    key.addEventListener('click', function () {
        identificador = document.getElementById(this.id); // con el metodo "this.id" asignamos el id del elemento HTML
        identificadorid = identificador;
        identificador.classList.toggle("botonactive");
        porcent1 = parseFloat(key.innerText); //aqui asignamos el texto del boton pulsado con el metodo innet
        borrarclass(identificadorid);
    })
});

// funcion para quitar una clase cuando se haga click en un boton
function borrarclass(identificadorid) {
    keynumber.forEach(function (key) {
        key.addEventListener('click', function () {
            identificadorid.classList.remove("botonactive");
            identificadorid = undefined;
        })
    });
};

function porcentaje(porcent1) {

    //declaracion de variables locales
    var bill = parseFloat(document.getElementById("bill").value);
    var people = parseInt(document.getElementById("number").value);
    var borderalert = document.getElementById("number");
    var msnealert = document.getElementsByClassName("msnerror")[0];
    var reset = document.getElementById("reset");
    var custum = parseFloat(document.getElementById("custom").value);

    //validacion de NaN
    if (isNaN(bill) || isNaN(people)) {
        event.defaultPrevented;
    } else {

        reset.classList.add("disable");
        document.getElementById("reset").disabled = false;

        if (people <= 0) {
            borderalert.classList.add("errorborder");
            msnealert.classList.add("activemsnerror");
            event.defaultPrevented;

        } else {

            if (isNaN(custum)) {
                borderalert.classList.remove("errorborder");
                msnealert.classList.remove("activemsnerror");

                tip = (bill * porcent1) / 100;
                totalbill = bill + tip;
                tipbyperson = tip / people;
                totalbillbyperson = totalbill / people;
                totalbillbyperson = totalbillbyperson.toFixed(2);
                tipbyperson = tipbyperson.toFixed(2);

                document.getElementById("total__tip").innerHTML = "$" + tipbyperson;
                document.getElementById("total__pagar").innerHTML = "$" + totalbillbyperson;
            } else {
                borderalert.classList.remove("errorborder");
                msnealert.classList.remove("activemsnerror");

                porcent1 = custum;

                tip = (bill * porcent1) / 100;
                totalbill = bill + tip;
                tipbyperson = tip / people;
                totalbillbyperson = totalbill / people;
                totalbillbyperson = totalbillbyperson.toFixed(2);
                tipbyperson = tipbyperson.toFixed(2);

                document.getElementById("total__tip").innerHTML = "$" + tipbyperson;
                document.getElementById("total__pagar").innerHTML = "$" + totalbillbyperson;
            }

        }
    }
};

//funcion de reset
function reset() {

    document.getElementById("bill").value = '';
    document.getElementById("number").value = '';
    document.getElementById("custom").value = '';
    document.getElementById("total__tip").innerHTML = "$0.00" ;
    document.getElementById("total__pagar").innerHTML = "$0.00";
    identificadorid.classList.remove("botonactive");
}