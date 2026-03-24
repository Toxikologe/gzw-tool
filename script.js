// ==============================================================
// FRAKTIONS-FARBEN & HOME-ADVANTAGE
// ==============================================================
const hqData = {
    'mss': { city: 'Nam Thaven', lz: 'Alpha LZs' },
    'csi': { city: 'Kiu Vongsa', lz: 'Charlie LZs' },
    'lri': { city: 'Pha Lang', lz: 'Bravo LZs' }
};

function setFaction(facId, colorHex, btnElement) {
    document.documentElement.style.setProperty('--accent', colorHex);
    try {
        localStorage.setItem('gzw_faction_color', colorHex);
        localStorage.setItem('gzw_faction_id', facId);
    } catch(e) {}
    
    if (btnElement) {
        let btns = document.getElementsByClassName("fac-btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
        }
        btnElement.classList.add("active");
    }
    updateHomeAdvantage(facId);
}

function updateHomeAdvantage(facId) {
    if(!facId || !hqData[facId]) return;
    const hq = hqData[facId];
    
    const routeSelect = document.getElementById('routePoiSelect');
    if(routeSelect && routeSelect.options[1]) {
        routeSelect.options[1].text = `Startstadt (${hq.city})`;
    }

    const heliStart = document.getElementById('heliStart');
    const heliEnd = document.getElementById('heliEnd');
    if(heliStart && heliStart.options[0]) heliStart.options[0].text = `Base Camp (${hq.city} - ${hq.lz})`;
    if(heliEnd && heliEnd.options[0]) heliEnd.options[0].text = `Base Camp (${hq.city} - ${hq.lz})`;
}

// ==============================================================
// NAVIGATION LOGIK
// ==============================================================
function openTab(tabId, btnElement) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    let btns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
    btnElement.classList.add("active");
}

function switchCategory(catId, btnElement) {
    let catBtns = document.getElementsByClassName("cat-btn");
    for (let i = 0; i < catBtns.length; i++) {
        catBtns[i].classList.remove("active");
    }
    btnElement.classList.add("active");

    let groups = document.getElementsByClassName("sub-nav-group");
    for (let i = 0; i < groups.length; i++) {
        groups[i].classList.remove("active");
    }
    
    let targetGroup = document.getElementById(catId);
    targetGroup.classList.add("active");

    let firstTabBtn = targetGroup.querySelector('.tab-btn');
    if (firstTabBtn) firstTabBtn.click();
}

let topButton = document.getElementById("backToTopBtn");
window.addEventListener("scroll", function() {
    if (topButton) {
        if (window.scrollY > 150) topButton.style.display = "block";
        else topButton.style.display = "none";
    }
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleWidget(id) {
    const widget = document.getElementById(id);
    const btn = document.getElementById('btn-' + id);
    if (!widget) return;

    const isVisible = widget.style.display !== 'none';
    if (isVisible) {
        widget.style.display = 'none';
        if (btn) btn.classList.remove('active');
    } else {
        widget.style.display = 'block';
        if (btn) btn.classList.add('active');
        widget.classList.remove('collapsed');
    }
}

function makeDraggable(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let isDragging = false, hasMoved = false;
    let startX, startY, startLeft, startTop;

    const header = el.querySelector('[id$="Header"], [id$="notepadHeader"]') || el;
    header.style.cursor = 'grab';

    header.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'BUTTON') return;
        isDragging = true;
        hasMoved = false;
        startX = e.clientX;
        startY = e.clientY;
        const rect = el.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) hasMoved = true;
        if (!hasMoved) return;

        let newLeft = startLeft + dx;
        let newTop = startTop + dy;
        newLeft = Math.max(0, Math.min(window.innerWidth - el.offsetWidth, newLeft));
        newTop = Math.max(0, Math.min(window.innerHeight - el.offsetHeight, newTop));

        el.style.left = newLeft + 'px';
        el.style.top = newTop + 'px';
        el.style.right = 'auto';
        el.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        header.style.cursor = 'grab';
        if (hasMoved) {
            try {
                localStorage.setItem(`gzw_pos_${elementId}`, JSON.stringify({ left: el.style.left, top: el.style.top }));
            } catch(e) {}
        }
    });

    try {
        const saved = localStorage.getItem(`gzw_pos_${elementId}`);
        if (saved) {
            const pos = JSON.parse(saved);
            el.style.left = pos.left;
            el.style.top = pos.top;
            el.style.right = 'auto';
            el.style.bottom = 'auto';
        }
    } catch(e) {}
}

// ==============================================================
// DATENBANKEN
// ==============================================================

// --- GEAR & RÜSTUNG (NIJ UPDATE) ---
const gearData = {
    // Schwere Panzerung (Level III & III+)
    "m2_carrier": `<h3>M2 Plate Carrier (Level III+)</h3><p><b>Schutz:</b> Höchster ballistischer Schutz im Spiel. Stoppt fast alle gängigen Sturmgewehr-Kaliber (M855, PS).</p><p><b style="color:#ff4c4c;">Warnung (0.4):</b> Extreme Trägheit. Der Taktische Sprint wird stark eingeschränkt.</p>`,
    "6b45": `<h3>6B45 Plate Carrier (Level III+)</h3><p><b>Schutz:</b> Russisches Äquivalent zum M2. Schützt Torso und Oberarme zuverlässig gegen Beschuss.</p>`,
    "lancer": `<h3>Lancer Plate Carrier (Level III)</h3><p><b>Eigenschaft:</b> Guter Kompromiss aus Schutz und Mobilität. Hält die Standard-Munition der KI problemlos auf.</p>`,

    // Mittlere Panzerung (Level IIIA & IIIA+)
    "6b23": `<h3>6B23 Body Armor (Level IIIA+)</h3><p><b>Eigenschaft:</b> Weichballistik mit leichten Einschüben. Gut gegen Pistolen-Kaliber und Schrotflinten.</p><p><b>Nachteil:</b> Sturmgewehre schlagen hier fast ungebremst durch.</p>`,
    "moc_vest": `<h3>MOC Vest (Level IIIA)</h3><p><b>Eigenschaft:</b> Reiner Schutz gegen Faustfeuerwaffen und Splitter. Erlaubt extrem schnelle Bewegungen.</p>`,
    "unlra_vest": `<h3>UNLRA Vest (Level IIIA)</h3><p><b>Eigenschaft:</b> Fraktionslose Weste (blau). Vorsicht, sie macht dich im Dschungel extrem sichtbar!</p>`,

    // Leichte Panzerung (Level I bis IIA+)
    "pasgt_vest": `<h3>PASGT Vest (Level IIA+)</h3><p><b>Eigenschaft:</b> Alter Splitterschutz. Besser als nichts in der Startzone, aber ein absolutes Risiko im Mid-Game.</p>`,
    "sec_vest": `<h3>Security Guard Vest (Level IIA)</h3><p><b>Schutz:</b> Schützt maximal vor 9mm Makarov oder leichten Schrot-Treffern auf Distanz.</p>`,
    "scav_vest": `<h3>Scavenger Vest (Level I)</h3><p><b>Eigenschaft:</b> Völlig veralteter Schutz, nur für absolute Notfälle geeignet.</p>`,

    // Helme
    "fast_mt": `<h3>FAST / High Cut Helmet (Level IIIA+)</h3><p><b>Eigenschaft:</b> Moderner Helm. Kann Headsets tragen und bietet den besten Kompromiss aus Gehör und Schutz.</p>`,
    "mich": `<h3>MICH 2000 / ACH (Level IIIA)</h3><p><b>Eigenschaft:</b> Standard-Militärhelm. Sehr zuverlässig gegen Querschläger.</p>`,
    "6b47": `<h3>6B47 Ratnik-B (Level IIIA)</h3><p><b>Eigenschaft:</b> Russischer Helm, perfekt für den Start. Leicht und Headset-kompatibel.</p>`,
    "ssh68": `<h3>SSh-68 Stahlhelm (Level IIA+)</h3><p><b>Eigenschaft:</b> Hohe Abprallchance (Ricochet), schützt aber ballistisch kaum vor Frontaltreffern.</p>`,
    "pasgt_helm": `<h3>PASGT Helmet (Level IIA)</h3><p><b>Eigenschaft:</b> Alter Kevlarhelm, bietet nur Basisschutz für den Start.</p>`,

    // Zubehör & Headsets
    "gpnvg": `<h3>GPNVG-18 (Quad-Node)</h3><p><b>Eigenschaft:</b> Das absolute High-End NVG in GZW 0.4. 4 Röhren, riesiges Sichtfeld (FOV), keine toten Winkel.</p>`,
    "pvs31": `<h3>AN/PVS-31 (Binocular)</h3><p><b>Eigenschaft:</b> 2-Röhren-NVG. Hervorragender Kontrast und gute Tiefenwahrnehmung bei Night Ops.</p>`,
    "pvs14": `<h3>AN/PVS-14 (Monocular)</h3><p><b>Eigenschaft:</b> 1-Röhren-NVG. Günstig, aber stark eingeschränkte periphere Sicht. Reicht für den Start.</p>`,
    "comtac": `<h3>Peltor ComTac II / MSA Sordin</h3><p><b>Eigenschaft:</b> High-End Aktivgehörschutz. Filtert laute Schüsse und verstärkt Schritte (GZW 0.4 Buff!). Unverzichtbar im PvP.</p>`,
    "razor": `<h3>Walker's Razor / Earmor M32</h3><p><b>Eigenschaft:</b> Solide Mittelklasse. Verbessern das Gehör deutlich, klingen aber etwas blecherner als die ComTacs.</p>`,
    "gssh": `<h3>GSSh-01</h3><p><b>Eigenschaft:</b> Budget-Headset. Sehr basslastig und lautes eigenes Rascheln, aber besser als taub in Tiger Bay herumzulaufen.</p>`,

    // Rucksäcke
    "rush72": `<h3>Rush 72 Backpack (42 Slots)</h3><p><b>Eigenschaft:</b> Der größte Rucksack im Spiel. <br><b style="color:#ff4c4c;">Warnung (0.4):</b> Voll beladen führt dieser Rucksack durch das neue Gewicht fast immer zum "Encumbered" (Überlastet) Status!</p>`,
    "3day": `<h3>3-Day Assault Pack (30 Slots)</h3><p><b>Eigenschaft:</b> Der perfekte Kompromiss für Mid- bis Endgame-Loot-Runs.</p>`,
    "rush24": `<h3>Rush 24 Backpack (24 Slots)</h3><p><b>Eigenschaft:</b> Der Standard für normale Quests und leichte PvP-Setups.</p>`,
    "patrol": `<h3>Patrol Backpack (16 Slots)</h3><p><b>Eigenschaft:</b> Guter, leichter Rucksack für schnelle Rein-und-Raus-Operationen ohne viel Loot-Fokus.</p>`,
    "sling": `<h3>Sling Bag / Messenger Bag (8-12 Slots)</h3><p><b>Eigenschaft:</b> Reine Startausrüstung der Milizen. Nach 2-3 Items voll.</p>`,

    // Rigs & Belts
    "heavy_rig": `<h3>Heavy Modular Rig</h3><p><b>Eigenschaft:</b> Große Kapazität für Trommelmagazine und massig Meds. Beliebt bei Solo-Spielern in Tiger Bay.</p>`,
    "operator_rig": `<h3>Operator Chest Rig</h3><p><b>Eigenschaft:</b> Mittlere Kapazität. Tolle Balance aus Gewicht und Platz. Passt gut über leichte Carrier.</p>`,
    "moc_rig": `<h3>MOC Chest Rig</h3><p><b>Eigenschaft:</b> Leichtes Rig, perfekt für schnelle Sniper- oder SMG-Setups.</p>`,
    "chicom": `<h3>Chicom / Type 56 Rig</h3><p><b>Eigenschaft:</b> Ostblock-Miliz-Ausrüstung. Günstig, aber sehr limitiert im Platzangebot.</p>`,
    "tac_belt": `<h3>Tactical Belt / Duty Belt</h3><p><b>Eigenschaft:</b> Erweitert das Inventar um eine Hüft-Ebene. Entlastet die Rüstung und verbessert Ergo-Werte leicht.</p>`
};

