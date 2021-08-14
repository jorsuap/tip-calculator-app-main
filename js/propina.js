function propina() {

    var reset = document.getElementById("reset");
    var bill = parseFloat(document.getElementById("bill").value);
    var people = parseFloat(document.getElementById("number").value);

    if (isNaN(bill) || isNaN(people)) {
        document.getElementById("total__tip").innerHTML = "$0.00";
        reset.classList.add("disable");
    } else {
        document.getElementById("total__tip").innerHTML = "$" + bill;
        reset.classList.remove("disable");
    }
}