/* E6B: exact unit conversions and basic slide-rule problems. Pure math, no DOM. */
(function(root){'use strict';
const F={nm:1.852,sm:1.609344,km:1,ft:0.0003048,m:0.001,kt:1.852,kph:1,mph:1.609344,l:1,usgal:3.785411784,impgal:4.54609,kg:1,lb:0.45359237};
const family={nm:'distance',sm:'distance',km:'distance',ft:'distance',m:'distance',kt:'speed',kph:'speed',mph:'speed',l:'volume',usgal:'volume',impgal:'volume',kg:'mass',lb:'mass'};
function valid(...a){if(a.some(v=>!Number.isFinite(v)||v<0))throw Error('Introduce valores numéricos no negativos.')}
function positive(...a){valid(...a);if(a.some(v=>v===0))throw Error('Este cálculo requiere valores mayores que cero.')}
function convert(n,from,to){valid(n);if(!F[from]||!F[to]||family[from]!==family[to])throw Error('Las unidades deben pertenecer a la misma magnitud.');return n*F[from]/F[to]}
function time(distance,speed){positive(distance,speed);return distance/speed*60}
function speed(distance,minutes){positive(distance,minutes);return distance*60/minutes}
function distance(speed,minutes){positive(speed,minutes);return speed*minutes/60}
function fuelUsed(rate,hours){valid(rate,hours);return rate*hours}
function endurance(volume,rate){positive(volume,rate);return volume/rate}
function fuelRate(volume,hours){positive(volume,hours);return volume/hours}
function multiply(a,b){valid(a,b);return a*b}
function divide(a,b){valid(a);positive(b);return a/b}
function gradientFpm(ftPerNm,gsKt){valid(ftPerNm,gsKt);return ftPerNm*gsKt/60}
root.E6BOperations=Object.freeze({convert,time,speed,distance,fuelUsed,endurance,fuelRate,multiply,divide,gradientFpm});
})(typeof window!=='undefined'?window:globalThis);