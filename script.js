const japanLocations = [
  { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
  { name: "Yokohama", country: "Japan", lat: 35.4437, lng: 139.638 },
  { name: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5023 },
  { name: "Kyoto", country: "Japan", lat: 35.0116, lng: 135.7681 },
  { name: "Sapporo", country: "Japan", lat: 43.0618, lng: 141.3545 },
  { name: "Fukuoka", country: "Japan", lat: 33.5904, lng: 130.4017 },
  { name: "Nagoya", country: "Japan", lat: 35.1815, lng: 136.9066 },
  { name: "Hiroshima", country: "Japan", lat: 34.3853, lng: 132.4553 },
  { name: "Sendai", country: "Japan", lat: 38.2682, lng: 140.8694 },
  { name: "Kobe", country: "Japan", lat: 34.6901, lng: 135.1955 },
  { name: "Nara", country: "Japan", lat: 34.6851, lng: 135.8048 },
  { name: "Kanazawa", country: "Japan", lat: 36.5613, lng: 136.6562 },
  { name: "Niigata", country: "Japan", lat: 37.9162, lng: 139.0364 },
  { name: "Matsuyama", country: "Japan", lat: 33.8394, lng: 132.7658 },
  { name: "Takamatsu", country: "Japan", lat: 34.3504, lng: 134.0469 },
  { name: "Nagano", country: "Japan", lat: 36.6486, lng: 138.1951 },
  { name: "Okayama", country: "Japan", lat: 34.6553, lng: 133.9196 },
  { name: "Aomori", country: "Japan", lat: 40.8244, lng: 140.7400 },
  { name: "Akita", country: "Japan", lat: 39.7186, lng: 140.1024 },
  { name: "Morioka", country: "Japan", lat: 39.7001, lng: 141.1546 },
  { name: "Fukushima", country: "Japan", lat: 37.7608, lng: 140.4747 },
  { name: "Utsunomiya", country: "Japan", lat: 36.5658, lng: 139.8836 },
  { name: "Chiba", country: "Japan", lat: 35.6074, lng: 140.1061 },
  { name: "Saitama", country: "Japan", lat: 35.8617, lng: 139.6455 },
  { name: "Shizuoka", country: "Japan", lat: 34.9756, lng: 138.3827 },
  { name: "Gifu", country: "Japan", lat: 35.4233, lng: 136.7607 },
  { name: "Toyama", country: "Japan", lat: 36.6953, lng: 137.2137 },
  { name: "Kumamoto", country: "Japan", lat: 32.8031, lng: 130.7079 },
  { name: "Kagoshima", country: "Japan", lat: 31.5966, lng: 130.5571 },
  { name: "Miyazaki", country: "Japan", lat: 31.9078, lng: 131.4202 },
  { name: "Oita", country: "Japan", lat: 33.2382, lng: 131.6126 },
  { name: "Saga", country: "Japan", lat: 33.2494, lng: 130.2989 },
  { name: "Ehime", country: "Japan", lat: 33.8417, lng: 132.7660 },
  { name: "Tottori", country: "Japan", lat: 35.5039, lng: 134.2383 },
  { name: "Shimane", country: "Japan", lat: 35.4723, lng: 133.0505 },
  { name: "Yamaguchi", country: "Japan", lat: 34.1858, lng: 131.4714 },
  { name: "Yamagata", country: "Japan", lat: 38.2406, lng: 140.3636 },
  { name: "Ibaraki", country: "Japan", lat: 36.3416, lng: 140.4467 },
  { name: "Tochigi", country: "Japan", lat: 36.5658, lng: 139.8836 },
  { name: "Wakayama", country: "Japan", lat: 34.2261, lng: 135.1675 },
  { name: "Tokushima", country: "Japan", lat: 34.0658, lng: 134.5593 },
  { name: "Kochi", country: "Japan", lat: 33.5597, lng: 133.5311 },
  { name: "Mie", country: "Japan", lat: 34.7303, lng: 136.5086 },
  { name: "Aichi", country: "Japan", lat: 35.1802, lng: 136.9066 },
  { name: "Gunma", country: "Japan", lat: 36.3907, lng: 139.0607 },
  { name: "Ishikawa", country: "Japan", lat: 36.5949, lng: 136.6257 },
  { name: "Fukuoka", country: "Japan", lat: 33.5904, lng: 130.4017 },
  { name: "Kitakyushu", country: "Japan", lat: 33.8833, lng: 130.875 },
  { name: "Beppu", country: "Japan", lat: 33.2799, lng: 131.4955 },
  { name: "Naha", country: "Japan", lat: 26.2124, lng: 127.6792 },
  { name: "Ishigaki", country: "Japan", lat: 24.3468, lng: 124.1572 },
  { name: "Yonaguni", country: "Japan", lat: 24.4667, lng: 122.9785 },
  { name: "Hachijo", country: "Japan", lat: 33.1158, lng: 139.7913 },
  { name: "Sasebo", country: "Japan", lat: 33.1608, lng: 129.7159 },
  { name: "Yamagata", country: "Japan", lat: 38.2406, lng: 140.3636 },
  { name: "Fuji", country: "Japan", lat: 35.1949, lng: 138.6836 },
  { name: "Hakone", country: "Japan", lat: 35.2326, lng: 139.1064 },
  { name: "Kamakura", country: "Japan", lat: 35.3192, lng: 139.5469 },
  { name: "Nikko", country: "Japan", lat: 36.7203, lng: 139.6949 },
  { name: "Takayama", country: "Japan", lat: 36.1419, lng: 137.2527 },
  { name: "Matsumoto", country: "Japan", lat: 36.2417, lng: 137.9713 },
  { name: "Kinosaki", country: "Japan", lat: 35.623, lng: 134.818 },
  { name: "Naoshima", country: "Japan", lat: 34.4574, lng: 133.9983 },
  { name: "Himeji", country: "Japan", lat: 34.8158, lng: 134.6854 },
  { name: "Kawasaki", country: "Japan", lat: 35.5324, lng: 139.658 },
  { name: "Saitama", country: "Japan", lat: 35.8617, lng: 139.6455 },
  { name: "Akihabara", country: "Japan", lat: 35.6984, lng: 139.7731 },
  { name: "Asakusa", country: "Japan", lat: 35.7148, lng: 139.7967 },
  { name: "Shinjuku", country: "Japan", lat: 35.6938, lng: 139.7006 },
  { name: "Harajuku", country: "Japan", lat: 35.6705, lng: 139.7026 },
  { name: "Shibuya", country: "Japan", lat: 35.6595, lng: 139.7006 },
  { name: "Koenji", country: "Japan", lat: 35.7062, lng: 139.646 },
  { name: "Kashiwa", country: "Japan", lat: 35.8622, lng: 139.967 },
  { name: "Yokosuka", country: "Japan", lat: 35.2816, lng: 139.6711 },
  { name: "Otsu", country: "Japan", lat: 35.0172, lng: 135.8545 },
  { name: "Hamamatsu", country: "Japan", lat: 34.7108, lng: 137.7265 },
  { name: "Kobe", country: "Japan", lat: 34.6901, lng: 135.1955 },
  { name: "Hiroshima", country: "Japan", lat: 34.3853, lng: 132.4553 },
  { name: "Fukuoka", country: "Japan", lat: 33.5904, lng: 130.4017 }
];

let destinations = [...new Map(
  japanLocations.map((location) => [
    `${location.name}|${location.country}|${location.lat}|${location.lng}`,
    {
      ...location,
      id: 0,
    },
  ])
).values()].map((location, index) => ({
  ...location,
  id: index + 1,
}));

let destinationMap = new Map(destinations.map((item) => [item.id, item]));
let customDestinationSequence = Math.max(0, ...destinations.map((item) => item.id)) + 1;
const routeOrder = [];
const map = L.map("map", {
  zoomControl: true,
  worldCopyJump: true,
});

const destinationSearch = document.getElementById("destination-search");
const destinationList = document.getElementById("destination-list");
const routeList = document.getElementById("route-list");
const routeSummary = document.getElementById("route-summary");
const clearButton = document.getElementById("clear-route");
const selectAllButton = document.getElementById("select-all-visible");
const removeAllVisibleButton = document.getElementById("remove-all-visible");

let routeLayer = null;
let routeMarkers = [];
let routeMarkerBase = [];

const MARKER_SIZE = 40;

function getMarkerScaleForZoom() {
  const zoom = map.getZoom();
  if (zoom <= 2) return 0.55;
  if (zoom <= 4) return 0.72;
  if (zoom <= 6) return 0.85;
  return 1;
}

function updateMarkerScale() {
  const scale = getMarkerScaleForZoom();

  routeMarkers.forEach((marker) => {
    const iconElement = marker.getElement();
    if (!iconElement) return;

    const innerNode = iconElement.querySelector("div");
    if (!innerNode) return;

    innerNode.style.transform = `scale(${scale})`;
    innerNode.style.transformOrigin = "center center";
    innerNode.style.transition = "transform 0.15s ease-out";
  });
}

function applyMarkerShape(marker, isMerged) {
  const element = marker.getElement();
  if (!element) return;

  const innerNode = element.querySelector("div");
  if (!innerNode) return;

  const text = innerNode.textContent.trim();
  const width = isMerged ? Math.max(42, 10 + text.length * 8) : 35;
  const height = isMerged ? 30 : 35;
  const radius = isMerged ? "999px" : "50%";

  innerNode.style.width = `${width}px`;
  innerNode.style.height = `${height}px`;
  innerNode.style.minWidth = `${width}px`;
  innerNode.style.borderRadius = radius;
  innerNode.style.padding = isMerged ? "0 10px" : "0";
  innerNode.style.display = "flex";
  innerNode.style.alignItems = "center";
  innerNode.style.justifyContent = "center";
  innerNode.style.backgroundColor = "#dfe7ef";
  innerNode.style.border = "2px solid #102535";
  innerNode.style.fontWeight = "800";
  innerNode.style.fontSize = "16px";
  innerNode.style.color = "#102535";
  innerNode.style.boxSizing = "border-box";
  innerNode.style.lineHeight = "1";
  innerNode.style.whiteSpace = "nowrap";
  innerNode.style.transformOrigin = "center center";
}

function createMarkerIcon(label, size = MARKER_SIZE, isMerged = false) {
  const height = isMerged ? 30 : 35;
  const width = isMerged ? Math.max(42, 10 + label.length * 8) : 35;
  const borderRadius = isMerged ? "999px" : "50%";
  const html = `
    <div style="display: flex; align-items: center; justify-content: center; width: ${width}px; min-width: ${width}px; height: ${height}px; padding: ${isMerged ? '0 10px' : '0'}; background-color: #dfe7ef; border: 2px solid #102535; border-radius: ${borderRadius}; font-weight: 800; font-size: 16px; color: #102535; box-sizing: border-box; transform-origin: center; white-space: nowrap; line-height: 1;">${label}</div>
  `;

  return L.divIcon({
    html,
    iconSize: [width + (isMerged ? 16 : 0), height],
    iconAnchor: [((width + (isMerged ? 16 : 0)) / 2), height / 2],
    popupAnchor: [0, -(height / 2) - 10],
    className: isMerged ? "numbered-marker merged-marker" : "numbered-marker single-marker",
  });
}

function createNumberedMarker(number) {
  return createMarkerIcon(String(number), MARKER_SIZE, false);
}

function createOverlappedMarkerIcon(numbers) {
  const text = numbers.join("/");
  return createMarkerIcon(text, 40, true);
}

function rebuildRouteMarkersFromBase() {
  routeMarkers.forEach((marker) => map.removeLayer(marker));
  routeMarkers = routeMarkerBase.map(({ destination, number }) => {
    const marker = L.marker([destination.lat, destination.lng], {
      icon: createNumberedMarker(number),
      number,
    }).addTo(map);
    applyMarkerShape(marker, false);
    marker.bindPopup(`<strong>${number}. ${destination.name}</strong><br>${destination.country}`);
    return marker;
  });
}

function refreshMarkerLayout() {
  rebuildRouteMarkersFromBase();
  reconcileOverlappingMarkers();
  updateMarkerScale();
}

function reconcileOverlappingMarkers() {
  if (routeMarkers.length < 2) return;

  const records = routeMarkers
    .map((marker) => ({
      marker,
      number: Number(marker.options.number ?? 0),
      element: marker.getElement?.(),
      rect: marker.getElement?.()?.getBoundingClientRect?.() ?? null,
      latLng: marker.getLatLng(),
    }))
    .filter(({ rect }) => rect);

  if (!records.length) return;

  const groups = [];
  const used = new Set();

  for (let i = 0; i < records.length; i += 1) {
    if (used.has(i)) continue;

    const group = [i];
    used.add(i);

    for (let j = i + 1; j < records.length; j += 1) {
      if (used.has(j)) continue;

      const a = records[i].rect;
      const b = records[j].rect;
      const intersects = !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top);

      if (intersects) {
        group.push(j);
        used.add(j);
      }
    }

    groups.push(group);
  }

  const mergedMarkers = [];

  groups.forEach((group) => {
    const selected = group.map((index) => records[index]);

    if (selected.length === 1) {
      mergedMarkers.push(selected[0].marker);
      return;
    }

    const numbers = selected.map(({ number }) => number).sort((a, b) => a - b);
    const avgLat = selected.reduce((sum, { marker }) => sum + marker.getLatLng().lat, 0) / selected.length;
    const avgLng = selected.reduce((sum, { marker }) => sum + marker.getLatLng().lng, 0) / selected.length;

    selected.forEach(({ marker }) => map.removeLayer(marker));

    const mergedMarker = L.marker([avgLat, avgLng], {
      icon: createOverlappedMarkerIcon(numbers),
      number: numbers[0],
    }).addTo(map);
    applyMarkerShape(mergedMarker, true);
    mergedMarkers.push(mergedMarker);
  });

  routeMarkers = mergedMarkers;
  updateMarkerScale();
}

