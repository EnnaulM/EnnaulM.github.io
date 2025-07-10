
        const formData = [
            {
                question: "Main Construction Material",
                options: [
                    { value: 5, label: "Sand/Clay/Straw/Fabric" },
                    { value: 4, label: "Wood/Glass" },
                    { value: 3, label: "Rock/Brick" },
                    { value: 2, label: "Reinforced Concrete/Structural Steel" },
                    { value: 1, label: "Engineered Composite Material" }
                ]
            },
            {
                question: "Roof Condition",
                options: [
                    { value: 5, label: "Collapsing" },
                    { value: 4, label: "Severe Leaks" },
                    { value: 3, label: "Leaking" },
                    { value: 2, label: "Intact but Aging" },
                    { value: 1, label: "Storm Proof" }
                ]
            },
            {
                question: "Cracks in walls/foundation",
                options: [
                    { value: 5, label: "Severe" },
                    { value: 4, label: "Large cracks" },
                    { value: 3, label: "Minor" },
                    { value: 2, label: "Very Minor" },
                    { value: 1, label: "No Visible Cracks" }
                ]
            },
            {
                question: "Proximity to nearest hazard",
                options: [
                    { value: 5, label: "<100m" },
                    { value: 4, label: "100m - 300m" },
                    { value: 3, label: "500m" },
                    { value: 2, label: "1km - 2km" },
                    { value: 1, label: ">2km" }
                ]
            },
            {
                question: "Electricity Reliability",
                options: [
                    { value: 5, label: "Daily Outages" },
                    { value: 4, label: "Weekly Outages" },
                    { value: 3, label: "Monthly Outages" },
                    { value: 2, label: "Rare Outages" },
                    { value: 1, label: "Never Fails" }
                ]
            },
            {
                question: "Drinking Water Source",
                options: [
                    { value: 5, label: "Unreliable (open stream/pond)" },
                    { value: 4, label: "Shallow Well" },
                    { value: 3, label: "Public Tap" },
                    { value: 2, label: "Pipe (untreated)" },
                    { value: 1, label: "Pipe (treated)" }
                ]
            },
            {
                question: "Toilet Type",
                options: [
                    { value: 5, label: "Open Defecation" },
                    { value: 4, label: "Shared Pit Latrine" },
                    { value: 3, label: "Pit Latrine (private)" },
                    { value: 2, label: "Flush Toilet (no septic)" },
                    { value: 1, label: "Flush + septic" }
                ]
            },
            {
                question: "Fire Extinguisher/Blanket",
                options: [
                    { value: 5, label: "None" },
                    { value: 4, label: "Expired Extinguisher" },
                    { value: 3, label: "Extinguisher (no maintenance)" },
                    { value: 2, label: "Extinguisher (maintained)" },
                    { value: 1, label: "Extinguisher + Blanket" }
                ]
            },
            {
                question: "Emergency Exits",
                options: [
                    { value: 5, label: "Blocked" },
                    { value: 4, label: "Single Exit (partially blocked)" },
                    { value: 3, label: "Single Clear Exits" },
                    { value: 2, label: "Multiple Exits (narrow)" },
                    { value: 1, label: "Multiple Clear Exits" }
                ]
            },
            {
                question: "Staircase Safety",
                options: [
                    { value: 5, label: "Unstable" },
                    { value: 4, label: "No Handrails" },
                    { value: 3, label: "Basic Handrail" },
                    { value: 2, label: "Sturdy But Slippery" },
                    { value: 1, label: "Handrails + Non-slip Features" }
                ]
            },
            {
                question: "Window Protection",
                options: [
                    { value: 5, label: "No Shutters" },
                    { value: 4, label: "Improvised Covers" },
                    { value: 3, label: "Basic Shutters" },
                    { value: 2, label: "Storm Shutters" },
                    { value: 1, label: "Reinforced Glass" }
                ]
            },
            {
                question: "Gas/Cylinder Storage",
                options: [
                    { value: 5, label: "Indoors/Leaking" },
                    { value: 4, label: "Indoors (no leaks)" },
                    { value: 3, label: "Outdoor (unprotected)" },
                    { value: 2, label: "Outdoor (covered)" },
                    { value: 1, label: "Outdoor/Ventilated + locked" }
                ]
            },
            {
                question: "House Elevation",
                options: [
                    { value: 5, label: "Below Ground" },
                    { value: 4, label: "Ground Level" },
                    { value: 3, label: "Slightly Raised (0.3m)" },
                    { value: 2, label: "Raised (0.5 - 1m)" },
                    { value: 1, label: ">1m Raised" }
                ]
            },
            {
                question: "Mosquito Nets/Screens",
                options: [
                    { value: 5, label: "None" },
                    { value: 4, label: "Partial (some windows)" },
                    { value: 3, label: "Nets (no screens)" },
                    { value: 2, label: "Screens (some holes)" },
                    { value: 1, label: "All Windows Covered" }
                ]
            },
            {
                question: "Backup Generator/Solar",
                options: [
                    { value: 5, label: "None" },
                    { value: 4, label: "Flashlights Only" },
                    { value: 3, label: "Small Battery Bank" },
                    { value: 2, label: "Generator (unreliable fuel)" },
                    { value: 1, label: "Full Home Backup" }
                ]
            },
            {
                question: "First Aid Kit",
                options: [
                    { value: 5, label: "None" },
                    { value: 4, label: "Basic (band-aids only)" },
                    { value: 3, label: "Partial Supplies" },
                    { value: 2, label: "Stocked But Expired" },
                    { value: 1, label: "Fully Stocked" }
                ]
            },
            {
                question: "Household Clutter",
                options: [
                    { value: 5, label: "Severe" },
                    { value: 4, label: "Heavy Clutter" },
                    { value: 3, label: "Moderate" },
                    { value: 2, label: "Minimal" },
                    { value: 1, label: "None" }
                ]
            },
            {
                question: "Vehicle Access",
                options: [
                    { value: 5, label: "No Road" },
                    { value: 4, label: "Dirt Path (unstable)" },
                    { value: 3, label: "Gravel Road" },
                    { value: 2, label: "Paved (narrow)" },
                    { value: 1, label: "Paved Driveway" }
                ]
            },
            {
                question: "Nearest Neighbor Distance",
                options: [
                    { value: 5, label: "Isolated (>1km)" },
                    { value: 4, label: "Distant (500m - 1km)" },
                    { value: 3, label: "Moderate (200m -500m)" },
                    { value: 2, label: "Close (100m - 200m)" },
                    { value: 1, label: "Very Close (<100m)" }
                ]
            },
            {
                question: "Disaster Repairs in Past 5 Years",
                options: [
                    { value: 5, label: "Frequent" },
                    { value: 4, label: "Annual" },
                    { value: 3, label: "Occasional" },
                     { value: 2, label: "Rare" },
                    { value: 1, label: "Never" }
                ]
            }
        ];

