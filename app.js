// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Referencias de la Interfaz
    const selectorCaso = document.getElementById('selector-caso');
    const inputs = {
        contexto: document.getElementById('contexto'),
        decision: document.getElementById('decision'),
        datos: document.getElementById('datos'),
        restricciones: document.getElementById('restricciones')
    };
    const btnGenerar = document.getElementById('btn-generar');
    const btnCopiar = document.getElementById('btn-copiar');
    const displayPrompt = document.getElementById('prompt-generado');

    // 2. Cambio de Caso (Carga de datos sugeridos o limpieza)
    selectorCaso.addEventListener('change', () => {
        const caso = selectorCaso.value;
        // Opcional: Podrías cargar ejemplos específicos desde prompts.js aquí
        console.log(`Caso seleccionado: ${caso}`);
        // Limpiamos el área de resultado al cambiar de escenario
        displayPrompt.innerText = "Campos actualizados. Presiona 'Generar' para ver el nuevo prompt.";
    });

    // 3. Función Principal: Generar Prompt
    btnGenerar.addEventListener('click', () => {
        const valores = {
            caso: selectorCaso.value,
            contexto: inputs.contexto.value.trim(),
            decision: inputs.decision.value.trim(),
            datos: inputs.datos.value.trim(),
            restricciones: inputs.restricciones.value.trim()
        };

        // Validación sencilla
        if (!valores.caso || !valores.contexto || !valores.decision) {
            alert("Por favor, selecciona un caso y completa al menos el contexto y la decisión.");
            return;
        }

        // Llamada a la función global definida en prompts.js
        const promptFinal = construirPrompt(valores);
        
        // Mostrar en pantalla
        displayPrompt.innerText = promptFinal;
    });

    // 4. Función: Copiar al portapapeles
    btnCopiar.addEventListener('click', () => {
        const contenido = displayPrompt.innerText;
        
        if (contenido.includes("aparecerá aquí") || contenido === "") {
            alert("Primero genera un prompt para poder copiarlo.");
            return;
        }

        navigator.clipboard.writeText(contenido).then(() => {
            const originalText = btnCopiar.innerText;
            btnCopiar.innerText = "¡Copiado!";
            btnCopiar.style.backgroundColor = "#27ae60";
            
            setTimeout(() => {
                btnCopiar.innerText = originalText;
                btnCopiar.style.backgroundColor = "";
            }, 2000);
        }).catch(err => {
            console.error("Error al copiar: ", err);
        });
    });
});
