# PROMPT MAESTRO — E6B FLIGHT ACADEMY
Versión 1.0 · Bohemio4Infinity · 10/11/2026

## 1. Identidad y misión
E6B Flight Academy es una academia pública, gratuita, progresiva, interactiva y accesible de navegación VFR, orientada especialmente a pilotos ULM, desde iniciación hasta nivel avanzado. Marca: Bohemio4Infinity. Idioma inicial: español de España. Unidades preferentes: km y km/h, mostrando conversiones a NM, kt y otras unidades cuando proceda.

**Principio rector: enseñar un concepto equivocado puede consolidar errores peligrosos. La exactitud técnica y didáctica prevalece sobre la rapidez de desarrollo, la estética o la cantidad de funciones.**

## 2. Instrucciones permanentes para cualquier desarrollador o IA
- Leer este documento antes de cambiar código, contenido o ejercicios.
- Auditar arquitectura, contenido y pruebas antes de modificar. Evitar parches acumulativos: módulos desacoplados y una única fuente de verdad para fórmulas, unidades y convenciones.
- No inventar procedimientos, datos aeronáuticos, escalas, calibraciones ni referencias reglamentarias. Cuando falte evidencia, marcar «pendiente de verificación» y no enseñarlo como hecho.
- Separar teoría, simulación didáctica, cálculo matemático y uso operacional. La app no es herramienta certificada de navegación.
- Registrar supuestos, unidades, fuentes, versión, fecha de revisión, casos de prueba y limitaciones de cada módulo.
- No presentar como funcional o validado algo que solo es una demostración visual.
- Si se detecta un error de contenido, corregir motor, explicación, ejercicios, soluciones y pruebas de regresión; documentar el cambio.
- Priorizar legibilidad, uso táctil, funcionamiento offline y carga ligera; accesible en móviles y ordenadores, alojable en GitHub Pages.

## 3. Arquitectura funcional
A. INTRODUCCIÓN: objetivo, límites, cómo estudiar, prerrequisitos, glosario, magnitudes y convenciones.
B. FUNDAMENTOS: geometría, grados, norte verdadero/magnético, variación, desviación, rumbo, derrota, marcación, velocidad IAS/TAS/GS, viento «desde», tiempo, distancias, altitud y conversiones.
C. INSTRUMENTOS: reproducción manipulable del plotter giratorio con regla y escalas 1:500.000 y 1:1.000.000, E6B cara de viento, E6B cara de cálculo; modo de inspección, marcas y tutorial paso a paso. Usar fotos de los instrumentos físicos como referencia; validar matemáticamente escalas, signos y posiciones antes de declararlos equivalentes.
D. CARTAS Y MAPAS: cartas didácticas propias a escalas 1:250.000, 1:500.000 y 1:1.000.000, con cuadrícula, norte, leyenda, barra gráfica, escala numérica, puntos, obstáculos ficticios claramente etiquetados y rutas. Alternar escala conservando geometría, medir con regla, trazar rumbos, distancias y puntos de control. Distinguir mapas sintéticos de cartas oficiales; licencias y actualidad verificadas para cualquier carta real. No convertir una imagen redimensionada en una supuesta escala exacta sin calibración de distancia en pantalla o mecanismo equivalente.
E. CÁLCULOS: velocidad-distancia-tiempo, combustible, conversión, TAS, altitud densidad/verdadera solo con modelos y supuestos explícitos, triángulo de viento, corrección de deriva, rumbo, GS y ETA.
F. APRENDIZAJE GUIADO: demostración → práctica asistida → práctica sin ayudas → evaluación; pasos explicados, visualización de causas y corrección de errores.
G. EXÁMENES: banco de problemas por módulo y dificultad, preguntas aleatorias reproducibles, sin pistas durante la prueba, corrección posterior razonada, tolerancias justificadas, puntuación y revisión.
H. RETOS CRONOMETRADOS: cronómetro visible, inicio voluntario, pausas cuando proceda, niveles, precisión antes que velocidad, resultados separados de la calificación de seguridad; jamás premiar una respuesta rápida incorrecta.
I. PROGRESO: registro local de conceptos dominados, errores recurrentes, repetición espaciada y evaluación por competencia; exportación opcional sin datos sensibles.
J. VALIDACIÓN Y REFERENCIAS: documentación de fórmulas, pruebas automáticas, ejemplos resueltos independientemente y bitácora de cambios.