const allTasks = [
        // --- HANDSHAKE ---
        { de: "Erstaufklärung", en: "First Recon", v: "Handshake", desc: "Erkunde Markt, Tankstelle und Rathaus.", sol: "Markt (141 162), Tankstelle (143 160), Rathaus (141 164)." },
        { de: "Abgestürzter Vogel", en: "Little Bird Down", v: "Handshake", desc: "Finde den Hubschrauber-Absturzplatz.", sol: "Nördlich der Stadt im Sumpf. Cockpit-Panel." },
        { de: "Nachschubmangel", en: "Supply Shortage", v: "Handshake", desc: "Bringe 3 Verbandskästen.", sol: "Sammle 3 'IFAKs' im Raid." },
        { de: "Zurückgelassen", en: "Left Behind", v: "Handshake", desc: "Hinweise auf VIP im Hotel.", sol: "Midnight Sapphire. VIP-Zimmer, Logbuch." },
        { de: "Funkstille", en: "Radio Silence", v: "Handshake", desc: "Funkturm auf Sabotage prüfen.", sol: "Funkturm Berg. Schaltkasten." },
        { de: "Niemand wird zurückgelassen", en: "Leave No Man Behind", v: "Handshake", desc: "Finde vermisstes PMC-Squad.", sol: "Wald NW der Stadt. Nimm Dogtags." },
        { de: "Verlorenes Mädchen", en: "Lost Girl", v: "Handshake", desc: "Tochter des VIPs finden.", sol: "Dorf neben Blue Lagoon. Foto im Haus mit rotem Dach." },
        { de: "Der Kongressabgeordnete", en: "The Congressman", v: "Handshake", desc: "Aktenkammer Villen.", sol: "Midnight Sapphire, Villa 2. Safe." },
        { de: "Räumungskommando", en: "Eviction Notice", v: "Handshake", desc: "Säubere Rathaus.", sol: "10 Kills im Rathaus-Bereich." },
        { de: "Störsender", en: "Jammer", v: "Handshake", desc: "Störsender ausschalten.", sol: "Dach in Tiger Bay. Antenne." },
        { de: "Befehlskette", en: "Chain of Command", v: "Handshake", desc: "Befehlsdokumente Fort Narith.", sol: "HQ-Gebäude, 2. Stock. Konferenztisch." },
        { de: "Schwarze Kasse", en: "Slush Fund", v: "Handshake", desc: "Schwarzgeld Kartell.", sol: "Blue Lagoon, Büro. Koffer unter Dielen." },
        { de: "Abgefangene Funksprüche", en: "Intercepted Comms", v: "Handshake", desc: "Daten vom Funkgerät.", sol: "Hunter's Paradise. Hauptbüro." },
        { de: "Informanten-Treffen", en: "Informant Meeting", v: "Handshake", desc: "Café Midnight Sapphire.", sol: "Pool-Café. USB-Stick unter Tisch." },
        { de: "Spionageabwehr", en: "Counterintelligence", v: "Handshake", desc: "Gefälschte Dokumente Sägewerk.", sol: "Lumber Yard, Büro Vorarbeiter." },
        { de: "Diplomatische Immunität", en: "Diplomatic Immunity", v: "Handshake", desc: "Leiche UNLRA-Abgesandter.", sol: "Straße Tiger Bay/Ban Pa. Weißer SUV." },
        { de: "Auge um Auge", en: "Eye for an Eye", v: "Handshake", desc: "Sniper in Tiger Bay.", sol: "5 Kills auf Dächern der Mall." },
        { de: "Zerschlagung", en: "Disruption", v: "Handshake", desc: "Kommunikationsanlage zerstören.", sol: "Fort Narith. C4 an Radarantenne." },
        { de: "Sichere den Perimeter", en: "Secure the Perimeter", v: "Handshake", desc: "Randgebiete Startstadt.", sol: "10 Kills an Checkpoints." },
        { de: "Gefallene Kameraden", en: "Fallen Comrades", v: "Handshake", desc: "Dogtags PMCs.", sol: "3 Dogtags aus Sumpfgebiet." },
        { de: "Brückenkopf", en: "Beachhead", v: "Handshake", desc: "Landeplatz Pier.", sol: "Tiger Bay. 10 Kills am Steg." },
        { de: "Operation Tiger", en: "Operation Tiger", v: "Handshake", desc: "Einsatzpläne LAF.", sol: "Tiger Bay HQ. Konferenzraum Ebene 2." },
        { de: "Schattenkrieg", en: "Shadow War", v: "Handshake", desc: "Verdeckte Operationen.", sol: "Fort Narith, Keller Block A." },
        { de: "Geheime Fracht", en: "Secret Cargo", v: "Handshake", desc: "Abgestürzte Drohne.", sol: "Dschungel Ban Pa/Sawmill. Grauer Container." },
        { de: "Nachtschicht", en: "Night Shift", v: "Handshake", desc: "Hotelgelände untersuchen.", sol: "Midnight Sapphire. Poolbar Laptop." },
        { de: "Rückzug", en: "Fall Back", v: "Handshake", desc: "Rückzug decken.", sol: "Verteidige LZ nahe Fort Narith für 5 Min." },
        { de: "Schmuggler-Netzwerk", en: "Smuggler's Network", v: "Handshake", desc: "Hauptlager Schmuggler.", sol: "Blue Lagoon. Hinter Wasserfall." },
        { de: "Feindliche Übernahme", en: "Hostile Takeover", v: "Handshake", desc: "LAF-Führungsebene.", sol: "3 Elite-Kills in Midnight Sapphire." },
        { de: "Aus heiterem Himmel", en: "Out of the Blue", v: "Handshake", desc: "Airdrop prüfen.", sol: "Savanne. Peilsender sichern." },
        { de: "Der Unterhändler", en: "The Negotiator", v: "Handshake", desc: "Leiche Unterhändler.", sol: "Sawmill. Aktenkoffer hinter Holzstapeln." },
        { de: "Staatsgeheimnisse", en: "State Secrets", v: "Handshake", desc: "Regierungsdaten.", sol: "Rathaus (Office Key). PC Bürgermeister." },
        { de: "Auslandsdevisen", en: "Foreign Exchange", v: "Handshake", desc: "Ausländisches Bargeld.", sol: "Midnight Sapphire, Rezeption. Safe." },
        { de: "Kommunikationswege", en: "Lines of Communication", v: "Handshake", desc: "Antenne Sumpf.", sol: "Funkstation N-Sumpf. Toolset nutzen." },
        { de: "Operation Säuberung", en: "Operation Clean Sweep", v: "Handshake", desc: "Tankstelle räumen.", sol: "15 Kills an der Tankstelle." },
        { de: "Der Schatten", en: "The Shadow", v: "Handshake", desc: "Söldnergruppe finden.", sol: "YBL-1, Ebene -1. Schwarze Mappe." },
        { de: "Der Broker", en: "The Broker", v: "Handshake", desc: "Hauptbuch Schmuggler.", sol: "Ban Pa, Schmuggler-Lager. Lederbuch." },
        { de: "Agent der Paranoia", en: "Paranoia Agent", v: "Handshake", desc: "Haus des Informanten.", sol: "Startgebiet. Suche Hinweise im Haus." },
        { de: "Wiederherstellung der Ordnung", en: "Restoring Order", v: "Handshake", desc: "10 Feinde Startstadt.", sol: "Töte 10 feindliche KIs." },
        { de: "Sisyphus", en: "Sisyphus", v: "Handshake", desc: "10 Feinde um Startstadt.", sol: "Töte 10 KIs im Umland." },
        { de: "Radiostar", en: "Radio Star", v: "Handshake", desc: "Haus NW Brücke.", sol: "Nam Thaven. Equipment neutralisieren." },
        { de: "Vermisste Kinder", en: "Missing Children", v: "Handshake", desc: "UNLRA Evakuierungszentrum.", sol: "Finde zwei UNLRA-Ordner." },
        { de: "Erster Schlag", en: "First Hit", v: "Handshake", desc: "Kriminellen-Anführer.", sol: "Eliminiere den Stadt-Boss." },
        { de: "Rückgewinnung", en: "Reclamation", v: "Handshake", desc: "Fracht aus Versteck.", sol: "Sichere Frachtkisten im Startgebiet." },
        { de: "König der Kreuzung", en: "King of the Crossroads", v: "Handshake", desc: "Infos über den King.", sol: "Suche Khonwan-Dorf / Strip-Bar." },
        { de: "Neue Nachbarn", en: "New Neighbors", v: "Handshake", desc: "Checkpoints YBL-1.", sol: "Finde Intel bei den Checkpoints." },
        { de: "Schatten über Ban Pa II", en: "The Shadow Over Ban Pa II", v: "Handshake", desc: "Kult in Ban Pa.", sol: "Hole Intel aus Ban Pa." },
        { de: "Letzter Check-Out", en: "Final Check Out", v: "Handshake", desc: "Lila Koffer.", sol: "Pha Lang Airfield. Identität bestätigen." },
        { de: "Zahme Ratte", en: "Domesticated Rat", v: "Handshake", desc: "Shack-Kontakt ausmachen.", sol: "Hunter's Paradise. Intel holen." },
        { de: "Rebellengesindel", en: "Rebel Scum", v: "Handshake", desc: "20 Feinde Bunker.", sol: "YBL-1. 20 Kills." },
        { de: "Ich kam, sah, siegte I", en: "I Went, I Saw, I Conquered I", v: "Handshake", desc: "Sägewerk ausspähen.", sol: "Sawmill. Spähe Straßen/Hügel aus." },
        { de: "Ich kam, sah, siegte II", en: "I Went, I Saw, I Conquered II", v: "Handshake", desc: "Sprengstoffwerkstatt.", sol: "Sawmill Hallen durchsuchen." },
        { de: "Ich kam, sah, siegte III", en: "I Went, I Saw, I Conquered III", v: "Handshake", desc: "20 Kills Sägewerk.", sol: "Sawmill. 20 Kills." },
        { de: "Manifest Destiny", en: "Manifest Destiny", v: "Handshake", desc: "Festplatte extrahieren.", sol: "Airfield Datenbank." },
        { de: "Abkürzung", en: "Shortcut", v: "Handshake", desc: "Durchgang Fort Narith.", sol: "Untersuche Bereich YBL-1." },
        { de: "Geschäft oder Vergnügen", en: "Business Or Pleasure", v: "Handshake", desc: "Airfield untersuchen.", sol: "Pha Lang Airfield. Gruppen-Absichten prüfen." },
        { de: "Flügel stutzen", en: "Wing Clipping", v: "Handshake", desc: "20 Feinde Flugplatz.", sol: "Pha Lang Airfield. 20 Kills." },
        { de: "Blick auf den Fluss", en: "Riverfront View", v: "Handshake", desc: "Schicksal Späher.", sol: "Midnight Sapphire. Finde Hinweise." },
        { de: "Tiefste Fantasien", en: "Deepest, Darkest Fantasies", v: "Handshake", desc: "Flash Drive.", sol: "Midnight Sapphire. USB sichern." },
        { de: "Revolutionary Road", en: "Revolutionary Road", v: "Handshake", desc: "Tankstelle Fort Narith.", sol: "Fort Narith Tankstelle. Laptop/Notizen." },
        { de: "Spaziergang durch Fort Narith", en: "Fort Narith Stroll", v: "Handshake", desc: "Alle Eingänge prüfen.", sol: "Barracken, Main, Fuel, Airfield Gates." },
        { de: "Gewaltsame Aufklärung", en: "Reconnaissance-in-Force", v: "Handshake", desc: "30 Soldaten Fort Narith.", sol: "Töte 30 KIs im Fort." },
        { de: "Bis zur Schnupftabakdose", en: "Up To Snuff", v: "Handshake", desc: "VIP Kundenliste.", sol: "Hunter's Paradise. Akte sichern." },
        { de: "Hacker II", en: "Hacker II", v: "Handshake", desc: "Codebuch finden.", sol: "Fort Narith Funktürme." },
        { de: "Trollbrücke", en: "Troll Bridge", v: "Handshake", desc: "Verminte Brücke.", sol: "Tiger Bay (West). Untersuche Brücke." },
        { de: "UNLRA II", en: "UNLRA II", v: "Handshake", desc: "3 Checkpoints untersuchen.", sol: "Tiger Bay Intel sammeln." },
        { de: "Paparazzi", en: "Paparazzi", v: "Handshake", desc: "Vernehmungsraum.", sol: "Midnight Sapphire. Durchsuche Raum." },
        { de: "Der Verschwundene", en: "The Man Who Disappeared", v: "Handshake", desc: "Pass im Schrank.", sol: "Midnight Sapphire Schrank." },
        { de: "Lippe riskieren", en: "Lip Out", v: "Handshake", desc: "Donald J. Dortmunder.", sol: "Midnight Sapphire. Finde Zielperson." },
        { de: "Kunst der Täuschung", en: "The Art of Deception", v: "Handshake", desc: "LAF Dokumente fälschen.", sol: "Fort Narith / Midnight Sapphire." },
        { de: "Mall-Bürgerwehr", en: "Mall Vigilante", v: "Handshake", desc: "30 Kills Mall.", sol: "Tiger Bay Einkaufszentrum." },
        { de: "Süße Lügen", en: "Sweet Little Lies", v: "Handshake", desc: "Spion finden.", sol: "Tiger Bay. Finde Hinweise." },
        { de: "Versteckspiel", en: "Hide and Seek", v: "Handshake", desc: "Beweise pflanzen.", sol: "Tiger Bay Haus." },
        { de: "Terminal-Initiative", en: "Terminal Initiative", v: "Handshake", desc: "Stürme Airfield.", sol: "Ground Zero Landebahn." },
        { de: "Der Befreier", en: "The Liberator", v: "Handshake", desc: "Kommunikationszentrale.", sol: "Hütte 199 193. Dokument Tisch." },

        // --- GUNNY ---
        { de: "Medikamente gesucht", en: "Meds Wanted", v: "Gunny", desc: "Hilfsgüter Wasserturm.", sol: "Wasserturm Fundament Kiste." },
        { de: "Schießplatz-Check", en: "Range Check", v: "Gunny", desc: "Munitionskisten Schießstand.", sol: "Rechts unter Wellblechdach." },
        { de: "Luftabwehr-Sichtung", en: "AA Sighting", v: "Gunny", desc: "Markiere FLAK.", sol: "Fort Narith Block A, B, C Dächer." },
        { de: "Treibstoffdiebe", en: "Fuel Thieves", v: "Gunny", desc: "Benzinkanister Hangar.", sol: "Hangar 2 hinter Wracks." },
        { de: "Scharfschützen-Nest", en: "Sniper's Nest", v: "Gunny", desc: "Wasserturm Sniper.", sol: "Töte Wache oben auf Turm." },
        { de: "Herzliches Willkommen", en: "Warm Welcome", v: "Gunny", desc: "15 Kills Startstadt.", sol: "Töte 15 KIs in der Stadt." },
        { de: "Waffen & Munition", en: "Guns & Ammo", v: "Gunny", desc: "Waffenlager Bunker.", sol: "YBL-1, Ebene -2 (Storage Key)." },
        { de: "Schießübung", en: "Shooting Practice", v: "Gunny", desc: "100m Sniper Kills.", sol: "10 Kills aus >100m." },
        { de: "Kampfmittelbeseitigung", en: "EOD", v: "Gunny", desc: "IEDs entschärfen.", sol: "3 Sprengsätze Hauptstraße Fort Narith." },
        { de: "Fracht", en: "Cargo", v: "Gunny", desc: "Waffenkisten markieren.", sol: "Lumber Yard Haupthalle. Marker setzen." },
        { de: "Wahrer Mut", en: "True Grit", v: "Gunny", desc: "Raid ohne Rüstung.", sol: "5 Kills Startstadt ohne Weste/Helm." },
        { de: "Artillerie-Sabotage", en: "Artillery Sabotage", v: "Gunny", desc: "Haubitzen Fort Narith.", sol: "3 Geschütze Außenbereich markieren." },
        { de: "Feuerkraft", en: "Firepower", v: "Gunny", desc: "MG-Lager Bunker.", sol: "YBL-1 Ebene -2 hinter Generatoren." },
        { de: "Panzerbrechend", en: "Armor Piercing", v: "Gunny", desc: "AP-Munition sichern.", sol: "Ground Zero Hangar 1. Grüne Kisten." },
        { de: "Schweres Gerät", en: "Heavy Equipment", v: "Gunny", desc: "Schützenpanzer markieren.", sol: "Fort Narith Innenhof (4 Fahrzeuge)." },
        { de: "Scharfschützen-Albtraum", en: "Sniper's Nightmare", v: "Gunny", desc: "20 Kills Hotel.", sol: "Midnight Sapphire 20 Söldner." },
        { de: "Dschungelkampf", en: "Jungle Warfare", v: "Gunny", desc: "Wald um Ban Pa.", sol: "15 Kills im Dschungel Süd." },
        { de: "Säuberung des Sägewerks", en: "Sawmill Sweep", v: "Gunny", desc: "Sawmill befreien.", sol: "15 Kills im Sägewerk-Areal." },
        { de: "Waffenschmuggler", en: "Gun Runners", v: "Gunny", desc: "Schmuggel-Manifest.", sol: "Blue Lagoon Bootshaus Fass." },
        { de: "Gegenangriff", en: "Counterattack", v: "Gunny", desc: "Verteidige HQ-Tor.", sol: "Halte Stadt-Eingang gegen KIs." },
        { de: "Scharfschützen-Duell", en: "Sniper Duel", v: "Gunny", desc: "Sniper Flugplatz.", sol: "3 Sniper Tower/Hangar Ground Zero." },
        { de: "Häuserkampf", en: "CQB Mastery", v: "Gunny", desc: "Kills <10m.", sol: "15 Kills auf kurze Distanz." },
        { de: "Panzerabwehr", en: "Anti-Armor", v: "Gunny", desc: "RPG-Sprengköpfe.", sol: "Fort Narith Waffenkammer (2 Stück)." },
        { de: "Waffenbrüder", en: "Brothers in Arms", v: "Gunny", desc: "Verlorene M4A1.", sol: "2 M4A1 aus Hunter's Paradise abgeben." },
        { de: "Feuer frei", en: "Weapons Free", v: "Gunny", desc: "25 Kills Sägewerk.", sol: "Massive Räumung Lumber Yard." },
        { de: "Sturm auf das Fort", en: "Storm the Fort", v: "Gunny", desc: "Fort Narith Innenhof.", sol: "Erreiche zentralen Appellplatz." },
        { de: "Säuberung der Lagune", en: "Lagoon Sweep", v: "Gunny", desc: "Kartell vertreiben.", sol: "20 Kills Blue Lagoon." },
        { de: "Kopfgeld", en: "Bounty", v: "Gunny", desc: "Barett Commander.", sol: "Rotes Barett Boss Hunter's Paradise." },
        { de: "Guerilla-Taktiken", en: "Guerrilla Tactics", v: "Gunny", desc: "Vorräte zerstören.", sol: "C4 an 3 Stapel in Ban Pa." },
        { de: "Hinter feindlichen Linien", en: "Behind Enemy Lines", v: "Gunny", desc: "Heli markieren.", sol: "Ground Zero Kampfhubschrauber." },
        { de: "Schießerei", en: "Shootout", v: "Gunny", desc: "20 Kills AR.", sol: "Hunter's Paradise Feuerkampf." },
        { de: "Schwere Rüstung", en: "Heavy Armor", v: "Gunny", desc: "Feindliche Platten.", sol: "3 unbeschädigte Westen Class 3+." },
        { de: "Scharfschützengasse", en: "Sniper Alley", v: "Gunny", desc: "Straße Tiger Bay.", sol: "10 Kills Zufahrtsstraße." },
        { de: "Nahkampf", en: "Close Quarters", v: "Gunny", desc: "Räume YBL-1.", sol: "15 Kills im Bunker." },
        { de: "Der Außenposten", en: "The Outpost", v: "Gunny", desc: "Außenposten Miliz.", sol: "Wald zw. Stadt/Fort. 10 Kills." },
        { de: "Die Festung", en: "The Stronghold", v: "Gunny", desc: "Schwachstellen Mauer.", sol: "3 Marker Außenperimeter Fort Narith." },
        { de: "Luftüberlegenheit", en: "Air Superiority", v: "Gunny", desc: "Drohnen-Steuerung.", sol: "Ground Zero Tower. Zerschieße PC." },
        { de: "Unterdrückungsfeuer", en: "Suppressing Fire", v: "Gunny", desc: "20 Kills LMG.", sol: "Kills mit Trommelmagazin/LMG." },
        { de: "Messie", en: "Hoarder", v: "Gunny", desc: "UNLRA Vorräte Prepper.", sol: "Startgebiet Haus/Eingang." },
        { de: "Unter unserer Nase", en: "Under Our Noses", v: "Gunny", desc: "Gestohlene Lieferung.", sol: "Lamang Island / Startgebiet." },
        { de: "Auf dem Schießstand", en: "On the Range", v: "Gunny", desc: "Spähe Hunter's Paradise.", sol: "Müllhalde, Lager, Motel prüfen." },
        { de: "Übernatürlich", en: "Supernatural", v: "Gunny", desc: "Hans Liebert Zelt.", sol: "Nördlich Ban Pa untersuchen." },
        { de: "Kein Weg nach oben", en: "No Way Up", v: "Gunny", desc: "Schicksal PMC Squad.", sol: "Lamang Island Untersuchung." },
        { de: "Erweiterung", en: "Expansion", v: "Gunny", desc: "LLA Pläne.", sol: "Östlich YBL-1 sichern." },
        { de: "Das Gefecht", en: "The Stand", v: "Gunny", desc: "PMC Squad finden.", sol: "Pha Lang Airfield Leichen." },
        { de: "Die Ruhe", en: "The Lull", v: "Gunny", desc: "LLA Außenposten.", sol: "NW YBL-1 / W Midnight Sapphire." },
        { de: "Nadel im Dschungel", en: "Needle In A Jungle", v: "Gunny", desc: "LLA Verstecke.", sol: "S-Ö YBL-1 Farm/Hütte." },
        { de: "Schnüffler", en: "Snooper", v: "Gunny", desc: "Vorräte Tankstelle.", sol: "Östlich Fort Narith." },
        { de: "Güterjagd", en: "Goods Hunting", v: "Gunny", desc: "Vorräte Safe House.", sol: "Nördlich Khonwan Dorf." },
        { de: "Sie sind überall", en: "They Are Everywhere", v: "Gunny", desc: "Camp W Tiger Bay.", sol: "Tiger Bay Untersuchung." },
        { de: "Inkognito", en: "Incognito", v: "Gunny", desc: "Haus mysteriöse Person.", sol: "W Tiger Bay Central." },

        // --- LAB RAT ---
        { de: "Helfende Hand", en: "Helping Hand", v: "Lab Rat", desc: "Med-Vorräte Einheimische.", sol: "Briefkästen Startstadt (Bandagen/Pains)." },
        { de: "Medizinischer Detektiv", en: "Medical Detective", v: "Lab Rat", desc: "Büro Arzt Notizen.", sol: "Arzthaus 2. Stock (Office Key)." },
        { de: "Ein einziger Tropfen", en: "A Single Drop", v: "Lab Rat", desc: "Wasserprobe Wasserturm.", sol: "Ganz oben am Wasserturm Tank." },
        { de: "Geheimes Mitgefühl", en: "Secret Compassion", v: "Lab Rat", desc: "Hilfsgüter Farmen.", sol: "Kisten in Scheunen außerhalb Stadt." },
        { de: "Es ist im Wasser", en: "It's in the Water", v: "Lab Rat", desc: "Wasserprobe Ban Pa.", sol: "Großer Brunnen Dorfmitte." },
        { de: "Gefährlicher Ausbruch", en: "Hazardous Outbreak", v: "Lab Rat", desc: "Patientenakten UNLRA.", sol: "Tiger Bay Camp. Medizinisches Zelt." },
        { de: "Laborratte", en: "Lab Rat", v: "Lab Rat", desc: "Mikroskop Schule.", sol: "Startstadt Schule 1. Stock." },
        { de: "Verborgene Gefahr", en: "Hidden Danger", v: "Lab Rat", desc: "Bodenproben Sumpf.", sol: "Toxische Pfützen N-Stadt." },
        { de: "Blutproben", en: "Blood Samples", v: "Lab Rat", desc: "Blutkonserven UNLRA.", sol: "Tiger Bay HQ weißes Zelt." },
        { de: "Medizinische Ausrüstung", en: "Medical Equipment", v: "Lab Rat", desc: "Defibrillator Hotel.", sol: "Midnight Sapphire EG Krankenstation." },
        { de: "Patient Null", en: "Patient Zero", v: "Lab Rat", desc: "Leiche Isolationsstation.", sol: "Tiger Bay Zimmer 3 Feldbett." },
        { de: "Toxisches Erbe", en: "Toxic Legacy", v: "Lab Rat", desc: "Fässer Bunker.", sol: "YBL-1 Ebene -3 überflutet." },
        { de: "Giftige Pflanzen", en: "Poisonous Plants", v: "Lab Rat", desc: "Flora Ban Pa.", sol: "3 blaue Pflanzen am See." },
        { de: "Sauberes Wasser", en: "Clean Water", v: "Lab Rat", desc: "Wasserfilter Blue Lagoon.", sol: "Wassertanks am Rand platzieren." },
        { de: "Strahlungsleck", en: "Radiation Leak", v: "Lab Rat", desc: "Strahlung Ground Zero.", sol: "Zentrum Krater Geigerzähler." },
        { de: "Feldlazarett", en: "Field Hospital", v: "Lab Rat", desc: "OP-Besteck Camp.", sol: "2 Surkits Flüchtlingscamp." },
        { de: "Kontaminiertes Gebiet", en: "Contaminated Zone", v: "Lab Rat", desc: "Labor Schutzanzug.", sol: "Tiger Bay HQ Ebene 3 mit Gasmaske." },
        { de: "Blutgruppe", en: "Blood Type", v: "Lab Rat", desc: "Blutkonserven Bunker.", sol: "YBL-1 Ebene -1 rote Kühlbox." },
        { de: "Das Heilmittel", en: "The Cure", v: "Lab Rat", desc: "Forschungsdaten Arzt.", sol: "Arzthaus (Office Key) Computer." },
        { de: "Verlorene Lieferung", en: "Lost Shipment", v: "Lab Rat", desc: "Med-Truck Sägewerk.", sol: "Weißer Truck auf Straße." },
        { de: "Forschungsmaterial", en: "Research Material", v: "Lab Rat", desc: "Mutierte Flora.", sol: "3 rote Pflanzen Ground Zero Krater." },
        { de: "Evakuierung", en: "Evacuation", v: "Lab Rat", desc: "Flugpläne UNLRA.", sol: "Tiger Bay HQ Lobby Tresen." },
        { de: "Quarantäne", en: "Quarantine", v: "Lab Rat", desc: "Türen Labor.", sol: "3 rote Konsolen Tiger Bay Quarantäne." },
        { de: "Überlebenswichtig", en: "Vital Signs", v: "Lab Rat", desc: "5 Tourniquets.", sol: "Besorge/Kaufe 5 CATs." },
        { de: "Giftmischer", en: "Toxicologist", v: "Lab Rat", desc: "Drogenlabor Blue Lagoon.", sol: "Becherglas aus abgelegener Hütte." },
        { de: "Leben im Vergessen", en: "Living in Oblivion", v: "Lab Rat", desc: "Verlassenes Dorf.", sol: "Dorf O-Sumpf. Bodenproben." },
        { de: "Verdeckte Forschung", en: "Covert Research", v: "Lab Rat", desc: "Sensoren Fort Narith.", sol: "3 Sensoren Munitionsbunker." },
        { de: "Chemikalienunfall", en: "Chemical Spill", v: "Lab Rat", desc: "Ursache Vergiftung.", sol: "Industriegebiet Tiger Bay Fässer." },
        { de: "Medizinische Versorgung", en: "Medical Supplies", v: "Lab Rat", desc: "Morphium Lazarett.", sol: "5 Morphin-Injektoren abgeben." },
        { de: "Der Quarantänebereich", en: "The Quarantine Zone", v: "Lab Rat", desc: "UNLRA-Zelte prüfen.", sol: "Tiger Bay HQ 4 Zelte Lüftung." },
        { de: "Biologische Gefahr", en: "Biological Threat", v: "Lab Rat", desc: "Hazmat-Anzug Bunker.", sol: "YBL-1 Ebene -3 offener Spind." },
        { de: "Notoperation", en: "Emergency Surgery", v: "Lab Rat", desc: "Blut Krankenhaus.", sol: "Startstadt Krankenhaus Kühlschrank." },
        { de: "Gegenmittel", en: "Antidote", v: "Lab Rat", desc: "Exp. Medikamente.", sol: "Hotel Zimmer 202 VIP Koffer." },
        { de: "Befreiung", en: "Liberation", v: "Lab Rat", desc: "Dorfältesten-Haus.", sol: "Startgebiet. Befreie Gefangene." },
        { de: "Gute Absichten", en: "Good Intentions", v: "Lab Rat", desc: "Arzt Ban Pa.", sol: "Suche Mediziner im Dorf." },
        { de: "Toxische Umgebung", en: "Toxic Environment", v: "Lab Rat", desc: "Sumpf Bodenproben.", sol: "Nördlicher Sumpf." },

        // --- ARTISAN ---
        { de: "Versteck-Bergung", en: "Cache Retrieval", v: "Artisan", desc: "Altes Versteck Wald.", sol: "S-Stadt Holzkiste unter Baum." },
        { de: "Werkzeugbeschaffung", en: "Tooling Up", v: "Artisan", desc: "3 Werkzeugsets.", sol: "Besorge 3 Toolsets." },
        { de: "Gefährliche Schätze", en: "Hazardous Treasures", v: "Artisan", desc: "Relikte Ban Pa.", sol: "3 Holzstatuen Fischerhütten." },
        { de: "Rattennest", en: "Rat's Nest", v: "Artisan", desc: "Wanzen Bunker.", sol: "YBL-1 Ebene -1 Besprechungsräume." },
        { de: "Mechaniker-Probleme", en: "Mechanic's Trouble", v: "Artisan", desc: "Fahrzeugteile.", sol: "2 Batterien, 2 Zündkerzen Tankstelle." },
        { de: "Ungebetene Gäste", en: "Uninvited Guests", v: "Artisan", desc: "15 Söldner Ruinen.", sol: "Räumung Ruins Zentrum." },
        { de: "Baupläne", en: "Blueprints", v: "Artisan", desc: "Pläne Miliz.", sol: "Sawmill Büro Vorarbeiter." },
        { de: "Ersatzteile", en: "Spare Parts", v: "Artisan", desc: "Heli-Bauteile.", sol: "3 Fragmente Absturzplatz Sumpf." },
        { de: "Versteck im Sumpf", en: "Swamp Stash", v: "Artisan", desc: "Waffen Sumpf.", sol: "W-Stadt unter blauer Plane." },
        { de: "Schrottsammler", en: "Scrap Metal", v: "Artisan", desc: "Metallschrott Flugplatz.", sol: "5 Teile um Wracks Ground Zero." },
        { de: "Handwerker", en: "Handyman", v: "Artisan", desc: "Generator Ban Pa.", sol: "Reparatur mit Toolset Dorfmitte." },
        { de: "Schwarzmarkt", en: "Black Market", v: "Artisan", desc: "Kassenbuch Markt.", sol: "Startstadt Marktstand unter Kiste." },
        { de: "Sprengstoff", en: "Explosives", v: "Artisan", desc: "C4 Bunker.", sol: "YBL-1 Waffenkammer Regal." },
        { de: "Lieferengpass", en: "Supply Shortage", v: "Artisan", desc: "Baumaterialien.", sol: "3 Panzertape, 2 Nägel." },
        { de: "Geheime Werkstatt", en: "Secret Workshop", v: "Artisan", desc: "Werkstatt Tiger Bay.", sol: "Garage mit blauem LKW Vorstadt." },
        { de: "Schrottplatz", en: "Scrapyard", v: "Artisan", desc: "Teile Autowracks.", sol: "5 Kupferkabel aus Wracks." },
        { de: "Fahrzeugdiebstahl", en: "Grand Theft", v: "Artisan", desc: "Markiere LKW.", sol: "Sawmill Haupthalle Rückseite." },
        { de: "Ersatzteile gesucht", en: "Parts Needed", v: "Artisan", desc: "2 Autobatterien.", sol: "Finden in Garagen/Tankstellen." },
        { de: "Werkzeugkiste", en: "Toolbox", v: "Artisan", desc: "Artisans Kiste.", sol: "Ban Pa Elder's House Schlafzimmer." },
        { de: "Treibstoff", en: "Fuel Run", v: "Artisan", desc: "Benzinkanister.", sol: "2 rote Gas Cans abgeben." },
        { de: "Bauherr", en: "The Builder", v: "Artisan", desc: "Material Bunker.", sol: "2 Tape, 1 Toolset Eingang YBL-1." },
        { de: "Sprengmeister", en: "Demolitions", v: "Artisan", desc: "Zünder Steinbruch.", sol: "Gelbe Box Steinbruch-POI." },
        { de: "Schmuggler-Route", en: "Smuggler's Run", v: "Artisan", desc: "Boot Schmuggler.", sol: "S-Ban Pa Strand Motoren-Check." },
        { de: "Verstecktes Gold", en: "Hidden Gold", v: "Artisan", desc: "Goldschmuck Villen.", sol: "Villa 3 Safe (Key nötig)." },
        { de: "Waffenmeister", en: "Gunsmith", v: "Artisan", desc: "M4-Teile Schießstand.", sol: "3 Lower Receiver Hunter's Paradise." },
        { de: "Was hochkommt", en: "What Comes Up", v: "Artisan", desc: "Drohnenteile Dschungel.", sol: "S-Hunter's Paradise Rauchspur." },
        { de: "Eine Stadt in Trümmern", en: "A Town in Pieces", v: "Artisan", desc: "Altmetall Ban Pa.", sol: "5 Teile zw. Hütten." },
        { de: "Handwerkszeug", en: "Tools of the Trade", v: "Artisan", desc: "Spezialwerkzeug Bunker.", sol: "YBL-1 Ebene -2 Werkbank." },
        { de: "Der Mechaniker", en: "The Mechanic", v: "Artisan", desc: "Vermisster Mechaniker.", sol: "Tankstelle Hinterhof Leiche." },
        { de: "Das Versteck des Schmugglers", en: "The Smuggler's Cache", v: "Artisan", desc: "Kisten Fluss.", sol: "Blue Lagoon Tauchen unter Steg." },
        { de: "Geheime Lager", en: "The Hidden Stash", v: "Artisan", desc: "Waffendepot Wald.", sol: "O-Sawmill unter Ästen." },
        { de: "Sonderanfertigung", en: "Custom Order", v: "Artisan", desc: "Modifizierte AK.", sol: "AKMN + Suppressor + Optik." },
        { de: "Transportlogistik", en: "Transport Logistics", v: "Artisan", desc: "LKW-Flotte.", sol: "Tiger Bay Mall Rückseite. 3 Marker." },
        { de: "An den Hügeln des Wahnsinns I", en: "At The Mounds of Madness", v: "Artisan", desc: "Hügel Ban Pa.", sol: "Untersuche Hügel NE Ban Pa." },
        { de: "An den Hügeln des Wahnsinns II", en: "At The Mounds of Madness II", v: "Artisan", desc: "Artefakt bergen.", sol: "Grabe am Grabhügel Ban Pa." },
        { de: "Rette die Rebellion", en: "Save the Rebellion", v: "Artisan", desc: "Unmodifizierte AKMNs.", sol: "Waffen zu Artisan bringen." },
        { de: "Wenn ein Baum fällt", en: "When a Tree Falls", v: "Artisan", desc: "Hauptsäge sabotieren.", sol: "Lumber Yard Sabotage." },
        { de: "Das gefährlichste Spiel", en: "The Most Dangerous Game", v: "Artisan", desc: "5 Sniper Dächer.", sol: "Tiger Bay Sniper Kills." },
        { de: "Verbrechen zahlt sich nicht aus", en: "Crime Doesn't Pay", v: "Artisan", desc: "Stiehl von Schmuggler.", sol: "Ban Pa Bootshaus." },
        { de: "Nacht Ozean", en: "Night Ocean", v: "Artisan", desc: "Lieferung durchführen.", sol: "Pier. (Zeitlimit aufgehoben in 0.4)" },
        { de: "Gefangener 23", en: "Prisoner 23", v: "Artisan", desc: "Finden Gefangenen.", sol: "YBL-1 Ebene -2 Zelle 3." },
        { de: "Artisans Liste", en: "Artisan's List", v: "Artisan", desc: "Batterien/Zündkerzen.", sol: "Tankstellen looten." },
        { de: "Artisans Liste II", en: "Artisan's List II", v: "Artisan", desc: "Kabel/Schrott.", sol: "Material sammeln." },
        { de: "Die Werkstatt", en: "The Workshop", v: "Artisan", desc: "Geheime Werkstatt.", sol: "Tiger Bay Vorstadt finden." },

        // --- TURNCOAT ---
        { de: "Keine Zeugen", en: "No Witnesses", v: "Turncoat", desc: "Leise Kills.", sol: "10 Kills mit Schalldämpfer." },
        { de: "Deal des Jahrhunderts", en: "Deal of the Century", v: "Turncoat", desc: "Schwarzgeld Lagune.", sol: "Blue Lagoon Koffer unter Theke." },
        { de: "Hacker", en: "Hacker", v: "Turncoat", desc: "Daten Terminal Bunker.", sol: "YBL-1 Ebene -2 Serverraum." },
        { de: "Tiefe Tiefen", en: "Deep Depths", v: "Turncoat", desc: "Logbuch Kommandant.", sol: "Fort Narith Keller Block B." },
        { de: "Vermisster Kollege", en: "Missing Colleague", v: "Turncoat", desc: "Vermisster Partner.", sol: "Sumpf Leiche (Goldener Kompass)." },
        { de: "Blutdiamanten", en: "Blood Diamonds", v: "Turncoat", desc: "Diamanten Safe.", sol: "Midnight Sapphire VIP Safe." },
        { de: "Verräter", en: "Traitor", v: "Turncoat", desc: "Ex-PMC ausschalten.", sol: "Hunter's Paradise schwarze Weste." },
        { de: "Dreckige Geheimnisse", en: "Dirty Secrets", v: "Turncoat", desc: "Erpresserakte.", sol: "Midnight Sapphire Zimmer 204." },
        { de: "Schmiergeld", en: "Bribe Money", v: "Turncoat", desc: "Geld am Pier.", sol: "Tiger Bay Koffer in blaues Boot." },
        { de: "Falsche Fährte", en: "False Trail", v: "Turncoat", desc: "Beweise Fort Narith.", sol: "Barracken Block C Bett." },
        { de: "Schweigen ist Gold", en: "Silence is Golden", v: "Turncoat", desc: "Zeugen Lagune.", sol: "10 leise Kills Blue Lagoon." },
        { de: "Diebesgut", en: "Stolen Goods", v: "Turncoat", desc: "Gestohlene Uhren.", sol: "Sawmill Arbeiterhütte Kästchen." },
        { de: "Hinterhalt", en: "Ambush", v: "Turncoat", desc: "Überlebe Tiger Bay.", sol: "Trigger Alarm Mall & Überlebe." },
        { de: "Der Überläufer", en: "The Defector", v: "Turncoat", desc: "Kontaktmann finden.", sol: "Ban Pa S-Haus. Notizblock." },
        { de: "Der Klient", en: "The Client", v: "Turncoat", desc: "Söldner-Zahler.", sol: "Villa 1 Safe Belege." },
        { de: "Die Ratte", en: "The Rat", v: "Turncoat", desc: "Spitzel Ban Pa.", sol: "Kirche Ban Pa blaues Hemd." },
        { de: "Der Hinterhalt", en: "The Setup", v: "Turncoat", desc: "Fingierter Deal.", sol: "Tiger Bay Pier Hinterhalt." },
        { de: "Die Auszahlung", en: "The Payoff", v: "Turncoat", desc: "Geld Miliz.", sol: "Fort Narith Block A Quartiermeister." },
        { de: "Die Flucht", en: "The Escape", v: "Turncoat", desc: "Fluchtplan VIP.", sol: "Ground Zero Jet Cockpit." },
        { de: "Schmutzige Hände", en: "Dirty Hands", v: "Turncoat", desc: "Kills mit AK.", sol: "10 Kills Midnight Sapphire mit AK." },
        { de: "Blutgeld", en: "Blood Money", v: "Turncoat", desc: "10.000$ bar.", sol: "Sammle Cash & Übergib es." },
        { de: "Personalabbau", en: "Downsizing", v: "Turncoat", desc: "3 Fraktions-Bosse.", sol: "Töte Hunter's Boss, General etc." },
        { de: "Wer hat das Sagen?", en: "Who's In Charge", v: "Turncoat", desc: "Dokumente Fort Narith.", sol: "Fort Narith HQ Akten." },
        { de: "Lokaler Golf-Star", en: "Local Golf Star", v: "Turncoat", desc: "Golfclub sichern.", sol: "Midnight Sapphire Golfplatz." },
        { de: "Letzte Befreiung", en: "Final Liberation", v: "Turncoat", desc: "Räume Bunker EG-2.", sol: "YBL-1 Ebene -2 Kills." },
        { de: "Narkotika-Deal", en: "Narcotic Bargain", v: "Turncoat", desc: "Drogen finden.", sol: "Blue Lagoon Drogenlabor." },
        { de: "In den richtigen Händen", en: "In The Right Hands", v: "Turncoat", desc: "M4A1 Waffen.", sol: "Waffen zu Turncoat bringen." },
        { de: "Eines Mannes Müll", en: "One Man's Trash", v: "Turncoat", desc: "Schrott Ground Zero.", sol: "Wrack-Teile sammeln." },
        { de: "Verspätetes Paket", en: "Delayed Package", v: "Turncoat", desc: "Post-LKW.", sol: "Straße Tiger Bay DHL Wagen." },
        { de: "Käufer unerzählter Dinge", en: "Buyer of Untold Things", v: "Turncoat", desc: "Diamanten VIP.", sol: "Midnight Sapphire Safe." },
        { de: "Nenne dein Gift", en: "Name Your Poison", v: "Turncoat", desc: "Chemikalien.", sol: "Tiger Bay Industriegebiet." },
        { de: "Drachentöter", en: "Dragonslayer", v: "Turncoat", desc: "General Pa.", sol: "Töte Boss in Fort Narith." },
        { de: "Kenne deinen Feind", en: "Know Your Enemy", v: "Turncoat", desc: "Artillerie markieren.", sol: "Fort Narith Geschütze." },
        { de: "Akademisches Interesse", en: "Academic Interest", v: "Turncoat", desc: "Schul-Daten.", sol: "Startstadt Schule Akten." },
        { de: "Freundlicher Hinweis", en: "Friendly Suggestion", v: "Turncoat", desc: "Bürgermeister Drohung.", sol: "Muni in Bett Bürgermeister." },

        // --- BANSHEE ---
        { de: "An den Hügeln", en: "At The Mounds", v: "Banshee", desc: "Gräber Ban Pa.", sol: "NE-Ban Pa Dokument Hügel." },
        { de: "Flugschreiber", en: "Flight Recorder", v: "Banshee", desc: "Blackbox C-130.", sol: "Ground Zero Wrack Heck." },
        { de: "Kopfgeldjäger", en: "Bounty Hunter", v: "Banshee", desc: "Commander Tiger Bay.", sol: "Töte Boss am Pier/HQ." },
        { de: "Nachtwache", en: "Night Watch", v: "Banshee", desc: "Stealth Raid.", sol: "Kills & Extraction leise abschließen." },
        { de: "Blut und Sand", en: "Blood and Sand", v: "Banshee", desc: "Schmuggel Küste.", sol: "Strand S-Tiger Bay Kisten." },
        { de: "Verlorene Lieferung (Banshee)", en: "Lost Shipment", v: "Banshee", desc: "Waffenlieferungen.", sol: "Hunter's Paradise Dschungel O." },
        { de: "Geisterstadt", en: "Ghost Town", v: "Banshee", desc: "Tiger Bay infiltrieren.", sol: "10 Min. Überleben (Zeitlimit aufgehoben)." },
        { de: "Blutopfer", en: "Blood Sacrifice", v: "Banshee", desc: "Ritualstätte.", sol: "O-Ban Pa Schrein Knochen." },
        { de: "Verlorene Seelen", en: "Lost Souls", v: "Banshee", desc: "Dogtags Krater.", sol: "3 PMC-Leichen Ground Zero." },
        { de: "Das Auge des Sturms", en: "Eye of the Storm", v: "Banshee", desc: "Zentrum Flugplatz.", sol: "Tower Ground Zero Signalgeber." },
        { de: "Flüstern im Dunkeln", en: "Whispers in the Dark", v: "Banshee", desc: "Audiologs Bunker.", sol: "YBL-1 Ebene -2 Diktiergerät." },
        { de: "Todeszone", en: "Killzone", v: "Banshee", desc: "Sniper-Nester.", sol: "3 Marker Dächer Villen Hotel." },
        { de: "Verbotenes Wissen", en: "Forbidden Knowledge", v: "Banshee", desc: "UNLRA Geheimakten.", sol: "Tiger Bay Labor Serverraum." },
        { de: "Höllenfeuer", en: "Hellfire", v: "Banshee", desc: "Treibstofftanks.", sol: "Fort Narith 4 weiße Tanks." },
        { de: "Dämonenjagd", en: "Demon Hunt", v: "Banshee", desc: "Kultisten-Anführer.", sol: "Ruinen SVD Boss eliminieren." },
        { de: "Das Ende vom Lied", en: "The Bitter End", v: "Banshee", desc: "Mysteriöse Fracht.", sol: "Hangar 2 schwarze Kiste extrahieren." },
        { de: "Der Kult", en: "The Cult", v: "Banshee", desc: "Ritualmorde.", sol: "Sumpf Altar Messer." },
        { de: "Das Opfer", en: "The Sacrifice", v: "Banshee", desc: "Kultisten Ruinen.", sol: "5 Kills schwarze Roben." },
        { de: "Das Artefakt", en: "The Artifact", v: "Banshee", desc: "Antike Kette.", sol: "Ban Pa versunkenes Boot." },
        { de: "Die Prophezeiung", en: "The Prophecy", v: "Banshee", desc: "Schriftrollen.", sol: "YBL-1 Ebene -3 Seitengang." },
        { de: "Stimmen im Nebel", en: "Voices in the Fog", v: "Banshee", desc: "Fischerboot.", sol: "Küste S-Lagune Funkgerät." },
        { de: "Das Zeichen", en: "The Mark", v: "Banshee", desc: "Okkulte Symbole.", sol: "3 Marker an rote Symbole Stadt." },
        { de: "Verrat", en: "Betrayal", v: "Banshee", desc: "Beweise UNLRA.", sol: "Miliz-Waffen in Zelt Tiger Bay." },
        { de: "Schweinepriester", en: "Corrupt Priest", v: "Banshee", desc: "Tagebuch Prediger.", sol: "Kirche Stadt Altar." },
        { de: "Dunkle Rituale", en: "Dark Rituals", v: "Banshee", desc: "Schreine zerstören.", sol: "3 Knochen-Schreine Dschungel." },
        { de: "Mitternacht", en: "Midnight", v: "Banshee", desc: "Hotel säubern.", sol: "15 Kills im Hotel." },
        { de: "Kultisten-Jagd", en: "Cultist Hunt", v: "Banshee", desc: "Kult-Mitglieder.", sol: "10 Kills N-Sumpf." },
        { de: "Blutmond", en: "Blood Moon", v: "Banshee", desc: "Ritueller Dolch.", sol: "Hügel O-YBL-1 Baumstumpf." },
        { de: "Schattenspiele", en: "Shadow Games", v: "Banshee", desc: "Strom Fort Narith.", sol: "Keller Block B Schaltkasten." },
        { de: "Kaltblütig", en: "Cold Blooded", v: "Banshee", desc: "Messer Kills.", sol: "3 Kills mit Nahkampfwaffe." },
        { de: "Das Ritual", en: "The Ritual", v: "Banshee", desc: "Artefakt zu Banshee.", sol: "Goldene Statue Malo's Shack." },
        { de: "Endstation", en: "End of the Line", v: "Banshee", desc: "Bahnhof Söldner.", sol: "Train Yard 20 Kills." },
        { de: "Holz", en: "Timber", v: "Banshee", desc: "Boss Sägewerk.", sol: "Töte Boss Lumber Yard." },
        { de: "Jets'N'Marks", en: "Jets'N'Marks", v: "Banshee", desc: "Jets markieren.", sol: "Ground Zero Hangar 1 & 2." },
        { de: "Waffenlieferungs-Status", en: "State of Weapon Shipment", v: "Banshee", desc: "Waffen-Kisten.", sol: "Hunter's Paradise Dschungel O." },
        { de: "Lamang-Verbindung", en: "Lamang Connection", v: "Banshee", desc: "Funk Pier.", sol: "Tiger Bay Pier Funk." },
        { de: "Tiefe Verderbtheit", en: "Deep Depravity", v: "Banshee", desc: "Kultisten-Schrein.", sol: "Östlich Ban Pa." },
        { de: "Himmelskriecher", en: "Skycrawlers", v: "Banshee", desc: "Blackbox Wrack.", sol: "Ground Zero C-130." },
        { de: "Ein Schuss ins Blaue", en: "A Shot in the Dark", v: "Banshee", desc: "Sniper jagen.", sol: "5 Kills Sniper." },
        { de: "Verbrechen und Strafe", en: "Felony and Punishment", v: "Banshee", desc: "Gefängnis Bunker.", sol: "Ebene -2 Zellen Brief." },
        { de: "Kein Entkommen", en: "No Escape", v: "Banshee", desc: "Säubere Airfield.", sol: "Ground Zero Kills." },
        { de: "Edles Pulver", en: "Noble Powder", v: "Banshee", desc: "Kokain Zimmer 301.", sol: "Midnight Sapphire." },
        { de: "Gebacken", en: "Baked", v: "Banshee", desc: "Drogenlabor C4.", sol: "Blue Lagoon Sabotage." },
        { de: "Was übrig blieb", en: "What Was Left", v: "Banshee", desc: "Dogtags Krater.", sol: "Sichere Marken Ground Zero." },
        { de: "Schmutzgräber", en: "Dirt Digger", v: "Banshee", desc: "Erpressungsakte Safe.", sol: "Tiger Bay HQ Safe." },

        // --- SONSTIGE / EXPLORATION ---
        { de: "Verborgene Tiefe", en: "The Depth", v: "Handshake", desc: "Karte Kommandozelt.", sol: "Basecamp Karte Wand." },
        { de: "Doomsgate", en: "Doomsgate", v: "Handshake", desc: "Checkpoint LAF.", sol: "Ground Zero Übersichtskarte." },
        { de: "Das verlorene Lager", en: "The Campsite", v: "Gunny", desc: "Verlassenes Lager.", sol: "W-Juliet 4 Leiche." },
        { de: "Drogen-Lieferung", en: "Narco Delivery", v: "Turncoat", desc: "Golfplatz Sandbunker.", sol: "Midnight Sapphire 3. Loch." },
        { de: "Ausrüstungskontrolle", en: "Gear Check", v: "Handshake", desc: "Hinterlassene Waffen.", sol: "NW-Stadt hohes Gras." },
        { de: "Gegen die Wand", en: "Up Against The Wall", v: "Handshake", desc: "Exekutionsstätte.", sol: "Fort Narith S-Außenmauer." },
        { de: "Rauchzeichen", en: "Smoke Signals", v: "Artisan", desc: "Signalfeuer Miliz.", sol: "Hügel zw. Ban Pa/Lumber." },
        { de: "Der Saboteur", en: "The Saboteur", v: "Handshake", desc: "Fahrzeuge Söldner.", sol: "Midnight Sapphire 3 SUVs C4." },
        { de: "Auge des Tigers", en: "Eye of the Tiger", v: "Handshake", desc: "Dach UNLRA HQ.", sol: "Tiger Bay Antenne." },
        { de: "Schwarze Liste", en: "Blacklist", v: "Artisan", desc: "Buch Namen.", sol: "Ban Pa Elder's House Dielen." },
        { de: "Ungläubig", en: "Unbeliever", v: "Banshee", desc: "Manifest Kapelle.", sol: "Kapelle O-Stadt Altar." },
        { de: "Gefährliche Beute", en: "Hazardous Haul", v: "Lab Rat", desc: "Kontaminierte Proben.", sol: "YBL-1 Ebene -3." },
        { de: "Gefährliche Beute II", en: "Hazardous Haul II", v: "Lab Rat", desc: "Bringe Proben.", sol: "Übergabe an Lab Rat." },
        { de: "Funküberwachung", en: "Radio Intercept", v: "Handshake", desc: "Peilsender Antenne.", sol: "Midnight Sapphire Dach." },
        { de: "Vorratsengpass", en: "Supply Squeeze", v: "Gunny", desc: "Rationen Lumber.", sol: "5 MREs Sägewerk." },
        { de: "Sherpa: Erste Schritte", en: "Sherpa: First Steps", v: "Handshake", desc: "Hilfe Operators.", sol: "Begleite Spieler Startstadt." },
        { de: "Aasfresser", en: "Scavenger", v: "Banshee", desc: "Wertsachen Todeszone.", sol: "Ground Zero Rucksäcke." },
        { de: "Blutgeld (Vulture)", en: "Blood Money", v: "Banshee", desc: "Banknoten Tiger Bay.", sol: "Mall Bankbereich." },
        { de: "Operation Geier", en: "Operation Vulture", v: "Banshee", desc: "3 Lager durchsuchen.", sol: "Fort/Tiger/Hotel." },
        { de: "Tote Augen", en: "Dead Eyes", v: "Banshee", desc: "Sniper auf Dächern.", sol: "Dach Sniper Kills." },
        { de: "Die Beute teilen", en: "Share the Spoils", v: "Banshee", desc: "Loot zu Vulture.", sol: "Übergabe Wertsachen." },

        // --- SQUAD MISSIONS ---
        { de: "Squad Strike: HVT", en: "Squad Strike: HVT", v: "Handshake", desc: "Boss-Eliminierung Team.", sol: "Teamplay POI Boss." },
        { de: "Squad Strike: Sichern & Halten", en: "Squad Strike: Secure & Hold", v: "Gunny", desc: "Halte Position.", sol: "5 Min. LZ Verteidigung." },
        { de: "Squad Strike: Datendiebstahl", en: "Squad Strike: Data Heist", v: "Turncoat", desc: "Infiltriere HQ.", sol: "YBL-1 oder Tiger Bay Daten." },
        { de: "Squad Strike: Night Raid", en: "Squad Strike: Night Raid", v: "Banshee", desc: "Leise Spec-Op.", sol: "Team Stealth Kills." }
];

