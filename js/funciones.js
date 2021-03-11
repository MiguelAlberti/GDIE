
/*
 * FUNCIONAMIENTO JS: no hay main ni nada asi, si queremos ejecutar funciones al iniciar debemos
 * crear una funcion llamada "function onLoad()". Creamos el resto de funciones como si fuese Java
 * de toda la vida.
 * 
 * Las funciones se llaman desde la parte de HTML poniendo onClick="nombredelafuncion()" dentro del div.
 * 
 * No hay variables tipo int string etc, todas las variables son genéricas y se declaran tipo "var"
 * 
 * Para obtener el valor de un campo de la parte de HTML, haremos lo siguiente:
 *  - En la parte de HTML al crear el div le asignamos un ID o un NAME
 *  - Luego, al declarar la variable aqui, recuperaremos el valor con la siguiente utilidad:
 *          document.getElementById("id") o document.getElementByName("")
 *    IMP: ID es unico para cada DIV y solo devolverá un resultado, mientras que diferentes DIVS pueden
 *    tener el mismo NAME, por tanto la segunda funcion puede devolver varios valores.
 *  - Si en lugar de un div intentamos obtener el valor de un campo de texto o algo parecido, ademas del
 *    getElementBy("") deberemos aplicarle un getValue() a la variable ya que sino nos devolverá el contenedor
 * 
 *  CONSEJO: para debugar usar alert("texto"); ya que es el equivalente al System.out.Print("") de Java y
 *  va bien para imprimir el contenido de una variable en un punto, o ver si el programa pasa por x sitio, etc
*/

function infoIntegrantes(){

    var integrantes = document.getElementById("tabMiembros");
    var acordes = document.getElementById("tabAcordes");
    var instrumentos = document.getElementById("tabInstrumentos");
    var letra = document.getElementById("tabLetra");

    /*
     * display = block  -> muestra el div
     * display = none   -> oculta el div
    */

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