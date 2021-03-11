
function infoIntegrantes(){

    var integrantes = document.getElementById("tabMiembros");
    var acordes = document.getElementById("tabAcordes");
    var instrumentos = document.getElementById("tabInstrumentos");
    var letra = document.getElementById("tabLetra");

    integrantes.style.display = "block";
    acordes.style.display = "none";
    instrumentos.style.display = "none";
    letra.style.display = "none";
}

function infoAcordes(){

    var integrantes = document.getElementById("tabMiembros");
    var acordes = document.getElementById("tabAcordes");
    var instrumentos = document.getElementById("tabInstrumentos");
    var letra = document.getElementById("tabLetra");

    integrantes.style.display = "none";
    acordes.style.display = "block";
    instrumentos.style.display = "none";
    letra.style.display = "none";
}

function selectorInstrumentos(){
    
    var integrantes = document.getElementById("tabMiembros");
    var acordes = document.getElementById("tabAcordes");
    var instrumentos = document.getElementById("tabInstrumentos");
    var letra = document.getElementById("tabLetra");

    integrantes.style.display = "none";
    acordes.style.display = "none";
    instrumentos.style.display = "block";
    letra.style.display = "none";
}

function completarLetra(){

    var integrantes = document.getElementById("tabMiembros");
    var acordes = document.getElementById("tabAcordes");
    var instrumentos = document.getElementById("tabInstrumentos");
    var letra = document.getElementById("tabLetra");

    integrantes.style.display = "none";
    acordes.style.display = "none";
    instrumentos.style.display = "none";
    letra.style.display = "block";
}