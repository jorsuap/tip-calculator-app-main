function disable() {

    var reset = document.getElementById("reset");
    var bill = parseFloat(document.getElementById("bill").value);
    var people = parseFloat(document.getElementById("number").value);

    if (isNaN(bill) && isNaN(people)) {
        document.getElementById("total__tip").innerHTML = "$" + bill;
        reset.classList.remove("disable");
        document.getElementById("reset").disabled = true;
    } else {
        document.getElementById("total__tip").innerHTML = "$0.00";
        reset.classList.add("disable");
        document.getElementById("reset").disabled = false;
    }
}

function zero() {
    var numpeople = parseFloat(document.getElementById("number").value);
    var borderalert = document.getElementById("number");
    var msnealert = document.getElementsByClassName("msnerror")[0];
    if (numpeople <= 0) {
        borderalert.classList.add("errorborder");
        msnealert.classList.add("activemsnerror")
    } else {
        borderalert.classList.remove("errorborder");
        msnealert.classList.remove("activemsnerror")
    }
}