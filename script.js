
tailwind.config = {
    theme: {
        extend: {
            colors: {
                cohereBlack: '#000000',
                nearBlack: '#17171c',
                deepGreen: '#003c33',
                darkNavy: '#071829',
                actionBlue: '#1863dc',
                coral: '#ff7759',
                softCoral: '#ffad9b',
                softStone: '#eeece7',
                paleGreen: '#edfce9',
                paleBlue: '#f1f5ff',
                cardBorder: '#f2f2f2',
                ink: '#212121',
                mutedSlate: '#93939f',
                slate: '#75758a',
                hairline: '#d9d9dd',
                borderLight: '#e5e7eb',
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui'],
                body: ['Inter', 'Arial', 'ui-sans-serif', 'system-ui'],
                mono: ['"Space Mono"', 'Courier New', 'monospace'],
            },
            borderRadius: {
                'xs': '4px',
                'sm': '8px',
                'md': '16px',
                'lg': '22px',
                'xl': '30px',
            }
        }
    }
}


const statsData = {
    "total_passengers": 129880,
    "satisfied_count": 56428,
    "dissatisfied_count": 73452,
    "satisfaction_rate": 43.44625808438558,
    "dissatisfied_rate": 56.55374191561441,
    "segments": {
        "Class": [
            { "value": "Business", "total": 62160, "satisfied": 43166, "dissatisfied": 18994, "loss_rate": 30.556628056628053 },
            { "value": "Economy", "total": 58309, "satisfied": 10943, "dissatisfied": 47366, "loss_rate": 81.23274280128282 },
            { "value": "Economy Plus", "total": 9411, "satisfied": 2319, "dissatisfied": 7092, "loss_rate": 75.35862288810966 }
        ],
        "Type of Travel": [
            { "value": "Business", "total": 89693, "satisfied": 52356, "dissatisfied": 37337, "loss_rate": 41.62755175989208 },
            { "value": "Personal", "total": 40187, "satisfied": 4072, "dissatisfied": 36115, "loss_rate": 89.86737004503944 }
        ],
        "Customer Type": [
            { "value": "First-time", "total": 23780, "satisfied": 5700, "dissatisfied": 18080, "loss_rate": 76.03027754415476 },
            { "value": "Returning", "total": 106100, "satisfied": 50728, "dissatisfied": 55372, "loss_rate": 52.188501413760605 }
        ],
        "Gender": [
            { "value": "Male", "total": 63981, "satisfied": 28159, "dissatisfied": 35822, "loss_rate": 55.98849658492365 },
            { "value": "Female", "total": 65899, "satisfied": 28269, "dissatisfied": 37630, "loss_rate": 57.10253569856902 }
        ],
        "Age Group": [
            { "value": "46-60", "total": 37464, "satisfied": 21515, "dissatisfied": 15949, "loss_rate": 42.571535340593634 },
            { "value": "31-45", "total": 41482, "satisfied": 20246, "dissatisfied": 21236, "loss_rate": 51.19328865532038 },
            { "value": "18-30", "total": 31033, "satisfied": 10927, "dissatisfied": 20106, "loss_rate": 64.78909547900622 },
            { "value": "Under 18", "total": 9847, "satisfied": 1647, "dissatisfied": 8200, "loss_rate": 83.27409363257846 },
            { "value": "Over 60", "total": 10054, "satisfied": 2093, "dissatisfied": 7961, "loss_rate": 79.18241495922021 }
        ]
    },
    "ratings_analysis": [
        { "service": "Online Boarding", "satisfied_avg": 4.025855958035018, "dissatisfied_avg": 2.6586205957632196, "gap": 1.3672353622717988, "overall_avg": 3.252633199876809 },
        { "service": "In-flight Entertainment", "satisfied_avg": 3.96420216913589, "dissatisfied_avg": 2.8924331536241357, "gap": 1.0717690155117543, "overall_avg": 3.358076686171851 },
        { "service": "Seat Comfort", "satisfied_avg": 3.9664173814418375, "dissatisfied_avg": 3.037997603877362, "gap": 0.9284197775644754, "overall_avg": 3.4413612565445026 },
        { "service": "On-board Service", "satisfied_avg": 3.856170695399447, "dissatisfied_avg": 3.0195365680988946, "gap": 0.8366341273005524, "overall_avg": 3.3830227902679395 },
        { "service": "Leg Room Service", "satisfied_avg": 3.8200538739632806, "dissatisfied_avg": 2.990442738114687, "gap": 0.8296111358485936, "overall_avg": 3.3508777332922697 },
        { "service": "Cleanliness", "satisfied_avg": 3.7465088254058267, "dissatisfied_avg": 2.9327996514730708, "gap": 0.813709173932756, "overall_avg": 3.286325839236218 },
        { "service": "In-flight Wifi Service", "satisfied_avg": 3.158609201105834, "dissatisfied_avg": 2.3984234602189183, "gap": 0.7601857408869157, "overall_avg": 2.7286957191253465 },
        { "service": "Check-in Service", "satisfied_avg": 3.649004040547246, "dissatisfied_avg": 3.042966835484398, "gap": 0.6060372050628482, "overall_avg": 3.3062673236834 },
        { "service": "Baggage Handling", "satisfied_avg": 3.9669135889983695, "dissatisfied_avg": 3.3749115068343953, "gap": 0.5920020821639742, "overall_avg": 3.632114259316292 },
        { "service": "In-flight Service", "satisfied_avg": 3.9709895796413126, "dissatisfied_avg": 3.3896013723247833, "gap": 0.5813882073165293, "overall_avg": 3.6421927933477054 },
        { "service": "Food and Drink", "satisfied_avg": 3.5254483589707237, "dissatisfied_avg": 2.958421826498938, "gap": 0.5670265324717856, "overall_avg": 3.2047736372035724 },
        { "service": "Ease of Online Booking", "satisfied_avg": 3.026954703338768, "dissatisfied_avg": 2.5493928007406197, "gap": 0.47756190259814835, "overall_avg": 2.7568755774561136 },
        { "service": "Gate Location", "satisfied_avg": 2.9728503579783085, "dissatisfied_avg": 2.9800550019060066, "gap": -0.00720464392769804, "overall_avg": 2.976924853711118 },
        { "service": "Departure and Arrival Time Convenience", "satisfied_avg": 2.963067980435245, "dissatisfied_avg": 3.13022109677068, "gap": -0.16715311633543495, "overall_avg": 3.0575993224514937 }
    ],
    "delay_analysis": {
        "avg_departure_delay_satisfied": 12.509782377543063,
        "avg_departure_delay_dissatisfied": 16.406837118117956,
        "avg_arrival_delay_satisfied": 12.496987311263911,
        "avg_arrival_delay_dissatisfied": 17.00328105429396
    }
};

