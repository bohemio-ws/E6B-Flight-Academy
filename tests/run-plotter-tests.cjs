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
