# AUDITORÍA CRÍTICA DE PRODUCTO Y DIDÁCTICA — E6B Flight Academy
**Fecha:** 10 de noviembre de 2026  
**Dictamen:** **NO APTO PARA PRESENTACIÓN PÚBLICA COMO ACADEMIA COMPLETA**. No se ha acreditado fidelidad física ni aprendizaje autónomo del instrumental. El código y los ejercicios matemáticos aprovechables no equivalen a un curso.

## 1. Mandato y criterio de aceptación
La finalidad es que una persona pueda **coger los dos instrumentos físicos del propietario**, reconocer sus marcas, sujetarlos, mover cada pieza correctamente, interpretar lecturas y resolver problemas nuevos sin ayuda de la web. El resultado numérico es un control posterior, nunca el producto principal.

Se han inspeccionado directamente los archivos publicados: `index.html`, `instrumentos/index.html`, `conoce-tu-equipo/index.html`, `e6b-calculo/index.html`, `e6b-viento/index.html`, `simulador/index.html`, `operaciones/index.html`, `triangulo-viento/index.html`, `js/e6b-math.js`, `js/e6b-operations.js`, `tests/diagnostico.html`, la especificación física y la auditoría anterior. Se ha contrastado el alcance con el índice y las instrucciones del manual ASA E6-B Circular (48 páginas). **El manual ASA es una referencia de procedimientos, no prueba de que el instrumento fotografiado sea idéntico**.

## 2. Hallazgos ordenados por severidad

### BLOQUEANTES
**B01 — Objeto pedagógico equivocado.** `operaciones/` ofrece campos, botón de cálculo y resultado; `triangulo-viento/` resuelve vectores. No se exige que el alumno identifique una marca ni efectúe una alineación física antes de ver la solución. No hay evidencia de transferencia de habilidad al instrumento real.

**B02 — Falta identificación exacta de ambos instrumentos.** No existe una ficha verificada de fabricante/modelo, anverso/reverso, graduaciones, índices, correderas, ventanas y cinemática del ejemplar fotografiado. `simulador/` muestra un círculo azul genérico y una aguja cian; **no puede anunciarse como réplica del E6B físico**. El manual ASA describe una corredera/pestaña de temperatura; no debe confundirse automáticamente con la tercera pieza observada en las fotos.

**B03 — Curso sin sistema de enseñanza ni evaluación.** Hay demostraciones de tiempo fijo, pero no objetivos operativos medibles, comprobación del movimiento efectuado, lectura solicitada antes de revelar el valor, explicación de errores, repetición espaciada ni examen práctico con problemas inéditos. «Siete alineaciones geométricas correctas» no significa «siete lecciones validadas».

**B04 — Arquitectura y navegación fragmentadas.** El inicio `index.html` enlaza la mesa, identificación, laboratorio y diagnóstico, pero **no enlaza directamente** `simulador/`, `operaciones/`, `triangulo-viento/`, `e6b-calculo/` ni `e6b-viento/`. Se han acumulado páginas con interfaces y modelos pedagógicos distintos. No existe catálogo de competencias, progreso ni navegación unificada.

**B05 — Publicación sin puerta de calidad.** GitHub Pages recibe cada cambio de `main` sin proceso documentado de revisión visual móvil/escritorio, aprobación didáctica, contraste con el instrumento real o validación editorial. El material experimental puede parecer terminado a un visitante.

### ALTOS
**A01 — Precisión aparente excesiva.** Los resultados exactos del motor matemático se presentan junto a graduaciones simplificadas. Una regla circular no permite la misma resolución que la cifra decimal calculada; deben separarse **lectura aproximada del instrumento** y **solución de referencia**.

**A02 — Graduaciones simuladas insuficientes.** `simulador/` y `e6b-calculo/` dibujan escalas genéricas con etiquetas seleccionadas; no reproducen las marcas, subescalas de tiempo, índices de conversión, correcciones de altitud/TAS/Mach ni ventanas que aparecen en el manual. Falta una capa de geometría verificable por marca.

**A03 — Cara de viento no mecánica.** `e6b-viento/` y `triangulo-viento/` son esquemas y cálculos vectoriales. No hay entrenamiento fiel de la cara de viento con colocación de dirección, punto de viento, corredera, lectura de deriva y GS, ni método inverso operado sobre el instrumento.

**A04 — Material del plotter sin validación dimensional exhaustiva.** `instrumentos/` incluye regla/rosa y conversiones de escalas, pero no hay certificación de longitudes reales, impresión a escala, uso en pantalla con zoom, ni pruebas prácticas de medida y rumbo contra cartas conocidas. Una representación de pantalla no equivale a un plotter físico.

**A05 — Enseñanza de décadas insuficiente.** En multiplicación, tiempo y combustible, el alumno puede acertar una coincidencia radial y fallar un factor 10. La lectura debe requerir estimación previa, elección explícita de magnitud y verificación de unidades.

**A06 — Pruebas insuficientes para publicar.** `tests/diagnostico.html` comprueba carga/elementos básicos; las pruebas geométricas y matemáticas verifican fórmulas. No prueban interacción táctil, accesibilidad, legibilidad, procedimientos de manual, progresión ni que el alumno pueda operar el instrumento.