let map, marker, userCoords, vulnerabilityScore, vicinityCircle, userAddress;
const users = [];
const MAX_VICINITY_RADIUS = 500;
const DISASTER_STATION = {
    name: "Disaster Response Station",
    coords: [16.41639, 120.59306]
};
let routeLayer = L.layerGroup();

function initMap() {
    map = L.map('map').setView(DISASTER_STATION.coords, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker(DISASTER_STATION.coords)
        .bindPopup(DISASTER_STATION.name)
        .addTo(map)
        .openPopup();
    
    routeLayer.addTo(map);
}

function constrainMarker(e) {
    const originalPos = L.latLng(userCoords);
    const newPos = e.target.getLatLng();
    const distance = originalPos.distanceTo(newPos);

    if (distance > MAX_VICINITY_RADIUS) {
        const originalPoint = map.project(originalPos);
        const newPoint = map.project(newPos);
        const vector = newPoint.subtract(originalPoint);
        const scaledVector = vector.multiplyBy(MAX_VICINITY_RADIUS * 0.9 / distance);
        const boundedPoint = originalPoint.add(scaledVector);
        const boundedLatLng = map.unproject(boundedPoint);
        e.target.setLatLng(boundedLatLng);
    }
}

async function updateAddressFromMarker() {
    if (!marker) return;
    const newCoords = marker.getLatLng();
    userCoords = [newCoords.lat, newCoords.lng];
    
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userCoords[0]}&lon=${userCoords[1]}`);
        const data = await response.json();
        if (data.display_name) {
            userAddress = data.display_name;
        }
    } catch (error) {
        console.error("Reverse geocoding error:", error);
    }
}

function processLocation(coords) {
    map.setView(coords, 16);

    if (marker) map.removeLayer(marker);
    if (vicinityCircle) map.removeLayer(vicinityCircle);

    vicinityCircle = L.circle(coords, {
        color: '#3498db',
        fillColor: '#2980b9',
        fillOpacity: 0.2,
        radius: MAX_VICINITY_RADIUS
    }).addTo(map);

    marker = L.marker(coords, {
        draggable: true,
        autoPan: true
    }).bindPopup('Your Location').addTo(map);

    marker.on('dragend', function(e) {
        constrainMarker(e);
        updateAddressFromMarker();
    });
    
    updateAddressFromMarker();
    document.getElementById('questionnaire-section').classList.remove('hidden');
    generateQuestionnaire();
}

async function searchAddress() {
    const addressInput = document.getElementById('address').value;
    if (!addressInput) return;
    
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addressInput)}`);
        const data = await response.json();
        
        if(data.length > 0) {
            userCoords = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
            userAddress = data[0].display_name;
            processLocation(userCoords);
        }
    } catch (error) {
        console.error("Error fetching address:", error);
        alert("Could not find the address. Please try again.");
    }
}

