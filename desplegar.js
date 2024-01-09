// Detectar el evento de scroll
window.addEventListener('scroll', function() {
  // Seleccionar los elementos que deseas animar
  var elementosAnimar = document.querySelectorAll('.animar');
  // Recorrer los elementos y verificar si son visibles
  for (var i = 0; i < elementosAnimar.length; i++) {
    var elemento = elementosAnimar[i];
    if (esVisible(elemento)) {
      // Agregar la clase para mostrar el elemento
      elemento.classList.add('mostrar');
    } else {
      // Quitar la clase para ocultar el elemento
      elemento.classList.remove('mostrar');
    }
  }
});

// Función para verificar si un elemento es visible en la pantalla
function esVisible(elemento) {
  var rect = elemento.getBoundingClientRect();
  var alturaVentana = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= alturaVentana;
}

