function disable(){

    var reset = document.getElementById("reset");
    var bill = parseFloat(document.getElementById("bill").value);

    if (isNaN(bill)){
        reset.classList.add("disable");
        document.getElementById("reset").disabled= true;
    }
    else{
        reset.classList.remove("disable");
        document.getElementById("reset").disabled= false;
    }
}
function disable1(){

    var reset = document.getElementById("reset");
    var people = parseFloat(document.getElementById("number").value);

    if (isNaN(people)) {
        reset.classList.add("disable");
        document.getElementById("reset").disabled= true;
    }
    else{
        reset.classList.remove("disable");
        document.getElementById("reset").disabled= false;
    }
}

function zero(){
    var numpeople = parseFloat(document.getElementById("number").value);
    var borderalert = document.getElementById("number");
    var msnealert = document.getElementsByClassName("msnerror")[0];
    if(numpeople <= 0){
        borderalert.classList.add("errorborder");
        msnealert.classList.add("activemsnerror")
    }
    else{
        borderalert.classList.remove("errorborder");
        msnealert.classList.remove("activemsnerror")
    }
}