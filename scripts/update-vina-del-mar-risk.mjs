import fs from "node:fs/promises";
const u="https://geoide.minvu.cl/server/rest/services/IPT/PRC_Valpara%C3%ADso/MapServer/63/query?where=1%3D1&outFields=OBJECTID%2CZONA%2CNOM%2CLOC%2COBS&returnGeometry=true&outSR=4326&f=geojson";
const r=await fetch(u);if(!r.ok)throw new Error(`HTTP ${r.status}`);
const g=await r.json();if(!g.features?.length)throw new Error("Sin polígonos.");
await fs.writeFile(new URL("../data/vina_del_mar_risk.geojson",import.meta.url),JSON.stringify(g,null,2),"utf8");
console.log(`Guardadas ${g.features.length} áreas de riesgo oficiales.`);
