# Auditoría funcional — 10 de noviembre de 2026

## Alcance revisado
- Página principal y pestañas.
- Mesa de instrumentos y controles del plotter.
- Guía visual de identificación.
- E6B cara de cálculo.
- Módulo didáctico de componentes de viento.
- Laboratorio cartográfico y dependencia Leaflet.
- Pruebas matemáticas y geodésicas.
- Enlaces a las cartas VFR500 oficiales.

## Comprobaciones realizadas
1. Análisis sintáctico JavaScript de las ocho páginas HTML principales y dos bibliotecas JS: sin errores de sintaxis detectados.
2. Comprobación de IDs duplicados y referencias DOM literales: sin incidencias en los ocho HTML.
3. Inicialización de los cinco módulos interactivos en un DOM simulado: sin errores detectados.
4. Invocación de 37 controladores de clic en DOM simulado: sin excepciones sincrónicas detectadas.
5. 204 comprobaciones numéricas de WGS84, simetría geodésica y tiempo: sin fallos.
6. Se añadió una prueba de humo real para ejecutar en navegador: tests/diagnostico.html. **No se ha ejecutado todavía en un navegador real** desde este entorno.
7. Se verificaron los siete nombres PDF de VFR500 contra el directorio público ENAIRE: https://aip.enaire.es/recursos/descargas/VFR500/ .
8. Se corrigió el fallo de sintaxis de conoce-tu-equipo/index.html (commit af3365b), que dejaba el dibujo y el panel vacíos.
9. Se añadió una recuperación legible cuando el CDN Leaflet o el módulo WGS84 no se cargan.

## Limitaciones pendientes
- No se ha efectuado inspección visual con Chrome/Windows 7 ni pruebas de arrastre físico con ratón/pantalla táctil.
- La prueba DOM simulada no reproduce eventos SVG reales, compatibilidad CSS, carga de mosaicos ni rendimiento.
- La cara de viento es una explicación vectorial, no una réplica exacta del instrumento físico del usuario.
- El plotter didáctico no está calibrado como regla física sobre cartas impresas.
- El E6B de cálculo reproduce las escalas logarítmicas básicas, no todas las ventanas y escalas auxiliares del instrumento real.
- El mapa OpenStreetMap no es carta aeronáutica. Las cartas oficiales VFR500 se consultan externamente.

## Comprobación en Chrome
Abrir https://bohemio-ws.github.io/E6B-Flight-Academy/tests/diagnostico.html y pulsar «Ejecutar comprobación». Registrar cualquier módulo marcado ERROR. Este diagnóstico es complementario a la validación visual y manual.
