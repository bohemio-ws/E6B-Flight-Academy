# Auditoría de referencia CR-3 — 11/11/2026

## Alcance y evidencias
Material aportado: siete MP4, `EXPLICACION CR3`, `CR302`, `CR303`, `CR304`, `CR305`, `CR306` y `CR307`. Se ha inspeccionado una muestra visual de cada archivo. **No se ha realizado aún transcripción integral del audio ni lectura cuadro a cuadro**. No atribuir cifras o pasos concretos al autor sin esa comprobación.

| Archivo | Observación visual confirmada | Reproducción actual | Estado |
|---|---|---|---|
| CR3 | Cara circular azul/blanca; mano manipula disco | Anillos logarítmicos aproximados | Parcial |
| CR302 | Cara de cálculo, señalamiento de arcos y ventanas | Ventanas dibujadas, no calibradas | Pendiente |
| CR303 | Cara de cálculo, señalamiento de graduaciones | Marcas genéricas, no cotejadas | Pendiente |
| CR304 | Cara de cálculo, manipulación de anillos | Rotación con ratón/dedo | Parcial |
| CR305 | Cara de cálculo, dedo señala marcas | Ejercicio de tiempo independiente | Parcial |
| CR306 | Cara posterior con retícula de viento | Triángulo vectorial, NO mecanismo físico | Pendiente |
| CR307 | Cara posterior con retícula de viento | Triángulo vectorial, NO mecanismo físico | Pendiente |

## Hallazgos técnicos
1. `index.html`: disco principal angular 0–355°, no es representación de las escalas logarítmicas del CR-3.
2. `academia/curso-cr3/index.html`: anillos logarítmicos didácticos, ventanas atmosféricas orientativas; el mecanismo de la cara posterior aún no está reproducido.
3. Antes de esta rama se podía aprobar el ejercicio de tiempo/combustible introduciendo un número sin mover el disco.
4. La nueva comprobación de alineación utiliza el índice 60 del disco interior frente a la velocidad/consumo del aro exterior; no certifica lectura física de la cifra.
5. Los ejemplos numéricos del curso son ejercicios didácticos independientes; no deben presentarse como transcripciones verificadas de los vídeos.
6. La prueba `tests/diagnostico.html` cubre inicialización, pero no exactitud física del CR-3.

## Criterios de aceptación pendientes
- Inventario fotográfico de todas las graduaciones y leyendas por cara, con unidad, dirección, índice y rango.
- Anotación de secuencias con marcas de tiempo, dato inicial, pieza movida, alineación, lectura y resultado por vídeo.
- Reproducción interactiva de la cara de viento, incluyendo retícula móvil y procedimiento instrumental real.
- Pruebas de cada operación con comparación independiente y tolerancia coherente con la resolución física.
- Ensayos táctiles en móvil, ratón en ordenador, accesibilidad y funcionamiento sin conexión.
- Validación final antes de publicar en `main`. Hasta entonces: **material experimental, no apto para navegación**.
