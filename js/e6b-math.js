/* E6B Flight Academy — motor puro. Angulos verdaderos, viento DESDE, km/h. */
(function(root){
"use strict";
const rad=Math.PI/180;
function number(v,name){if(typeof v!=="number"||!Number.isFinite(v))throw new RangeError(name+" debe ser un número finito");return v}
function nonnegative(v,name){number(v,name);if(v<0)throw new RangeError(name+" no puede ser negativo");return v}
function positive(v,name){number(v,name);if(v<=0)throw new RangeError(name+" debe ser positivo");return v}
function normalize(a){number(a,"ángulo");return ((a%360)+360)%360}
function timeMinutes(distanceKm,groundSpeedKmh){nonnegative(distanceKm,"distancia");positive(groundSpeedKmh,"velocidad suelo");return 60*distanceKm/groundSpeedKmh}
function mapDistanceKm(cm,denominator){nonnegative(cm,"longitud en carta");positive(denominator,"denominador de escala");return cm*denominator/100000}
function windTriangle(trackDeg,windFromDeg,windKmh,tasKmh){
number(trackDeg,"derrota");number(windFromDeg,"viento desde");nonnegative(windKmh,"intensidad del viento");positive(tasKmh,"TAS");
const relative=(normalize(windFromDeg)-normalize(trackDeg))*rad;
const crosswind=windKmh*Math.sin(relative); // positivo: viento desde la derecha
const headwind=windKmh*Math.cos(relative); // positivo: viento de cara
if(Math.abs(crosswind)>tasKmh+1e-10)return {possible:false,reason:"La componente lateral del viento supera la TAS",crosswindKmh:crosswind,headwindKmh:headwind};
const correction=Math.asin(Math.max(-1,Math.min(1,crosswind/tasKmh)));
const groundSpeed=tasKmh*Math.cos(correction)-headwind;
if(groundSpeed<=1e-10)return {possible:false,reason:"No hay avance positivo sobre la derrota",crosswindKmh:crosswind,headwindKmh:headwind};
return {possible:true,headingTrueDeg:normalize(trackDeg+correction/rad),windCorrectionDeg:correction/rad,groundSpeedKmh:groundSpeed,crosswindKmh:crosswind,headwindKmh:headwind};
}
function vectorCheck(trackDeg,headingDeg,tasKmh,windFromDeg,windKmh){
const t=normalize(trackDeg)*rad,h=normalize(headingDeg)*rad,w=normalize(windFromDeg)*rad;
const east=tasKmh*Math.sin(h)-windKmh*Math.sin(w),north=tasKmh*Math.cos(h)-windKmh*Math.cos(w);
return {alongKmh:east*Math.sin(t)+north*Math.cos(t),crossKmh:east*Math.cos(t)-north*Math.sin(t)};
}
function windFromVectors(headingDeg,tasKmh,trackDeg,groundSpeedKmh){
number(headingDeg,"rumbo");positive(tasKmh,"TAS");number(trackDeg,"derrota");positive(groundSpeedKmh,"velocidad suelo");
const h=normalize(headingDeg)*rad,t=normalize(trackDeg)*rad;
const airEast=tasKmh*Math.sin(h),airNorth=tasKmh*Math.cos(h);
const groundEast=groundSpeedKmh*Math.sin(t),groundNorth=groundSpeedKmh*Math.cos(t);
const windEast=groundEast-airEast,windNorth=groundNorth-airNorth;
const windKmh=Math.hypot(windEast,windNorth);
return {windKmh,windFromDeg:windKmh<1e-9?null:normalize(Math.atan2(-windEast,-windNorth)/rad),windToDeg:windKmh<1e-9?null:normalize(Math.atan2(windEast,windNorth)/rad)};
}
root.E6BMath=Object.freeze({normalize,timeMinutes,mapDistanceKm,windTriangle,vectorCheck,windFromVectors,kmToNm:km=>{nonnegative(km,"km");return km/1.852},nmToKm:nm=>{nonnegative(nm,"NM");return nm*1.852}});
})(typeof window!=="undefined"?window:globalThis);
