# Travel Safety App

## Estructura

- `index.html` — portada.
- `guatemala.html` — aplicación de Guatemala City.
- `data/guatemala.geojson` — polígonos locales de zonas.
- `js/travel-safety-data.js` — cargador común: local primero, online como respaldo.
- `scripts/update-guatemala-zones.mjs` — actualiza el GeoJSON desde el servicio municipal.

## Actualizar las zonas de Guatemala

Con Node.js 18+:

```bash
node scripts/update-guatemala-zones.mjs
```

Esto descarga los polígonos del servicio municipal de ArcGIS y los guarda en:

`data/guatemala.geojson`

Después, Render servirá el archivo local y `guatemala.html` ya no dependerá de ArcGIS para dibujar las zonas.

## Nota

El GeoJSON incluido inicialmente es un contenedor vacío deliberado: no se deben inventar límites geográficos. El script de actualización obtiene la geometría verificable de la fuente municipal.
