function Converter() {
    var temp = document.querySelector ("#temp").value;

    if (temp === "") {
        alert("Insira a temperatura");
        return;
    }
    var resultado = (temp * 9/5) + 32;
    document.getElementById("resultado").innerHTML = 
    ("Fahrenheit: " + resultado + "ºF")

    var temp = document.querySelector ("#temp").value;
    var resultado = (temp - 32) * 5/9;
    document.getElementById("resultado2").innerHTML =
    ("Celsius: " + resultado + "ºC")

    var temp = document.querySelector ("#temp").value;
    var resultado = temp - 273.15;
    document.getElementById("resultado3").innerHTML =
    ("Kelvin: " + resultado + "ºK")

}