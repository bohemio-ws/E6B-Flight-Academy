# Auditoría técnica inicial — 10/11/2026

## Estado
- El disco circular de la versión inicial es **solo demostrativo**: sus marcas no son una escala logarítmica E6B calibrada. Prohibido utilizarlo para resolver ejercicios reales.
- No existe todavía carta georreferenciada, plotter a escala ni simulación de carta oficial.
- Los módulos de cálculos requieren pruebas automatizadas y comparación con soluciones independientes antes de calificarse como validados para instrucción.
- El logotipo corporativo visible se referencia desde el archivo original `bohemio-ws/RTC/logo-bohemio.jpg`. La conexión a internet es necesaria para cargarlo; existe sustitución visual por el favicon local.
- Los ejercicios y retos cronometrados completos siguen pendientes.

## Convenciones matemáticas
Ángulos verdaderos en grados, 0 norte y sentido horario. Viento meteorológico expresado desde su procedencia. Unidades principales: km, km/h, minutos.

Sea derrota T, viento desde W, intensidad Vw y TAS Va:
- Componente lateral firmada desde el lado de procedencia: C = Vw · sen(W-T).
- Componente de cara: H = Vw · cos(W-T).
- Corrección de deriva: WCA = asin(C/Va), si |C| ≤ Va.
- Rumbo verdadero = normalizar(T+WCA).
- GS = Va · cos(WCA) - H.
Los signos deben contrastarse con un diagrama vectorial independiente y casos de viento desde ambos costados. La posibilidad matemática de GS positiva no constituye autorización operacional.

## Casos mínimos exigidos
1. Sin viento, T=090°, Va=110 km/h: rumbo 090°, GS 110.
2. Viento desde 090°, T=090°, Va=110, Vw=20: rumbo 090°, GS 90.
3. Viento desde 270°, T=090°, Va=110, Vw=20: rumbo 090°, GS 130.
4. Viento desde 000°, T=090°, Va=110, Vw=20: rumbo ≈079,52°, GS ≈108,17.
5. Viento desde 180°, T=090°, Va=110, Vw=20: rumbo ≈100,48°, GS ≈108,17.
6. Si |C| > Va, no existe rumbo que mantenga la derrota indicada.
7. 55 km / 110 km/h = 0,5 h = 30 min.
8. Escalas: 1 cm en 1:250.000 = 2,5 km; 1:500.000 = 5 km; 1:1.000.000 = 10 km.

## Condiciones para declarar un módulo terminado
Pruebas ejecutables, entradas inválidas, bordes, comparación independiente, explicación al alumno, accesibilidad móvil, revisión de redondeo y etiquetado visible del alcance. No eliminar esta advertencia sin completar la auditoría.