function initialiseMap() {
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
  }).addTo(map);

  map.setView([20, 0], 2);
  map.on("zoom", updateMarkerScale);
  map.on("zoomend", refreshMarkerLayout);
}

function normalizeDestinationKey(destination) {
  const name = (destination.name || "").trim().toLowerCase();
  const country = (destination.country || "").trim().toLowerCase();
  return `${name}|${country}`;
}

function dedupeSearchResults(results) {
  const seen = new Set();
  return results.filter((destination) => {
    const key = normalizeDestinationKey(destination);
    if (!key || seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function getLocalSearchResults(query) {
  const text = (query || "").trim();
  const normalized = text.toLowerCase();

  if (!normalized) {
    return dedupeSearchResults(destinations).slice(0, 5);
  }

  return dedupeSearchResults(
    destinations.filter((destination) => {
      const haystack = `${destination.name} ${destination.country}`.toLowerCase();
      return haystack.includes(normalized);
    })
  ).slice(0, 5);
}

function makeGeocodedDestination(result) {
  const coords = Array.isArray(result?.geometry?.coordinates) ? result.geometry.coordinates : [];
  const props = result?.properties || {};
  const lat = Number(coords[1]);
  const lng = Number(coords[0]);

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return null;
  }

  const name = props.name || props.city || props.state || props.country || "Destination";
  const country = props.country || "Unknown";
  const destination = {
    id: customDestinationSequence,
    name,
    country,
    lat,
    lng,
  };

  const existing = destinations.find((item) => normalizeDestinationKey(item) === normalizeDestinationKey(destination));
  if (existing) {
    return existing;
  }

  customDestinationSequence += 1;
  destinations.push(destination);
  destinationMap.set(destination.id, destination);
  return destination;
}

async function getVisibleDestinations() {
  const query = destinationSearch.value.trim();
  const localResults = getLocalSearchResults(query);
  if (!query) return localResults;

  try {
    const response = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) return localResults;

    const payload = await response.json();
    const geocodeResults = Array.isArray(payload?.features)
      ? payload.features
          .map((feature) => makeGeocodedDestination(feature))
          .filter(Boolean)
      : [];

    return dedupeSearchResults([...localResults, ...geocodeResults]).slice(0, 5);
  } catch (error) {
    console.warn("Address search failed:", error);
    return localResults;
  }
}

async function renderDestinationList() {
  const hasFocus = document.activeElement === destinationSearch;
  const hasQuery = destinationSearch.value.trim().length > 0;
  destinationList.classList.toggle("visible", hasFocus || hasQuery);

  const visible = await getVisibleDestinations();
  const uniqueVisible = Array.from(
    new Map(
      visible.map((destination) => [normalizeDestinationKey(destination), destination])
    ).values()
  ).slice(0, 5);

  if (!uniqueVisible.length) {
    destinationList.innerHTML = '<span class="empty-state">No cities or addresses match your search.</span>';
    return;
  }

  destinationList.innerHTML = uniqueVisible.map((destination) => {
    const isSelected = routeOrder.includes(destination.id);
    return `
      <button type="button" class="destination-suggestion" data-id="${destination.id}" ${isSelected ? "disabled" : ""}>
        <span class="destination-name">${destination.name}</span>
        <span class="destination-meta">${destination.country}</span>
      </button>
    `;
  }).join("");
}

function renderRouteList() {
  const selected = routeOrder.map((id) => destinationMap.get(id)).filter(Boolean);
  routeSummary.textContent = `${selected.length} ${selected.length === 1 ? "Destination" : "Destinations"}`;

  if (!selected.length) {
    routeList.innerHTML = '<span class="empty-state">No stops selected. Pick a few destinations to build a route.</span>';
    return;
  }

  routeList.innerHTML = selected.map((destination, index) => `
    <div class="route-item" draggable="true" data-id="${destination.id}">
      <span class="route-badge">${index + 1}</span>
      <span class="route-name">${destination.name}</span>
      <button class="route-action remove" type="button" data-action="remove" data-id="${destination.id}" aria-label="Remove ${destination.name}">×</button>
    </div>
  `).join("");
}

function reorderRouteByDrag(sourceId, targetId, insertBefore) {
  const sourceIndex = routeOrder.indexOf(sourceId);
  const targetIndex = routeOrder.indexOf(targetId);

  if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) {
    return;
  }

  const nextOrder = [...routeOrder];
  const [moved] = nextOrder.splice(sourceIndex, 1);

  let insertIndex = targetIndex;
  if (sourceIndex < targetIndex) {
    insertIndex = insertBefore ? targetIndex - 1 : targetIndex;
  } else {
    insertIndex = insertBefore ? targetIndex : targetIndex + 1;
  }

  if (insertIndex < 0) insertIndex = 0;
  if (insertIndex > nextOrder.length) insertIndex = nextOrder.length;

  nextOrder.splice(insertIndex, 0, moved);
  routeOrder.length = 0;
  routeOrder.push(...nextOrder);

  renderDestinationList();
  renderRouteList();
  buildRoutePolyline();
}

function getDropInsertion(targetEvent) {
  const items = [...routeList.querySelectorAll(".route-item")];
  if (!items.length) return null;

  const pointerY = targetEvent.clientY;
  const first = items[0].getBoundingClientRect();
  if (pointerY <= first.top + first.height / 2) {
    return { targetId: Number(items[0].dataset.id), insertBefore: true };
  }

  const last = items[items.length - 1].getBoundingClientRect();
  if (pointerY >= last.bottom - last.height / 2) {
    return { targetId: Number(items[items.length - 1].dataset.id), insertBefore: false };
  }

  for (let index = 0; index < items.length - 1; index += 1) {
    const current = items[index];
    const next = items[index + 1];
    const currentRect = current.getBoundingClientRect();
    const nextRect = next.getBoundingClientRect();

    if (pointerY >= currentRect.bottom && pointerY <= nextRect.top) {
      const midpoint = (currentRect.bottom + nextRect.top) / 2;
      return {
        targetId: Number(pointerY <= midpoint ? current.dataset.id : next.dataset.id),
        insertBefore: pointerY <= midpoint ? false : true,
      };
    }

    const currentMidpoint = (currentRect.top + currentRect.bottom) / 2;
    if (pointerY < currentMidpoint) {
      return { targetId: Number(current.dataset.id), insertBefore: true };
    }

    const nextMidpoint = (nextRect.top + nextRect.bottom) / 2;
    if (pointerY < nextMidpoint) {
      return { targetId: Number(next.dataset.id), insertBefore: true };
    }
  }

  const finalItem = items[items.length - 1];
  return { targetId: Number(finalItem.dataset.id), insertBefore: false };
}

function buildRoutePolyline() {
  const selected = routeOrder.map((id) => destinationMap.get(id)).filter(Boolean);

  if (routeLayer) {
    map.removeLayer(routeLayer);
    routeLayer = null;
  }

  routeMarkers.forEach((marker) => map.removeLayer(marker));
  routeMarkers = [];
  routeMarkerBase = [];

  if (selected.length < 2) {
    if (selected.length === 1) {
      const destination = selected[0];
      routeMarkerBase = [{ destination, number: 1 }];
      rebuildRouteMarkersFromBase();
      map.setView([destination.lat, destination.lng], 4);
      reconcileOverlappingMarkers();
    }
    return;
  }

  fetchRouteWithActualRoads(selected);
}

function decodePolyline(polyline) {
  const coordinates = [];
  let index = 0;
  let lat = 0;
  let lng = 0;

  while (index < polyline.length) {
    let byte = 0;
    let shift = 0;
    let result = 0;

    do {
      byte = polyline.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLat = (result & 1) ? ~(result >> 1) : (result >> 1);
    lat += deltaLat;

    shift = 0;
    result = 0;

    do {
      byte = polyline.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLng = (result & 1) ? ~(result >> 1) : (result >> 1);
    lng += deltaLng;

    coordinates.push([lat / 1e6, lng / 1e6]);
  }

  return coordinates;
}

async function fetchRouteWithActualRoads(destinations) {
  try {
    const payload = {
      locations: destinations.map((destination) => ({ lat: destination.lat, lon: destination.lng })),
      costing: "auto",
      units: "kilometers",
      shape_format: "polyline6",
    };

    const response = await fetch("https://valhalla1.openstreetmap.de/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    const legs = Array.isArray(data?.trip?.legs) ? data.trip.legs : [];

    if (legs.length > 0) {
      const combinedShapes = legs
        .map((leg) => leg?.shape)
        .filter(Boolean)
        .flatMap((shape) => decodePolyline(shape));

      const routeGeometry = combinedShapes.length
        ? combinedShapes.map(([lat, lng]) => [lat, lng])
        : legs.map((leg) => [leg?.end_location?.lat, leg?.end_location?.lon]).filter((point) => Number.isFinite(point[0]) && Number.isFinite(point[1]));

      routeLayer = L.polyline(routeGeometry, {
        color: "#6bd5ff",
        weight: 4,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);
    } else if (data?.trip?.locations) {
      const routeCoords = data.trip.locations.map((location) => [location.lat, location.lon]);
      routeLayer = L.polyline(routeCoords, {
        color: "#6bd5ff",
        weight: 4,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);
    }
  } catch (error) {
    console.error("Error fetching route:", error);
    const routeCoords = destinations.map((d) => [d.lat, d.lng]);
    routeLayer = L.polyline(routeCoords, {
      color: "#6bd5ff",
      weight: 4,
      opacity: 0.9,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(map);
  }

  routeMarkerBase = destinations.map((destination, index) => ({
    destination,
    number: index + 1,
  }));

  routeMarkers = routeMarkerBase.map(({ destination, number }) => {
    const marker = L.marker([destination.lat, destination.lng], {
      icon: createNumberedMarker(number),
      number,
    }).addTo(map);
    marker.bindPopup(`<strong>${number}. ${destination.name}</strong><br>${destination.country}`);
    return marker;
  });

  const bounds = L.latLngBounds(destinations.map((d) => [d.lat, d.lng]));
  map.fitBounds(bounds.pad(0.25));
  reconcileOverlappingMarkers();
  updateMarkerScale();
}

function moveRouteItem(id, direction) {
  const index = routeOrder.indexOf(id);
  if (index < 0) return;

  const targetIndex = direction === "up" ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= routeOrder.length) return;

  const next = [...routeOrder];
  [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
  routeOrder.length = 0;
  routeOrder.push(...next);

  renderDestinationList();
  renderRouteList();
  buildRoutePolyline();
}

function removeRouteItem(id) {
  const index = routeOrder.indexOf(id);
  if (index >= 0) routeOrder.splice(index, 1);

  renderDestinationList();
  renderRouteList();
  buildRoutePolyline();
}

function loadSampleRoute() {
  routeOrder.length = 0;
  const presetNames = [
    "Kobe",
    "Osaka",
    "Kyoto",
    "Nagoya",
    "Tokyo"
  ];

  const destinationIds = new Map(destinations.map((destination) => [destination.name, destination.id]));

  presetNames.forEach((name) => {
    const id = destinationIds.get(name);
    if (id !== undefined && !routeOrder.includes(id)) {
      routeOrder.push(id);
    }
  });

  destinationSearch.value = "";
  renderDestinationList();
  renderRouteList();
  buildRoutePolyline();
}

function setUpEvents() {
  destinationSearch.addEventListener("focus", () => {
    destinationList.classList.add("visible");
    renderDestinationList();
  });

  destinationSearch.addEventListener("blur", () => {
    window.setTimeout(() => {
      if (!destinationList.contains(document.activeElement)) {
        destinationList.classList.remove("visible");
      }
    }, 120);
  });

  destinationSearch.addEventListener("input", renderDestinationList);

  destinationList.addEventListener("click", (event) => {
    const target = event.target.closest(".destination-suggestion");
    if (!(target instanceof HTMLElement)) return;

    const id = Number(target.dataset.id);
    if (Number.isNaN(id) || routeOrder.includes(id)) return;

    routeOrder.push(id);
    destinationSearch.value = "";
    destinationList.classList.remove("visible");
    renderDestinationList();
    renderRouteList();
    buildRoutePolyline();
  });

  routeList.addEventListener("click", (event) => {
    const button = event.target;
    if (!(button instanceof HTMLElement)) return;
    const action = button.dataset.action;
    const id = Number(button.dataset.id);

    if (action === "remove") removeRouteItem(id);
  });

  routeList.addEventListener("dragstart", (event) => {
    const item = event.target.closest(".route-item");
    if (!item) return;

    const id = Number(item.dataset.id);
    item.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(id));
  });

  routeList.addEventListener("dragover", (event) => {
    event.preventDefault();

    const insertion = getDropInsertion(event);
    if (!insertion) return;

    const dragId = Number(event.dataTransfer.getData("text/plain"));
    const item = routeList.querySelector(`.route-item[data-id="${insertion.targetId}"]`);
    if (!item) return;

    routeList.querySelectorAll(".route-item.drop-before, .route-item.drop-after").forEach((el) => {
      el.classList.remove("drop-before", "drop-after");
    });

    if (Number.isNaN(dragId) || dragId === insertion.targetId) {
      return;
    }

    item.classList.toggle("drop-before", insertion.insertBefore);
    item.classList.toggle("drop-after", !insertion.insertBefore);
  });

  routeList.addEventListener("drop", (event) => {
    event.preventDefault();
    const insertion = getDropInsertion(event);
    if (!insertion) return;

    const sourceId = Number(event.dataTransfer.getData("text/plain"));
    const targetId = insertion.targetId;

    if (!Number.isNaN(sourceId) && !Number.isNaN(targetId) && sourceId !== targetId) {
      reorderRouteByDrag(sourceId, targetId, insertion.insertBefore);
    }

    routeList.querySelectorAll(".route-item.drop-before, .route-item.drop-after").forEach((el) => {
      el.classList.remove("drop-before", "drop-after");
    });
    routeList.querySelectorAll(".route-item.dragging").forEach((el) => el.classList.remove("dragging"));
  });

  routeList.addEventListener("dragend", () => {
    routeList.querySelectorAll(".route-item.dragging").forEach((el) => el.classList.remove("dragging"));
    routeList.querySelectorAll(".route-item.drop-before, .route-item.drop-after").forEach((el) => {
      el.classList.remove("drop-before", "drop-after");
    });
  });

  clearButton.addEventListener("click", () => {
    routeOrder.length = 0;
    destinationSearch.value = "";
    renderDestinationList();
    renderRouteList();
    buildRoutePolyline();
  });

}

initialiseMap();
setUpEvents();
renderDestinationList();
renderRouteList();
buildRoutePolyline();
loadSampleRoute();
