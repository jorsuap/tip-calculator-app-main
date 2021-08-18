const keynumber = document.getElementsByName("data-porcent");

var tip;
var totalbill;
var tipbyperson;
var totalbillbyperson;
var porcent1 = 0;
// var identificadorid;


keynumber.forEach(function (key) {
    key.addEventListener('click', function () {
        identificador = document.getElementById(this.id);
        identificadorid = identificador;
        identificador.classList.toggle("botonactive");
        porcent1 = parseFloat(key.innerText);
        borrarclass(identificadorid);
    })
});


function borrarclass(identificadorid) {
    keynumber.forEach(function (key) {
        key.addEventListener('click', function () {
            identificadorid.classList.toggle("botonactive");
            identificadorid = undefined;
        })
    });
};

function porcentaje(porcent1) {

    var bill = parseFloat(document.getElementById("bill").value);
    var people = parseFloat(document.getElementById("number").value);
    var borderalert = document.getElementById("number");
    var msnealert = document.getElementsByClassName("msnerror")[0];
    var reset = document.getElementById("reset");

    if (isNaN(bill) || isNaN(people)) {
        document.getElementById("total__tip").innerHTML = "$0.00";
        event.defaultPrevented;
    } else {

        reset.classList.add("disable");
        document.getElementById("reset").disabled = false;

        if (people <= 0) {
            borderalert.classList.add("errorborder");
            msnealert.classList.add("activemsnerror");
            event.defaultPrevented;

        } else {
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
        }
    }
};