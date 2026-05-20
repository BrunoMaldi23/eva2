// Funciones globales para toda la aplicación

// Función para volver usando history.back() - Requisito del punto 2
function volverConHistory() {
    // EXPLICACIÓN: Uso history.back() porque el objeto history del navegador
    // permite navegar hacia atrás en el historial de sesión sin recargar la página.
    // Esto es más eficiente que window.location.href porque preserva el estado.
    window.history.back();
}

// Función alternativa si el estudiante quiere salir directamente al index
function irAlIndex() {
    window.location.href = '../index.html';
}

// Mostrar mensaje de bienvenida en consola (buena práctica)
console.log('Aplicación de Evaluación 2 - Programación Front End');