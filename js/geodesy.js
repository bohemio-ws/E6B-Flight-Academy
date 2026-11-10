/* WGS84 inverse geodesic: Vincenty; spherical fallback only on non-convergence. */
(function(root){'use strict';
const A=6378137,F=1/298.257223563,B=A*(1-F),rad=Math.PI/180;
function inverse(lat1,lon1,lat2,lon2){
for(const v of [lat1,lon1,lat2,lon2])if(!Number.isFinite(v))throw new RangeError('Coordenadas no válidas');
if(Math.abs(lat1)>90||Math.abs(lat2)>90)throw new RangeError('Latitud fuera de rango');
if(lat1===lat2&&lon1===lon2)return {km:0,initialBearingDeg:null,finalBearingDeg:null,method:'WGS84 Vincenty'};
const phi1=lat1*rad,phi2=lat2*rad,L=((((lon2-lon1)+540)%360)-180)*rad;
const U1=Math.atan((1-F)*Math.tan(phi1)),U2=Math.atan((1-F)*Math.tan(phi2));
const sU1=Math.sin(U1),cU1=Math.cos(U1),sU2=Math.sin(U2),cU2=Math.cos(U2);
let lambda=L,lambdaPrev,sigma,sinSigma,cosSigma,sinAlpha,cosSqAlpha,cos2SigmaM,cosLambda,sinLambda,iter=0;
do{sinLambda=Math.sin(lambda);cosLambda=Math.cos(lambda);sinSigma=Math.hypot(cU2*sinLambda,cU1*sU2-sU1*cU2*cosLambda);if(sinSigma===0)return {km:0,initialBearingDeg:null,finalBearingDeg:null,method:'WGS84 Vincenty'};
cosSigma=sU1*sU2+cU1*cU2*cosLambda;sigma=Math.atan2(sinSigma,cosSigma);sinAlpha=cU1*cU2*sinLambda/sinSigma;cosSqAlpha=1-sinAlpha*sinAlpha;cos2SigmaM=cosSqAlpha===0?0:cosSigma-2*sU1*sU2/cosSqAlpha;
const C=F/16*cosSqAlpha*(4+F*(4-3*cosSqAlpha));lambdaPrev=lambda;lambda=L+(1-C)*F*sinAlpha*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));
}while(Math.abs(lambda-lambdaPrev)>1e-12&&++iter<200);
if(iter>=200)return {km:NaN,initialBearingDeg:null,finalBearingDeg:null,method:'no convergente',error:'Vincenty no converge en este par de puntos; no se presenta una distancia aproximada como exacta'};
const uSq=cosSqAlpha*(A*A-B*B)/(B*B);const bigA=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));const bigB=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));
const dSigma=bigB*sinSigma*(cos2SigmaM+bigB/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-bigB/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));
const meters=B*bigA*(sigma-dSigma);
const norm=x=>(x*180/Math.PI+360)%360;
const initial=Math.atan2(cU2*Math.sin(lambda),cU1*sU2-sU1*cU2*Math.cos(lambda));
const final=Math.atan2(cU1*Math.sin(lambda),-sU1*cU2+cU1*sU2*Math.cos(lambda));
return {km:meters/1000,initialBearingDeg:norm(initial),finalBearingDeg:norm(final),method:'WGS84 Vincenty'};
}
root.E6BGeodesy=Object.freeze({inverse});
})(typeof window!=='undefined'?window:globalThis);
