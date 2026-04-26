# decision-pilot-ia

**Decision Pilot IA** es una herramienta educativa diseñada para transformar situaciones de decisión complejas en prompts estructurados y optimizados para Modelos de Lenguaje Extensos (LLM). 

El objetivo es facilitar el pensamiento crítico y la estructuración de información antes de interactuar con una IA, asegurando resultados más precisos, éticos y accionables.

## 🎯 Objetivo del Proyecto
Proveer una interfaz intuitiva que guíe al usuario en la recopilación de datos clave (contexto, restricciones y métricas) para generar un "Prompt Maestro" que actúe como un consultor senior en la toma de decisiones.

## 🛠️ Problema que resuelve
* **Falta de estructura:** Evita que el usuario entregue información fragmentada o vaga a la IA.
* **Sesgos cognitivos:** Obliga a considerar restricciones y datos objetivos antes de proponer una solución.
* **Prompt Engineering deficiente:** Elimina la necesidad de conocer técnicas avanzadas de redacción de prompts al automatizar la estructura de salida.

## 📂 Casos Incluidos
La aplicación cuenta con cuatro escenarios preconfigurados para su análisis en el aula:
1.  **Admisión y Becas Universitarias:** Gestión de criterios de mérito y necesidad.
2.  **Tickets de Soporte TI:** Priorización técnica y operativa de incidencias.
3.  **Fraude en E-commerce:** Validación de reembolsos y detección de riesgos.
4.  **Documentación Corporativa:** Gestión de políticas internas y cumplimiento legal.

## 📁 Estructura de Archivos
* `index.html`: Estructura semántica de la interfaz.
* `style.css`: Diseño visual minimalista y responsive.
* `app.js`: Lógica funcional de la aplicación y manipulación del DOM.
* `prompts.js`: Motor de generación y variaciones del prompt según el caso.
* `data/ejemplos.json`: Base de datos de casos prácticos precargados.

## 🚀 Instrucciones de Uso
1.  **Seleccionar un caso:** Escoge uno de los escenarios disponibles en el menú desplegable.
2.  **Completar campos:** Introduce el contexto, la decisión a tomar, los datos conocidos y las limitaciones.
3.  **Generar Prompt:** Haz clic en el botón para procesar la información y construir el texto final.
4.  **Copiar y Utilizar:** Copia el resultado y pégalo en tu herramienta de IA preferida (ChatGPT, Claude, Gemini, etc.).

## 🌐 Despliegue en GitHub Pages
Para publicar esta aplicación:
1.  Sube todos los archivos a un repositorio en tu cuenta de GitHub.
2.  Ve a la pestaña **Settings** (Configuración) del repositorio.
3.  En el menú lateral, selecciona **Pages**.
4.  En la sección "Build and deployment", asegúrate de que la fuente sea "Deploy from a branch" y selecciona la rama `main`.
5.  Haz clic en **Save**. En unos minutos, la URL del proyecto estará disponible.

## ⚠️ Limitaciones
* **Sin Procesamiento Directo:** Esta app no se conecta a ninguna API de IA; genera el texto para ser usado externamente.
* **Persistencia:** Al ser una aplicación estática, los datos no se guardan en una base de datos tras recargar la página.
* **Propósito Educativo:** Está diseñada para el aprendizaje y la prototipación, no para entornos de producción crítica.

## 👥 Equipo y Autores
* **Nombre del Autor/Equipo** - [Enlace al perfil de GitHub]

---
*Este proyecto ha sido desarrollado con fines educativos para la asignatura de Sistemas de Información.*
