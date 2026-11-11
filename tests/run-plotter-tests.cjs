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
