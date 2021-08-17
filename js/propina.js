
var bill = parseFloat(document.getElementById("bill").value);
var people = parseFloat(document.getElementById("number").value);
const keynumber = document.getElementsByName("data-porcent");

var tip;
var totalbill;
var tipbyperson;
var totalbillbyperson;
var porcent1;

keynumber.forEach(function (key) {
    key.addEventListener('click', function () {
        porcent1 = parseFloat(key.innerText);
    })
});
function porcentaje(porcent1){
    var bill = parseFloat(document.getElementById("bill").value);
    var people = parseFloat(document.getElementById("number").value);
    tip = (bill * porcent1)/100;
    totalbill = bill + tip;
    tipbyperson = tip / people;
    totalbillbyperson = totalbill / people;
    actaulizardisplay();
}

function actaulizardisplay() {
    document.getElementById("total__tip").innerHTML = "$"+tipbyperson;
    document.getElementById("total__pagar").innerHTML = "$"+totalbillbyperson;

}