const weapons = {
        "ks1": { ammo: "5.56x45mm M855A1", pen: "Class 4", tip: "0.4 Meta. Extrem leise mit Suppressor und bester Ergo-Wert." },
        "m4a1": { ammo: "5.56x45mm M855A1", pen: "Class 4", tip: "Allrounder. Nutze den 10.3-Zoll Lauf für bessere Mobilität." },
        "mk18": { ammo: "5.56x45mm M855A1", pen: "Class 4", tip: "Ideal für CQB. Sehr kurzes Profil, perfekt für Gebäude-Raids." },
        "m16a1": { ammo: "5.56x45mm M193 / M855", pen: "Class 3", tip: "Hohe Mündungsgeschwindigkeit sorgt für weniger Bullet-Drop auf Distanz." },
        "cqa1": { ammo: "5.56x45mm M855", pen: "Class 3", tip: "Chinesischer M4-Klon. Gute Budget-Alternative, aber etwas schlechtere Basis-Werte." },
        "ddm4": { ammo: "5.56x45mm M855A1", pen: "Class 4", tip: "Daniel Defense Plattform. Fantastische Basiswerte für Rückstoß und Ergonomie." },
        "sicmcx": { ammo: "5.56x45mm / .300 BLK", pen: "Class 4", tip: "Sehr flexibel. Ein absolutes Biest im Nahkampf, besonders mit Schalldämpfer." },
        "akm": { ammo: "7.62x39mm BP", pen: "Class 4", tip: "Viel Rückstoß, aber extrem hoher Schaden pro Schuss." },
        "akmn": { ammo: "7.62x39mm BP", pen: "Class 4", tip: "Der Klassiker. Mit BP-Munition extrem gefährlich gegen Class 3+ Westen." },
        "akmsn": { ammo: "7.62x39mm BP", pen: "Class 4", tip: "Klappschaft-Version. Kompakter im Rucksack, erlaubt Optik-Montage via Dovetail." },
        "ak74n": { ammo: "5.45x39mm 7N6M / PP", pen: "Class 3", tip: "Sehr geringer Rückstoß. Präziser als die 7.62er Varianten." },
        "ak74m": { ammo: "5.45x39mm PP / BP", pen: "Class 4", tip: "Modernisierte AK-74. Geringes Gewicht, gute Trägheits-Werte." },
        "aks74u": { ammo: "5.45x39mm PP", pen: "Class 3", tip: "Die 'Krinkov'. Genial für CQB, verliert aber auf Distanz stark an Genauigkeit." },
        "ak103": { ammo: "7.62x39mm BP", pen: "Class 4", tip: "Beste 7.62er AK. Kann alle modernen Aufsätze nutzen." },
        "ak105": { ammo: "5.45x39mm PP", pen: "Class 3", tip: "Kurze AK-Variante. Perfekt für das neue Bewegungssystem." },
        "vz58": { ammo: "7.62x39mm PS / BP", pen: "Class 4", tip: "Keine AK! Nutzt eigene Magazine. Höhere Feuerrate als die AKMN." },
        "ak12": { ammo: "5.45x39mm BP", pen: "Class 4", tip: "Modernste russische Armee-Waffe. Integrierte Schienen und tolles Schussgefühl." },
        "ak15": { ammo: "7.62x39mm BP", pen: "Class 4", tip: "Verbindet das moderne Handling der AK-12 mit der brachialen Kraft der 7.62 Patrone." },
        "ak19": { ammo: "5.56x45mm NATO", pen: "Class 4", tip: "Nutzt westliche Munition auf der modernen AK-12 Plattform. Sehr vielseitig." },
        "ak308": { ammo: "7.62x51mm M80/M61", pen: "Class 5-6", tip: "AK-Plattform auf Steroiden. Verschießt fette NATO-Muni. Extrem laut, extrem tödlich." },
        "m14": { ammo: "7.62x51mm M80 / M61", pen: "Class 4-6", tip: "Dominante Waffe in 0.4. M80 für KI, M61 für High-End Player Armor." },
        "m700": { ammo: "7.62x51mm M61", pen: "Class 6", tip: "Repetiergewehr. Erfordert Disziplin, aber ignoriert fast jede Rüstung." },
        "svd": { ammo: "7.62x54mmR 7N1", pen: "Class 5", tip: "Sehr laut! Zieht KI-Horden an, aber tötet fast alles mit einem Brusttreffer." },
        "mosin": { ammo: "7.62x54mmR SNB", pen: "Class 6", tip: "Günstig und tödlich. SNB-Munition schlägt durch jeden Helm im Spiel." },
        "skn": { ammo: "7.62x39mm BP", pen: "Class 4", tip: "Modernisierte SKS. Präziser als die AK, ideal für Unterdrückungsfeuer." },
        "mp5": { ammo: "9x19mm AP 6.3 / 7N21", pen: "Class 2+", tip: "Ein Laser auf kurze Distanz. Ziele auf Kopf oder Beine." },
        "mp7a1": { ammo: "4.6x30mm AP", pen: "Class 4", tip: "Kleine Waffe, gigantischer Durchschlag. Perfekte Backup-Waffe für Sniper." },
        "mp7a2": { ammo: "4.6x30mm AP", pen: "Class 4", tip: "Wie die A1, aber erlaubt die Montage eigener Vordergriffe für noch bessere Ergo." },
        "vz61": { ammo: "9x18mm / .32 ACP", pen: "Class 0-1", tip: "Skorpion Maschinenpistole. Enorme Feuerrate, aber durchdringt keine Rüstung. Leg-Meta!" },
        "vityaz": { ammo: "9x19mm 7N21", pen: "Class 2+", tip: "Russische SMG. Nutzt AK-Aufsätze für hohe Ergonomie." },
        "m870": { ammo: "12G Slug / 00 Buck", pen: "Class 0-2", tip: "In 0.4 sind Slugs gegen weiche Ziele verheerend." },
        "590a1": { ammo: "12G 00 Buckshot", pen: "Class 0-1", tip: "Maximale Stopwirkung auf 5-10 Meter." },
        "alien": { ammo: "9x19mm AP 6.3 / 7N21", pen: "Class 2+", tip: "0.4 Meta für Sidearms. Extrem schnell im ADS und fast kein Rückstoß." },
        "glock17": { ammo: "9x19mm PST Gzh", pen: "Class 1+", tip: "Zuverlässig, große Magazine verfügbar." },
        "m9a1": { ammo: "9x19mm PST Gzh", pen: "Class 1+", tip: "Gute Standard-Pistole für den Start." },
        "makarov": { ammo: "9x18mm PM Gzh", pen: "Class 0", tip: "Nur im absoluten Notfall." },
        "1911": { ammo: ".45 ACP", pen: "Class 1", tip: "Massiver Fleischschaden, aber geringe Magazinkapazität." },
        "ccc": { ammo: ".45 ACP", pen: "Class 1", tip: "Colt Combat Commander. Kompakt, schlägt aber genauso hart zu wie die 1911." },
        "typ51": { ammo: "7.62x25mm Tokarev", pen: "Class 2+", tip: "Chinesischer TT-33 Klon. Die schnelle Munition penetriert weiche Rüstungen überraschend gut." },
        "m1a": { ammo: "7.62x51mm M80", pen: "Class 4-6", tip: "0.4 NEU: Zivile Version des M14. Exzellent als DMR mit den neuen 0.4 Scopes." },
        "rem788": { ammo: "5.56x45mm M855", pen: "Class 2-3", tip: "0.4 NEU: Remington Model 788 (.222). Repetierbüchse, ideal für Einsteiger-Jagd-Tasks." },
        "m201c": { ammo: "5.56x45mm M855A1", pen: "Class 4", tip: "0.4 NEU: Stark modifizierbares Kompaktgewehr. Sehr starke Alternative zur M4A1." }
};