## 4. Reglas técnicas no negociables
- Toda magnitud debe tener unidad explícita y conversión trazable. 1 NM = 1.852 km exactos; 1 kt = 1 NM/h. Evitar redondeo intermedio.
- Usar convención de ángulos declarada: 0° norte, 90° este, incremento horario; normalizar a [0,360). Distinguir verdadero, magnético y de brújula.
- Viento meteorológico se expresa desde donde viene. Distinguir componente de cara/cola y componente lateral con signo. Verificar resultados con vectores independientes y casos límite (viento nulo, frontal, cola, lateral desde izquierda/derecha, viento superior a TAS).
- Nunca usar IAS como TAS ni TAS como GS sin explicar la aproximación y sus límites.
- Separar exactitud de cálculo, resolución del instrumento y tolerancia pedagógica; mostrar redondeos únicamente al final.
- La escala cartográfica 1:N significa que una longitud en la carta equivale a N longitudes reales en las mismas unidades. A 1:500.000, 1 cm = 5 km; a 1:1.000.000, 1 cm = 10 km; a 1:250.000, 1 cm = 2,5 km. Comprobar que la representación gráfica no cambia de escala al variar zoom, DPI o tamaño de pantalla sin recalibración.
- Rumbos y distancias en carta: declarar proyección, convergencia y limitaciones; no confundir dirección sobre pantalla con rumbo geográfico.
- Para mapas reales, revisar derechos de uso, fecha, NOTAM y vigencia; no proporcionar indicaciones operacionales basadas en material didáctico desactualizado.

## 5. Estándar de cada lección
Objetivo medible; conocimientos previos; explicación precisa; unidades y referencias; ejemplo completo; instrumento manipulable; práctica guiada; error habitual y su causa; comprobación independiente; ejercicio sin ayudas; evaluación y criterio de dominio. Si el alumno falla, explicar la causa conceptual y ofrecer un ejercicio equivalente antes de avanzar.

## 6. Banco de pruebas mínimo
- 55 km a 110 km/h GS = 30 minutos.
- 1 cm sobre carta 1:500.000 = 5 km; 1:1.000.000 = 10 km; 1:250.000 = 2,5 km.
- Viento 0: rumbo verdadero igual a derrota, GS igual a TAS.
- Viento de cara alineado: GS = TAS - viento; viento de cola: GS = TAS + viento.
- Viento de través puro: corrección hacia el viento; comprobar seno y componente longitudinal; no aceptar una solución si la componente lateral del viento supera TAS.
- Verificar cuadrantes, pasos por 000°/360°, conversión grados/radianes y entradas inválidas.
- Contrastar al menos dos métodos independientes en cálculos críticos y casos límite; pruebas de interfaz en táctil y escritorio.

## 7. Fases y criterio de publicación
Fase 0: auditoría de la versión actual; identificar demostraciones no calibradas y errores.
Fase 1: motor matemático, unidades, tests y lecciones fundamentales.
Fase 2: instrumentos digitales precisos con validación frente a referencias físicas.
Fase 3: mapas didácticos multiescala y plotter móvil.
Fase 4: curso guiado completo y banco de ejercicios.
Fase 5: exámenes, retos cronometrados, progreso y accesibilidad.
Fase 6: auditoría integral, revisión aeronáutica independiente cuando sea posible y publicación estable.
Una fase no se declara terminada sin evidencias de prueba. Si una función está incompleta, etiquetarla como prototipo.

## 8. Criterio final
La academia debe enseñar al alumno a comprender, ejecutar, verificar y cuestionar sus propios cálculos, no a memorizar respuestas. La seguridad del aprendizaje está por encima de cualquier objetivo de entrega.
