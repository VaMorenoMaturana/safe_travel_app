/* Travel Safety App — shared geographic data loader */
window.TravelSafetyData = (() => {
  async function loadGeoJSON(localUrl, remoteUrl) {
    try {
      const local = await fetch(localUrl, { cache: "no-store" });
      if (local.ok) {
        const data = await local.json();
        if (data && Array.isArray(data.features) && data.features.length) {
          return { data, source: "local" };
        }
      }
    } catch (_) {}

    if (!remoteUrl) throw new Error("No geographic source available.");

    const remote = await fetch(remoteUrl, { cache: "no-store" });
    if (!remote.ok) throw new Error("Remote geographic source unavailable.");
    const data = await remote.json();
    return { data, source: "online" };
  }

  return { loadGeoJSON };
})();