// ----------------------------------------------------
// Ratings Gap Table rendering for Static Tab
// ----------------------------------------------------
function renderGapsTable() {
    const tbody = document.getElementById("gaps-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    statsData.ratings_analysis.forEach(item => {
        let gapColorClass = "text-slate font-semibold";
        if (item.gap >= 0.8) gapColorClass = "text-coral font-bold";
        else if (item.gap >= 0.4) gapColorClass = "text-actionBlue font-semibold";

        const tr = document.createElement("tr");
        tr.className = "hover:bg-softStone/30 transition-colors border-b border-hairline/35";
        tr.innerHTML = `
          <td class="py-2 px-1 font-medium text-nearBlack">${item.service}</td>
          <td class="py-2 px-1 text-right font-mono text-xs ${gapColorClass}">+${item.gap.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ----------------------------------------------------
// Tab Navigation Logic (Controls Hero Visibility)
// ----------------------------------------------------
function switchTab(tabId) {
    // Hide all contents
    document.querySelectorAll(".tab-content").forEach(el => {
        el.classList.add("hidden");
        el.classList.remove("block");
    });

    // Show selected content
    const targetEl = document.getElementById(`${tabId}-content`);
    targetEl.classList.remove("hidden");
    targetEl.classList.add("block");

    // Show/Hide hero based on tab selection
    const heroEl = document.getElementById("hero-section");
    if (tabId === 'dashboard') {
        heroEl.classList.remove("hidden");
        heroEl.classList.add("block");
    } else {
        heroEl.classList.remove("block");
        heroEl.classList.add("hidden");
    }

    // Update Dynamic Island tab buttons
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("bg-white", "text-nearBlack", "font-semibold");
        btn.classList.add("bg-transparent", "text-mutedSlate");
    });

    const activeBtn = document.getElementById(`tab-btn-${tabId}`);
    if (activeBtn) {
        activeBtn.classList.remove("bg-transparent", "text-mutedSlate");
        activeBtn.classList.add("bg-white", "text-nearBlack", "font-semibold");
    }

    // Pop animation on Dynamic Island
    const island = document.getElementById("dynamic-island");
    if (island) {
        island.classList.remove("island-active");
        void island.offsetWidth; // Trigger reflow to restart animation
        island.classList.add("island-active");
    }

    // If dynamic tab and charts are not initialized yet, initialize them
    if (tabId === 'customize') {
        initializeDynamicCharts();
    }

    // Resize charts to fit container change
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 80);
}

// ----------------------------------------------------
// CSV parsing and Mock Sampler logic
// ----------------------------------------------------
let allPassengers = [];
let isDataLoaded = false;

function parseCSVFast(text) {
    const lines = text.split('\n');
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;
        const values = line.split(',');
        if (values.length >= 24) {
            data.push({
                Gender: values[1],
                Age: parseInt(values[2]) || 0,
                CustomerType: values[3],
                TravelType: values[4],
                Class: values[5],
                FlightDistance: parseInt(values[6]) || 0,
                DepDelay: parseInt(values[7]) || 0,
                ArrDelay: parseInt(values[8]) || 0,

                // Ratings (0-5 scale)
                TimeConvenience: parseFloat(values[9]) || 0,
                Booking: parseFloat(values[10]) || 0,
                Checkin: parseFloat(values[11]) || 0,
                Boarding: parseFloat(values[12]) || 0,
                Gate: parseFloat(values[13]) || 0,
                Onboard: parseFloat(values[14]) || 0,
                Seat: parseFloat(values[15]) || 0,
                Legroom: parseFloat(values[16]) || 0,
                Cleanliness: parseFloat(values[17]) || 0,
                Food: parseFloat(values[18]) || 0,
                InflightService: parseFloat(values[19]) || 0,
                Wifi: parseFloat(values[20]) || 0,
                Entertainment: parseFloat(values[21]) || 0,
                Baggage: parseFloat(values[22]) || 0,

                Satisfaction: values[23].trim()
            });
        }
    }
    return data;
}

function generateMockDataset() {
    const data = [];
    const classes = ['Business', 'Economy', 'Economy Plus'];
    const travels = ['Business', 'Personal'];
    const customers = ['Returning', 'First-time'];
    const genders = ['Male', 'Female'];

    for (let i = 0; i < 5000; i++) {
        const gender = genders[Math.random() < 0.51 ? 1 : 0];
        const customer = Math.random() < 0.82 ? 'Returning' : 'First-time';
        const travel = Math.random() < 0.69 ? 'Business' : 'Personal';

        const rClass = Math.random();
        const cls = rClass < 0.48 ? 'Business' : (rClass < 0.93 ? 'Economy' : 'Economy Plus');

        const age = Math.floor(30 + Math.random() * 20) + (Math.random() < 0.3 ? -15 : 0) + (Math.random() < 0.15 ? 20 : 0);
        const flightDistance = Math.floor(Math.random() < 0.5 ? (300 + Math.random() * 800) : (1100 + Math.random() * 2000));

        const depDelay = Math.random() < 0.2 ? Math.floor(Math.random() * 45) : 0;
        const arrDelay = depDelay > 0 ? depDelay + Math.floor((Math.random() - 0.5) * 10) : 0;

        let satProb = 0.43;
        if (cls === 'Business') satProb += 0.25;
        if (cls === 'Economy') satProb -= 0.30;
        if (travel === 'Personal') satProb -= 0.35;
        if (customer === 'First-time') satProb -= 0.20;

        satProb = Math.max(0.05, Math.min(0.95, satProb));
        const isSat = Math.random() < satProb;
        const satisfaction = isSat ? 'Satisfied' : 'Neutral or Dissatisfied';

        const genRating = (baseSat, baseDissat) => {
            let base = isSat ? baseSat : baseDissat;
            let rating = Math.round(base + (Math.random() - 0.5) * 1.8);
            return Math.max(0, Math.min(5, rating));
        };

        data.push({
            Gender: gender,
            Age: age,
            CustomerType: customer,
            TravelType: travel,
            Class: cls,
            FlightDistance: flightDistance,
            DepDelay: Math.max(0, depDelay),
            ArrDelay: Math.max(0, arrDelay),

            Boarding: genRating(4.0, 2.6),
            Entertainment: genRating(4.0, 2.9),
            Seat: genRating(4.0, 3.0),
            Onboard: genRating(3.9, 3.0),
            Legroom: genRating(3.8, 3.0),
            Cleanliness: genRating(3.7, 2.9),
            Wifi: genRating(3.2, 2.4),
            Checkin: genRating(3.6, 3.0),
            Baggage: genRating(4.0, 3.4),
            InflightService: genRating(4.0, 3.4),
            Food: genRating(3.5, 3.0),
            Booking: genRating(3.0, 2.5),
            Gate: genRating(3.0, 3.0),
            TimeConvenience: genRating(3.0, 3.1),

            Satisfaction: satisfaction
        });
    }
    return data;
}

function loadDataset() {
    fetch('airline_passenger_satisfaction.csv')
        .then(response => {
            if (!response.ok) throw new Error("File fetch error");
            return response.text();
        })
        .then(text => {
            allPassengers = parseCSVFast(text);
            isDataLoaded = true;

            // Enable controls
            document.getElementById('filter-controls-box').classList.remove('opacity-50', 'pointer-events-none');

            if (document.getElementById("customize-content").classList.contains("block")) {
                updateDynamicDashboard();
            }
        })
        .catch(err => {
            console.warn('CORS or fetch blocked access to local CSV. Falling back to high-fidelity mock dataset.');
            allPassengers = generateMockDataset();
            isDataLoaded = true;

            // Enable controls
            document.getElementById('filter-controls-box').classList.remove('opacity-50', 'pointer-events-none');

            if (document.getElementById("customize-content").classList.contains("block")) {
                updateDynamicDashboard();
            }
        });
}

// ----------------------------------------------------
// Dynamic Filter Dashboard update logic
// ----------------------------------------------------
function updateDynamicDashboard() {
    if (!isDataLoaded) return;

    document.getElementById('dyn-refresh-icon').classList.remove('hidden');

    // Get values
    const gender = document.getElementById('filter-gender').value;
    const customer = document.getElementById('filter-customer').value;
    const tClass = document.getElementById('filter-class').value;
    const travel = document.getElementById('filter-travel').value;
    const wifi = parseInt(document.getElementById('filter-wifi').value);
    const boarding = parseInt(document.getElementById('filter-boarding').value);
    const age = parseInt(document.getElementById('filter-age').value);
    const delay = parseInt(document.getElementById('filter-delay').value);

    // Perform fast filtering
    const filtered = allPassengers.filter(p => {
        if (gender !== 'All' && p.Gender !== gender) return false;
        if (customer !== 'All' && p.CustomerType !== customer) return false;
        if (tClass !== 'All' && p.Class !== tClass) return false;
        if (travel !== 'All' && p.TravelType !== travel) return false;
        if (p.Wifi < wifi) return false;
        if (p.Boarding < boarding) return false;
        if (p.Age > age) return false;
        if (p.DepDelay > delay && p.ArrDelay > delay) return false;
        return true;
    });

    const total = filtered.length;

    if (total === 0) {
        document.getElementById('dyn-kpi-total').innerText = '0';
        document.getElementById('dyn-kpi-loss-rate').innerText = '0.00%';
        document.getElementById('dyn-kpi-loss-count').innerText = '0 passengers';
        document.getElementById('dyn-kpi-sat-rate').innerText = '0.00%';
        document.getElementById('dyn-kpi-sat-count').innerText = '0 passengers';
        document.getElementById('dyn-kpi-eco-rate').innerText = '0.00%';
        document.getElementById('dyn-kpi-eco-count').innerText = '0 seats';
        document.getElementById('dyn-status-text').innerText = 'No passengers match current filter conditions.';
        document.getElementById('dyn-refresh-icon').classList.add('hidden');
        return;
    }

    // Math
    const satisfied = filtered.filter(p => p.Satisfaction === 'Satisfied').length;
    const dissatisfied = total - satisfied;
    const satRate = (satisfied / total) * 100;
    const dissatRate = (dissatisfied / total) * 100;

    const economyPass = filtered.filter(p => p.Class === 'Economy');
    const economyTotal = economyPass.length;
    const economyDissat = economyPass.filter(p => p.Satisfaction === 'Neutral or Dissatisfied').length;
    const economyLossRate = economyTotal > 0 ? (economyDissat / economyTotal) * 100 : 0;

    // Update Texts
    document.getElementById('dyn-kpi-total').innerText = total.toLocaleString();
    document.getElementById('dyn-kpi-loss-rate').innerText = dissatRate.toFixed(2) + '%';
    document.getElementById('dyn-kpi-loss-count').innerText = dissatisfied.toLocaleString() + ' passengers';
    document.getElementById('dyn-kpi-sat-rate').innerText = satRate.toFixed(2) + '%';
    document.getElementById('dyn-kpi-sat-count').innerText = satisfied.toLocaleString() + ' passengers';
    document.getElementById('dyn-kpi-eco-rate').innerText = economyLossRate.toFixed(2) + '%';
    document.getElementById('dyn-kpi-eco-count').innerText = economyDissat.toLocaleString() + ' Economy seats';

    document.getElementById('dyn-status-text').innerText = `Showing ${total.toLocaleString()} of ${allPassengers.length.toLocaleString()} matching passengers`;

    // Update Donut
    chartDynOverall.updateSeries([satisfied, dissatisfied]);

    // Update Segment Loss Rates
    const segments = [
        { label: 'Personal Travel', filter: p => p.TravelType === 'Personal' },
        { label: 'Economy Class', filter: p => p.Class === 'Economy' },
        { label: 'First-time Customer', filter: p => p.CustomerType === 'First-time' },
        { label: 'Economy Plus Class', filter: p => p.Class === 'Economy Plus' },
        { label: 'Returning Customer', filter: p => p.CustomerType === 'Returning' },
        { label: 'Female', filter: p => p.Gender === 'Female' },
        { label: 'Male', filter: p => p.Gender === 'Male' },
        { label: 'Business Travel', filter: p => p.TravelType === 'Business' },
        { label: 'Business Class', filter: p => p.Class === 'Business' }
    ];

    const segLossRates = segments.map(seg => {
        const sub = filtered.filter(seg.filter);
        const subTot = sub.length;
        if (subTot === 0) return 0;
        const subDissat = sub.filter(p => p.Satisfaction === 'Neutral or Dissatisfied').length;
        return (subDissat / subTot) * 100;
    });
    chartDynSegments.updateSeries([{ data: segLossRates }]);

    // Update Age Satisfaction Columns
    const ageGroups = [
        { label: 'Under 18', filter: p => p.Age < 18 },
        { label: '18-30', filter: p => p.Age >= 18 && p.Age <= 30 },
        { label: '31-45', filter: p => p.Age >= 31 && p.Age <= 45 },
        { label: '46-60', filter: p => p.Age >= 46 && p.Age <= 60 },
        { label: 'Over 60', filter: p => p.Age > 60 }
    ];

    const satisfiedFiltered = filtered.filter(p => p.Satisfaction === 'Satisfied');
    const dissatisfiedFiltered = filtered.filter(p => p.Satisfaction === 'Neutral or Dissatisfied');

    const ageSats = ageGroups.map(g => filtered.filter(g.filter).filter(p => p.Satisfaction === 'Satisfied').length);
    const ageDissats = ageGroups.map(g => filtered.filter(g.filter).filter(p => p.Satisfaction === 'Neutral or Dissatisfied').length);
    chartDynAge.updateSeries([
        { name: 'Satisfied', data: ageSats },
        { name: 'Neutral/Dissatisfied (Loss)', data: ageDissats }
    ]);

    // Update Delays impact
    const avgDepSat = satisfiedFiltered.length > 0 ? satisfiedFiltered.reduce((sum, p) => sum + p.DepDelay, 0) / satisfiedFiltered.length : 0;
    const avgArrSat = satisfiedFiltered.length > 0 ? satisfiedFiltered.reduce((sum, p) => sum + p.ArrDelay, 0) / satisfiedFiltered.length : 0;
    const avgDepDissat = dissatisfiedFiltered.length > 0 ? dissatisfiedFiltered.reduce((sum, p) => sum + p.DepDelay, 0) / dissatisfiedFiltered.length : 0;
    const avgArrDissat = dissatisfiedFiltered.length > 0 ? dissatisfiedFiltered.reduce((sum, p) => sum + p.ArrDelay, 0) / dissatisfiedFiltered.length : 0;
    chartDynDelay.updateSeries([
        { name: 'Satisfied Passengers', data: [avgDepSat, avgArrSat] },
        { name: 'Dissatisfied Passengers (Loss)', data: [avgDepDissat, avgArrDissat] }
    ]);

    // Update Gaps Map
    const ratingAttributes = [
        { key: 'Boarding', label: 'Online Boarding' },
        { key: 'Entertainment', label: 'In-flight Entertainment' },
        { key: 'Seat', label: 'Seat Comfort' },
        { key: 'Onboard', label: 'On-board Service' },
        { key: 'Legroom', label: 'Leg Room Service' },
        { key: 'Cleanliness', label: 'Cleanliness' },
        { key: 'Wifi', label: 'In-flight Wifi Service' },
        { key: 'Checkin', label: 'Check-in Service' },
        { key: 'Baggage', label: 'Baggage Handling' },
        { key: 'InflightService', label: 'In-flight Service' },
        { key: 'Food', label: 'Food and Drink' },
        { key: 'Booking', label: 'Ease of Online Booking' },
        { key: 'Gate', label: 'Gate Location' },
        { key: 'TimeConvenience', label: 'Departure and Arrival Time Convenience' }
    ];

    const satN = satisfiedFiltered.length;
    const dissatN = dissatisfiedFiltered.length;

    const calculatedGaps = ratingAttributes.map(attr => {
        const satAvg = satN > 0 ? satisfiedFiltered.reduce((sum, p) => sum + p[attr.key], 0) / satN : 0;
        const dissatAvg = dissatN > 0 ? dissatisfiedFiltered.reduce((sum, p) => sum + p[attr.key], 0) / dissatN : 0;
        return { label: attr.label, gap: satAvg - dissatAvg };
    });

    calculatedGaps.sort((a, b) => b.gap - a.gap);

    const gapVals = calculatedGaps.map(g => g.gap);
    const gapLabels = calculatedGaps.map(g => g.label);
    const gapColors = gapVals.map(val => {
        if (val >= 0.8) return '#ff7759'; // High Coral
        if (val >= 0.4) return '#1863dc'; // Mid Blue
        return '#75758a'; // Low Muted
    });

    chartDynGaps.updateOptions({
        colors: gapColors,
        xaxis: { categories: gapLabels }
    });
    chartDynGaps.updateSeries([{ data: gapVals }]);

    // Update table
    const tbody = document.getElementById("dyn-gaps-table-body");
    tbody.innerHTML = "";
    calculatedGaps.forEach(item => {
        let gapColorClass = "text-slate font-semibold";
        if (item.gap >= 0.8) gapColorClass = "text-coral font-bold";
        else if (item.gap >= 0.4) gapColorClass = "text-actionBlue font-semibold";

        const tr = document.createElement("tr");
        tr.className = "hover:bg-softStone/30 transition-colors border-b border-hairline/35";
        tr.innerHTML = `
          <td class="py-2 px-1 font-medium text-nearBlack">${item.label}</td>
          <td class="py-2 px-1 text-right font-mono text-xs ${gapColorClass}">+${item.gap.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('dyn-refresh-icon').classList.add('hidden');
}

function setPillFilter(el, category, value) {
    document.getElementById(`filter-${category}`).value = value;

    const container = el.parentElement;
    container.querySelectorAll('button').forEach(btn => {
        btn.className = "px-3.5 py-1.5 rounded-full border border-hairline bg-transparent text-slate hover:border-nearBlack hover:text-nearBlack text-xs font-semibold transition-all focus:outline-none cursor-pointer";
    });

    el.className = "px-3.5 py-1.5 rounded-full border border-nearBlack bg-nearBlack text-white text-xs font-semibold transition-all focus:outline-none cursor-pointer";

    updateDynamicDashboard();
}

function resetFilters() {
    document.getElementById('filter-gender').value = 'All';
    document.getElementById('filter-customer').value = 'All';
    document.getElementById('filter-class').value = 'All';
    document.getElementById('filter-travel').value = 'All';
    document.getElementById('filter-wifi').value = '0';
    document.getElementById('lbl-filter-wifi').innerText = '0';
    document.getElementById('filter-boarding').value = '0';
    document.getElementById('lbl-filter-boarding').innerText = '0';
    document.getElementById('filter-age').value = '85';
    document.getElementById('lbl-filter-age').innerText = '85';
    document.getElementById('filter-delay').value = '180';
    document.getElementById('lbl-filter-delay').innerText = '180m';

    // Reset pills active styling
    document.querySelectorAll('#pill-gender button, #pill-customer button, #pill-class button, #pill-travel button').forEach(btn => {
        btn.className = "px-3.5 py-1.5 rounded-full border border-hairline bg-transparent text-slate hover:border-nearBlack hover:text-nearBlack text-xs font-semibold transition-all focus:outline-none cursor-pointer";
    });

    document.getElementById('pill-gender-all').className = "px-3.5 py-1.5 rounded-full border border-nearBlack bg-nearBlack text-white text-xs font-semibold transition-all focus:outline-none cursor-pointer";
    document.getElementById('pill-customer-all').className = "px-3.5 py-1.5 rounded-full border border-nearBlack bg-nearBlack text-white text-xs font-semibold transition-all focus:outline-none cursor-pointer";
    document.getElementById('pill-class-all').className = "px-3.5 py-1.5 rounded-full border border-nearBlack bg-nearBlack text-white text-xs font-semibold transition-all focus:outline-none cursor-pointer";
    document.getElementById('pill-travel-all').className = "px-3.5 py-1.5 rounded-full border border-nearBlack bg-nearBlack text-white text-xs font-semibold transition-all focus:outline-none cursor-pointer";

    updateDynamicDashboard();
}


// ----------------------------------------------------
// APEXCHARTS INITIALIZATION (SHADCN VISUAL STYLE)
// ----------------------------------------------------
const chartThemeOptions = {
    fontFamily: 'Inter, sans-serif',
    grid: {
        borderColor: '#f2f2f2',
        strokeDashArray: 3,
        padding: { top: 0, right: 10, bottom: 0, left: 10 }
    },
    legend: {
        fontSize: '11px',
        fontWeight: 500,
        markers: { radius: 12 },
        labels: { colors: '#212121' }
    },
    tooltip: {
        theme: 'light',
        style: { fontSize: '12px', fontFamily: 'Inter' }
    }
};

// Dynamic charts holders
let chartDynOverall, chartDynSegments, chartDynAge, chartDynDelay, chartDynGaps;
let isDynamicChartsInitialized = false;

function initializeDynamicCharts() {
    if (isDynamicChartsInitialized) return;
    isDynamicChartsInitialized = true;

    // Donut Overall
    const overallSplitOptions = {
        series: [0, 0],
        chart: { type: 'donut', height: 240, fontFamily: chartThemeOptions.fontFamily },
        labels: ['Satisfied', 'Neutral or Dissatisfied (Loss)'],
        colors: ['#003c33', '#ff7759'],
        stroke: { show: false },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'PASSENGERS',
                            fontSize: '9px',
                            fontFamily: 'Space Mono',
                            fontWeight: 700,
                            color: '#93939f',
                            formatter: function (w) {
                                return (w.globals.seriesTotals.reduce((a, b) => a + b, 0)).toLocaleString();
                            }
                        },
                        value: {
                            fontSize: '22px',
                            fontWeight: 700,
                            color: '#17171c',
                            formatter: function (val) { return Number(val).toLocaleString(); }
                        }
                    }
                }
            }
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: function (val, { globals }) {
                    const totalVal = globals.seriesTotals.reduce((a, b) => a + b, 0);
                    const pct = totalVal > 0 ? ((val / totalVal) * 100).toFixed(1) : 0;
                    return `${Number(val).toLocaleString()} (${pct}%)`;
                }
            }
        }
    };
    chartDynOverall = new ApexCharts(document.querySelector("#dynamic-chart-overall-split"), overallSplitOptions);
    chartDynOverall.render();

    // Segment Loss Horizontal Bar
    const segmentLossOptions = {
        series: [{ name: 'Loss Rate (Dissatisfied %)', data: [] }],
        chart: { type: 'bar', height: 250, fontFamily: chartThemeOptions.fontFamily, toolbar: { show: false } },
        plotOptions: {
            bar: { horizontal: true, barHeight: '65%', borderRadius: 3, distributed: true }
        },
        colors: ['#ff7759', '#ff7759', '#ff7759', '#ff7759', '#75758a', '#75758a', '#75758a', '#1863dc', '#003c33'],
        dataLabels: {
            enabled: true,
            textAnchor: 'end',
            formatter: function (val) { return val.toFixed(1) + "%"; },
            style: { fontSize: '10px', colors: ['#fff'] }
        },
        grid: chartThemeOptions.grid,
        xaxis: {
            categories: ['Personal Travel', 'Economy Class', 'First-time Customer', 'Economy Plus Class', 'Returning Customer', 'Female', 'Male', 'Business Travel', 'Business Class'],
            labels: { style: { fontSize: '10px' } }
        },
        yaxis: { labels: { style: { fontSize: '10px', fontWeight: 500 } } },
        legend: { show: false },
        tooltip: { y: { formatter: function (val) { return val.toFixed(1) + "% dissatisfied"; } } }
    };
    chartDynSegments = new ApexCharts(document.querySelector("#dynamic-chart-segment-loss"), segmentLossOptions);
    chartDynSegments.render();

    // Age Group Columns
    const ageSatisfactionOptions = {
        series: [
            { name: 'Satisfied', data: [] },
            { name: 'Neutral/Dissatisfied (Loss)', data: [] }
        ],
        chart: { type: 'bar', height: 270, stacked: true, fontFamily: chartThemeOptions.fontFamily, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: false, columnWidth: '50%', borderRadius: 4 } },
        colors: ['#003c33', '#ff7759'],
        grid: chartThemeOptions.grid,
        xaxis: { categories: ['Under 18', '18-30', '31-45', '46-60', 'Over 60'], labels: { style: { fontSize: '10px' } } },
        yaxis: {
            labels: {
                style: { fontSize: '10px' },
                formatter: function (val) { return val >= 1000 ? (val / 1000).toFixed(1) + "k" : val; }
            }
        },
        legend: { position: 'top', horizontalAlign: 'center', fontSize: '11px', markers: { radius: 12 } },
        dataLabels: { enabled: false },
        tooltip: { y: { formatter: function (val) { return Number(val).toLocaleString() + " passengers"; } } }
    };
    chartDynAge = new ApexCharts(document.querySelector("#dynamic-chart-age-satisfaction"), ageSatisfactionOptions);
    chartDynAge.render();

    // Delays columns
    const delayImpactOptions = {
        series: [
            { name: 'Satisfied Passengers', data: [] },
            { name: 'Dissatisfied Passengers (Loss)', data: [] }
        ],
        chart: { type: 'bar', height: 270, fontFamily: chartThemeOptions.fontFamily, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: false, columnWidth: '45%', borderRadius: 3 } },
        colors: ['#1863dc', '#75758a'],
        dataLabels: { enabled: false },
        grid: chartThemeOptions.grid,
        xaxis: { categories: ['Departure Delay', 'Arrival Delay'], labels: { style: { fontSize: '10px' } } },
        yaxis: {
            title: { text: 'Average Delay (minutes)', style: { fontSize: '10px', fontWeight: 500 } },
            labels: { style: { fontSize: '10px' } }
        },
        legend: { position: 'top', horizontalAlign: 'center', fontSize: '11px' },
        tooltip: { y: { formatter: function (val) { return val.toFixed(1) + " minutes avg"; } } }
    };
    chartDynDelay = new ApexCharts(document.querySelector("#dynamic-chart-delay-impact"), delayImpactOptions);
    chartDynDelay.render();

    // Gaps Map
    const ratingGapsOptions = {
        series: [{ name: 'Rating Perception Gap', data: [] }],
        chart: { type: 'bar', height: 380, fontFamily: chartThemeOptions.fontFamily, toolbar: { show: false } },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '70%',
                borderRadius: 3,
                colors: { ranges: [{ from: -2.0, to: 0.0, color: '#75758a' }] }
            }
        },
        colors: [],
        grid: chartThemeOptions.grid,
        dataLabels: {
            enabled: true,
            formatter: function (val) { return val.toFixed(2); },
            style: { fontSize: '10px', fontFamily: 'Space Mono' }
        },
        xaxis: { categories: [], labels: { style: { fontSize: '9px' } } },
        yaxis: { labels: { style: { fontSize: '10px', fontWeight: 500 } } },
        legend: { show: false },
        tooltip: { y: { formatter: function (val) { return val.toFixed(2) + " rating gap"; } } }
    };
    chartDynGaps = new ApexCharts(document.querySelector("#dynamic-chart-rating-gaps"), ratingGapsOptions);
    chartDynGaps.render();

    // Trigger load data updates
    updateDynamicDashboard();
}


