function suerteDeUsuario() {
    const suerte = ['dulce', 'truco', 'screamer'];
    
    const indiceAleatoreo = Math.floor(Math.random() * suerte.length);
    const suerteEleigida = suerte[indiceAleatoreo];

    return suerteEleigida;
}
function eventoDespues(){
    const resultadoDiv = document.getElementById("resultado");
    const suerteObtenida = suerteDeUsuario();
    resultadoDiv.innerHTML = `<p>Tu suerte es: ${suerteObtenida}</p>`;
}