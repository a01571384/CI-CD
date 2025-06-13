# CI-CD

# Informe de Despliegue - Aplicación Web con CI/CD

## Información general

- Nombre del proyecto: CI-CD
- Tecnologías utilizadas:
  - HTML, CSS, JavaScript
  - GitHub Actions (CI/CD)
  - GitHub Pages (Despliegue web)
- Repositorio: <https://github.com/a01571384/CI-CD>

## Proceso de desarrollo

1. Se desarrolló una aplicación web con un formulario de registro de usuario.
2. Se implementó validación con JavaScript.
3. El código fuente está compuesto por:
   - index.html (estructura)
   - style.css (estilo)
   - script.js (lógica de interacción)

## Proceso de CI/CD

- Se configuró un flujo de trabajo automático con GitHub Actions.
- El workflow se activa cada vez que hay un commit en `main`.
- Incluye las siguientes tareas:
  1. Clonar el repositorio.
  2. Instalar dependencias (si es necesario).
  3. (Opcional) Ejecutar pruebas unitarias con Jest.
  4. Desplegar automáticamente la aplicación usando GitHub Pages.

## Despliegue

- Herramienta de despliegue: GitHub Pages vía GitHub Actions.
- Método: Usando el Action oficial `deploy-pages`.
- Rama usada: `main` (GitHub Pages publica directamente desde la rama principal, sin necesidad de `gh-pages`).
- URL del sitio desplegado:  
  <https://a01571384.github.io/CI-CD/>  *(Reemplazar si es diferente)*

## Pruebas (si aplica)

- Se incluyó un archivo de prueba en `/tests/test.test.js`.
- Se utilizó Jest como framework de pruebas.
- Las pruebas se ejecutan automáticamente como parte del pipeline.
- Resultado de las pruebas: exitosas.

## Monitoreo y logging

- Se utilizó `console.log()` para depuración básica en el archivo `script.js`.
- No se integraron herramientas avanzadas de monitoreo por simplicidad del proyecto.
- Posibles mejoras: Sentry, LogRocket, Google Analytics.

## Problemas encontrados

- Al inicio no aparecía la rama `gh-pages` porque se usó el sistema de deploy moderno (`deploy-pages`) que publica desde `main`.
- Se resolvió entendiendo que ya no es necesario seleccionar manualmente la rama si se usa ese action.

## Conclusión

El proyecto cumplió con todos los requisitos del ejercicio:

- Desarrollo de aplicación web  
- Configuración de CI/CD  
- Despliegue automático en la nube  
- Informe documentado
