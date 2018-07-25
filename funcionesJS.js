function cargarValor() {
    var elArray = window.location.hash.split('#');
    var codigoFinnegans = elArray[1];

    document.getElementById("buscar").value = codigoFinnegans;
}