// Get current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                userCoords = [position.coords.latitude, position.coords.longitude];
                processLocation(userCoords);
            },
            error => {
                alert("Unable to get your location. Please enter your address manually.");
                console.error("Geolocation error:", error);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function generateQuestionnaire() {
    const questions = document.getElementById('questions');
    questions.innerHTML = '';
    
    formData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <label>${index + 1}. ${q.question}</label>
            <select id="q${index + 1}">
                ${q.options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
            </select>
        `;
        questions.appendChild(questionDiv);
    });
}

//vulnerability score
function calculateScore() {
    let total = 0;
    for(let i = 1; i <= formData.length; i++) {
        total += parseInt(document.getElementById(`q${i}`).value);
    }
    vulnerabilityScore = total / formData.length;
    processSubmission();
}

//distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
}

//user submission
function processSubmission() {
    const hazardLevel = Math.floor(Math.random() * 5) + 1;
    const riskValue = (vulnerabilityScore + hazardLevel) / 2;
    
    const distance = calculateDistance(
        userCoords[0], 
        userCoords[1],
        DISASTER_STATION.coords[0],
        DISASTER_STATION.coords[1]
    );

    users.push({
        address: userAddress,
        coords: userCoords,
        vulnerability: vulnerabilityScore.toFixed(2),
        hazard: hazardLevel.toFixed(2),
        risk: riskValue.toFixed(2),
        distance: distance
    });

    updateRecords();
    updateStats();
    
    if(users.length >= 3) showPriorityList();
}

function updateRecords() {
    const container = document.getElementById('records-container');
    container.innerHTML = `
        <div class="record record-header">
            <div class="record-grid">
                <div>Address</div>
                <div>V</div>
                <div>H</div>
                <div>R</div>
                <div>D (km)</div>
            </div>
        </div>
    `;
    
    users.forEach(user => {
        const record = document.createElement('div');
        record.className = 'record';
        
        let riskClass = 'risk-medium';
        if (user.risk > 3.5) riskClass = 'risk-high';
        else if (user.risk < 2) riskClass = 'risk-low';
        
        record.innerHTML = `
            <div class="record-grid">
                <div>${user.address.substring(0, 40)}...</div>
                <div>${user.vulnerability}</div>
                <div>${user.hazard}</div>
                <div class="${riskClass}">${user.risk}</div>
                <div>${user.distance.toFixed(2)}</div>
            </div>
        `;
        container.appendChild(record);
    });
}

// update stats
function updateStats() {
    document.getElementById('total-assessments').textContent = users.length;
    
    if (users.length > 0) {
        const avgVuln = users.reduce((sum, user) => sum + parseFloat(user.vulnerability), 0) / users.length;
        const avgRisk = users.reduce((sum, user) => sum + parseFloat(user.risk), 0) / users.length;
        
        document.getElementById('avg-vulnerability').textContent = avgVuln.toFixed(2);
        document.getElementById('avg-risk').textContent = avgRisk.toFixed(2);
    }
}

//priority list
function showPriorityList() {
    users.sort((a, b) => {
        const priorityA = a.risk * 0.7 + (1 / a.distance) * 0.3;
        const priorityB = b.risk * 0.7 + (1 / b.distance) * 0.3;
        return priorityB - priorityA;
    });

    const list = document.getElementById('priority-list');
    list.innerHTML = '';
    
    users.forEach((user, index) => {
        const priorityScore = (user.risk * 0.7 + (1 / user.distance) * 0.3).toFixed(2);
        
        let riskClass = 'risk-medium';
        if (user.risk > 3.5) riskClass = 'risk-high';
        else if (user.risk < 2) riskClass = 'risk-low';
        
        list.innerHTML += `
            <li>
                <strong>${user.address.substring(0, 35)}...</strong>
                <div>Vulnerability: ${user.vulnerability} | Risk: <span class="${riskClass}">${user.risk}</span></div>
                <div>Priority Score: ${priorityScore} | Distance: ${user.distance.toFixed(2)} km</div>
            </li>
        `;
    });

    routeLayer.clearLayers();
    const pathCoords = [DISASTER_STATION.coords];
    
    users.forEach((user, index) => {
        L.marker(user.coords, {
            icon: L.divIcon({
                className: 'priority-marker',
                html: `<div style="background: ${index === 0 ? '#e74c3c' : index === 1 ? '#f39c12' : '#3498db'};
                           width: 20px; 
                           height: 20px; 
                           border-radius: 50%; 
                           display: flex; 
                           justify-content: center; 
                           align-items: center; 
                           color: white;
                           font-weight: bold;
                           border: 2px solid white;
                           box-shadow: 0 0 8px rgba(0,0,0,0.5);">
                      ${index + 1}
                   </div>`
            })
        }).addTo(routeLayer);
        
        pathCoords.push(user.coords);
    });

    L.polyline(pathCoords, {
        color: '#ff4444',
        weight: 3,
        dashArray: '5,5'
    }).addTo(routeLayer);

    const bounds = L.latLngBounds([
        DISASTER_STATION.coords,
        ...users.map(u => u.coords)
    ]);
    map.fitBounds(bounds.pad(0.1));

    document.getElementById('results-section').classList.remove('hidden');
    window.scrollTo(0, document.body.scrollHeight);
}

// Initialize the application
window.onload = function() {
    initMap();
    
};