**A07 — Identidad visual y tono incoherentes.** Cada módulo usa CSS, encabezados y paneles propios; proliferan botones, textos instructivos cortos y resultados automáticos. Falta una experiencia adulta, sobria y aeronáutica con jerarquía de manual técnico, mesa de trabajo, instrumento dominante y navegación estable.

### MEDIOS
**M01 — Contenido técnico sin trazabilidad por ejercicio.** Las instrucciones genéricas citan el manual, pero cada competencia debe vincularse a fuente, sección, procedimiento y criterio de tolerancia.  
**M02 — Unidades y referencias.** Mantener km/km/h como preferencia sin ocultar NM/kt/ft, y distinguir rumbo/derrota verdaderos, magnéticos, viento DESDE, CAS/TAS/GS y combustible utilizable/reserva.  
**M03 — Dependencias externas y accesibilidad.** Verificar funcionamiento sin red, teclado, lector de pantalla, móvil horizontal/vertical, navegadores antiguos y mensajes de error.  
**M04 — Falta control de versiones editorial.** Cada ejercicio debe llevar versión, estado de validación y autoría de la comprobación.

## 3. Arquitectura objetivo (rediseño, no parches)
1. **Identidad del instrumento**: ficha técnica verificada por fotografías nítidas de ambas caras y elementos móviles, modelo, leyenda de marcas, cinemática y fuentes.
2. **Motor geométrico**: escalas, ventanas, correderas y cursores como componentes independientes con coordenadas y pruebas de alineación; prohibido usar dibujos decorativos como si fueran piezas funcionales.
3. **Motor matemático**: cálculo puro, unidades y redondeo, independiente de la interfaz; conservar y ampliar `js/e6b-math.js` y `js/e6b-operations.js` tras revisar su contrato.
4. **Motor de lecciones**: estado del instrumento → instrucción precisa → acción del alumno → validación mecánica → lectura introducida → retroalimentación contextual → siguiente paso.
5. **Catálogo de competencias**: plotter (orientación, escalas, rumbos, distancias); E6B cálculo (lectura de graduaciones, décadas, proporciones, conversiones, tiempo/velocidad/distancia, combustible, ascenso, TAS/altitud/Mach); E6B viento (triángulo, viento observado, corrección de derrota).
6. **Interfaz unificada**: escritorio de instrumentos, vista ampliable, manual contextual, lección paso a paso, práctica libre, evaluación sin pistas y seguimiento local.
7. **Puerta editorial**: estado «en desarrollo / validado técnicamente / validado físicamente / publicable» por módulo. Solo publicar como formación aquello que haya superado todos los controles.

## 4. Protocolo de aceptación por lección
- Identificar **el mismo índice y la misma marca** en fotografía física y en el simulador.
- Seguir una fuente técnica verificable y mostrar la nomenclatura real.
- Reproducir con el dedo/ratón los movimientos necesarios, sin alineación automática obligatoria.
- Introducir lectura y **unidad** antes de revelar la respuesta.
- Comprobar tolerancia acorde a la resolución del instrumento y distinguir error de escala, década, unidad o concepto.
- Resolver al menos tres ejercicios nuevos sin pistas; comprobar también el instrumento físico.
- Probar en móvil y escritorio, interacción por teclado y estado de conexión.
- Revisar por persona conocedora del instrumento, documentando discrepancias.

## 5. Plan de rescate
**Fase 0 — Contención editorial:** retirar afirmaciones de equivalencia o de «academia completa»; no promocionar ni añadir módulos públicos hasta validación. Decidir explícitamente si el sitio actual queda visible como prototipo o se traslada el desarrollo a una rama separada.  
**Fase 1 — Inventario físico:** identificar exactamente plotter y E6B mediante fotos, medidas, leyendas, piezas y manuales. Crear matriz «marca real ↔ representación ↔ función ↔ fuente».  
**Fase 2 — Prototipo vertical:** construir **una sola lección excelente**, por ejemplo tiempo/distancia/velocidad, con la reproducción geométrica correcta, manipulación real, lectura evaluada, feedback técnico y examen.  
**Fase 3 — Validación:** contrastar con el instrumento físico, probar dispositivos, documentar fallos y corregir arquitectura.  
**Fase 4 — Ampliación modular:** incorporar funciones del mismo instrumento una a una; evitar duplicar páginas y motores.  
**Fase 5 — Publicación:** desplegar la academia solo tras revisión técnica, pedagógica, visual y de seguridad, con versión y changelog.

## 6. Estado verificable
**Verificado:** estructura de los archivos en GitHub, existencia de módulos y funciones, navegación de portada, alcance del manual ASA.  
**No verificado:** correspondencia exacta del modelo del usuario, dimensiones y marcas de los instrumentos, fidelidad de los gestos reales, revisión visual completa en navegadores/dispositivos, aprendizaje real de alumnos.  
**Conclusión:** **parar la expansión funcional y rehacer el producto alrededor de la manipulación física y la adquisición de competencias**. No interpretar «el código funciona» como «la academia enseña».