window.onload = function () {
    // 1. Render gaps list table
    renderGapsTable();

    // 2. Load Lucide icons
    lucide.createIcons();

    // 3. Trigger CSV Dataset load in background
    loadDataset();

    // 4. Initialize static Dashboard Charts
    // Donut split
    const overallSplitOptions = {
        series: [statsData.satisfied_count, statsData.dissatisfied_count],
        chart: { type: 'donut', height: 240, fontFamily: chartThemeOptions.fontFamily },
        labels: ['Satisfied', 'Neutral or Dissatisfied (Loss)'],
        colors: ['#003c33', '#ff7759'],
        stroke: { show: false },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'PASSENGERS',
                            fontSize: '9px',
                            fontFamily: 'Space Mono',
                            fontWeight: 700,
                            color: '#93939f',
                            formatter: function (w) { return (w.globals.seriesTotals.reduce((a, b) => a + b, 0)).toLocaleString(); }
                        },
                        value: { fontSize: '22px', fontWeight: 700, color: '#17171c', formatter: function (val) { return val.toLocaleString(); } }
                    }
                }
            }
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: function (val) {
                    const pct = ((val / statsData.total_passengers) * 100).toFixed(1);
                    return `${val.toLocaleString()} (${pct}%)`;
                }
            }
        }
    };
    const chartOverall = new ApexCharts(document.querySelector("#chart-overall-split"), overallSplitOptions);
    chartOverall.render();

    // Segment loss Horizontal Bar
    const segmentLabels = ['Personal Travel', 'Economy Class', 'First-time Customer', 'Economy Plus Class', 'Returning Customer', 'Female', 'Male', 'Business Travel', 'Business Class'];
    const segmentLossValues = [89.87, 81.23, 76.03, 75.36, 52.19, 57.10, 55.99, 41.63, 30.56];

    const segmentLossOptions = {
        series: [{ name: 'Loss Rate (Dissatisfied %)', data: segmentLossValues }],
        chart: { type: 'bar', height: 250, fontFamily: chartThemeOptions.fontFamily, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: true, barHeight: '65%', borderRadius: 3, distributed: true } },
        colors: ['#ff7759', '#ff7759', '#ff7759', '#ff7759', '#75758a', '#75758a', '#75758a', '#1863dc', '#003c33'],
        dataLabels: {
            enabled: true,
            textAnchor: 'end',
            formatter: function (val) { return val.toFixed(1) + "%"; },
            style: { fontSize: '10px', colors: ['#fff'] }
        },
        grid: chartThemeOptions.grid,
        xaxis: { categories: segmentLabels, labels: { style: { fontSize: '10px' } } },
        yaxis: { labels: { style: { fontSize: '10px', fontWeight: 500 } } },
        legend: { show: false },
        tooltip: { y: { formatter: function (val) { return val + "% dissatisfied"; } } }
    };
    const chartSegments = new ApexCharts(document.querySelector("#chart-segment-loss"), segmentLossOptions);
    chartSegments.render();

    // Stacked columns for Age splits
    const ageLabels = statsData.segments['Age Group'].map(a => a.value);
    const ageSatisfied = statsData.segments['Age Group'].map(a => a.satisfied);
    const ageDissatisfied = statsData.segments['Age Group'].map(a => a.dissatisfied);

    const ageSatisfactionOptions = {
        series: [
            { name: 'Satisfied', data: ageSatisfied },
            { name: 'Neutral/Dissatisfied (Loss)', data: ageDissatisfied }
        ],
        chart: { type: 'bar', height: 270, stacked: true, fontFamily: chartThemeOptions.fontFamily, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: false, columnWidth: '50%', borderRadius: 4 } },
        colors: ['#003c33', '#ff7759'],
        grid: chartThemeOptions.grid,
        xaxis: { categories: ageLabels, labels: { style: { fontSize: '10px' } } },
        yaxis: { labels: { style: { fontSize: '10px' }, formatter: function (val) { return (val / 1000) + "k"; } } },
        legend: { position: 'top', horizontalAlign: 'center', fontSize: '11px', markers: { radius: 12 } },
        dataLabels: { enabled: false },
        tooltip: { y: { formatter: function (val) { return val.toLocaleString() + " passengers"; } } }
    };
    const chartAge = new ApexCharts(document.querySelector("#chart-age-satisfaction"), ageSatisfactionOptions);
    chartAge.render();

    // Delays impact columns
    const delaySatisfied = [statsData.delay_analysis.avg_departure_delay_satisfied, statsData.delay_analysis.avg_arrival_delay_satisfied];
    const delayDissatisfied = [statsData.delay_analysis.avg_departure_delay_dissatisfied, statsData.delay_analysis.avg_arrival_delay_dissatisfied];

    const delayImpactOptions = {
        series: [
            { name: 'Satisfied Passengers', data: delaySatisfied },
            { name: 'Dissatisfied Passengers (Loss)', data: delayDissatisfied }
        ],
        chart: { type: 'bar', height: 270, fontFamily: chartThemeOptions.fontFamily, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: false, columnWidth: '45%', borderRadius: 3 } },
        colors: ['#1863dc', '#75758a'],
        dataLabels: { enabled: false },
        grid: chartThemeOptions.grid,
        xaxis: { categories: ['Departure Delay', 'Arrival Delay'], labels: { style: { fontSize: '10px' } } },
        yaxis: {
            title: { text: 'Average Delay (minutes)', style: { fontSize: '10px', fontWeight: 500 } },
            labels: { style: { fontSize: '10px' } }
        },
        legend: { position: 'top', horizontalAlign: 'center', fontSize: '11px' },
        tooltip: { y: { formatter: function (val) { return val.toFixed(1) + " minutes avg"; } } }
    };
    const chartDelay = new ApexCharts(document.querySelector("#chart-delay-impact"), delayImpactOptions);
    chartDelay.render();

    // Rating gaps chart
    const gapsLabels = statsData.ratings_analysis.map(r => r.service);
    const gapsValues = statsData.ratings_analysis.map(r => r.gap);
    const gapColors = gapsValues.map(val => {
        if (val >= 0.8) return '#ff7759';
        if (val >= 0.4) return '#1863dc';
        return '#75758a';
    });

    const ratingGapsOptions = {
        series: [{ name: 'Rating Perception Gap', data: gapsValues }],
        chart: { type: 'bar', height: 380, fontFamily: chartThemeOptions.fontFamily, toolbar: { show: false } },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '70%',
                borderRadius: 3,
                colors: { ranges: [{ from: -2.0, to: 0.0, color: '#75758a' }] }
            }
        },
        colors: gapColors,
        grid: chartThemeOptions.grid,
        dataLabels: {
            enabled: true,
            formatter: function (val) { return val.toFixed(2); },
            style: { fontSize: '10px', fontFamily: 'Space Mono' }
        },
        xaxis: { categories: gapsLabels, labels: { style: { fontSize: '9px' } } },
        yaxis: { labels: { style: { fontSize: '10px', fontWeight: 500 } } },
        legend: { show: false },
        tooltip: { y: { formatter: function (val) { return val.toFixed(2) + " rating gap"; } } }
    };
    const chartGaps = new ApexCharts(document.querySelector("#chart-rating-gaps"), ratingGapsOptions);
    chartGaps.render();
};
