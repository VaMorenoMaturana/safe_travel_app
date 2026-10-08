import { writeFile } from "node:fs/promises";

const url = "https://services-eu1.arcgis.com/D7W6tpPbci66mak0/ArcGIS/rest/services/Guatemala_City_L%C3%ADmites/FeatureServer/11/query"
  + "?where=1%3D1&outFields=ZONA&returnGeometry=true&outSR=4326&f=geojson";

const response = await fetch(url);
if (!response.ok) throw new Error(`ArcGIS HTTP ${response.status}`);

const geojson = await response.json();
if (!geojson.features?.length) throw new Error("ArcGIS returned no zone features.");

await writeFile("data/guatemala.geojson", JSON.stringify(geojson));
console.log(`OK: ${geojson.features.length} zonas guardadas en data/guatemala.geojson`);
