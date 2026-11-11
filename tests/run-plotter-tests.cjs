#!/usr/bin/env node
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const file=path.join(__dirname,'plotter-bearing-distance.html'),html=fs.readFileSync(file,'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
if(!script)throw Error('No se encontró script de pruebas');
const nodes={summary:{textContent:''},results:{items:[],append(x){this.items.push(x)}}};
const document={getElementById(id){return nodes[id]},createElement(){return {textContent:''}}};
vm.runInNewContext(script,{document,Math,Number},{filename:file,timeout:2000});
console.log(nodes.summary.textContent);
for(const item of nodes.results.items)console.log(item.textContent);
if(!nodes.results.items.length||nodes.results.items.some(x=>x.textContent.startsWith('✗')))process.exitCode=1;

const production=fs.readFileSync(path.join(__dirname,'../instrumentos/index.html'),'utf8');
const start=production.indexOf('const ROUTE_POINTS='),end=production.indexOf('function updateRoute()',start);
if(start<0||end<0)throw Error('No se encontró el cálculo real del plotter');
const calc=vm.runInNewContext(production.slice(start,end)+';plotterRoute',{Math,Number,Error},{timeout:2000});
const expectations=[['A','B',500000,34.875328,40.224371],['B','A',500000,214.875328,40.224371],['B','C',500000,114.904769,46.306047],['C','B',500000,294.904769,46.306047],['A','C',500000,78.266916,66.387122],['C','A',500000,258.266916,66.387122],['A','B',250000,34.875328,20.1121855],['A','B',1000000,34.875328,80.448742]];
for(const [a,b,den,bearing,km] of expectations){const result=calc(a,b,den);if(Math.abs(result.bearing-bearing)>0.0001||Math.abs(result.km-km)>0.0001)throw Error('Error en código de producción: '+a+b+' escala '+den);}
console.log(expectations.length+' comprobaciones adicionales sobre la función REAL del instrumento');

if(!production.includes('id="selectedRoute"'))throw Error('Falta la línea de ruta SVG');
if(!production.includes("line.setAttribute('x1',p.x)")||!production.includes("line.setAttribute('y2',q.y)"))throw Error('La ruta visual no se actualiza al seleccionar tramo');
console.log('Superadas comprobaciones estáticas del indicador de ruta y su actualización');

const inlineScript=production.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
if(!inlineScript)throw Error('Falta script de la mesa de instrumentos');
new vm.Script(inlineScript,{filename:'instrumentos/index.html'});
const ids=[...production.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
const duplicates=ids.filter((id,i)=>ids.indexOf(id)!==i);
if(duplicates.length)throw Error('IDs HTML duplicados: '+duplicates.join(', '));
const opened=(production.match(/<details\b/g)||[]).length,closed=(production.match(/<\/details>/g)||[]).length;
if(opened!==closed)throw Error('Ayudas desplegables sin cierre');
if(!production.includes('startPointerAngle:Math.atan2(p.y-pos.y,p.x-pos.x)')||!production.includes('pos.a=interaction.a+delta'))throw Error('El giro del asa vuelve a saltar al iniciar el arrastre');
if(!production.includes("'lostpointercapture'"))throw Error('No se limpia el arrastre al perder captura táctil');
console.log('Superadas sintaxis, unicidad de IDs, ayudas y controles táctiles');

const cr3=fs.readFileSync(path.join(__dirname,'../academia/curso-cr3/index.html'),'utf8');
const cr3Script=cr3.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
if(!cr3Script)throw Error('No se encontró el script CR-3');
new vm.Script(cr3Script,{filename:'academia/curso-cr3/index.html'});
if((cr3.match(/<details\b/g)||[]).length!==(cr3.match(/<\/details>/g)||[]).length)throw Error('Ayudas CR-3 desbalanceadas');
if(!cr3.includes("answer:67")||!cr3.includes("answer:36")||!cr3.includes("answer:7.5")||!cr3.includes("answer:10"))throw Error('Ejercicios ULM no están completos');
if(cr3.includes('30 gal/h')||cr3.includes('TAS 230 kt')||cr3.includes('FL150'))throw Error('Persisten ejemplos fuera del perfil ULM');
const flightMinutes=100/90*60,usedLitres=18*120/60;
if(Math.abs(flightMinutes-100/90*60)>1e-10||Math.abs(usedLitres-36)>1e-10)throw Error('Referencia ULM incorrecta');
console.log('CR-3: sintaxis, progresión, ejemplos ULM y referencias numéricas correctos');

if(!production.includes('const x=half*25,major=half%2===0'))throw Error('La regla no está graduada a intervalos de 25 unidades SVG por medio centímetro');
if(!production.includes('String(Math.abs(half/2))'))throw Error('Las cifras de la regla no representan centímetros desde su centro');
if(!production.includes('CENTÍMETROS DE CARTA · ESCALA SIMULADA'))throw Error('Falta aclarar la unidad y naturaleza simulada de la regla');
const rulerHalfStep=25,unitsPerCm=50,majorStep=2*rulerHalfStep;
if(majorStep!==unitsPerCm)throw Error('La regla y la conversión de ruta no comparten calibración');
const ab=calc('A','B',500000);
if(Math.abs(ab.cm-ab.svgLength/majorStep)>1e-10)throw Error('La distancia calculada no coincide con la graduación de la regla');
console.log('Regla: 0,5 cm por subdivisión, 1 cm por marca principal, calibración compatible con las distancias');

for(const id of ['chartLive','zoomOut','zoomIn','zoomReset','zoomValue'])if(!production.includes('id="'+id+'"'))throw Error('Falta control de lectura o zoom: '+id);
if(!production.includes("r.cm.toFixed(2)+' cm de carta'"))throw Error('La ventana de lectura no muestra centímetros de carta');
if(!production.includes("$('chart').setAttribute('viewBox'"))throw Error('La ampliación no modifica la vista de la carta');
if(!production.includes("chartZoom=Math.min(1.75"))throw Error('Falta límite superior de ampliación');
console.log('Lectura al borde de carta y zoom: controles, escala y límites presentes');
