function metersconverter(value) {
    document.getElementById("centimeters").innerHTML=value*100;
    document.getElementById("kilometers").innerHTML=value/1000;
    document.getElementById("foot").innerHTML=value*3.28;
    document.getElementById("miles").innerHTML=value/1609;
}
