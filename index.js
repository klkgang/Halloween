function suerteDeUsuario() {
    const suerte = ['dulce', 'truco', 'screamer'];
    
    const indiceAleatoreo = Math.floor(Math.random() * suerte.length);
    const suerteEleigida = suerte[indiceAleatoreo];

    return suerteEleigida;
}
function eventoDespues(){
    const resultadoDiv = document.getElementById("resultado");
    const suerteObtenida = suerteDeUsuario();
    
    switch (suerteObtenida) {
        case 'dulce':
            window.location.href="dulce/dulce.html";
            break;
        case 'truco':
            window.location.href="truco/truco.html";
            break;
        case 'screamer':
            window.location.href = "screamer/screamer.html";
            break;
    
        }
}