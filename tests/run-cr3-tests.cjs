#!/usr/bin/env node
/* Ejecuta las páginas de pruebas del curso CR-3 sin instalar dependencias. */
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
let failed=0;
for(const file of ['tests/cr3-alignment.html','tests/cr3-wind.html']){
  const html=fs.readFileSync(path.join(__dirname,'..',file),'utf8');
  const match=html.match(/<script>([\s\S]*?)<\/script>/i);
  if(!match)throw Error('No se encontró el script de '+file);
  const nodes={results:{items:[],append(x){this.items.push(x)}},checks:{items:[],append(x){this.items.push(x)}},summary:{textContent:''}};
  const document={getElementById(id){if(!nodes[id])throw Error('Nodo no definido: '+id);return nodes[id]},createElement(){return {style:{},textContent:''}}};
  vm.runInNewContext(match[1],{document,Math,Number,String,Array,Object}, {filename:file,timeout:2000});
  const rows=[...nodes.results.items,...nodes.checks.items];
  const bad=rows.filter(x=>/^(ERROR:|✗)/.test(x.textContent));
  console.log(file+': '+(rows.length-bad.length)+'/'+rows.length+' pruebas correctas');
  for(const row of bad)console.error('  '+row.textContent);
  if(!rows.length||bad.length)failed++;
}
if(failed)process.exitCode=1;