const weaponImages = {
        "ak74m": "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/52/AK-74M_inspect.png",
        "ak74n": "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e2/AK-74N_inspect.png",
        "ak103": "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/30/AK-12_inspect.png",
        "ak12": "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/30/AK-12_inspect.png",
        "ak15": "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e3/AK-15_inspect.png",
        "ak19": "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/b6/AK-19_inspect.png",
        "akm": "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/94/AKM_inspect.png",
        "akmn": "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/94/AKM_inspect.png",
        "akmsn": "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/51/AKMSN_inspect.png",
        "aks74u": "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/fd/AKS74U_inspect.png",
        "ak308": "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/9d/AK-308_inspect.png",
        "cqa1": "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/b3/CQA1_inspect.png",
        "ks1": "https://static.wikia.nocookie.net/grayzonewarfare/images/c/c5/KS-1_Icon.png",
        "m4a1": "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/43/M4A1_inspect.png",
        "ddm4": "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/43/DDM4_inspect.png",
        "sicmcx": "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/2d/SIG_MCX_inspect.png",
        "m14": "https://static.wikia.nocookie.net/grayzonewarfare/images/8/80/M14_EBR_Icon.png",
        "m700": "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/a8/M700_inspect.png",
        "svd": "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/85/SVD_inspect.png",
        "mosin": "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/51/Mosin_%28S%29_inspect.png",
        "mp5": "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/52/MP5_inspect.png",
        "mp7a2": "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/f9/MP7_inspect.png",
        "m870": "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/db/M870_inspect.png",
        "alien": "https://static.wikia.nocookie.net/grayzonewarfare/images/8/8b/Laugo_Alien_Icon.png",
        "glock17": "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e4/Glock17_inspect.png",
        "m9a1": "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/bc/M9A1_inspect.png"
};

const bosses = {
        "market_leader": { loc: "Marktplatz / Rathaus (Startstadt)", gear: "Engraved AKMN / SKS", loot: "Büroschlüssel, gravierte AK.", tip: "Hält sich oft im Obergeschoss des Rathauses auf." },
        "lumber_boss": { loc: "Lumber Yard (Sägewerk)", gear: "Mosin / AK-74N", loot: "Lumber Yard Office Key.", tip: "Patrouilliert zwischen den Holzstapeln. Gute Sichtlinien." },
        "rebel_ybl": { loc: "YBL-1 Bunker", gear: "AK-103 Custom", loot: "Bunker-Generalschlüssel.", tip: "Vorsicht in den engen Gängen, nutzt Blendgranaten." },
        "hunter_commander": { loc: "Hunter's Paradise (Schießstand)", gear: "M4A1 Custom / Fast MT", loot: "Braunes Barett, Key to Weapon Storage.", tip: "Die Leibwache nutzt oft Schalldämpfer." },
        "malo_blue": { loc: "Blue Lagoon (Restaurant/Steg)", gear: "SVD / Mosin", loot: "Malo's Key, Scharfschützengewehr.", tip: "Er schießt extrem präzise auf hohe Distanz." },
        "banpa_leader": { loc: "Ban Pa (Zentrum am See)", gear: "SKS / AKM", loot: "Ban Pa Shack Key, wertvolle Statuen.", tip: "Nutze Granaten, um ihn aus den Hütten zu treiben." },
        "fort_commander": { loc: "Fort Narith (HQ Gebäude)", gear: "Class 5 Armor / M14 EBR", loot: "Fort Narith Storage Key.", tip: "Der zäheste Boss. Erfordert zwingend AP-Munition (M61/SNB)." },
        "midnight_laf": { loc: "Midnight Sapphire (Hotel/Villen)", gear: "KS-1 Custom / Class 4+", loot: "Villen-Schlüssel, High-End Optiken.", tip: "Wird von 4-6 Elitesoldaten geschützt. Greife niemals frontal an." },
        "tiger_bay_unlra": { loc: "Tiger Bay (UNLRA Zone)", gear: "M4A1 / Class 5", loot: "UNLRA Medical Key.", tip: "Höchste KI-Dichte im Spiel. Bring massiv Munition mit." },
        "tiger_bay_pier": { loc: "Tiger Bay (Pier)", gear: "AK-103 / Drum Mags", loot: "Pier Storage Key.", tip: "Er nutzt Magazine mit hoher Kapazität. Warte auf seine Nachladepause." },
        "airfield_boss": { loc: "Ground Zero (Airfield Hangar)", gear: "Custom Weapons / Class 6", loot: "Seltene Prototyp-Teile.", tip: "Nur für Squads. KI nutzt hier oft Thermal-Optiken." },
        "viper": { loc: "Dschungel-Camps", gear: "Vz.58 / Stealth Gear", loot: "Gravierte Waffen", tip: "0.4 NEU: Extrem leise. Bewegt sich flankierend durch die Vegetation." },
        "bloodhound": { loc: "Militär-Checkpoints", gear: "M201C / Class 4", loot: "High-Tier Armor", tip: "0.4 NEU: Agiert mit einem Elite-Squad der neuen 7 KI-Fraktionen." },
        "golden_boy": { loc: "Midnight Sapphire", gear: "Alien Pistole / MP7", loot: "Rolex, VIP-Schlüssel", tip: "0.4 NEU: Trägt extrem viel Loot bei sich, schwer bewacht." }
};

const ammoDb = {
        "m855a1": { name: "5.56x45mm M855A1", pen: 4.5, damage: 52, info: "Standard Meta. Bricht Class 4 zuverlässig." },
        "m855": { name: "5.56x45mm M855", pen: 3.5, damage: 50, info: "Gut gegen Scavs, schwach gegen Spieler-Platten." },
        "m193": { name: "5.56x45mm M193", pen: 2.0, damage: 58, info: "Hoher Fleischschaden, prallt an Class 3 ab." },
        "m856a1": { name: "5.56x45mm M856A1", pen: 3.8, damage: 51, info: "Tracer-Munition (Leuchtspur). Gut für Squads." },
        "mk255": { name: "5.56x45mm MK255", pen: 1.0, damage: 65, info: "Hollow Point. Verheerend gegen ungepanzerte Ziele." },
        "300_ap": { name: ".300 BLK AP", pen: 4.5, damage: 55, info: "Hervorragende Penetration auf kurze Distanz." },
        "300_cbj": { name: ".300 BLK CBJ", pen: 4.0, damage: 58, info: "Gute Balance zwischen Durchschlag und Schaden." },
        "300_m62": { name: ".300 BLK M62", pen: 3.8, damage: 54, info: "Leuchtspurmunition für die SIG-MCX." },
        "300_whisper": { name: ".300 BLK Whisper", pen: 2.5, damage: 62, info: "Subsonic. In Kombination mit Schalldämpfer flüsterleise." },
        "ak74_bs": { name: "5.45x39mm BS", pen: 5.5, damage: 43, info: "Durchschlägt Class 5 problemlos." },
        "ak74_bp": { name: "5.45x39mm BP", pen: 4.5, damage: 48, info: "Die Meta-Muni für 5.45. Bricht Class 4." },
        "ak74_pp": { name: "5.45x39mm PP", pen: 3.5, damage: 50, info: "Guter Mid-Tier Durchschlag." },
        "ak74_7n6": { name: "5.45x39mm 7N6M", pen: 2.5, damage: 52, info: "Standard-KI Munition." },
        "ak74_hp": { name: "5.45x39mm HP", pen: 1.0, damage: 68, info: "Null Durchschlag, Beine anvisieren!" },
        "ak_mai_ap": { name: "7.62x39mm MAI AP", pen: 5.5, damage: 46, info: "Bricht fast jede Rüstung." },
        "ak_bp": { name: "7.62x39mm BP", pen: 4.5, damage: 58, info: "Härtester Standard-Durchschlag für AKs." },
        "ak_ps": { name: "7.62x39mm PS", pen: 3.5, damage: 54, info: "Solider Allrounder." },
        "ak_us": { name: "7.62x39mm US", pen: 2.0, damage: 56, info: "Subsonic. Sehr leise." },
        "ak_hp": { name: "7.62x39mm HP", pen: 1.0, damage: 73, info: "Ideal für Leg-Meta." },
        "m993": { name: "7.62x51mm M993", pen: 6.5, damage: 60, info: "Geht durch Class 6 wie Butter." },
        "m61": { name: "7.62x51mm M61", pen: 6.0, damage: 64, info: "Ignoriert fast jede Rüstung." },
        "m62": { name: "7.62x51mm M62", pen: 5.4, damage: 68, info: "Hohe Penetration + Leuchtspur." },
        "m80": { name: "7.62x51mm M80", pen: 4.2, damage: 80, info: "Enormer Schaden." },
        "tcw_sp": { name: "7.62x51mm TCW SP", pen: 2.5, damage: 90, info: "Gigantischer Fleischschaden." },
        "snb": { name: "7.62x54mmR SNB", pen: 6.0, damage: 75, info: "Schlägt durch jeden Helm." },
        "7n1": { name: "7.62x54mmR 7N1", pen: 4.5, damage: 85, info: "One-Shot Potenzial gegen Class 4." },
        "lps": { name: "7.62x54mmR LPS", pen: 4.0, damage: 80, info: "Standard-Munition für Mosin." },
        "46_apsx": { name: "4.6x30mm AP SX", pen: 5.0, damage: 35, info: "Bricht Class 5!" },
        "46_fmjsx": { name: "4.6x30mm FMJ SX", pen: 4.0, damage: 43, info: "Gute Allround-Munition." },
        "7n31": { name: "9x19mm 7N31", pen: 3.5, damage: 45, info: "Beste 9mm Penetration." },
        "ap63": { name: "9x19mm AP 6.3", pen: 2.5, damage: 48, info: "Stark gegen Face-Shields." },
        "pst": { name: "9x19mm PST Gzh", pen: 1.5, damage: 52, info: "Nur für Kopfschüsse ohne Helm." },
        "rip": { name: "9x19mm RIP", pen: 0.5, damage: 95, info: "Leg-Meta Königin." },
        "ap20": { name: "12G AP-20 Slug", pen: 3.5, damage: 160, info: "Panzerbrechender Eisenblock." },
        "slug": { name: "12G Copper Slug", pen: 2.0, damage: 150, info: "Präzises Einzelgeschoss." },
        "buck": { name: "12G 00 Buckshot", pen: 1.0, damage: "8x35", info: "Tödlich im Nahkampf." },
        "45_ap": { name: ".45 ACP AP", pen: 3.5, damage: 60, info: "Beste .45er Pen." }
};

