# Inventario funcional y especificación de fidelidad del E6B circular físico

Fecha: 2026-11-10. Estado: INVESTIGACIÓN Y DESARROLLO. No afirmar equivalencia exacta con el ejemplar fotografiado hasta cotejo de marcas, manual y movimientos.

## Fuentes técnicas
- Manual del E6B circular ASA: https://asa2fly.com/content/support-files/product-manuals/E6B-CIRC_Instructions.pdf
- Instrucciones de E6B Gleim: https://aviation.gleim.com/resources/e6b-flight-computer-instructions/
- Manual ASA E6B clásico: https://asa2fly.com/content/support-files/product-manuals/E6B_Manual.pdf

## Evidencia visible en la foto del usuario
Instrumento circular con varias coronas concéntricas; marcas de distancia/velocidad/tiempo, horas, índice 60, marcas US GAL/HR y conversiones; ventanas TRUE AIR SPEED KTS, TEMPERATURE °C, PRESS ALT, TRUE ALTITUDE, MACH NUMBER, escalas de temperatura y presión. El usuario identifica dos discos y una tercera pieza transparente móvil. No inferir una función de giro que la fotografía no demuestra por sí sola.

## Cobertura funcional exigida
1. Cinemática de cada pieza: anillo fijo, disco central, pieza transparente; puntos de agarre, rotación separada, indicadores de referencia y lectura de grados.
2. Escala logarítmica: multiplicación, división, razón, proporciones, tiempo/velocidad/distancia, combustible consumido y autonomía, tasa de ascenso y descenso.
3. Conversiones: NM/SM/km, knots/km/h/mph, ft/m, US gal/Imperial gal/L, lb/kg, °C/°F y otras marcas reales verificadas.
4. Ventanas de corrección: CAS/TAS, altitud de presión, altitud de densidad, altitud verdadera aproximada, temperatura verdadera, Mach y patrón de presión; implementar solo tras validar exactamente el mecanismo y su rango.
5. Cara de viento: componentes longitudinal/transversal, corrección de deriva, rumbo verdadero, velocidad suelo, cálculo inverso del viento, desviación de ruta y reglas de signos; rotaciones y marcas físicas reales.
6. Plotter del usuario: escala seccional 1:500.000, WAC 1:1.000.000, terminal 1:250.000; graduaciones NM y SM; regla, rosa y retícula con independencia mecánica. Carta de papel vs pantalla y distancias geodésicas diferenciadas.
7. Modo enseñanza: señalar físicamente qué agarrar, qué girar, qué alinear y dónde leer; ejemplo automático y paso manual reversible para cada operación.
8. Validación: ensayos numéricos contra manual, comparación de graduaciones y ventanas contra fotos, interacción ratón/táctil, compatibilidad Chrome/Android, revisión de accesibilidad.

## Reglas de ingeniería
- Núcleo matemático puro, funciones independientes y tests con tolerancias explícitas.
- Capas SVG independientes por pieza física y transformaciones de rotación con estados propios.
- Unidades explícitas en entradas y resultados, conversiones exactas cuando existan.
- No inventar cifras ni escalas; etiquetar las aproximaciones meteorológicas/ISA.
- La app es didáctica y no sustituye documentación aeronáutica vigente.

## Estado de implementación
- Mesa del plotter: simulación geométrica y conversor exacto de unidades y escala.
- E6B cálculo: disco logarítmico básico + marcador transparente independiente **de referencia didáctica**, no todas las ventanas.
- E6B viento: componentes vectoriales didácticos, no reproducción completa del reverso.
- Pendiente: fidelidad gráfica de las piezas y escala auxiliar, y validación de todas las funciones enumeradas.
