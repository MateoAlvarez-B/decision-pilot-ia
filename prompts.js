/**
 * Decision Pilot IA - Motor de Generación de Prompts
 * Este archivo contiene la lógica de estructuración de prompts robustos
 * basados en marcos de pensamiento sistémico y diseño de información.
 */

const PROMPT_MAESTRO = `
Actúa como un Consultor Senior experto en Toma de Decisiones Estratégicas y Sistemas de Información. 
Tu objetivo es analizar la situación proporcionada y devolver una estructura de decisión técnica, ética y operativa.

Debes seguir estrictamente esta estructura de respuesta:
1. RESUMEN DEL PROBLEMA: (Máximo 3 líneas).
2. DECISIÓN REAL A TOMAR: (Identifica si hay una decisión subyacente que el usuario no ve).
3. DATOS FALTANTES: (Qué información crítica falta para reducir la incertidumbre).
4. TRES ALTERNATIVAS: (Opción A, Opción B y Opción C con enfoques distintos).
5. COMPARATIVA: (Tabla o lista técnica de pros y contras).
6. RECOMENDACIÓN RAZONADA: (Cuál elegirías y por qué basándote en la eficiencia).
7. DIVISIÓN DE TRABAJO: (Qué parte del proceso debe automatizar una IA y cuál debe quedar bajo estricto control humano).
8. KPIs DE ÉXITO: (Métricas concretas para medir si la decisión fue correcta).
9. DICTAMEN FINAL: [GO / NO-GO / GO CON CONDICIONES].
`;

const VARIACIONES_CASO = {
    empresarial: "Enfócate en retorno de inversión (ROI), escalabilidad de negocio, ventaja competitiva y gestión de riesgos corporativos.",
    tecnico: "Enfócate en deuda técnica, mantenibilidad, arquitectura de sistemas, seguridad y eficiencia de cómputo.",
    educativo: "Enfócate en objetivos de aprendizaje, experiencia del estudiante (UX), pedagogía activa y accesibilidad.",
    personal: "Enfócate en bienestar a largo plazo, gestión del tiempo, alineación con valores personales y coste de oportunidad."
};

/**
 * Función principal que construye el prompt final
 * @param {Object} data - Objeto con contexto, decision, datos, restricciones y caso.
 * @returns {string} - Prompt estructurado listo para enviarse a una IA.
 */
function construirPrompt(data) {
    const { caso, contexto, decision, datos, restricciones } = data;

    const instruccionEspecifica = VARIACIONES_CASO[caso] || "Analiza la situación de forma equilibrada.";

    return `
${PROMPT_MAESTRO}

---
CONTEXTO ESPECÍFICO DEL CASO (${caso.toUpperCase()}):
${instruccionEspecifica}

DATOS DE ENTRADA:
- CONTEXTO: ${contexto}
- DECISIÓN A EVALUAR: ${decision}
- DATOS DISPONIBLES: ${datos || "No se proporcionaron datos adicionales."}
- RESTRICCIONES: ${restricciones || "No se especificaron restricciones."}

INSTRUCCIÓN FINAL: Genera un análisis profundo utilizando los datos anteriores, manteniendo un tono profesional, objetivo y crítico.
`.trim();
}