const allKeys = [
    const allKeys = [
        { name: "Doctor's Office Key", loc: "Startstadt (Arzthaus)", effect: "Öffnet das Büro des Arztes im 2. Stock.", loot: "Medizinische Vorräte, Task-Intel (Medical Detective)" },
        { name: "Mayor's Office Key", loc: "Startstadt (Rathaus)", effect: "Öffnet das Hauptbüro des Bürgermeisters.", loot: "Bargeld, Intel, Tresor" },
        { name: "Market Storage Key", loc: "Startstadt (Marktplatz)", effect: "Öffnet den Lagerraum hinter den Marktständen.", loot: "Provisions (Essen/Trinken), Rucksäcke" },
        { name: "Pharmacy Key", loc: "Startstadt", effect: "Öffnet den Hinterraum der kleinen Apotheke.", loot: "IFAKs, Surkits, Schmerzmittel" },
        { name: "Foreman's Office Key", loc: "Lumber Yard", effect: "Öffnet das Büro des Vorarbeiters in der Haupthalle.", loot: "Task-Dokumente (Blueprints), Safe, Bargeld" },
        { name: "Lumber Storage Key", loc: "Lumber Yard", effect: "Öffnet den verschlossenen Geräteschuppen im Norden.", loot: "Werkzeuge (Toolsets), Baumaterial" },
        { name: "HP Weapon Storage Key", loc: "Hunter's Paradise", effect: "Öffnet die Waffenkammer am Hauptschießstand. Droppt oft vom dortigen Boss.", loot: "High-Tier Waffen (M4A1, M700), Aufsätze, AP-Munition" },
        { name: "HP Motel Room 3 Key", loc: "Hunter's Paradise", effect: "Öffnet Zimmer 3 im Motel-Bereich.", loot: "Waffen-Kisten, Munition" },
        { name: "HP Office Key", loc: "Hunter's Paradise", effect: "Öffnet das Hauptbüro nahe dem Eingang.", loot: "Intel, Wertsachen" },
        { name: "Malo's Shack Key", loc: "Blue Lagoon", effect: "Öffnet Malos Hütte auf Stelzen über dem Wasser.", loot: "SVD/Mosin-Teile, Task-Items, Gold" },
        { name: "Restaurant Backroom Key", loc: "Blue Lagoon", effect: "Öffnet das Lager im hinteren Teil des Restaurants.", loot: "Provisions, Schwarzgeld (Task)" },
        { name: "Lagoon Office Key", loc: "Blue Lagoon", effect: "Öffnet das kleine Verwaltungsbüro.", loot: "Tresor, Intel" },
        { name: "Elder's House Key", loc: "Ban Pa", effect: "Öffnet das große Haus des Dorfältesten im Zentrum.", loot: "Wertvolle Statuen, Task-Items" },
        { name: "Ban Pa Shack Key", loc: "Ban Pa", effect: "Öffnet die verschlossene Fischerhütte im Norden.", loot: "Waffen, Munition" },
        { name: "Smuggler's Storage Key", loc: "Ban Pa", effect: "Öffnet den Schuppen nahe dem Bootssteg.", loot: "Schmuggelware, Wertsachen" },
        { name: "YBL-1 Office Key", loc: "YBL-1 Bunker (Ebene -1)", effect: "Öffnet das Büro direkt nach dem Haupteingang.", loot: "Task-Dokumente, Intel" },
        { name: "YBL-1 Generator Key", loc: "YBL-1 Bunker (Ebene -2)", effect: "Öffnet den Hauptgeneratorraum.", loot: "Sicherungen, Werkzeuge, Task-Zugang" },
        { name: "YBL-1 Server Room Key", loc: "YBL-1 Bunker (Ebene -2)", effect: "Öffnet den Serverraum hinter den Lüftungsschächten.", loot: "Elektronik, Task-Intel (Festplatte)" },
        { name: "YBL-1 Commander Key", loc: "YBL-1 Bunker (Ebene -2)", effect: "Öffnet das Quartier des Bunker-Kommandanten.", loot: "Seltene Waffen-Mods, Tresor" },
        { name: "YBL-1 Security Key", loc: "YBL-1 Bunker (Ebene -1)", effect: "Öffnet den Überwachungsraum.", loot: "Waffen, Munition" },
        { name: "Fort HQ Key", loc: "Fort Narith", effect: "Öffnet das Büro von General Pa im obersten Stock des Hauptquartiers.", loot: "Gravierte Waffen, Intel, Safe" },
        { name: "Fort Storage Key", loc: "Fort Narith", effect: "Öffnet das primäre Munitionsdepot.", loot: "Große Mengen an High-Tier Munition (M61, M855A1)" },
        { name: "Barracks A Key", loc: "Fort Narith (Block A)", effect: "Öffnet den verschlossenen Offiziersbereich in Block A.", loot: "Rüstungen (Class 4+), Helme" },
        { name: "Fort Armory Key", loc: "Fort Narith", effect: "Öffnet die schwere Waffenkammer.", loot: "Sturmgewehre, Granaten, Aufsätze" },
        { name: "Gatehouse Key", loc: "Fort Narith", effect: "Öffnet das Wachhaus am Haupteingang.", loot: "Waffen, Munition, Schlüssel" },
        { name: "UNLRA Lab Card", loc: "Tiger Bay HQ", effect: "Die rote Keycard öffnet die Quarantäne-Labore im 3. Stock des HQs.", loot: "Medizinische High-Tier Güter (Surkits, Stims), Task-Items" },
        { name: "Tiger Bay Mall Key", loc: "Tiger Bay", effect: "Öffnet den Technik/Security-Raum im Einkaufszentrum.", loot: "Elektronik, Waffen, Bargeld" },
        { name: "Pier Storage Key", loc: "Tiger Bay", effect: "Öffnet das Lagerhaus direkt am Pier.", loot: "Waffen-Kisten, Aufsätze" },
        { name: "Tiger Clinic Key", loc: "Tiger Bay", effect: "Öffnet die kleine Feldklinik in der Stadt.", loot: "Medikamente, Blutkonserven" },
        { name: "UNLRA Commander Key", loc: "Tiger Bay HQ", effect: "Öffnet das Büro des UNLRA Offiziers.", loot: "Intel, Safe, seltene Waffen" },
        { name: "Hotel Master Key", loc: "Midnight Sapphire", effect: "Der wichtigste Schlüssel hier! Öffnet viele Standard-Zimmer im Hotel.", loot: "Bargeld, Wertsachen, Koffer" },
        { name: "Villa 1 Key", loc: "Midnight Sapphire", effect: "Öffnet die westlichste Luxusvilla.", loot: "Geld, Schmuck, Safe" },
        { name: "Villa 2 Key", loc: "Midnight Sapphire", effect: "Öffnet die mittlere Villa (wichtig für Kongressabgeordneten-Task).", loot: "Task-Dokumente, Safe" },
        { name: "Villa 3 Key", loc: "Midnight Sapphire", effect: "Öffnet die östliche Villa.", loot: "High-Tier Loot, Elektronik" },
        { name: "VIP Lounge Key", loc: "Midnight Sapphire", effect: "Öffnet den VIP-Bereich im obersten Stock des Hotels.", loot: "Extreme Wertsachen, Gold" },
        { name: "Hotel Manager Key", loc: "Midnight Sapphire", effect: "Öffnet das Büro hinter der Rezeption.", loot: "Safe, Bargeld, Intel" },
        { name: "Room 202 Key", loc: "Midnight Sapphire", effect: "Öffnet Zimmer 202 im 2. Stock.", loot: "Waffen-Koffer" },
        { name: "Room 204 Key", loc: "Midnight Sapphire", effect: "Öffnet Zimmer 204 (wichtig für Turncoat-Task).", loot: "Task-Akte, Wertsachen" },
        { name: "Airfield Tower Key", loc: "Ground Zero", effect: "Öffnet den verschlossenen Bereich im Kontrollturm.", loot: "Militärische Aufklärung, Waffen" },
        { name: "Hangar 1 Office Key", loc: "Ground Zero", effect: "Öffnet das Büro im ersten Hangar.", loot: "Werkzeuge, Waffen-Mods" },
        { name: "NT Office Key", loc: "Nam Thaven", effect: "Öffnet ein kleines Büro im Stadtzentrum.", loot: "Bargeld, zivile Dokumente" },
        { name: "NT Storage Key", loc: "Nam Thaven", effect: "Öffnet einen kleinen Lagerschuppen.", loot: "Werkzeuge, Rucksäcke" },
        { name: "NT Gas Station Key", loc: "Nam Thaven", effect: "Öffnet das Hinterzimmer der Tankstelle.", loot: "Provisions, Autoteile" },
        { name: "NT Motel Key", loc: "Nam Thaven", effect: "Öffnet ein Motelzimmer am Stadtrand.", loot: "Kleidung, Bargeld, einfache Waffen" },
        { name: "NT Police Key", loc: "Nam Thaven", effect: "Öffnet die Waffenkammer in der lokalen Polizeistation.", loot: "Pistolen, Schrotflinten, Munition" },
        { name: "NT Clinic Key", loc: "Nam Thaven", effect: "Öffnet den Medikamentenschrank der kleinen Klinik.", loot: "Bandagen, Schmerzmittel" },
        { name: "NT Garage Key", loc: "Nam Thaven", effect: "Öffnet eine private Garage.", loot: "Werkzeuge, Benzin" },
        { name: "KV Office Key", loc: "Kiu Vongsa", effect: "Öffnet das Verwaltungsbüro der Stadt.", loot: "Bargeld, Intel" },
        { name: "KV Storage Key", loc: "Kiu Vongsa", effect: "Öffnet das städtische Lagerhaus.", loot: "Werkzeuge, einfache Materialien" },
        { name: "KV Gas Station Key", loc: "Kiu Vongsa", effect: "Öffnet das Tankstellen-Lager.", loot: "Essen, Trinken, Schrott" },
        { name: "KV Motel Key", loc: "Kiu Vongsa", effect: "Öffnet ein Motelzimmer für Zivilisten.", loot: "Wertsachen (gering)" },
        { name: "KV Police Key", loc: "Kiu Vongsa", effect: "Öffnet den Asservatenraum der Polizei.", loot: "Zivile Waffen, 9mm Munition" },
        { name: "KV Clinic Key", loc: "Kiu Vongsa", effect: "Öffnet den Vorratsraum der Klinik.", loot: "Medizinische Grundversorgung" },
        { name: "KV Garage Key", loc: "Kiu Vongsa", effect: "Öffnet eine kleine Autowerkstatt.", loot: "Autobatterien, Zündkerzen" },
        { name: "PL Office Key", loc: "Pha Lang", effect: "Öffnet ein Bürogebäude im Zentrum.", loot: "Bargeld, Büromaterial" },
        { name: "PL Storage Key", loc: "Pha Lang", effect: "Öffnet den lokalen Lagerschuppen.", loot: "Handwerkszeug" },
        { name: "PL Gas Station Key", loc: "Pha Lang", effect: "Öffnet die Hintertür der Tankstelle.", loot: "Nahrungsmittel, Benzin" },
        { name: "PL Motel Key", loc: "Pha Lang", effect: "Öffnet ein verlassenes Motelzimmer.", loot: "Geringe Wertsachen" },
        { name: "PL Police Key", loc: "Pha Lang", effect: "Öffnet das Waffenlager der Polizei.", loot: "Low-Tier Waffen, Westen" },
        { name: "PL Clinic Key", loc: "Pha Lang", effect: "Öffnet das Medikamentenlager.", loot: "Bandagen, Tourniquets" },
        { name: "PL Garage Key", loc: "Pha Lang", effect: "Öffnet eine verschlossene Garage.", loot: "Werkzeuge, Schrott" },
        { name: "MS Maintenance Key", loc: "Midnight Sapphire", effect: "Öffnet den Wartungsraum im Erdgeschoss.", loot: "Werkzeug, Elektronik" },
        { name: "MS Staff Room Key", loc: "Midnight Sapphire", effect: "Öffnet den Pausenraum des Personals.", loot: "Provisions, Geld" },
        { name: "Room 101 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 101 (1. Etage).", loot: "Geld, Koffer" },
        { name: "Room 102 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 102 (1. Etage).", loot: "Geld, Koffer" },
        { name: "Room 103 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 103 (1. Etage).", loot: "Geld, Waffen (selten)" },
        { name: "Room 104 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 104 (1. Etage).", loot: "Geld, Koffer" },
        { name: "Room 201 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 201 (2. Etage).", loot: "Geld, Wertsachen" },
        { name: "Room 203 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 203 (2. Etage).", loot: "Geld, Safe" },
        { name: "Room 205 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 205 (2. Etage).", loot: "Geld, Waffen-Mods" },
        { name: "Room 301 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 301 (3. Etage).", loot: "High-Tier Loot, Gold" },
        { name: "Room 302 Key", loc: "Midnight Sapphire", effect: "Öffnet Hotelzimmer 302 (3. Etage).", loot: "Safe, Schmuck" },
        { name: "HP Motel Room 1 Key", loc: "Hunter's Paradise", effect: "Öffnet das erste Motelzimmer.", loot: "Low-Tier Waffen, Rucksäcke" },
        { name: "HP Motel Room 2 Key", loc: "Hunter's Paradise", effect: "Öffnet das zweite Motelzimmer.", loot: "Munitionskisten, Westen" },
        { name: "HP Guard Shack Key", loc: "Hunter's Paradise", effect: "Öffnet das kleine Wachhäuschen am Eingang.", loot: "Waffen-Aufsätze, Munition" },
        { name: "TB Apartment Key", loc: "Tiger Bay", effect: "Öffnet ein verlassenes Apartment in den Wohnblocks.", loot: "Bargeld, Ziviler Loot" },
        { name: "TB Noodle Shop Key", loc: "Tiger Bay", effect: "Öffnet die Küche des Nudelrestaurants.", loot: "Provisions (sehr viel Essen)" },
        { name: "TB Water Treatment Key", loc: "Tiger Bay", effect: "Öffnet das Pumpenhaus am Rand der Stadt.", loot: "Werkzeuge, Filter" },
        { name: "BP Fishing Hut Key", loc: "Ban Pa", effect: "Öffnet eine weitere Fischerhütte am Wasser.", loot: "Schrott, geringe Wertsachen" },
        { name: "BP Storage Key", loc: "Ban Pa", effect: "Öffnet einen Lagerschuppen im Dschungel nahe Ban Pa.", loot: "Waffen, Rigs" }
];

const valuables = {
    const valuables = {
        "gold_phone": { price: "~ $800", slots: "1", info: "Absoluter Jackpot. Eines der besten Items im Spiel für 1 Slot." },
        "diamond_ring": { price: "~ $600", slots: "1", info: "Extrem selten. Spawnt häufig in Tresoren (Villen, Hotel)." },
        "gold_watch": { price: "~ $500", slots: "1", info: "Sehr lukrativ. Unbedingt im Secure Container sichern!" },
        "class_docs": { price: "~ $500", slots: "2 (Horizontal)", info: "Hoher Gesamtwert, erfordert aber 2 horizontale Slots." },
        "gold_coin": { price: "~ $350", slots: "1", info: "Perfekter Lückenfüller für den Rucksack." },
        "usb_drive": { price: "~ $450", slots: "1", info: "Verschlüsselt. Findet man meist in PC-Gehäusen oder auf Schreibtischen." },
        "gpu": { price: "~ $450", slots: "4 (2x2)", info: "Hoher Wert, aber frisst viel Platz. Nur mitnehmen, wenn Platz ist." },
        "tablet": { price: "~ $300", slots: "2", info: "Guter Wert, findet man oft in Büros und dem Hotel." },
        "laptop": { price: "~ $400", slots: "4 (2x2)", info: "Viel zu groß für den Preis. Tausche es gegen 1-Slot-Items aus, wenn möglich." },
        "antique_vase": { price: "~ $200", slots: "4 (2x2)", info: "Sieht wertvoll aus, nimmt aber viel Platz weg. Eher ineffizient." },
        "wood_statue": { price: "~ $150", slots: "2", info: "Häufig in Ban Pa oder Blue Lagoon." },
        "smartphone": { price: "~ $150", slots: "1", info: "Guter Standard-Loot für 1 Slot." },
        "camera": { price: "~ $150", slots: "2", info: "Guter Beifang, oft in zivilen Gebäuden." },
        "silver_coin": { price: "~ $150", slots: "1", info: "Nicht so gut wie Gold, aber definitiv mitnehmen!" },
        "silver_chain": { price: "~ $120", slots: "1", info: "Gut, um einzelne leere Slots im Rucksack aufzufüllen." },
        "voice_recorder": { price: "~ $110", slots: "1", info: "Solider Wert für nur einen Slot." },
        "hdd": { price: "~ $100", slots: "2", info: "Lohnt sich auf Dauer, da sie sehr häufig an PCs spawnen." },
        "flash_drive": { price: "~ $80", slots: "1", info: "Normaler USB-Stick. Nimmt kaum Platz weg." },
        "calculator": { price: "~ $80", slots: "1", info: "Guter Filler für den Secure Container am Anfang." },
        "wallet": { price: "~ $50 - $200", slots: "1", info: "Kann manchmal wertvolles Bargeld enthalten. Prüfen!" },
        "sunglasses": { price: "~ $60", slots: "1", info: "Oft auf Tischen oder in Cafés zu finden." },
        "old_book": { price: "~ $70", slots: "2", info: "Nimmt zu viel Platz weg für den geringen Wert." },
        "glasses": { price: "~ $35", slots: "1", info: "Lesebrillen. Kaum Wert." },
        "cutlery": { price: "~ $30", slots: "1", info: "Spawnt oft in Restaurants. Eher wertlos." },
        "lighter": { price: "~ $25", slots: "1", info: "Kaum der Rede wert. Wegwerfen, sobald etwas Besseres droppt." },
        "cards": { price: "~ $20", slots: "1", info: "Sehr geringer Wert." },
        "notebook_paper": { price: "~ $15", slots: "1", info: "Papier-Notizblock. Völlig wertlos." },
        "pen": { price: "~ $10", slots: "1", info: "Kugelschreiber. Bringt fast nichts." },
        "cigarettes": { price: "~ $15", slots: "1", info: "Wertlos, nimmt nur Platz weg." },
        "tp": { price: "~ $10", slots: "4 (2x2)", info: "Der schlechteste Gegenstand im Spiel (Wert pro Slot). Niemals mitnehmen!" },
        "matches": { price: "~ $5", slots: "1", info: "Absoluter Müll. Liegen lassen." }
};

const containers = {
    const containers = {
        "safe_lock": { name: "Safe Lock", size: "2x2 (4 Slots)", source: "Kauf bei Handshake (Lvl 1) ODER Standard Edition", info: "Der Standard-Container. Seit Patch 0.4 kannst du ihn ganz einfach bei Handshake nachkaufen!" },
        "snook_908": { name: "Snook 908", size: "2x3 (6 Slots)", source: "Kauf bei Handshake (Lvl 2) ODER Elite Edition", info: "Käufer der 'Elite Edition' haben ihn von Beginn an. Alternativ ab Level 2 bei Handshake erhältlich." },
        "tas": { name: "TAS Container", size: "3x3 (9 Slots)", source: "Kauf bei Handshake (Lvl 3) ODER Supporter Edition", info: "Der größte Container im Spiel. Supporter starten damit, alle anderen Spieler können ihn sich nun im Endgame freischalten!" },
        "ammo_box": { name: "Ammo Container", size: "Spart massiv Platz im Stash", source: "In-Game durch Quests (Gunny / Banshee)", info: "Kann aktuell nicht bei Händlern gekauft werden. Bietet riesigen Lagerraum nur für Munition." },
        "weapon_box": { name: "Weapon Container", size: "Spart massiv Platz im Stash", source: "In-Game durch Quests", info: "Die rettende Kiste für alle Waffensammler." },
        "med_box": { name: "Medical Container", size: "Spart massiv Platz im Stash", source: "In-Game durch Quests (Lab Rat)", info: "Verdient man relativ früh durch Quests von Lab Rat." },
        "armor_box": { name: "Armor / Gear Container", size: "Spart massiv Platz im Stash", source: "In-Game durch Quests", info: "Löst das Platzproblem für dicke Rüstungen." },
        "food_box": { name: "Provisions Container (Cooler)", size: "Spart massiv Platz im Stash", source: "In-Game durch Quests", info: "Eine Kühlbox für all deine Rationen und Getränke." },
        "key_holder": { name: "Key Holder", size: "1 Slot (Im Rucksack/Secure Container)", source: "Supporter Edition ODER In-Game", info: "Nimmt nur einen Slot weg, fasst unzählige Schlüssel." },
        "wallet": { name: "Leather Wallet", size: "1 Slot (Im Rucksack/Secure Container)", source: "Supporter Edition ODER In-Game", info: "Achtung: Kann nur noch Bargeld und Kreditkarten fassen." },
        "stash_upgrade": { name: "Locker / Schließfach Erweiterung", size: "Dynamisch (Bis zu +50 Reihen)", source: "Level-Ups & Spiel-Editionen", info: "Dein Haupt-Lager wächst komplett automatisch alle 10 Level." }
};

const lzDb = {
    const lzDb = {
        "mithras": { lzs: "Base Camp, Alpha 1, Alpha 2, Alpha 3", time: "0-1 Min.", danger: "Sicher / Mittel", tip: "Startgebiet von MSS (Nam Thaven)." },
        "lamang": { lzs: "Base Camp, Bravo 1, Bravo 2, Bravo 3", time: "0-1 Min.", danger: "Sicher / Mittel", tip: "Startgebiet von LRI (Pha Lang)." },
        "crimson": { lzs: "Base Camp, Charlie 1, Charlie 2, Charlie 3", time: "0-1 Min.", danger: "Sicher / Mittel", tip: "Startgebiet von CSI (Kiu Vongsa)." },
        "lumber": { lzs: "Echo 1 & Echo 2", time: "1-2 Min.", danger: "Niedrig-Mittel", tip: "Echo 2 ist versteckter im Wald." },
        "hunters": { lzs: "Foxtrot 1 & Foxtrot 2", time: "2 Min.", danger: "Mittel", tip: "Foxtrot 2 wird oft abgezielt!" },
        "banpa": { lzs: "India 1 & India 2", time: "1-3 Min.", danger: "Mittel", tip: "India 2 ist sicherer für einen Sneak-Angriff." },
        "blue_lagoon": { lzs: "Kilo 1 & Kilo 2", time: "2-4 Min.", danger: "Mittel", tip: "Kilo 2 gibt dir einen Flanken-Vorteil." },
        "ybl": { lzs: "Juliet 1, Juliet 2, Juliet 3", time: "1 Min.", danger: "Hoch", tip: "Vorsicht vor LZ-Campern!" },
        "fort_narith": { lzs: "Delta 1, Delta 2, Delta 3", time: "3-5 Min.", danger: "Extrem", tip: "Delta 3 ist die sicherste Wahl (Rückseite)." },
        "midnight": { lzs: "Hotel 1, Hotel 2, Hotel 3", time: "2 Min.", danger: "Sehr Hoch", tip: "Bleib niemals auf dem Präsentierteller stehen." },
        "tiger_bay": { lzs: "Lima 1 & Lima 2", time: "1 Min.", danger: "Todeszone", tip: "Sofort Smoke werfen und sprinten!" },
        "ground_zero": { lzs: "Golf 1 & Golf 2", time: "3 Min.", danger: "Extrem", tip: "Das Airfield ist ein Sniper-Gefecht." }
};

const symptomDb = {
    const symptomDb = {
        "gray_vision": { diag: "Kritischer Blutverlust", treat: "Blutbeutel", info: "Fülle dein Blut SOFORT auf!" },
        "blurry_vision": { diag: "Schock / Akuter Schmerz", treat: "Schmerzmittel", info: "Nimm Ibuprofen oder Morphin." },
        "tunnel_vision": { diag: "Koma steht bevor", treat: "Tourniquet + Blut", info: "Stoppe die Blutung sofort!" },
        "limping": { diag: "Knochenbruch (Bein)", treat: "Schiene", info: "Schiene anlegen, sonst kannst du nicht sprinten." },
        "weapon_sway": { diag: "Knochenbruch (Arm)", treat: "Schiene + Painkillers", info: "Stoppt das Wackeln beim Zielen." },
        "stamina_drain": { diag: "Organschaden oder Erschöpfung", treat: "Surkit oder Essen", info: "Heile deine Lunge oder iss etwas." },
        "coughing": { diag: "Organschaden (Lunge/Magen)", treat: "Surkit", info: "Such dir sichere Deckung für die OP." },
        "heartbeat": { diag: "Adrenalinabfall", treat: "Morphin", info: "Beruhigt den Puls." },
        "stomach": { diag: "Nahrungsmangel", treat: "Essen", info: "Iss, bevor die Ausdauer-Strafen greifen." }
};

const statusEffectsDb = {
    const statusEffectsDb = {
        "out_of_breath": { 
            de: "Außer Atem", en: "Out of Breath", 
            desc: "Erschöpfung der Beinkraft. Atemstillstand. Lungenschädigung.",
            effect: "Hörbarer Herzschlag/Atemgeräusche. Verhindert Atemstillstand.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/bd/OutOfBreathIcon.png"
        },
        "cramps": { 
            de: "Krämpfe", en: "Cramps", 
            desc: "Arm-Ausdauer liegt unter 1%",
            effect: "Erhöht das Waffenschwanken & Verhindert Nahkampfangriffe.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/27/CrampsIcon.png"
        },
        "sore_arms": { 
            de: "Schmerzende Arme", en: "Sore Arms", 
            desc: "Arm-Ausdauer liegt unter 40%",
            effect: "Erhöht das Waffenschwanken",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/50/SoreArmsIcon.png"
        },
        "fatigued": { 
            de: "Erschöpft (Gelb)", en: "Fatigued", 
            desc: "Bein-Ausdauer liegt unter 40%",
            effect: "Hörbarer Herzschlag/Atemgeräusche. Unterbricht vorübergehend die Regeneration der Ausdauer.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/34/FatiguedIcon.png"
        },
        "exhausted": { 
            de: "Erschöpft (Rot)", en: "Exhausted", 
            desc: "Bein-Ausdauer liegt unter 1%",
            effect: "Hörbarer Herzschlag/Atemgeräusche. Sichtbares Waffenzittern. Verhindert Sprinten und Springen. Verhindert Überwinden von Hindernissen/Klettern. Unterbricht vorübergehend die Regeneration der Beinkraft.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/66/ExhaustedIcon.png"
        },
        "encumbered": { 
            de: "Überlastet", en: "Encumbered", 
            desc: "Bis das Gewicht unter 54 kg sinkt",
            effect: "Verhindert Sprinten und Springen. Verringert die Regeneration der Beinkraft. Verringert die Zielgeschwindigkeit.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/92/EncumberedIcon.png"
        },
        "dazed": { 
            de: "Benommenheit", en: "Dazed", 
            desc: "Tritt auf bei Kopftreffern (wenn der Helm das Projektil abfängt) oder durch sehr nahe Explosionen.",
            effect: "Verschwommene Sicht und stark gedämpftes Gehör. Du verlierst kurzzeitig die akustische Orientierung im Raum.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/75/OrangeBrainIcon.png"
        },
        "bleed_light": { 
            de: "Blutung: Leicht", en: "Light Bleeding", 
            desc: "Wird durch Streifschüsse, kleine Kaliber oder Umgebungs-Schaden (Stacheldraht) verursacht.",
            effect: "Langsamer Blutverlust (rotes Tropfen-Icon). Heilt im Gegensatz zu schweren Wunden über Zeit von selbst, kann aber mit einer Bandage sofort gestoppt werden.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7b/LightBleedIcon.png"
        },
        "bleed_med": { 
            de: "Blutung: Mittel", en: "Medium Bleeding", 
            desc: "Klassische Schusswunde, typischerweise durch Sturmgewehre verursacht.",
            effect: "Moderater Blutverlust. Heilt NICHT von selbst. Muss zwingend mit Bandage, Combat Gauze oder Tourniquet behandelt werden.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/6f/MediumBleedingIcon.png"
        },
        "bleed_heavy": { 
            de: "Blutung: Schwer", en: "Severe Bleeding", 
            desc: "Arterielle Blutung. Meist durch schwere Kaliber (Sniper) oder Volltreffer auf ungeschützte Gliedmaßen.",
            effect: "Extrem schneller Blutverlust! Führt in kürzester Zeit zum Koma. Das Tourniquet (CAT) ist die einzig verlässliche und schnellste Sofortmaßnahme.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e7/SevereBleedingIcon.png"
        },
        "fatigued": { 
            de: "Ermüdung", en: "Fatigued", 
            desc: "Verursacht durch permanentes Sprinten oder beginnenden Mangel an Hydration/Energie.",
            effect: "Hörbarer Herzschlag und schweres Atmen. Stoppt vorübergehend die Regeneration der Bein-Ausdauer (Leg Stamina).",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/34/FatiguedIcon.png"
        },
        "exhausted": { 
            de: "Erschöpfung", en: "Exhausted", 
            desc: "Kritischer Mangel an Hydration/Energie oder extreme Gewichts-Überbelastung.",
            effect: "Sichtbares Waffenwackeln (Sway). Verhindert Sprinten, Springen und Klettern. Regeneration der Ausdauer ist komplett gestoppt. Sofort essen/trinken!",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/66/ExhaustedIcon.png"
        },
        "coma": { 
            de: "Koma", en: "Coma", 
            desc: "Tritt auf, wenn dein Blutvolumen auf Null sinkt oder lebenswichtige Organe (Herz, Gehirn) zerstört werden.",
            effect: "Vollständiger Kontrollverlust, der Charakter kollabiert. Du hast ein kurzes Zeitfenster, in dem dich Teammitglieder retten können (Blutbeutel, Epi-Pen).",
            img: "https://via.placeholder.com/150x150/222222/444444?text=Coma"
        },
        "suffering": { 
            de: "Leiden", en: "Suffering", 
            desc: "Begleiterscheinung von zerstörten Knochen (Arme/Beine) oder massiven Organschäden.",
            effect: "Der Charakter stöhnt unkontrolliert vor Schmerzen (Gegner können dich dadurch orten!). Führt zu Schwindel und verzieht das Aiming.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/69/SufferingIcon.png"
        },
        "pain": { 
            de: "Schmerz", en: "Pain", 
            desc: "Entsteht durch Wunden oder 'Blunt Force Trauma' (Rüstung stoppt das Projektil, aber die Aufprallenergie schlägt durch).",
            effect: "Verschwommene Ränder im Sichtfeld und leichtes Pulsieren. Heilt bei Prellungen (Bruises) oft von selbst, ansonsten Schmerzmittel nutzen.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/9b/PainIcon.png"
        },
        "nausea": { 
            de: "Übelkeit", en: "Nausea", 
            desc: "Entsteht primär durch Leberschäden, starke radioaktive Verstrahlung oder Intoxikation.",
            effect: "Verzerrte Sicht und Unwohlsein. Nutze zwingend ein Surgery Kit (falls Leber beschädigt) oder verlasse das radioaktive Gebiet.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7a/NauseousIcon.png"
        },
        "intoxication": { 
            de: "Vergiftung", en: "Intoxication", 
            desc: "Akkumuliert sich durch den übermäßigen Einsatz von Stimulanzien (wie Painkillern) oder unsauberem Sumpf-Wasser.",
            effect: "Baut sich langsam auf und führt zu schwerer Übelkeit. Sinkt über Zeit langsam ab oder erfordert spezifische Gegenmittel.",
            img: "https://via.placeholder.com/150x150/222222/a35a7c?text=Toxic"
        },
        "radiation": { 
            de: "Verstrahlung", en: "Radiation", 
            desc: "Entsteht in hochgradig verstrahlten Gebieten (wie dem Ground Zero Krater am Airfield).",
            effect: "Akkumuliert im Körper. Führt unbehandelt zu Gewebeschäden, Übelkeit und letztendlich zum Tod. Erfordert Schutzanzug/Gasmaske.",
            img: "https://via.placeholder.com/150x150/222222/aaff00?text=Radiation"
        }
};

const vendorData = {
    // --- GUNNY (NATO) ---
    "gunny_1": `<h3>Gunny Level 1 (Start)</h3>
        <ul>
            <li><b>Waffen:</b> M4A1 (Standard), CQ A1, Mossberg 590, Glock 17</li>
            <li><b>Munition:</b> 5.56x45mm (M855, US), 9x19mm (FMJ), 12ga (00 Buckshot, Slugs)</li>
            <li><b>Visiere:</b> Aimpoint T-1, EOTech XPS3, Standard Iron Sights</li>
            <li><b>Attachments:</b> Standard-Griffe, Basis-Schalldämpfer (Pistole), 30-Schuss STANAG Magazine</li>
        </ul>`,
    "gunny_2": `<h3>Gunny Level 2</h3>
        <ul>
            <li><b>Waffen:</b> M16A1 <span style="color:#ff4c4c;">[NEU 0.4]</span>, verbesserte M4A1-Varianten</li>
            <li><b>Munition:</b> 5.56x45mm (M855A1, SOST), 9x19mm (JHP, +P)</li>
            <li><b>Visiere:</b> Elcan SpecterDR (1x/4x), ACOG (4x), verbesserte Holos</li>
            <li><b>Attachments:</b> KAC Schalldämpfer (5.56), Magpul CTR Stocks, abgewinkelte Griffe (bessere Ergonomie!), 40-Schuss Magazine</li>
        </ul>`,
    "gunny_3": `<h3>Gunny Level 3 (Endgame NATO)</h3>
        <ul>
            <li><b>Waffen:</b> M4A1 SOPMOD (Voll aufgerüstet), High-End CQB Builds</li>
            <li><b>Munition:</b> 5.56x45mm (M995 AP, M856A1 Tracer), 9x19mm (AP - Rüstungsbrechend)</li>
            <li><b>Visiere:</b> Vortex Razor HD Gen II (LPVO für Mid/Long Range), Thermal-Hybride</li>
            <li><b>Attachments:</b> 60-Schuss SureFire Magazine, beste Ergonomie-Griffe, PEQ-15 Laser/Licht-Module</li>
        </ul>`,

    // --- HANDSHAKE (RÜSTUNG & GEAR) ---
    "handshake_1": `<h3>Handshake Level 1 (Start)</h3>
        <ul>
            <li><b>Kleidung:</b> Basis-Fraktionskleidung (Hemden, Hosen), Kappen</li>
            <li><b>Rüstung:</b> Level IIIA Soft-Armor (PACA, Kevlar-Westen), Basis-Helme (ohne Visier)</li>
            <li><b>Tragesysteme:</b> Basic Chest Rigs (geringe Kapazität)</li>
            <li><b>Rucksäcke:</b> Patrol Backpacks (klein), Sling-Bags</li>
        </ul>`,
    "handshake_2": `<h3>Handshake Level 2</h3>
        <ul>
            <li><b>Rüstung:</b> Level III Platten (Stahl/Keramik - <i>Achtung: Stahl erhöht Trägheit massiv in 0.4!</i>), Ops-Core Fast Helme</li>
            <li><b>Tragesysteme:</b> Taktische Plattenträger (Medium Kapazität)</li>
            <li><b>Rucksäcke:</b> Rush 24 (Medium), 3-Day Assault Packs</li>
            <li><b>Kopfhörer:</b> Basic ComTacs (verbessertes Gehör)</li>
        </ul>`,
    "handshake_3": `<h3>Handshake Level 3 (Endgame Gear)</h3>
        <ul>
            <li><b>Rüstung:</b> Level III+ / IV Platten (UHMWPE - extrem leicht, bestes Movement!), schwere Schutzhelme mit Gesichtspanzerung</li>
            <li><b>Tragesysteme:</b> Heavy Modular Rigs (Maximale Magazine)</li>
            <li><b>Rucksäcke:</b> Rush 72 (Groß), Operator Rucksäcke</li>
            <li><b>Zubehör:</b> High-End Aktivgehörschutz, Nachtsichtgeräte (NVG) Halterungen</li>
        </ul>`,

    // --- LAB RAT (MEDIZIN) ---
    "labrat_1": `<h3>Lab Rat Level 1 (Start)</h3>
        <ul>
            <li><b>Blutung:</b> Basis-Bandagen (leichte Blutung), Tourniquets (schwere Blutung)</li>
            <li><b>Heilung:</b> Standard-Splints (Frakturen)</li>
            <li><b>Verpflegung:</b> Wasserflaschen, MREs, Basis-Snacks</li>
        </ul>`,
    "labrat_2": `<h3>Lab Rat Level 2</h3>
        <ul>
            <li><b>OP-Kits:</b> Kleine Surgery-Kits (stellt Organ-Schäden wieder her)</li>
            <li><b>Kreislauf:</b> Blutbeutel (stellt Blutvolumen wieder her)</li>
            <li><b>Schmerzmittel:</b> Ibuprofen, Basis-Painkillers (hilft gegen Sichtverschwimmen)</li>
        </ul>`,
    "labrat_3": `<h3>Lab Rat Level 3</h3>
        <ul>
            <li><b>OP-Kits:</b> Große Surgery-Kits (mehrere Anwendungen, volle Organgesundheit)</li>
            <li><b>Stims:</b> Auto-Injektoren (schnelle Notfallheilung im Kampf)</li>
            <li><b>High-End:</b> Spezielle Strahlenschutz- oder Toxin-Medikamente, High-Energy Food</li>
        </ul>`,

    // --- ARTISAN (OST-BLOCK) ---
    "artisan_1": `<h3>Artisan Level 1 (Start)</h3>
        <ul>
            <li><b>Waffen:</b> AKMN, SKS, Type 56, Makarov Pistole</li>
            <li><b>Munition:</b> 7.62x39mm (PS, US-Subsonic), 9x18mm Makarov</li>
            <li><b>Visiere:</b> PSO-1 Scope (SKS), Basis Red-Dots (Cobra)</li>
            <li><b>Attachments:</b> Holzschäfte, Basis-Dämpfer (PBS-1)</li>
        </ul>`,
    "artisan_2": `<h3>Artisan Level 2</h3>
        <ul>
            <li><b>Waffen:</b> AK-74M, modernisierte SKS-Chassis</li>
            <li><b>Munition:</b> 5.45x39mm (PS, BT), 7.62x39mm (T-45M)</li>
            <li><b>Visiere:</b> OKP-7, Kobra EKP-8-02</li>
            <li><b>Attachments:</b> Zenitco PT-1 Stocks, B-33 Dust Cover (für Optiken), Hexagon Schalldämpfer</li>
        </ul>`,
    "artisan_3": `<h3>Artisan Level 3</h3>
        <ul>
            <li><b>Waffen:</b> Voll modifizierte AK-Systeme (geringer Rückstoß)</li>
            <li><b>Munition:</b> 5.45x39mm (BP, BS - Armor Piercing), 7.62x39mm (BP)</li>
            <li><b>Visiere:</b> Fortschrittliche russische Optiken</li>
            <li><b>Attachments:</b> 60-Schuss AK-Magazine, Perst-3 Laser, beste Zenitco Ergonomie-Teile</li>
        </ul>`,

    // --- TURNCOAT (WESTERN / SNIPER) ---
    "turncoat_1": `<h3>Turncoat Level 1</h3>
        <ul>
            <li><b>Waffen:</b> Remington 870 Shotgun, Basis-Zivilwaffen</li>
            <li><b>Quest-Items:</b> Bestimmte Werkzeuge und Barter-Items</li>
            <li><b>Attachments:</b> Standard-Shotgun Chokes</li>
        </ul>`,
    "turncoat_2": `<h3>Turncoat Level 2</h3>
        <ul>
            <li><b>Waffen:</b> M14 Battle Rifle <span style="color:#ff4c4c;">[NEU 0.4]</span>, M700 Sniper Rifle</li>
            <li><b>Munition:</b> 7.62x51mm NATO (M80)</li>
            <li><b>Visiere:</b> Basis-Sniper-Scopes (Leupold)</li>
            <li><b>Attachments:</b> M14 Scope-Mounts, westliche Schalldämpfer für .308</li>
        </ul>`,
    "turncoat_3": `<h3>Turncoat Level 3 (Sniper Meta)</h3>
        <ul>
            <li><b>Waffen:</b> AICS Chassis für M700, EBR Chassis für M14</li>
            <li><b>Munition:</b> 7.62x51mm NATO (M61, M62 Tracer - durchschlägt Level 4!)</li>
            <li><b>Visiere:</b> High-Power Scopes (Vudu, Nightforce)</li>
            <li><b>Attachments:</b> High-End Zweibeine (Bipods), lange Sniper-Läufe</li>
        </ul>`,

    // --- BANSHEE (BLACK MARKET) ---
    "banshee_1": `<h3>Banshee Level 1</h3>
        <ul>
            <li><b>Schlüssel:</b> Seltene Raumschlüssel für frühe Quest-Gebiete</li>
            <li><b>Barter:</b> Tauscht High-Value Loot (Rolex, USB-Sticks) gegen Spezialausrüstung</li>
        </ul>`,
    "banshee_2": `<h3>Banshee Level 2</h3>
        <ul>
            <li><b>Waffen:</b> Laugo Alien Pistole <span style="color:#ff4c4c;">[NEU 0.4]</span> (Extrem geringer Rückstoß!)</li>
            <li><b>Munition:</b> Spezielle 9mm AP-Munition für die Alien</li>
            <li><b>Spezial:</b> Keycards für Mid-Tier Zonen</li>
        </ul>`,
    "banshee_3": `<h3>Banshee Level 3 (Endgame Spezial)</h3>
        <ul>
            <li><b>Waffen:</b> KS-1 Bullpup <span style="color:#ff4c4c;">[NEU 0.4]</span> (Beste Ergonomie im Spiel!)</li>
            <li><b>Munition:</b> Seltene AP-Munitionstypen aller Kaliber (oft limitiert im Stock!)</li>
            <li><b>Gear:</b> Wärmebildkameras (Thermals), Elite-Nachtsichtgeräte, Level IV+ Rüstungs-Inserts</li>
        </ul>`
};

const factionDb = {
    const factionDb = {
        "mss": {
            name: "Mithras Security Systems",
            motto: "Aegis Fortis",
            desc: "Mithras bezeichnet sich selbst als PMC-System, das von Soldaten für Soldaten geführt wird. Das System fragt nicht nach der Vergangenheit seiner Bewerber, sondern beurteilt sie nur nach ihren Fähigkeiten im Feld. Die Organisation wird von einem Komitee hochrangiger Offiziere geleitet. Ihr Hauptquartier in Lamang befindet sich im südlichen Nam Thaven.",
            logo: "https://static.wikia.nocookie.net/gray-zone-warfare/images/c/c4/MSS_logo.png"
        },
        "csi": {
            name: "Crimson Shield International",
            motto: "Ex Cineribus",
            desc: "Crimson Shield stieg während des syrischen Bürgerkriegs auf. Berühmt für eine beeindruckende Erfolgsquote von 95 %, aber oft kritisiert für ihre rücksichtslosen Methoden. Niemand weiß, wer wirklich das Sagen hat. Ihre Elite-Soldaten sind für harte, kompromisslose Einsätze bekannt. Ihr Hauptquartier in Lamang liegt in Kiu Vongsa.",
            logo: "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/12/CSI_logo.png"
        },
        "lri": {
            name: "Lamang Recovery Initiative",
            motto: "Salus Populi",
            desc: "Ein PMC, das von einem exzentrischen Technologie-Milliardär gegründet und finanziert wurde. Die LRI präsentiert sich als streng philanthropische Organisation, deren Ziel es ist, die Region nach dem 'Ereignis' zu sichern und die Zivilbevölkerung zu schützen. Sie operieren extrem hochtechnisiert und arbeiten strikt nach Protokoll. Ihr Hauptquartier befindet sich in Pha Lang.",
            logo: "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7f/LRI_logo.png"
        },
        "laf": {
            name: "Lamang Army Forces",
            motto: "-",
            desc: "Die Streitkräfte von Lamang (LAF) sind die nationalen Streitkräfte des Landes. Sie bestehen größtenteils aus Angehörigen der Armee von Lamang, vom einfachen Soldaten bis zum Kommandeur. Diese Fraktion kann nicht von Spielern gespielt werden. Es handelt sich um eine KI-Fraktion, die dazu dient, Gebiete auf der Karte zu bevölkern und die Hintergrundgeschichte zu berücksichtigen.",
            logo: "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/9e/LAF_Faction_icon.png"
        }
};

// ==============================================================
// FUNKTIONEN FÜR DROPDOWNS & ANZEIGEN
// ==============================================================

// 🟢 DAS IST DIE NEUE, INTELLIGENTE UPDATE-FUNKTION FÜR GEAR, MEDS UND ATTACHMENTS
function updateGeneric(sId, iId) { 
    const val = document.getElementById(sId).value;
    const box = document.getElementById(iId);
    
    if (!val) {
        box.innerHTML = "Wähle einen Eintrag...";
        box.style.border = "none";
        box.style.backgroundColor = "transparent";
        box.style.padding = "0";
        return;
    }
    
    // Prüft, ob es ein kurzer Code für die NIJ-Rüstungen ist (gearData)
    if (typeof gearData !== 'undefined' && gearData[val]) {
        box.innerHTML = gearData[val];
    } else {
        // Ansonsten ist es der lange Text (z.B. bei Meds oder Attachments)
        box.innerHTML = val;
    }
    
    box.style.padding = "15px";
    box.style.border = "1px solid #333";
    box.style.backgroundColor = "#111";
}

function updateWeaponCombined() {
    const select = document.getElementById('weaponSelect');
    const val = select.value;
    const infoDisplay = document.getElementById('weaponInfo');
    const imgElement = document.getElementById('weaponImg'); 
    const metaElement = document.getElementById('weaponMeta'); 
    
    if (val === "") {
        imgElement.src = "https://via.placeholder.com/400x200?text=Waffe+auswählen";
        metaElement.innerText = "";
    } else if (weaponImages[val]) {
        imgElement.src = weaponImages[val];
        imgElement.style.display = "block";
        metaElement.innerText = "Quelle: GZW Official Wiki Intel";
    } else {
        imgElement.src = "https://via.placeholder.com/400x200?text=Vorschau+noch+nicht+verfügbar";
        metaElement.innerText = "Bildpfad wird noch aktualisiert...";
    }

    const info = weapons[val];
    if (info) {
        infoDisplay.innerHTML = `Standard-Ammo: <span class="highlight">${info.ammo}</span><br>Penetration: <span class="highlight">${info.pen}</span><br>Tipp: ${info.tip}`;
        populateAmmoDropdown(val); 
    } else {
        infoDisplay.innerHTML = "Wähle eine Waffe für Munitions-Details...";
        const ammoSelect = document.getElementById('calcAmmoDisplay');
        ammoSelect.innerHTML = '<option value="">-- Erst Waffe wählen --</option>';
        calculateBallistics(); 
    }
}

function populateAmmoDropdown(weaponKey) {
    const ammoSelect = document.getElementById('calcAmmoDisplay');
    const weaponInfo = weapons[weaponKey];
    ammoSelect.innerHTML = "";
    if (!weaponInfo) {
        ammoSelect.innerHTML = '<option value="">-- Erst Waffe wählen --</option>';
        return;
    }
    let caliber = weaponInfo.ammo.split(' ')[0]; 
    if(caliber.includes("7.62") || caliber.includes("5.45") || caliber.includes("5.56")) {
        caliber = weaponInfo.ammo.substring(0, 7); 
    }
    let foundAmmo = false;
    for (let key in ammoDb) {
        const ammo = ammoDb[key];
        if (ammo.name.toLowerCase().includes(caliber.toLowerCase())) {
            const option = document.createElement('option');
            option.value = ammo.name;
            option.text = ammo.name;
            ammoSelect.appendChild(option);
            foundAmmo = true;
        }
    }
    if (!foundAmmo) {
        const option = document.createElement('option');
        option.value = weaponInfo.ammo;
        option.text = weaponInfo.ammo;
        ammoSelect.appendChild(option);
    }
    calculateBallistics();
}

function getAmmoPenValue(ammoName) {
    if (!ammoName) return 0;
    for (let key in ammoDb) {
        if (ammoDb[key].name === ammoName) return ammoDb[key].pen;
    }
    return 0;
}

function calculateBallistics() {
    const armorLevel = parseFloat(document.getElementById('calcArmor').value);
    const ammoName = document.getElementById('calcAmmoDisplay').value; 
    const penValue = getAmmoPenValue(ammoName);
    const resultBox = document.getElementById('calcResult');

    if (!ammoName || ammoName === "") {
        resultBox.innerHTML = "Wähle zuerst eine Waffe!";
        resultBox.style.color = "#888";
        resultBox.style.backgroundColor = "#1a1a1a";
        return;
    }

    if (penValue >= armorLevel + 0.5) {
        resultBox.innerHTML = "✅ SICHERER DURCHSCHLAG (1-2 Schüsse)";
        resultBox.style.backgroundColor = "rgba(124, 163, 90, 0.2)";
        resultBox.style.color = "#7ca35a";
    } else if (penValue >= armorLevel) {
        resultBox.innerHTML = "⚠️ WAHRSCHEINLICHER DURCHSCHLAG (3-5 Schüsse)";
        resultBox.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
        resultBox.style.color = "#ffa500";
    } else {
        resultBox.innerHTML = "❌ KEIN DURCHSCHLAG (Wirkungslos gegen Platte)";
        resultBox.style.backgroundColor = "rgba(179, 57, 57, 0.2)";
        resultBox.style.color = "#ff4c4c";
    }
}

function compareAmmo() {
    const a1 = ammoDb[document.getElementById('ammo1').value];
    const a2 = ammoDb[document.getElementById('ammo2').value];
    if(a1) document.getElementById('ammo1Info').innerHTML = `<b>${a1.name}</b><br>Durchschlag: Class <span class="highlight">${a1.pen}</span><br>Schaden (Flesh): ${a1.damage}<br><small>${a1.info}</small>`;
    if(a2) document.getElementById('ammo2Info').innerHTML = `<b>${a2.name}</b><br>Durchschlag: Class <span class="highlight">${a2.pen}</span><br>Schaden (Flesh): ${a2.damage}<br><small>${a2.info}</small>`;
    if(a1 && a2) {
        let winText = "";
        if(a1.pen > a2.pen) winText = `${a1.name} gewinnt gegen Rüstung!`;
        else if(a2.pen > a1.pen) winText = `${a2.name} gewinnt gegen Rüstung!`;
        else winText = "Gleicher Durchschlag. Achte auf den Schaden!";
        document.getElementById('comparisonResult').innerHTML = `<span class="highlight">FAZIT:</span> ${winText}`;
    } else {
        document.getElementById('comparisonResult').innerHTML = "Wähle zwei Typen zum Vergleich aus.";
    }
}

function updateBoss() { const b = bosses[document.getElementById('bossSelect').value]; document.getElementById('bossInfo').innerHTML = b ? `Ort: <span class="highlight">${b.loc}</span><br>Loot: <span class="highlight">${b.loot}</span><br>Tipp: ${b.tip}` : "Wähle einen Boss..."; }
function updateLZ() { const l = lzDb[document.getElementById('lzSelect').value]; document.getElementById('lzInfo').innerHTML = l ? `Beste LZs: <span class="highlight">${l.lzs}</span><br>Gefahr: <span style="color: #ff4c4c; font-weight: bold;">${l.danger}</span><br><br><small><b>Operator-Tipp:</b> ${l.tip}</small>` : "Wähle ein Zielgebiet für LZ-Tipps..."; }
function updateSymptom() { const s = symptomDb[document.getElementById('symptomSelect').value]; document.getElementById('symptomInfo').innerHTML = s ? `Diagnose: <span style="color: #ff4c4c; font-weight: bold;">${s.diag}</span><br>Behandlung: <span class="highlight">${s.treat}</span><br><br><small><b>Medic-Tipp:</b> ${s.info}</small>` : "Wähle ein Symptom für Diagnose & Behandlung..."; }
function updateContainer() { const c = containers[document.getElementById('containerSelect').value]; document.getElementById('containerInfoDisplay').innerHTML = c ? `<b>${c.name}</b><br>Größe: <span class="highlight">${c.size}</span><br>Herkunft: <span class="highlight">${c.source}</span><br><br><small>${c.info}</small>` : "Wähle einen Container für Details zum Fundort..."; }
function updateValuable() { const v = valuables[document.getElementById('valSelect').value]; document.getElementById('valInfoDisplay').innerHTML = v ? `Preis: <span class="highlight">${v.price}</span><br>Platzbedarf: <span class="highlight">${v.slots} Slot(s)</span><br>Tipp: ${v.info}` : "Wähle ein Item für Preis & Details..."; }

function updateStatusEffect() {
    const val = document.getElementById('statusSelect').value;
    const infoDisplay = document.getElementById('statusInfo');
    const imgElement = document.getElementById('statusImg');
    if (val === "") {
        infoDisplay.innerHTML = "Wähle einen Effekt für Ursachen und Auswirkungen...";
        imgElement.src = "https://via.placeholder.com/150x150/222222/7ca35a?text=Status+Wählen";
    } else {
        const info = statusEffectsDb[val];
        infoDisplay.innerHTML = `<div style="margin-bottom: 8px;"><strong>Ursache:</strong> ${info.desc}</div><div style="color: #ff4c4c; font-weight: bold; margin-bottom: 4px;">Auswirkung:</div><div style="line-height: 1.4;">${info.effect}</div>`;
        imgElement.src = info.img;
    }
}

// 🟢 DIE EINZIGE UPDATE-VENDOR FUNKTION (Alle doppelten gelöscht)
function updateVendor() {
    const select = document.getElementById('vendorSelect');
    const infoBox = document.getElementById('vendorInfo');
    const selectedValue = select.value;

    if (vendorData[selectedValue]) {
        infoBox.innerHTML = vendorData[selectedValue];
        infoBox.style.padding = "15px";
        infoBox.style.border = "1px solid #333";
        infoBox.style.backgroundColor = "#111";
        infoBox.style.marginTop = "15px";
    } else {
        infoBox.innerHTML = "Wähle einen Händler und sein Level aus, um das komplette Inventarprotokoll abzurufen.";
        infoBox.style.border = "none";
        infoBox.style.backgroundColor = "transparent";
    }
}

function updateFactionInfo() {
    const val = document.getElementById('factionInfoSelect').value;
    const descBox = document.getElementById('factionDescBox');
    const logoImg = document.getElementById('factionLogoImg');
    const nameTitle = document.getElementById('factionNameTitle');
    const mottoText = document.getElementById('factionMotto');

    if (!val) {
        descBox.innerHTML = "Wähle eine Fraktion aus, um ihre Hintergrundgeschichte und Details zu sehen...";
        logoImg.src = "https://via.placeholder.com/250x250/222222/7ca35a?text=Fraktions-Logo";
        nameTitle.innerText = "";
        mottoText.innerText = "";
        return;
    }

    const f = factionDb[val];
    descBox.innerHTML = `<p style="margin-top: 0;">${f.desc}</p>`;
    logoImg.src = f.logo;
    nameTitle.innerText = f.name;
    mottoText.innerText = `Motto: "${f.motto}"`;
}


// ==============================================================
// SCHLÜSSEL & KEYRING
// ==============================================================
let myKeyRing = [];
try {
    const savedKeys = localStorage.getItem('gzw_keyring');
    if (savedKeys) myKeyRing = JSON.parse(savedKeys);
    if (!Array.isArray(myKeyRing)) myKeyRing = [];
} catch(e) { myKeyRing = []; }

let currentKeyName = "";

function buildKeyDropdown() {
    const dropdown = document.getElementById('keyDropdown');
    if (!dropdown) return;
    const sorted = [...allKeys].sort((a, b) => a.name.localeCompare(b.name, 'de'));
    sorted.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k.name;
        opt.text = myKeyRing.includes(k.name) ? `🗝️ ${k.name}` : k.name;
        dropdown.appendChild(opt);
    });
}

function selectKeyFromDropdown() {
    const name = document.getElementById('keyDropdown').value;
    if (name) showKeyData(name);
}

function showKeyData(name) {
    const key = allKeys.find(k => k.name === name);
    if (!key) return;

    currentKeyName = key.name;
    document.getElementById('keyTitle').innerText = key.name;
    document.getElementById('keyLocation').innerHTML = `Ort: <span class="highlight">${key.loc}</span>`;
    document.getElementById('keyEffect').innerHTML = `Nutzen: ${key.effect}<br>Erwarteter Loot: <span class="highlight">${key.loot}</span>`;

    const wrapper = document.getElementById('keyRingWrapper');
    const checkbox = document.getElementById('keyOwnedCheckbox');
    if (wrapper) wrapper.style.display = 'block';
    if (checkbox) {
        checkbox.checked = myKeyRing.includes(key.name);
        checkbox.onclick = toggleKeyOwnership;
    }
    checkKeyMissionHint(key.name);
}

function checkKeyMissionHint(keyName) {
    const hintBox = document.getElementById('keyMissionHint');
    const shortName = keyName.replace(' Key', '').replace(' Card', '').toLowerCase();
    const relatedTasks = allTasks.filter(t => t.sol.toLowerCase().includes(shortName) || t.desc.toLowerCase().includes(shortName));

    if (relatedTasks.length > 0) {
        const taskNames = relatedTasks.map(t => `<strong>${t.de}</strong> (${t.v})`).join(', ');
        hintBox.style.display = 'block';
        if (myKeyRing.includes(keyName)) {
            hintBox.innerHTML = `✅ Du hast diesen Schlüssel! Relevant für: ${taskNames}`;
            hintBox.style.borderLeftColor = 'var(--accent)';
            hintBox.style.background = 'rgba(124,163,90,0.15)';
        } else {
            hintBox.innerHTML = `🔒 Tür verschlossen – du hast den Schlüssel noch nicht. Relevant für: ${taskNames}`;
            hintBox.style.borderLeftColor = '#ffa500';
            hintBox.style.background = 'rgba(255,165,0,0.1)';
        }
    } else {
        hintBox.style.display = 'none';
    }
}

function toggleKeyOwnership() {
    if (!currentKeyName) return;
    const isOwned = document.getElementById('keyOwnedCheckbox').checked;

    if (isOwned && !myKeyRing.includes(currentKeyName)) {
        myKeyRing.push(currentKeyName);
    } else if (!isOwned) {
        myKeyRing = myKeyRing.filter(k => k !== currentKeyName);
    }

    try { localStorage.setItem('gzw_keyring', JSON.stringify(myKeyRing)); } catch(e) {}
    updateKeyDropdownEntry(currentKeyName, isOwned);
    renderKeyRing();
    checkKeyMissionHint(currentKeyName);
}

function updateKeyDropdownEntry(keyName, isOwned) {
    const dropdown = document.getElementById('keyDropdown');
    Array.from(dropdown.options).forEach(opt => {
        if (opt.value === keyName) opt.text = isOwned ? `🗝️ ${keyName}` : keyName;
    });
}

function renderKeyRing() {
    const display = document.getElementById('keyRingDisplay');
    const count = document.getElementById('keyRingCount');
    count.textContent = myKeyRing.length;

    if (myKeyRing.length === 0) {
        display.innerHTML = '<span style="color: #888;">Noch keine Schlüssel markiert.</span>';
        return;
    }
    const sorted = [...myKeyRing].sort((a, b) => a.localeCompare(b, 'de'));
    display.innerHTML = sorted.map(k => 
        `<span style="display:inline-block; background:#2a2a2a; border:1px solid #444; border-radius:4px; padding:3px 8px; margin:3px; font-size:0.85rem; cursor:pointer;" 
         onclick="showKeyData('${k.replace(/'/g, "\\'")}'); document.getElementById('keyDropdown').value='${k.replace(/'/g, "\\'")}'"
         title="Klicken für Details">🗝️ ${k}</span>`
    ).join('');
}

function clearKeyRing() {
    if (!confirm("Wirklich alle Schlüssel entfernen?")) return;
    myKeyRing = [];
    try { localStorage.removeItem('gzw_keyring'); } catch(e) {}
    const dropdown = document.getElementById('keyDropdown');
    Array.from(dropdown.options).forEach(opt => { if (opt.value) opt.text = opt.value; });
    const checkbox = document.getElementById('keyOwnedCheckbox');
    if (checkbox) checkbox.checked = false;
    renderKeyRing();
    if (currentKeyName) checkKeyMissionHint(currentKeyName);
}

// 🟢 DIE EINZIGE SEARCH-KEYS FUNKTION
function searchKeys() {
    const input = document.getElementById('keySearch').value.toLowerCase();
    const list = document.getElementById('keyList');
    list.innerHTML = '';
    if(input.length < 2) { list.style.display='none'; return; }
    const filtered = allKeys.filter(k => k.name.toLowerCase().includes(input) || k.loc.toLowerCase().includes(input));
    
    if(filtered.length > 0) {
        list.style.display = 'block';
        filtered.forEach(k => {
            const d = document.createElement('div');
            d.className = 'search-item';
            const owned = myKeyRing.includes(k.name);
            d.innerHTML = `${owned ? '🗝️ ' : ''}${k.name} <small style="color:#888">(${k.loc})</small>`;
            d.onclick = () => {
                showKeyData(k.name);
                document.getElementById('keyDropdown').value = k.name;
                list.style.display = 'none';
                document.getElementById('keySearch').value = k.name;
            };
            list.appendChild(d);
        });
    } else { list.style.display = 'none'; }
}

// ==============================================================
// NOTIZBLOCK
// ==============================================================
let notepadSaveTimer = null;
function initNotepad() {
    const textarea = document.getElementById('raidTextarea');
    const collapsed = localStorage.getItem('gzw_notepad_collapsed') === 'true';
    try {
        const saved = localStorage.getItem('gzw_notepad_text');
        if (saved) { textarea.value = saved; updateCharCount(); }
    } catch(e) {}
    if (collapsed) document.getElementById('raidNotepad').classList.add('collapsed');
}
function saveNotepad() {
    updateCharCount();
    clearTimeout(notepadSaveTimer);
    notepadSaveTimer = setTimeout(() => {
        try {
            localStorage.setItem('gzw_notepad_text', document.getElementById('raidTextarea').value);
            showSavedIndicator();
        } catch(e) {}
    }, 600);
}
function updateCharCount() {
    const textarea = document.getElementById('raidTextarea');
    const len = textarea.value.length;
    document.getElementById('notepadCharCount').textContent = len + ' Zeichen';
}
function showSavedIndicator() {
    const el = document.getElementById('noteSavedIndicator');
    el.textContent = '✓ Gespeichert';
    el.style.color = 'var(--accent)';
    setTimeout(() => { el.textContent = ''; }, 2000);
}
function toggleNotepad() {
    const pad = document.getElementById('raidNotepad');
    pad.classList.toggle('collapsed');
    try { localStorage.setItem('gzw_notepad_collapsed', pad.classList.contains('collapsed')); } catch(e) {}
}
function clearNotepad() {
    if (!confirm("Notizblock leeren?")) return;
    document.getElementById('raidTextarea').value = '';
    updateCharCount();
    try { localStorage.removeItem('gzw_notepad_text'); } catch(e) {}
    const el = document.getElementById('noteSavedIndicator');
    el.textContent = '🗑️ Geleert';
    setTimeout(() => { el.textContent = ''; }, 2000);
}

// ==============================================================
// QUEST ITEM TRACKER
// ==============================================================
const questItemsDb = [
    { name: "Autobatterie", qty: 4, quest: "Parts Needed (2x, Artisan), Mechanic's Trouble (2x, Artisan)" },
    { name: "Benzinkanister (Gas Can / Rot)", qty: 2, quest: "Fuel Run (Artisan)" },
    { name: "Beweise / Dokumente", qty: "Situativ", quest: "Fast jeder Händler (Quest-Items niemals wegwerfen!)" },
    { name: "Holzstatue", qty: 3, quest: "Hazardous Treasures (Artisan)" },
    { name: "Kupferkabel", qty: 5, quest: "Scrapyard (Artisan)" },
    { name: "M4A1 Sturmgewehr", qty: 4, quest: "Brothers in Arms (2x, Gunny), In The Right Hands (2x, Turncoat)" },
    { name: "Morphin-Injektor", qty: 5, quest: "Medical Supplies (Lab Rat)" },
    { name: "MRE (Kampfration)", qty: 5, quest: "Supply Squeeze (Gunny)" },
    { name: "Nägel", qty: 2, quest: "Supply Shortage (Artisan)" },
    { name: "Panzertape / Duct Tape", qty: 5, quest: "Supply Shortage (3x, Artisan), The Builder (2x, Artisan)" },
    { name: "Tourniquet (CAT)", qty: 5, quest: "Vital Signs (Lab Rat)" },
    { name: "Unmodifizierte AKMN", qty: "Einige", quest: "Save the Rebellion (Artisan)" },
    { name: "Verbandskasten / IFAK", qty: 3, quest: "Nachschubmangel (Handshake)" },
    { name: "Werkzeugset / Toolset", qty: 5, quest: "Tooling Up (3x, Artisan), The Builder (1x, Artisan)" },
    { name: "Zündkerze", qty: 2, quest: "Mechanic's Trouble (Artisan)" }
];

function buildQuestItemDropdown() {
    const dropdown = document.getElementById('questItemDropdown');
    if (!dropdown) return;
    const sortedItems = [...questItemsDb].sort((a, b) => a.name.localeCompare(b.name, 'de'));
    sortedItems.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.name;
        opt.text = item.name;
        dropdown.appendChild(opt);
    });
}

function selectQuestItemFromDropdown() {
    const dropdownValue = document.getElementById('questItemDropdown').value;
    const searchInput = document.getElementById('questItemSearch');
    if (dropdownValue) {
        searchInput.value = dropdownValue;
        searchQuestItems();
    } else {
        searchInput.value = "";
        document.getElementById('questItemList').innerHTML = '<div class="info-box" style="text-align: center; color: #888;">Wähle ein Item oder tippe den Namen ein...</div>';
    }
}

function searchQuestItems() {
    const input = document.getElementById('questItemSearch').value.toLowerCase();
    const list = document.getElementById('questItemList');
    list.innerHTML = '';
    if (input.length < 2) return;

    const filtered = questItemsDb.filter(i => i.name.toLowerCase().includes(input));
    if (filtered.length > 0) {
        filtered.forEach(item => {
            const box = document.createElement('div');
            box.className = 'panel-box';
            box.style.marginBottom = '10px';
            box.innerHTML = `<h3 style="color: #ffcc00; margin-top: 0;">⚠️ KEEP! (Behalten)</h3>
                <div style="font-weight: bold; margin-bottom: 8px;">${item.name}</div>
                <div style="color: #ccc; font-size: 0.95rem;"><strong>Menge:</strong> ${item.qty}<br><strong>Quest:</strong> ${item.quest}</div>`;
            list.appendChild(box);
        });
    } else {
        list.innerHTML = `<div class="panel-box" style="border-top: 4px solid #b33939;">
            <h3 style="color: #b33939; margin-top: 0;">💰 SELL! (Verkaufen / Nutzen)</h3>
            <div style="color: #ccc; font-size: 0.95rem;">Aktuell wird "${document.getElementById('questItemSearch').value}" für keine bekannte Sammel-Quest benötigt.</div>
        </div>`;
    }
}

// ==============================================================
// TASK TRACKER LOGIK
// ==============================================================
let completedTasks = [];
let currentTaskNameRaw = "";
let currentOpenTask = ""; 
try {
    const saved = localStorage.getItem('gzw_completed_tasks');
    if (saved) completedTasks = JSON.parse(saved);
    if (!Array.isArray(completedTasks)) completedTasks = [];
} catch(e) { completedTasks = []; }

function toggleTaskCompletion() {
    if (!currentOpenTask) return;
    const checkbox = document.getElementById('taskCompleteCheckbox');
    const titleEl = document.getElementById('taskTitle');
    if (checkbox.checked) {
        if (!completedTasks.includes(currentOpenTask)) completedTasks.push(currentOpenTask);
    } else {
        completedTasks = completedTasks.filter(t => t !== currentOpenTask);
    }
    titleEl.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    titleEl.style.opacity = checkbox.checked ? '0.6' : '1';
    try { localStorage.setItem('gzw_completed_tasks', JSON.stringify(completedTasks)); } catch(e) {}
    refreshTaskList();
}

function refreshTaskList() { updateTaskDropdown(); searchTasks(); }

function updateTaskDropdown() {
    const vendor = document.getElementById('vendorFilter').value;
    const taskSelect = document.getElementById('taskDropdown');
    const hideCompleted = document.getElementById('filterOpenTasks') ? document.getElementById('filterOpenTasks').checked : false;
    const selectedValue = taskSelect.value; 

    taskSelect.innerHTML = '<option value="">-- Erst Händler wählen --</option>';
    if (vendor === 'all') return;

    let filteredTasks = allTasks.filter(t => t.v === vendor);
    if (hideCompleted) filteredTasks = filteredTasks.filter(t => !completedTasks.includes(t.de));

    filteredTasks.forEach(t => {
        const option = document.createElement('option');
        option.value = t.de;
        option.text = completedTasks.includes(t.de) ? `✓ ${t.de}` : t.de;
        taskSelect.appendChild(option);
    });
    
    if (selectedValue && Array.from(taskSelect.options).some(opt => opt.value === selectedValue)) {
        taskSelect.value = selectedValue;
    }
}

function selectTaskFromDropdown() {
    const taskName = document.getElementById('taskDropdown').value;
    if (taskName) displayTaskData(taskName);
}

function searchTasks() {
    const input = document.getElementById('taskSearchInput').value.toLowerCase();
    const list = document.getElementById('taskList');
    const hideCompleted = document.getElementById('filterOpenTasks') ? document.getElementById('filterOpenTasks').checked : false;
    list.innerHTML = '';
    
    if(input.length < 2) { list.style.display = 'none'; return; }

    let filtered = allTasks.filter(t => t.de.toLowerCase().includes(input) || t.en.toLowerCase().includes(input));
    if (hideCompleted) filtered = filtered.filter(t => !completedTasks.includes(t.de));

    if(filtered.length > 0) {
        list.style.display = 'block';
        filtered.forEach(t => {
            const d = document.createElement('div');
            d.className = 'search-item';
            const isDone = completedTasks.includes(t.de);
            const mark = isDone ? '<span style="color:#7ca35a; margin-right:5px; font-weight:bold;">✓</span>' : '';
            const styling = isDone ? 'text-decoration: line-through; opacity: 0.5;' : '';
            d.innerHTML = `<span style="${styling}">${mark}<strong>${t.de}</strong> <small>(${t.v})</small></span>`;
            d.onclick = () => {
                displayTaskData(t.de);
                list.style.display = 'none';
                document.getElementById('taskSearchInput').value = t.de;
            };
            list.appendChild(d);
        });
    } else { list.style.display = 'none'; }
}

function displayTaskData(name) {
    const task = allTasks.find(t => t.de === name);
    if (!task) return;

    currentTaskNameRaw = task.de;
    currentOpenTask = task.de;
    const isDone = completedTasks.includes(task.de);
    
    const titleEl = document.getElementById('taskTitle');
    titleEl.innerText = task.de;
    titleEl.style.textDecoration = isDone ? 'line-through' : 'none';
    titleEl.style.opacity = isDone ? '0.6' : '1';
    
    document.getElementById('taskNames').innerText = `Englisch: ${task.en} | Händler: ${task.v || 'Unbekannt'}`;
    document.getElementById('taskDesc').innerText = task.desc;
    document.getElementById('taskSolution').innerHTML = `<strong>Lösung:</strong><br>${task.sol}`;
    
    document.getElementById('solBtn').style.display = 'block';
    document.getElementById('taskSolution').style.display = 'none';
    
    const wrapper = document.getElementById('taskCompleteWrapper');
    const checkbox = document.getElementById('taskCompleteCheckbox');
    if (wrapper) wrapper.style.display = 'block';
    if (checkbox) {
        checkbox.checked = completedTasks.includes(task.de);
        checkbox.onchange = toggleTaskCompletion;
    }
}

function resetAllTasks() {
    if (confirm("Wirklich alle erledigten Tasks zurücksetzen?")) {
        completedTasks = [];
        try { localStorage.removeItem('gzw_completed_tasks'); } catch(e) {}
        refreshTaskList();
        const titleEl = document.getElementById('taskTitle');
        const checkbox = document.getElementById('taskCompleteCheckbox');
        if (titleEl) { titleEl.style.textDecoration = 'none'; titleEl.style.opacity = '1'; }
        if (checkbox) checkbox.checked = false;
    }
}

function toggleSolution() {
    const s = document.getElementById('taskSolution');
    s.style.display = s.style.display === 'block' ? 'none' : 'block';
}

// ==============================================================
// LOADOUT & INERTIA RECHNER
// ==============================================================
const INERTIA_THRESHOLDS = {
    agile:      { max: 20,  label: "🟢 Agil – Volle Beweglichkeit",          color: "#7ca35a", bg: "rgba(124,163,90,0.15)",    tip: "Perfekt für PvP. Maximale Sprint-Geschwindigkeit, sofortiger ADS nach Sprint, kein Trägheits-Malus." },
    normal:     { max: 30,  label: "🟡 Normal – Leichte Einschränkungen",      color: "#f0c040", bg: "rgba(240,192,64,0.12)",    tip: "Guter Allrounder. Minimale Trägheit spürbar, aber noch sehr gut für Mid-Game POIs." },
    heavy:      { max: 40,  label: "🟠 Schwer – Spürbarer Inertia-Malus",    color: "#ffa500", bg: "rgba(255,165,0,0.12)",     tip: "Taktischer Sprint verlangsamt sich deutlich. ADS-Recovery nach Sprint merkbar." },
    veryheavy:  { max: 54,  label: "🔴 Sehr Schwer – Stark eingeschränkt",   color: "#e05c2a", bg: "rgba(224,92,42,0.15)",     tip: "Massiver Inertia-Malus. Sprinten kaum möglich, ADS sehr langsam. Nur für Fort Narith / Bunker-Raids." },
    overloaded: { max: 999, label: "💀 Überlastet – Encumbered Status!",      color: "#b33939", bg: "rgba(179,57,57,0.2)",      tip: "WARNUNG: Ab 54 kg greift der 'Encumbered'-Status. Sprinten und Springen ist komplett deaktiviert!" }
};

function calcLoadout() {
    const items = {
        "Primärwaffe":        parseFloat(document.getElementById('lc_primary').value)    || 0,
        "Schalldämpfer":      parseFloat(document.getElementById('lc_suppressor').value) || 0,
        "Optik":              parseFloat(document.getElementById('lc_optic').value)      || 0,
        "Magazine":           parseFloat(document.getElementById('lc_mags').value)       || 0,
        "Sidearm":            parseFloat(document.getElementById('lc_sidearm').value)    || 0,
        "Körperpanzerung":    parseFloat(document.getElementById('lc_armor').value)      || 0,
        "Helm":               parseFloat(document.getElementById('lc_helmet').value)     || 0,
        "Tactical Rig":       parseFloat(document.getElementById('lc_rig').value)        || 0,
        "Nachtsicht (NVG)":   parseFloat(document.getElementById('lc_nvg').value)        || 0,
        "Rucksack (leer)":    parseFloat(document.getElementById('lc_bag').value)        || 0,
        "Loot / Inhalt":      parseFloat(document.getElementById('lc_loot').value)       || 0,
        "Medizin":            parseFloat(document.getElementById('lc_medics').value)     || 0,
        "Verpflegung":        parseFloat(document.getElementById('lc_food').value)       || 0,
    };

    const BASE_WEIGHT = 5.0;
    const total = BASE_WEIGHT + Object.values(items).reduce((a, b) => a + b, 0);

    let status;
    if      (total <= INERTIA_THRESHOLDS.agile.max)     status = INERTIA_THRESHOLDS.agile;
    else if (total <= INERTIA_THRESHOLDS.normal.max)    status = INERTIA_THRESHOLDS.normal;
    else if (total <= INERTIA_THRESHOLDS.heavy.max)     status = INERTIA_THRESHOLDS.heavy;
    else if (total <= INERTIA_THRESHOLDS.veryheavy.max) status = INERTIA_THRESHOLDS.veryheavy;
    else                                                status = INERTIA_THRESHOLDS.overloaded;

    const barPct = Math.min(100, Math.round((total / 54) * 100));

    document.getElementById('lc_total_weight').textContent = total.toFixed(1) + ' kg';
    document.getElementById('lc_total_weight').style.color = status.color;

    const bar = document.getElementById('lc_inertia_bar');
    bar.style.width = barPct + '%';
    bar.style.background = status.color;

    document.getElementById('lc_inertia_pct').textContent = barPct + '%';
    document.getElementById('lc_inertia_pct').style.color = status.color;

    const verdict = document.getElementById('lc_inertia_verdict');
    verdict.textContent = status.label;
    verdict.style.color = status.color;
    verdict.style.background = status.bg;
    verdict.style.border = `1px solid ${status.color}`;

    const breakdown = document.getElementById('lc_breakdown');
    let rows = `<span style="color:#666;">── Basis (Charakter + Kleidung): ${BASE_WEIGHT.toFixed(1)} kg</span><br>`;
    Object.entries(items).forEach(([name, weight]) => {
        if (weight > 0) rows += `── ${name}: <span style="color:var(--accent);">${weight.toFixed(1)} kg</span><br>`;
    });
    rows += `<br><strong style="color:#fff;">Gesamt: ${total.toFixed(1)} kg</strong>`;
    breakdown.innerHTML = rows;

    const tipsEl = document.getElementById('lc_tips');
    let tips = `<div style="color:#aaa; font-size:0.85rem; margin-bottom:8px; font-weight:bold;">💡 Operator-Empfehlung:</div>`;
    tips += `<div style="font-size:0.9rem; color:#ccc; line-height:1.6; padding:10px 12px; background:${status.bg}; border-left:3px solid ${status.color}; border-radius:4px;">${status.tip}</div>`;

    const hints = [];
    if (parseFloat(document.getElementById('lc_suppressor').value) > 0) hints.push("🥷 <strong>Stealth-Taktik:</strong> Bei einem Überraschungsangriff hast du exakt <strong>0,5 Sekunden</strong> Zeit, um die KI zu eliminieren, bevor sie Alarm schlägt.");
    if (parseFloat(document.getElementById('lc_armor').value) >= 7.8) hints.push("⚠️ <strong>Schwere Rüstung:</strong> Schränkt Mobilität ein. Nutze nur bei statischen Runs.");
    if (total <= 20) hints.push("✅ <strong>PvP-optimiert:</strong> Ideal für aggressive Spielstile und Häuserkampf.");
    if (total > 54) hints.push("🚨 <strong>ENCUMBERED!</strong> Gewicht sofort reduzieren um sprinten zu können.");

    if (hints.length > 0) tips += `<div style="margin-top:10px;">${hints.map(h => `<div style="margin-bottom:6px; font-size:0.85rem;">${h}</div>`).join('')}</div>`;
    tipsEl.innerHTML = tips;
}

// ==============================================================
// AMMO MATRIX
// ==============================================================
const ammoMatrixData = [
    { name: "5.56 M855A1",    cal: "5.56x45mm",   pen: 4.5, dmg: 52 },
    { name: "5.56 M855",      cal: "5.56x45mm",   pen: 3.5, dmg: 50 },
    { name: "5.56 M856A1",    cal: "5.56x45mm",   pen: 3.8, dmg: 51 },
    { name: ".300 BLK AP",    cal: ".300 BLK",    pen: 4.5, dmg: 55 },
    { name: "5.45 BS",        cal: "5.45x39mm",   pen: 5.5, dmg: 43 },
    { name: "5.45 BP",        cal: "5.45x39mm",   pen: 4.5, dmg: 48 },
    { name: "7.62x39 MAI AP", cal: "7.62x39mm",   pen: 5.5, dmg: 46 },
    { name: "7.62x39 BP",     cal: "7.62x39mm",   pen: 4.5, dmg: 58 },
    { name: "7.62 M993",      cal: "7.62x51mm",   pen: 6.5, dmg: 60 },
    { name: "7.62 M61",       cal: "7.62x51mm",   pen: 6.0, dmg: 64 },
    { name: "7.62 M80",       cal: "7.62x51mm",   pen: 4.2, dmg: 80 },
    { name: "7.62x54R SNB",   cal: "7.62x54mmR",  pen: 6.0, dmg: 75 },
    { name: "4.6 AP SX",      cal: "4.6x30mm",    pen: 5.0, dmg: 35 },
    { name: "9mm 7N31",       cal: "9x19mm",      pen: 3.5, dmg: 45 },
    { name: "9mm AP 6.3",     cal: "9x19mm",      pen: 2.5, dmg: 48 },
    { name: "9mm RIP",        cal: "9x19mm",      pen: 0.5, dmg: 95 },
    { name: ".45 ACP AP",     cal: ".45 ACP",     pen: 3.5, dmg: 60 },
    { name: "12G AP-20 Slug", cal: "12 Gauge",    pen: 3.5, dmg: 160 }
];

const armorClasses = [
    { label: "Class 1", threshold: 1.0 }, { label: "Class 2", threshold: 2.0 },
    { label: "Class 3", threshold: 3.0 }, { label: "Class 3+", threshold: 3.5 },
    { label: "Class 4", threshold: 4.0 }, { label: "Class 5", threshold: 5.0 },
    { label: "Class 6", threshold: 6.0 }
];

function getAmmoCell(pen, threshold) {
    const diff = pen - threshold;
    if (diff >= 0.5) return { bg: '#0d2e0d', color: '#7ca35a', text: '✅', title: 'Sicherer Durchschlag' };
    else if (diff >= -0.3) return { bg: '#2e2200', color: '#ffa500', text: '⚠️', title: 'Braucht mehrere Schuss' };
    else if (diff >= -1.0) return { bg: '#2e0d0d', color: '#ff6b35', text: '❌', title: 'Kaum Durchschlag' };
    else return { bg: '#1a0505', color: '#b33939', text: '🦵', title: 'Leg Meta!' };
}

function buildAmmoMatrix() {
    const tbody = document.getElementById('ammoMatrixBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const calibers = [...new Set(ammoMatrixData.map(a => a.cal))];
    let lastCal = '';

    ammoMatrixData.forEach(ammo => {
        const row = document.createElement('tr');
        if (ammo.cal !== lastCal) {
            const sepRow = document.createElement('tr');
            sepRow.innerHTML = `<td colspan="8" style="background:#1a1a2e; color:#7ca35a; font-weight:bold; font-size:0.8rem; padding:6px 10px; border:1px solid #333;">⚡ ${ammo.cal}</td>`;
            tbody.appendChild(sepRow);
            lastCal = ammo.cal;
        }

        let nameCell = `<td style="background:#1e1e1e; color:#ddd; padding:7px 10px; border:1px solid #2a2a2a; font-weight:bold; position:sticky; left:0; z-index:1; white-space:nowrap;">
            ${ammo.name} <small style="color:#555; font-weight:normal; display:block;">Pen: ${ammo.pen} | DMG: ${ammo.dmg}</small>
        </td>`;
        row.innerHTML = nameCell;

        armorClasses.forEach(ac => {
            const cell = getAmmoCell(ammo.pen, ac.threshold);
            row.innerHTML += `<td title="${cell.title}" style="background:${cell.bg}; color:${cell.color}; text-align:center; padding:7px 4px; border:1px solid #2a2a2a; font-size:1rem;">${cell.text}</td>`;
        });
        tbody.appendChild(row);
    });
}

// ==============================================================
// ROUTENPLANER
// ==============================================================
let selectedRouteTasks = [];
const poiBlueprints = {
    "starter": { name: "Startstadt", infil: "Laufe zu Fuß oder LZs.", danger: "🟢 GERING", keywords: ["startstadt", "markt", "tankstelle", "rathaus", "schule"], steps: [{ name: "Phase 1: Randgebiete", keys: ["farm", "checkpoints"] }, { name: "Phase 2: Markt & Tankstelle", keys: ["markt", "tankstelle"] }, { name: "Phase 3: Schule & Rathaus", keys: ["schule", "rathaus", "boss"] }] },
    "lumber": { name: "Lumber Yard", infil: "Echo LZs", danger: "🟡 MITTEL", keywords: ["lumber", "sawmill", "sägewerk"], steps: [{ name: "Phase 1: Randgebiet", keys: ["hügel", "spähe"] }, { name: "Phase 2: Arbeiterhütten", keys: ["hütte"] }, { name: "Phase 3: Haupthalle", keys: ["vorarbeiter", "sabotieren"] }] },
    // ... restliche POIs ...
};

function onPoiChange() { selectedRouteTasks = []; generateRoutePlan(); }
function addToRoute(taskName) { if (!selectedRouteTasks.includes(taskName)) { selectedRouteTasks.push(taskName); generateRoutePlan(); } }
function removeFromRoute(taskName) { selectedRouteTasks = selectedRouteTasks.filter(t => t !== taskName); generateRoutePlan(); }

function generateRoutePlan() {
    const poiKey = document.getElementById('routePoiSelect').value;
    const resultBox = document.getElementById('routeResult');
    if (!poiKey) { resultBox.style.display = 'none'; return; }
    
    const poi = poiBlueprints[poiKey];
    if (!poi) return;

    let activeTasks = allTasks.filter(t => !completedTasks.includes(t.de));
    let poiTasks = activeTasks.filter(t => poi.keywords.some(kw => t.desc.toLowerCase().includes(kw) || t.sol.toLowerCase().includes(kw)));
    let availableTasks = poiTasks.filter(t => !selectedRouteTasks.includes(t.de));
    let routeTasks = poiTasks.filter(t => selectedRouteTasks.includes(t.de));

    let availableHtml = `<div style="padding: 15px; background: #1a1a1a; border: 1px solid #333; border-radius: 6px; border-left: 4px solid var(--accent);"><h4 style="color:#fff; margin-top:0; margin-bottom:10px;">📋 Verfügbare Missionen:</h4>`;
    if (availableTasks.length === 0) availableHtml += `<span style="color:#888;">Keine Aufgaben mehr hier offen.</span>`;
    else availableTasks.forEach(t => { availableHtml += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding:8px; background:#252525; border: 1px solid #444; border-radius:4px;"><div><strong style="color:#ccc;">${t.de}</strong> <small>(${t.v})</small></div><button onclick="addToRoute('${t.de.replace(/'/g, "\\'")}')" style="background:var(--accent); color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">➕</button></div>`; });
    availableHtml += `</div>`;

    let routeHtml = `<div class="panel-box" style="border-top: 4px solid var(--accent); margin-bottom: 20px;"><h3 style="margin-bottom: 5px;">📍 DEIN EINSATZPLAN: ${poi.name.toUpperCase()}</h3>`;
    if (routeTasks.length === 0) routeHtml += `<p style="color:#aaa;">Füge aus der Liste unten Tasks hinzu.</p>`;
    else {
        let assignedTasks = new Set();
        poi.steps.forEach(step => {
            let stepTasks = routeTasks.filter(t => !assignedTasks.has(t.de) && step.keys.some(kw => t.desc.toLowerCase().includes(kw) || t.sol.toLowerCase().includes(kw)));
            if (stepTasks.length > 0) {
                routeHtml += `<h4 style="color:#fff; margin-top:15px; margin-bottom:8px;">🎯 ${step.name}</h4>`;
                stepTasks.forEach(t => { assignedTasks.add(t.de); routeHtml += `<div style="margin-bottom: 8px; color:#ccc;">- <strong style="color:var(--accent);">${t.de}</strong><br><small style="color: #aaa; margin-left:10px;">↳ ${t.sol}</small> <button onclick="removeFromRoute('${t.de.replace(/'/g, "\\'")}')" style="background:none; border:none; color:#b33939; cursor:pointer;">❌</button></div>`; });
            }
        });
        let remainingTasks = routeTasks.filter(t => !assignedTasks.has(t.de));
        if (remainingTasks.length > 0) {
            routeHtml += `<h4 style="color:#ffa500; margin-top:15px; margin-bottom:8px;">📌 Allgemeine Ziele</h4>`;
            remainingTasks.forEach(t => { routeHtml += `<div style="margin-bottom: 8px; color:#ccc;">- <strong style="color:#ffa500;">${t.de}</strong><br><small style="color: #aaa; margin-left:10px;">↳ ${t.sol}</small> <button onclick="removeFromRoute('${t.de.replace(/'/g, "\\'")}')" style="background:none; border:none; color:#b33939; cursor:pointer;">❌</button></div>`; });
        }
    }
    routeHtml += `</div>`;

    resultBox.style.display = 'block';
    resultBox.innerHTML = routeHtml + availableHtml;
}

// ==============================================================
// NEWS FETCHER
// ==============================================================
async function translateToGerman(text) {
    if (!text) return "";
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=de&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const data = await res.json();
        let translatedText = "";
        for (let i = 0; i < data[0].length; i++) translatedText += data[0][i][0];
        return translatedText;
    } catch (e) { return text; }
}

async function fetchLatestNews() {
    const newsContainer = document.getElementById('dynamic-news-alert');
    if (!newsContainer) return;
    const rssUrl = encodeURIComponent('https://store.steampowered.com/feeds/news/app/2479810/');
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === 'ok' && data.items.length > 0) {
            const latestItem = data.items[0];
            const pubDate = new Date(latestItem.pubDate).toLocaleDateString('de-DE');
            let snippet = latestItem.description.replace(/(<([^>]+)>)/gi, "").replace(/&quot;/g, '"'); 
            if (snippet.length > 200) snippet = snippet.substring(0, 200) + "...";
            const translatedTitle = await translateToGerman(latestItem.title);
            const translatedSnippet = await translateToGerman(snippet);

            newsContainer.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <h3 style="margin-top: 0; margin-bottom: 10px; color: #ff4c4c;">🚨 LATEST: ${translatedTitle}</h3>
                    <span style="font-size: 0.75rem; color: #ffcc00; background: rgba(255,204,0,0.15); padding: 3px 6px; border-radius: 4px;">📅 ${pubDate}</span>
                </div>
                <p style="margin-top: 0; color: #ccc; line-height: 1.5;">${translatedSnippet}</p>
                <a href="${latestItem.link}" target="_blank" style="display: inline-block; margin-top: 8px; background: #b33939; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-weight: bold;">Originalbericht auf Steam öffnen 🔗</a>
            `;
        }
    } catch (error) {
        newsContainer.innerHTML = `<h3 style="color: #ff4c4c; margin-top: 0;">🚨 OFFLINE</h3><p style="color: #ccc;">Verbindung zum News-Server abgebrochen.</p>`;
    }
}

// ==============================================================
// BOSS TIMER & HELICOPTER & TRADER
// ==============================================================
const bossSpawnData = [
    { id: "market",   name: "🏙️ Market Boss",     timer: 15 * 60 },
    { id: "lumber",   name: "🪚 Lumber Boss",      timer: 15 * 60 },
    { id: "ybl",      name: "🏚️ YBL Rebel",        timer: 15 * 60 },
    { id: "hunters",  name: "🎯 HP Commander",     timer: 15 * 60 },
    { id: "fort",     name: "🏯 General Pa",       timer: 25 * 60 },
    { id: "midnight", name: "🏨 LAF Commander",    timer: 20 * 60 },
    { id: "tiger",    name: "🐯 Tiger Bay Boss",    timer: 20 * 60 },
    { id: "airfield", name: "✈️ Airfield Boss",     timer: 25 * 60 },
];
let bossTimers = {};

function toggleBossWidget() { document.getElementById('bossSpawnWidget').classList.toggle('collapsed'); }

function buildBossTimerList() {
    const list = document.getElementById('bossTimerList');
    if (!list) return;
    list.innerHTML = '';
    bossSpawnData.forEach(boss => {
        const row = document.createElement('div');
        row.className = 'boss-timer-row';
        row.innerHTML = `<span class="boss-timer-name">${boss.name}</span><span class="boss-timer-display" id="boss-time-${boss.id}">–:––</span><button class="boss-kill-btn" id="boss-btn-${boss.id}" onclick="bossKilled('${boss.id}')">✕ Tot</button><button class="boss-cancel-btn" id="boss-cancel-${boss.id}" onclick="bossCancel('${boss.id}')" style="display:none;">✕</button>`;
        list.appendChild(row);
    });
}

function bossKilled(id) {
    const boss = bossSpawnData.find(b => b.id === id);
    if (!boss) return;
    bossTimers[id] = { endTime: Date.now() + boss.timer * 1000 };
    document.getElementById(`boss-btn-${id}`).textContent = '↺ Reset';
    document.getElementById(`boss-cancel-${id}`).style.display = 'inline-block';
}

function bossCancel(id) {
    delete bossTimers[id];
    document.getElementById(`boss-btn-${id}`).textContent = '✕ Tot';
    document.getElementById(`boss-cancel-${id}`).style.display = 'none';
    document.getElementById(`boss-time-${id}`).textContent = '–:––';
}

function updateBossTimers() {
    const now = Date.now();
    bossSpawnData.forEach(boss => {
        const display = document.getElementById(`boss-time-${boss.id}`);
        if (!display) return;
        const data = bossTimers[boss.id];
        if (!data) return;
        const remaining = Math.max(0, Math.floor((data.endTime - now) / 1000));
        if (remaining <= 0) {
            display.textContent = '✅ SP!';
            display.style.color = '#7ca35a';
            delete bossTimers[boss.id];
            document.getElementById(`boss-btn-${boss.id}`).textContent = '✕ Tot';
            document.getElementById(`boss-cancel-${boss.id}`).style.display = 'none';
        } else {
            const m = Math.floor(remaining / 60);
            const s = remaining % 60;
            display.textContent = `${m}:${String(s).padStart(2, '0')}`;
            display.style.color = '#ffa500';
        }
    });
}

let heliTimerInterval = null, heliSecondsRemaining = 0;
function calcHeliTime() {
    if (heliTimerInterval) return;
    const startVal = parseInt(document.getElementById('heliStart').value);
    const endVal = parseInt(document.getElementById('heliEnd').value);
    let time = Math.abs(startVal - endVal);
    if (startVal !== 0 && endVal !== 0 && startVal !== endVal) time += 45; 
    if (startVal === endVal) time = 0; else if (time < 45) time = 45;
    heliSecondsRemaining = time;
    updateHeliDisplay();
}
function updateHeliDisplay() {
    const m = Math.floor(heliSecondsRemaining / 60);
    const s = heliSecondsRemaining % 60;
    document.getElementById('heliDisplay').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
function toggleHeliTimer() {
    const btn = document.getElementById('heliActionBtn');
    if (heliTimerInterval) {
        clearInterval(heliTimerInterval);
        heliTimerInterval = null;
        btn.textContent = "🚀 Start";
        btn.style.background = "var(--accent)";
        calcHeliTime();
        return;
    }
    if (heliSecondsRemaining <= 0) { calcHeliTime(); if(heliSecondsRemaining <= 0) return; }
    btn.textContent = "🛑 Stop";
    btn.style.background = "#b33939";
    heliTimerInterval = setInterval(() => {
        heliSecondsRemaining--;
        updateHeliDisplay();
        if (heliSecondsRemaining <= 0) {
            clearInterval(heliTimerInterval);
            heliTimerInterval = null;
            document.getElementById('heliDisplay').textContent = "TOUCHDOWN!";
            btn.textContent = "↺ Reset";
            btn.style.background = "#333";
        }
    }, 1000);
}

function startTraderTimer() {
    const timerDisplay = document.getElementById('trader-timer-btn');
    if (!timerDisplay) return;
    setInterval(() => {
        const now = new Date();
        const nextHour = new Date(now);
        nextHour.setHours(now.getHours() + 1, 0, 0, 0);
        const diff = nextHour - now;
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        timerDisplay.textContent = `🛒 Trader-Restock: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (minutes < 5) timerDisplay.style.color = '#ff4c4c'; else timerDisplay.style.color = '';
    }, 1000);
}

function updateLiveTime() {
    const timeDisplay = document.getElementById('live-time-display');
    if (!timeDisplay) return;
    const now = new Date();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    timeDisplay.textContent = `DATE: ${String(now.getDate()).padStart(2, '0')} ${months[now.getMonth()]} ${now.getFullYear()} | TIME: ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')} ZULU`;
}

// ==============================================================
// INITIALISIERUNG
// ==============================================================
window.addEventListener('DOMContentLoaded', () => {
    try {
        const savedColor = localStorage.getItem('gzw_faction_color') || '#7ca35a';
        const savedId    = localStorage.getItem('gzw_faction_id')    || 'mss';
        document.documentElement.style.setProperty('--accent', savedColor);
        document.querySelectorAll('.fac-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.fac-btn.${savedId === 'mss' ? 'mithras' : savedId === 'csi' ? 'crimson' : 'lamang'}`);
        if (activeBtn) activeBtn.classList.add('active');
    } catch(e) {}

    initNotepad();
    buildKeyDropdown();
    renderKeyRing();
    buildQuestItemDropdown();
    buildBossTimerList();
    buildAmmoMatrix();
    calcLoadout();
    calcHeliTime();
    startTraderTimer();

    makeDraggable('bossSpawnWidget');
    makeDraggable('raidNotepad');
    makeDraggable('heliWidget');

    setInterval(updateBossTimers, 1000);
    
    updateLiveTime();
    setInterval(updateLiveTime, 1000);

    fetchLatestNews();
});
