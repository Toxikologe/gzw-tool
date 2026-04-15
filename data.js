// ==========================================
// GRAY ZONE WARFARE - TACTICAL DATABASE
// Update: 0.4 Spearhead & Hotfix 0.4.0.3
// ==========================================

    // ==============================================================
    // DATENBANKEN
    // ==============================================================

    // 1. TASK DATENBANK (VOLLSTÄNDIG - 0.4 AKTUALISIERT)
    const allTasks = [
        // ==========================================
        // --- HANDSHAKE ---
        // ==========================================
        { de: "Erstaufklärung", en: "First Recon", v: "Handshake", desc: "Erkunde Markt, Tankstelle und Rathaus.", sol: "Markt (141 162), Tankstelle (144 161), Ruine (141 165)." },
        { de: "Agent der Paranoia", en: "Paranoia Agent", v: "Handshake", desc: "Haus des Informanten suchen.", sol: "Startgebiet. Finde das Versteck des Informanten und sichere Hinweise." },
        { de: "Abgestürzter Vogel", en: "Little Bird Down", v: "Handshake", desc: "Finde den Heli-Absturzplatz.", sol: "Crashed Heli (145 159), Crew-Leichen (145 160)." },
        { de: "Wiederherstellung der Ordnung", en: "Restoring Order", v: "Handshake", desc: "10 Feinde in der Startstadt.", sol: "Töte 10 feindliche KIs in der Startstadt." },
        { de: "Rattennest", en: "Rat's Nest", v: "Handshake", desc: "Wanzen im Bunker.", sol: "Verstecke bei SE (143 162) und SW (140 162) untersuchen." },
        { de: "Helfende Hand", en: "Helping Hand", v: "Handshake", desc: "Intel aus dem Restaurant.", sol: "Koordinaten 141 164. Braucht ATTIC KEY (Dachboden)." },
        { de: "Zurückgelassen", en: "Left Behind", v: "Handshake", desc: "Hinweise auf VIP-Leiche.", sol: "Leiche bei den Koordinaten 147 162 finden und identifizieren." },
        { de: "Sisyphus", en: "Sisyphus", v: "Handshake", desc: "10 Feinde um die Startstadt.", sol: "Neutralisiere 10 KIs im Umland der Startstadt." },
        { de: "Funkstille", en: "Radio Silence", v: "Handshake", desc: "Funkturm auf Sabotage prüfen.", sol: "Isoliertes Haus in der Stadt (140 164). Equipment neutralisieren." },
        { de: "Radiostar", en: "Radio Star", v: "Handshake", desc: "Haus NW der Brücke.", sol: "Haus im Startgebiet. Equipment sichern/zerstören." },
        { de: "Vermisste Kinder", en: "Missing Children", v: "Handshake", desc: "UNLRA Evakuierungszentrum.", sol: "Finde zwei UNLRA-Ordner in der Startstadt." },
        { de: "Erster Schlag", en: "First Hit", v: "Handshake", desc: "Kriminellen-Anführer ausschalten.", sol: "Eliminiere den Stadt-Boss (141 162). Er trägt ein rotes Barett." },
        { de: "Rückgewinnung", en: "Reclamation", v: "Handshake", desc: "Fracht aus Versteck holen.", sol: "Startgebiet (142 165). Wähle bei Abgabe zwischen Handshake oder Lab Rat." },
        { de: "König der Kreuzung", en: "King of the Crossroads", v: "Handshake", desc: "Infos über den King.", sol: "Suche das Khonwan-Dorf und die Strip-Bar im Osten ab." },
        { de: "Neue Nachbarn", en: "New Neighbors", v: "Handshake", desc: "Checkpoints YBL-1.", sol: "Bunker Ebene -1 (142 121). Intel sichern." },
        { de: "Der Schatten über Ban Pa", en: "The Shadow Over Ban Pa", v: "Handshake", desc: "Süd/Nord-Eingänge Ban Pa.", sol: "Scoute Ban Pa Süd (204 136) und Nord (205 138)." },
        { de: "Letzter Check-Out", en: "Final Check Out", v: "Handshake", desc: "Lila Koffer identifizieren.", sol: "Pha Lang Airfield (183 158). Untersuche den Koffer." },
        { de: "Zahme Ratte", en: "Domesticated Rat", v: "Handshake", desc: "Shack-Kontakt ausmachen.", sol: "Hunter's Paradise Waldhütte (Nachts 22:00-05:00). Intel holen." },
        { de: "Rebellengesindel", en: "Rebel Scum", v: "Handshake", desc: "20 Feinde Bunker YBL-1.", sol: "YBL-1 Bunker (142 121). 20 Kills erzielen." },
        { de: "Ich kam, sah, siegte I", en: "I Went, I Saw, I Conquered I", v: "Handshake", desc: "Sägewerk ausspähen.", sol: "Sawmill (138 143). Spähe Straßen/Hügel aus (Nachts 22:00-05:00)." },
        { de: "Ich kam, sah, siegte II", en: "I Went, I Saw, I Conquered II", v: "Handshake", desc: "Sprengstoffwerkstatt.", sol: "Sawmill (138 143). Finde die Werkstatt und Fässer." },
        { de: "Ich kam, sah, siegte III", en: "I Went, I Saw, I Conquered III", v: "Handshake", desc: "20 Kills Sägewerk.", sol: "Sawmill. 20 Kills." },
        { de: "Manifest Destiny", en: "Manifest Destiny", v: "Handshake", desc: "Festplatte extrahieren.", sol: "Airfield (182 158). Datenbank auf dem PC checken (Nachts)." },
        { de: "Schießstand", en: "Shooting Gallery", v: "Handshake", desc: "20 Kills Hunter's Paradise.", sol: "Hunter's Paradise (159 168). 20 Kills erzielen." },
        { de: "UNLRA", en: "UNLRA", v: "Handshake", desc: "Intel aus UNLRA Camp.", sol: "Tiger Bay. Finde den Ordner im Zelt (Nachts 22:00-05:00)." },
        { de: "Abkürzung", en: "Shortcut", v: "Handshake", desc: "Durchgang Fort Narith.", sol: "Bunker Ebene -2 (142 121). In den Trümmern suchen." },
        { de: "Schatten über Ban Pa II", en: "The Shadow Over Ban Pa II", v: "Handshake", desc: "Kult in Ban Pa.", sol: "Hole Intel aus Ban Pa (205 137)." },
        { de: "Geschäft oder Vergnügen", en: "Business Or Pleasure", v: "Handshake", desc: "Airfield untersuchen.", sol: "Airfield (183 158). USB auf Holztisch bei Laptop (Nachts)." },
        { de: "Flügel stutzen", en: "Wing Clipping", v: "Handshake", desc: "20 Feinde Flugplatz.", sol: "Pha Lang Airfield. 20 Kills." },
        { de: "Wahrer Mut", en: "True Grit", v: "Handshake", desc: "Antiker Revolver.", sol: "Hunter's Paradise (160 167). Revolver aus Motel 102 holen." },
        { de: "Ein Schuss, ein Treffer", en: "One Shot, One Kill", v: "Handshake", desc: "Commander ausschalten.", sol: "Hunter's Paradise (159 168). Boss (Cap, lila Shirt) töten." },
        { de: "Blick auf den Fluss", en: "Riverfront View", v: "Handshake", desc: "Schicksal Späher.", sol: "Midnight Sapphire. Finde Hinweise über den Späher." },
        { de: "Tiefste, dunkelste Fantasien", en: "Deepest, Darkest Fantasies", v: "Handshake", desc: "Flash Drive holen.", sol: "Midnight Sapphire. USB sichern." },
        { de: "Revolutionäre Straße", en: "Revolutionary Road", v: "Handshake", desc: "Tankstelle Fort Narith.", sol: "Fort Narith Tankstelle. Laptop und Notizen finden." },
        { de: "Spaziergang durch Fort Narith", en: "Fort Narith Stroll", v: "Handshake", desc: "Alle Eingänge prüfen.", sol: "Airfield (141 126), Fuel (146 127), Main (145 130), Barracks (143 131)." },
        { de: "Was hochkommt", en: "What Comes Up", v: "Handshake", desc: "Flugschreiber bergen.", sol: "Pha Lang Airfield (192 152). Blackbox am Wrack finden." },
        { de: "Gewaltsame Aufklärung", en: "Reconnaissance-in-Force", v: "Handshake", desc: "30 Soldaten Fort Narith.", sol: "Töte 30 Soldaten im Fort Narith." },
        { de: "Bis zur Schnupftabakdose", en: "Up To Snuff", v: "Handshake", desc: "VIP Kundenliste.", sol: "Hunter's Paradise (160 168). Gebäude, Schreibtisch rechts." },
        { de: "Gefährliche Schätze", en: "Hazardous Treasures", v: "Handshake", desc: "Eliminieren & Container.", sol: "Kills/Container in: Sawmill, Lagoon, HP (159 168), Ban Pa (205 137), Airfield, YBL-1 (30kg Container!)." },
        { de: "Hacker", en: "Hacker", v: "Handshake", desc: "4 Kameras hacken.", sol: "Fort Narith (Nachts). Air Traffic, Main, North, HQ." },
        { de: "Zurückgelassen II", en: "Left Behind II", v: "Handshake", desc: "Identität Leiche.", sol: "Midnight Sapphire. Leiche identifizieren." },
        { de: "Unkraut jäten", en: "Weeding", v: "Handshake", desc: "30 LAF Forces MS.", sol: "Midnight Sapphire. 30 LAF Feinde töten." },
        { de: "Je mehr desto besser", en: "The More the Merrier", v: "Handshake", desc: "Patrouillen-Dokumente.", sol: "Fort Narith Barracks (Nachts). Intel finden." },
        { de: "Der Kongressabgeordnete", en: "The Congressman", v: "Handshake", desc: "Smartphone Hotel.", sol: "Midnight Sapphire (173 166). Smartphone holen." },
        { de: "Hacker II", en: "Hacker II", v: "Handshake", desc: "Codebuch finden.", sol: "Fort Narith (Nachts). 3 Antennen hacken. Codebuch HQ 2. Stock." },
        { de: "Trollbrücke", en: "Troll Bridge", v: "Handshake", desc: "Verminte Brücke.", sol: "Tiger Bay (West). Untersuche die Brücke." },
        { de: "UNLRA II", en: "UNLRA II", v: "Handshake", desc: "3 Checkpoints untersuchen.", sol: "Tiger Bay Checkpoints (Nachts). Ordner sichern." },
        { de: "Paparazzi", en: "Paparazzi", v: "Handshake", desc: "Vernehmungsraum.", sol: "Hotel (171 166). MS Supply Key nutzen. Blutraum (171 169)." },
        { de: "Der Verschwundene", en: "The Man Who Disappeared", v: "Handshake", desc: "Pass im Schrank.", sol: "Midnight Sapphire (171 166) hinter Rezeption. Pass nachts ablegen." },
        { de: "Lippe riskieren", en: "Lip Out", v: "Handshake", desc: "Donald J. Dortmunder.", sol: "Midnight Sapphire. Finde Zielperson/Wohnort." },
        { de: "Kunst der Täuschung", en: "The Art of Deception", v: "Handshake", desc: "LAF Dokumente fälschen.", sol: "Fort Narith Akten holen, 30 Min warten." },
        { de: "Unbezahlbare Besitztümer", en: "Priceless Possessions", v: "Handshake", desc: "Golfschläger MS.", sol: "Midnight Sapphire. Schläger bergen." },
        { de: "Mall-Bürgerwehr", en: "Mall Vigilante", v: "Handshake", desc: "30 Kills Mall.", sol: "Tiger Bay Einkaufszentrum. 30 Kills." },
        { de: "Verborgene Tiefe", en: "The Depth", v: "Handshake", desc: "Karte Kommandozelt.", sol: "Basecamp Karte an der Wand checken." },
        { de: "Ausrüstungskontrolle", en: "Gear Check", v: "Handshake", desc: "Hinterlassene Waffen.", sol: "NW-Startstadt im hohen Gras." },
        { de: "Gegen die Wand", en: "Up Against The Wall", v: "Handshake", desc: "Exekutionsstätte.", sol: "Fort Narith S-Außenmauer." },
        { de: "Der Saboteur", en: "The Saboteur", v: "Handshake", desc: "Fahrzeuge Söldner.", sol: "Midnight Sapphire. 3 SUVs sabotieren." },
        { de: "Auge des Tigers", en: "Eye of the Tiger", v: "Handshake", desc: "Dach UNLRA HQ.", sol: "Tiger Bay Antenne checken." },
        { de: "Funküberwachung", en: "Radio Intercept", v: "Handshake", desc: "Peilsender Antenne.", sol: "Midnight Sapphire Dach." },
        { de: "Terminal-Initiative", en: "Terminal Initiative", v: "Handshake", desc: "Stürme Airfield.", sol: "Airfield Landebahn sichern." },
        { de: "Der Befreier", en: "The Liberator", v: "Handshake", desc: "Kommunikationszentrale.", sol: "Hütte 199 193. Dokument vom Tisch." },

        // ==========================================
        // --- GUNNY ---
        // ==========================================
        { de: "Medikamente gesucht", en: "Meds Wanted", v: "Gunny", desc: "Hilfsgüter Wasserturm.", sol: "Wasserturm (140 161). Kiste am Fundament." },
        { de: "Schießplatz-Check", en: "Range Check", v: "Gunny", desc: "Munitionskisten Schießstand.", sol: "Rechts unter Wellblechdach." },
        { de: "Luftabwehr-Sichtung", en: "AA Sighting", v: "Gunny", desc: "Markiere FLAK.", sol: "Fort Narith Block A, B, C Dächer markieren." },
        { de: "Treibstoffdiebe", en: "Fuel Thieves", v: "Gunny", desc: "Benzinkanister Hangar.", sol: "Hangar 2 hinter den Wracks." },
        { de: "Scharfschützen-Nest", en: "Sniper's Nest", v: "Gunny", desc: "Wasserturm Sniper.", sol: "Töte Wache oben auf dem Turm." },
        { de: "Herzliches Willkommen", en: "Warm Welcome", v: "Gunny", desc: "Boss in Ban Pa killen.", sol: "Ban Pa (204 136). Boss bei Stelzenhäusern töten." },
        { de: "Waffen & Munition", en: "Guns & Ammo", v: "Gunny", desc: "Waffenlager Bunker.", sol: "Hunter's Paradise (159 168). Braucht HP WEP KEY." },
        { de: "Schießübung", en: "Shooting Practice", v: "Gunny", desc: "100m Sniper Kills.", sol: "10 Kills aus über 100m Entfernung." },
        { de: "Kampfmittelbeseitigung", en: "EOD", v: "Gunny", desc: "IEDs entschärfen.", sol: "3 Sprengsätze Hauptstraße Fort Narith." },
        { de: "Fracht", en: "Cargo", v: "Gunny", desc: "Waffenkisten markieren.", sol: "Lumber Yard Haupthalle. Marker setzen." },
        { de: "Artillerie-Sabotage", en: "Artillery Sabotage", v: "Gunny", desc: "Haubitzen Fort Narith.", sol: "3 Geschütze im Außenbereich markieren." },
        { de: "Feuerkraft", en: "Firepower", v: "Gunny", desc: "MG-Lager Bunker.", sol: "YBL-1 Ebene -2 hinter den Generatoren." },
        { de: "Panzerbrechend", en: "Armor Piercing", v: "Gunny", desc: "AP-Munition sichern.", sol: "Ground Zero Hangar 1. Grüne Kisten." },
        { de: "Schweres Gerät", en: "Heavy Equipment", v: "Gunny", desc: "Schützenpanzer markieren.", sol: "Fort Narith Innenhof (4 Fahrzeuge)." },
        { de: "Scharfschützen-Albtraum", en: "Sniper's Nightmare", v: "Gunny", desc: "20 Kills Hotel.", sol: "Midnight Sapphire. 20 Söldner töten." },
        { de: "Dschungelkampf", en: "Jungle Warfare", v: "Gunny", desc: "Wald um Ban Pa.", sol: "15 Kills im Dschungel Süd." },
        { de: "Säuberung des Sägewerks", en: "Sawmill Sweep", v: "Gunny", desc: "Sawmill befreien.", sol: "15 Kills im Sägewerk-Areal." },
        { de: "Waffenschmuggler", en: "Gun Runners", v: "Gunny", desc: "Schmuggel-Manifest.", sol: "Blue Lagoon Bootshaus Fass." },
        { de: "Gegenangriff", en: "Counterattack", v: "Gunny", desc: "Verteidige HQ-Tor.", sol: "Halte Stadt-Eingang gegen KIs." },
        { de: "Scharfschützen-Duell", en: "Sniper Duel", v: "Gunny", desc: "Sniper Flugplatz.", sol: "3 Sniper Tower/Hangar Ground Zero töten." },
        { de: "Häuserkampf", en: "CQB Mastery", v: "Gunny", desc: "Kills <10m.", sol: "15 Kills auf kurze Distanz." },
        { de: "Panzerabwehr", en: "Anti-Armor", v: "Gunny", desc: "RPG-Sprengköpfe.", sol: "Fort Narith Waffenkammer (2 Stück holen)." },
        { de: "Waffenbrüder", en: "Brothers in Arms", v: "Gunny", desc: "Verlorene M4A1.", sol: "2 M4A1 aus Hunter's Paradise an Gunny übergeben." },
        { de: "Feuer frei", en: "Weapons Free", v: "Gunny", desc: "25 Kills Sägewerk.", sol: "Massive Räumung im Lumber Yard." },
        { de: "Sturm auf das Fort", en: "Storm the Fort", v: "Gunny", desc: "Fort Narith Innenhof.", sol: "Erreiche zentralen Appellplatz." },
        { de: "Säuberung der Lagune", en: "Lagoon Sweep", v: "Gunny", desc: "Kartell vertreiben.", sol: "20 Kills Blue Lagoon." },
        { de: "Kopfgeld", en: "Bounty", v: "Gunny", desc: "Barett Commander.", sol: "Rotes Barett Boss Hunter's Paradise." },
        { de: "Guerilla-Taktiken", en: "Guerrilla Tactics", v: "Gunny", desc: "Vorräte zerstören.", sol: "C4 an 3 Stapel in Ban Pa anbringen." },
        { de: "Hinter feindlichen Linien", en: "Behind Enemy Lines", v: "Gunny", desc: "Heli markieren.", sol: "Ground Zero Kampfhubschrauber markieren." },
        { de: "Schießerei", en: "Shootout", v: "Gunny", desc: "20 Kills AR.", sol: "Hunter's Paradise Feuerkampf mit Assault Rifle." },
        { de: "Schwere Rüstung", en: "Heavy Armor", v: "Gunny", desc: "Feindliche Platten.", sol: "3 unbeschädigte Westen Class 3+ bringen." },
        { de: "Scharfschützengasse", en: "Sniper Alley", v: "Gunny", desc: "Straße Tiger Bay.", sol: "10 Kills auf der Zufahrtsstraße." },
        { de: "Nahkampf", en: "Close Quarters", v: "Gunny", desc: "Räume YBL-1.", sol: "15 Kills im Bunker auf engem Raum." },
        { de: "Der Außenposten", en: "The Outpost", v: "Gunny", desc: "Außenposten Miliz.", sol: "Wald zw. Stadt/Fort. 10 Kills." },
        { de: "Die Festung", en: "The Stronghold", v: "Gunny", desc: "Schwachstellen Mauer.", sol: "3 Marker Außenperimeter Fort Narith setzen." },
        { de: "Luftüberlegenheit", en: "Air Superiority", v: "Gunny", desc: "Drohnen-Steuerung.", sol: "Ground Zero Tower. Zerschieße PC." },
        { de: "Unterdrückungsfeuer", en: "Suppressing Fire", v: "Gunny", desc: "20 Kills LMG.", sol: "Kills mit Trommelmagazin/LMG." },
        { de: "Messie", en: "Hoarder", v: "Gunny", desc: "UNLRA Vorräte Prepper.", sol: "Startgebiet Haus/Eingang durchsuchen." },
        { de: "Unter unserer Nase", en: "Under Our Noses", v: "Gunny", desc: "Gestohlene Lieferung.", sol: "Lamang Island / Startgebiet absuchen." },
        { de: "Auf dem Schießstand", en: "On the Range", v: "Gunny", desc: "Spähe Hunter's Paradise.", sol: "Shooting Lanes (159 168), Dumping Ground (159 167), Motel (160 167)." },
        { de: "Übernatürlich", en: "Supernatural", v: "Gunny", desc: "Hans Liebert Zelt.", sol: "Nördlich von Ban Pa untersuchen." },
        { de: "Kein Weg nach oben", en: "No Way Up", v: "Gunny", desc: "Schicksal PMC Squad.", sol: "Lamang Island. Leiche finden." },
        { de: "Erweiterung", en: "Expansion", v: "Gunny", desc: "LLA Pläne.", sol: "Östlich YBL-1 Gebiet sichern." },
        { de: "Das Gefecht", en: "The Stand", v: "Gunny", desc: "PMC Squad finden.", sol: "Pha Lang Airfield Leichen sichern." },
        { de: "Die Ruhe", en: "The Lull", v: "Gunny", desc: "LLA Außenposten.", sol: "NW YBL-1 / W Midnight Sapphire scouten." },
        { de: "Nadel im Dschungel", en: "Needle In A Jungle", v: "Gunny", desc: "LLA Verstecke.", sol: "S-Ö YBL-1 Farm/Hütte prüfen." },
        { de: "Schnüffler", en: "Snooper", v: "Gunny", desc: "Vorräte Tankstelle.", sol: "Östlich von Fort Narith." },
        { de: "Güterjagd", en: "Goods Hunting", v: "Gunny", desc: "Vorräte Safe House.", sol: "Nördlich von Khonwan Dorf." },
        { de: "Sie sind überall", en: "They Are Everywhere", v: "Gunny", desc: "Camp W Tiger Bay.", sol: "Tiger Bay Untersuchung durchführen." },
        { de: "Inkognito", en: "Incognito", v: "Gunny", desc: "Haus mysteriöse Person.", sol: "W Tiger Bay Central." },

        // ==========================================
        // --- LAB RAT ---
        // ==========================================
        { de: "Medizinischer Detektiv", en: "Medical Detective", v: "Lab Rat", desc: "Büro Arzt Notizen.", sol: "Arzthaus (141 166). Braucht DOC KEY." },
        { de: "Ein einziger Tropfen", en: "A Single Drop", v: "Lab Rat", desc: "Wasserprobe Wasserturm.", sol: "Airfield Tanker Trucks: 182 156, 183 158, 183 158." },
        { de: "Geheimes Mitgefühl", en: "Secret Compassion", v: "Lab Rat", desc: "Hilfsgüter Farmen.", sol: "Drei Standorte: East (146 162), SW (140 160), West (139 162)." },
        { de: "Es ist im Wasser", en: "It's In The Water I", v: "Lab Rat", desc: "Wasserprobe Ban Pa.", sol: "Vogelgewebe (205 136), Wasser (205 137), Erde (206 137)." },
        { de: "Es ist im Wasser II", en: "It's In The Water II", v: "Lab Rat", desc: "Labor in Ban Pa.", sol: "Ban Pa (205 137). Braucht ELDER KEY." },
        { de: "Gefährlicher Ausbruch", en: "Hazardous Outbreak", v: "Lab Rat", desc: "Patientenakten UNLRA.", sol: "Tiger Bay Camp. Medizinisches Zelt." },
        { de: "Laborratte", en: "Lab Rat", v: "Lab Rat", desc: "Mikroskop Schule.", sol: "Startstadt Schule 1. Stock." },
        { de: "Verborgene Gefahr", en: "Hidden Danger", v: "Lab Rat", desc: "Bodenproben Sumpf.", sol: "Toxische Pfützen N-Stadt." },
        { de: "Blutproben", en: "Blood Samples", v: "Lab Rat", desc: "Blutkonserven UNLRA.", sol: "Tiger Bay HQ weißes Zelt." },
        { de: "Medizinische Ausrüstung", en: "Medical Equipment", v: "Lab Rat", desc: "Defibrillator Hotel.", sol: "Midnight Sapphire EG Krankenstation." },
        { de: "Patient Null", en: "Patient Zero", v: "Lab Rat", desc: "Leiche Isolationsstation.", sol: "Tiger Bay Zimmer 3 Feldbett." },
        { de: "Toxisches Erbe", en: "Toxic Legacy", v: "Lab Rat", desc: "Fässer Bunker.", sol: "YBL-1 Ebene -3 überflutet." },
        { de: "Giftige Pflanzen", en: "Poisonous Plants", v: "Lab Rat", desc: "Flora Ban Pa.", sol: "3 blaue Pflanzen am See." },
        { de: "Sauberes Wasser", en: "Clean Water", v: "Lab Rat", desc: "Wasserfilter Blue Lagoon.", sol: "Wassertanks am Rand platzieren." },
        { de: "Strahlungsleck", en: "Radiation Leak", v: "Lab Rat", desc: "Strahlung Ground Zero.", sol: "Zentrum Krater mit Geigerzähler." },
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
        { de: "Leben im Vergessen", en: "Living in Burrows", v: "Lab Rat", desc: "Wasser/Generator YBL-1.", sol: "Bunker (142 121). Braucht YBL-1 GENERATOR ROOM KEY." },
        { de: "Verdeckte Forschung", en: "Covert Research", v: "Lab Rat", desc: "Sensoren Fort Narith.", sol: "3 Sensoren Munitionsbunker." },
        { de: "Chemikalienunfall", en: "Chemical Spill", v: "Lab Rat", desc: "Ursache Vergiftung.", sol: "Industriegebiet Tiger Bay Fässer." },
        { de: "Medizinische Versorgung", en: "Medical Supplies", v: "Lab Rat", desc: "Morphium Lazarett.", sol: "5 Morphin-Injektoren abgeben." },
        { de: "Der Quarantänebereich", en: "The Quarantine Zone", v: "Lab Rat", desc: "UNLRA-Zelte prüfen.", sol: "Tiger Bay HQ 4 Zelte Lüftung." },
        { de: "Biologische Gefahr", en: "Biological Threat", v: "Lab Rat", desc: "Hazmat-Anzug Bunker.", sol: "YBL-1 Ebene -3 offener Spind." },
        { de: "Notoperation", en: "Emergency Surgery", v: "Lab Rat", desc: "Blut Krankenhaus.", sol: "Startstadt Krankenhaus Kühlschrank." },
        { de: "Gegenmittel", en: "Antidote", v: "Lab Rat", desc: "Exp. Medikamente.", sol: "Hotel Zimmer 202 VIP Koffer." },
        { de: "Befreiung", en: "Liberation", v: "Lab Rat", desc: "Dorfältesten-Haus.", sol: "Startgebiet. Befreie Gefangene." },
        { de: "Gute Absichten", en: "Good Intentions", v: "Lab Rat", desc: "Arzt Ban Pa.", sol: "Suche Mediziner im Dorf." },
        { de: "Toxische Umgebung", en: "Toxic Environment", v: "Lab Rat", desc: "Sumpf Bodenproben.", sol: "Nördlicher Sumpf Proben entnehmen." },
        { de: "Testresultate", en: "Test Results", v: "Lab Rat", desc: "Akten Labor.", sol: "Hole Testergebnisse." },
        { de: "Krümelsammler", en: "Crumb Collector", v: "Lab Rat", desc: "Diamanten-Zelt.", sol: "Westliches Zelt. Item auf Tisch (Alternativ zu Turncoat)." },

        // ==========================================
        // --- ARTISAN ---
        // ==========================================
        { de: "Versteck-Bergung", en: "Cache Retrieval", v: "Artisan", desc: "Altes Versteck Wald.", sol: "Warehouse (140 163) und Lumber Yard (141 161)." },
        { de: "Werkzeugbeschaffung", en: "Tooling Up", v: "Artisan", desc: "3 Werkzeugsets.", sol: "Besorge 3 Toolsets im Raid." },
        { de: "Gefährliche Schätze", en: "Hazardous Treasures", v: "Artisan", desc: "Relikte in 30kg Kisten.", sol: "Sawmill Mitte (OFC Storage Key), HP West (HP WEP Key), Ban Pa Elder's House." },
        { de: "Mechaniker-Probleme", en: "Mechanic's Trouble", v: "Artisan", desc: "Fahrzeugteile.", sol: "2 Batterien, 2 Zündkerzen bei Tankstellen." },
        { de: "Ungebetene Gäste", en: "Uninvited Guests", v: "Artisan", desc: "20 Söldner Ban Pa.", sol: "Ban Pa (205 137). 20 Kills im Dorf." },
        { de: "Baupläne", en: "Blueprints", v: "Artisan", desc: "Pläne Miliz.", sol: "Sawmill Büro Vorarbeiter." },
        { de: "Ersatzteile", en: "Spare Parts", v: "Artisan", desc: "Heli-Bauteile.", sol: "3 Fragmente am Absturzplatz im Sumpf." },
        { de: "Versteck im Sumpf", en: "Swamp Stash", v: "Artisan", desc: "Waffen Sumpf.", sol: "Westlich der Stadt unter blauer Plane." },
        { de: "Schrottsammler", en: "Scrap Metal", v: "Artisan", desc: "Metallschrott Flugplatz.", sol: "5 Teile um die Wracks in Ground Zero." },
        { de: "Handwerker", en: "Handyman", v: "Artisan", desc: "Generator Ban Pa.", sol: "Reparatur mit Toolset in der Dorfmitte." },
        { de: "Schwarzmarkt", en: "Black Market", v: "Artisan", desc: "Kassenbuch Markt.", sol: "Startstadt Marktstand unter Kiste." },
        { de: "Sprengstoff", en: "Explosives", v: "Artisan", desc: "C4 Bunker.", sol: "YBL-1 Waffenkammer Regal." },
        { de: "Lieferengpass", en: "Supply Shortage", v: "Artisan", desc: "Baumaterialien.", sol: "3 Panzertape, 2 Nägel." },
        { de: "Geheime Werkstatt", en: "Secret Workshop", v: "Artisan", desc: "Werkstatt Tiger Bay.", sol: "Garage mit blauem LKW in Vorstadt." },
        { de: "Schrottplatz", en: "Scrapyard", v: "Artisan", desc: "Teile Autowracks.", sol: "5 Kupferkabel aus Autowracks besorgen." },
        { de: "Fahrzeugdiebstahl", en: "Grand Theft", v: "Artisan", desc: "Markiere LKW.", sol: "Sawmill Haupthalle Rückseite." },
        { de: "Ersatzteile gesucht", en: "Parts Needed", v: "Artisan", desc: "2 Autobatterien.", sol: "Finden in Garagen/Tankstellen." },
        { de: "Werkzeugkiste", en: "Toolbox", v: "Artisan", desc: "Artisans Kiste.", sol: "Ban Pa Elder's House Schlafzimmer." },
        { de: "Treibstoff", en: "Fuel Run", v: "Artisan", desc: "Benzinkanister.", sol: "2 rote Gas Cans abgeben." },
        { de: "Bauherr", en: "The Builder", v: "Artisan", desc: "Material Bunker.", sol: "2 Tape, 1 Toolset am Eingang YBL-1." },
        { de: "Sprengmeister", en: "Demolitions", v: "Artisan", desc: "Zünder Steinbruch.", sol: "Gelbe Box im Steinbruch-POI." },
        { de: "Schmuggler-Route", en: "Smuggler's Run", v: "Artisan", desc: "Boot Schmuggler.", sol: "Süd-Ban Pa Strand. Motoren-Check." },
        { de: "Verstecktes Gold", en: "Hidden Gold", v: "Artisan", desc: "Goldschmuck Villen.", sol: "Villa 3 Safe (Key nötig)." },
        { de: "Waffenmeister", en: "Gunsmith", v: "Artisan", desc: "M4-Teile Schießstand.", sol: "3 Lower Receiver Hunter's Paradise." },
        { de: "Eine Stadt in Trümmern", en: "A Town in Pieces", v: "Artisan", desc: "Altmetall Ban Pa.", sol: "5 Teile zwischen den Hütten." },
        { de: "Handwerkszeug", en: "Tools of the Trade", v: "Artisan", desc: "Spezialwerkzeug.", sol: "Koordinaten 141 163 aufsuchen." },
        { de: "Der Mechaniker", en: "The Mechanic", v: "Artisan", desc: "Vermisster Mechaniker.", sol: "Tankstelle Hinterhof Leiche." },
        { de: "Das Versteck des Schmugglers", en: "The Smuggler's Cache", v: "Artisan", desc: "Kisten Fluss.", sol: "Blue Lagoon. Tauchen unter Steg." },
        { de: "Geheime Lager", en: "The Hidden Stash", v: "Artisan", desc: "Waffendepot Wald.", sol: "Osten von Sawmill unter Ästen." },
        { de: "Sonderanfertigung", en: "Custom Order", v: "Artisan", desc: "Modifizierte AK.", sol: "AKMN + Suppressor + Optik abgeben." },
        { de: "Transportlogistik", en: "Transport Logistics", v: "Artisan", desc: "LKW-Flotte.", sol: "Tiger Bay Mall Rückseite. 3 Marker setzen." },
        { de: "An den Hügeln des Wahnsinns I", en: "At The Mounds Of Madness I", v: "Artisan", desc: "Hügel Ban Pa.", sol: "Wandbilder finden: 205 135, 204 137, 206 138, 207 137." },
        { de: "An den Hügeln des Wahnsinns II", en: "At The Mounds Of Madness II", v: "Artisan", desc: "Artefakt bergen.", sol: "Grabe am Grabhügel Ban Pa (205 137)." },
        { de: "Rette die Rebellion", en: "Save The Rebellion", v: "Artisan", desc: "Flash Drive Base Camp.", sol: "USB Stick im Basecamp Kommando-Zelt abholen und ins Guardhouse legen." },
        { de: "Wenn ein Baum fällt", en: "When A Tree Falls", v: "Artisan", desc: "Hauptsäge sabotieren.", sol: "Lumber Yard (138 143)." },
        { de: "Das gefährlichste Spiel", en: "The Most Dangerous Game", v: "Artisan", desc: "Natur des VIP Programms.", sol: "Hunter's Paradise (159 168). Infos über VIP-Programm sichern." },
        { de: "Verbrechen zahlt sich nicht aus", en: "Crime Doesn't Pay", v: "Artisan", desc: "Stiehl von Schmuggler.", sol: "Ban Pa Bootshaus plündern." },
        { de: "Nacht Ozean", en: "Night Ocean", v: "Artisan", desc: "Boss töten.", sol: "Gebiet (203 116). Boss killen." },
        { de: "Gefangener 23", en: "Prisoner 23", v: "Artisan", desc: "Finden Gefangenen.", sol: "YBL-1 Ebene -2 Zelle 3." },
        { de: "Artisans Liste", en: "Artisan's List", v: "Artisan", desc: "Batterien/Zündkerzen.", sol: "Tankstellen looten." },
        { de: "Artisans Liste II", en: "Artisan's List II", v: "Artisan", desc: "Kabel/Schrott.", sol: "Material sammeln." },
        { de: "Die Werkstatt", en: "The Workshop", v: "Artisan", desc: "Geheime Werkstatt.", sol: "Tiger Bay Vorstadt finden." },
        { de: "Treibstoffmangel", en: "Fuel Shortage", v: "Artisan", desc: "Treibstoff Sägewerk.", sol: "Sawmill (139 144)." },
        { de: "Invasoren aus der Ferne", en: "Invaders From Afar", v: "Artisan", desc: "Mediziner Notiz.", sol: "Sawmill (139 144). Medic's Note finden." },

        // ==========================================
        // --- TURNCOAT ---
        // ==========================================
        { de: "Der Unterhändler", en: "The Negotiator", v: "Turncoat", desc: "Leiche Unterhändler.", sol: "Bunker Ebene -2 (142 121). Benötigt YBL OFFICE 02 KEY." },
        { de: "Keine Zeugen", en: "No Witnesses", v: "Turncoat", desc: "Leise Kills.", sol: "10 Kills mit Schalldämpfer." },
        { de: "Deal des Jahrhunderts", en: "Deal of the Century", v: "Turncoat", desc: "Schwarzgeld Lagune.", sol: "Blue Lagoon Koffer unter Theke." },
        { de: "Tiefe Tiefen", en: "Deep Depths", v: "Turncoat", desc: "Logbuch Kommandant.", sol: "Fort Narith Keller Block B." },
        { de: "Vermisster Kollege I", en: "Missing Colleague I", v: "Turncoat", desc: "Vermisster Partner I.", sol: "Suche bei 145 129." },
        { de: "Vermisster Kollege II", en: "Missing Colleague II", v: "Turncoat", desc: "Vermisster Partner II.", sol: "Suche bei 143 129." },
        { de: "Blutdiamanten", en: "Blood Diamonds", v: "Turncoat", desc: "Diamanten Safe.", sol: "Midnight Sapphire VIP Safe." },
        { de: "Verräter", en: "Traitor", v: "Turncoat", desc: "Ex-PMC ausschalten.", sol: "Hunter's Paradise schwarze Weste." },
        { de: "Dreckige Geheimnisse", en: "Dirty Secrets", v: "Turncoat", desc: "Erpresserakte.", sol: "Midnight Sapphire Zimmer 204." },
        { de: "Schmiergeld", en: "Bribe Money", v: "Turncoat", desc: "Geld am Pier.", sol: "Tiger Bay Koffer in blaues Boot." },
        { de: "Falsche Fährte", en: "False Trail", v: "Turncoat", desc: "Beweise Fort Narith.", sol: "Barracken Block C Bett." },
        { de: "Schweigen ist Gold", en: "Silence is Golden", v: "Turncoat", desc: "Zeugen Lagune.", sol: "10 leise Kills Blue Lagoon." },
        { de: "Diebesgut", en: "Stolen Goods", v: "Turncoat", desc: "Gestohlene Uhren.", sol: "Sawmill Arbeiterhütte Kästchen." },
        { de: "Hinterhalt", en: "Ambush", v: "Turncoat", desc: "Überlebe Tiger Bay.", sol: "Trigger Alarm Mall & Überlebe." },
        { de: "Der Überläufer", en: "The Defector", v: "Turncoat", desc: "Kontaktmann finden.", sol: "Ban Pa Süd-Haus. Notizblock." },
        { de: "Der Klient", en: "The Client", v: "Turncoat", desc: "Söldner-Zahler.", sol: "Villa 1 Safe Belege." },
        { de: "Die Ratte", en: "The Rat", v: "Turncoat", desc: "Spitzel Ban Pa.", sol: "Kirche Ban Pa blaues Hemd." },
        { de: "Der Hinterhalt", en: "The Setup", v: "Turncoat", desc: "Fingierter Deal.", sol: "Tiger Bay Pier Hinterhalt." },
        { de: "Die Auszahlung", en: "The Payoff", v: "Turncoat", desc: "Geld Miliz.", sol: "Fort Narith Block A Quartiermeister." },
        { de: "Die Flucht", en: "The Escape", v: "Turncoat", desc: "Fluchtplan VIP.", sol: "Ground Zero Jet Cockpit." },
        { de: "Schmutzige Hände", en: "Dirty Hands", v: "Turncoat", desc: "Kills mit AK.", sol: "10 Kills Midnight Sapphire mit AK." },
        { de: "Personalabbau", en: "Downsizing", v: "Turncoat", desc: "30 LAF Kills.", sol: "Töte 30 Lamang Armed Forces bei Fort Narith." },
        { de: "Wer hat das Sagen?", en: "Who's in charge", v: "Turncoat", desc: "Dokumente Fort Narith.", sol: "Fort Narith HQ Akten besorgen." },
        { de: "Lokaler Golf-Star", en: "Local Golf Star", v: "Turncoat", desc: "Golfclub sichern.", sol: "Midnight Sapphire Golfplatz." },
        { de: "Letzte Befreiung", en: "Final Liberation", v: "Turncoat", desc: "Räume Bunker EG-2.", sol: "Bunker (142 121). Töte Boss mit blauem Bandana." },
        { de: "Narkotika-Deal", en: "Narcotic Bargain", v: "Turncoat", desc: "Drogen finden.", sol: "Blue Lagoon Drogenlabor." },
        { de: "In den richtigen Händen", en: "In The Right Hands", v: "Turncoat", desc: "Evakuierungsbefehle.", sol: "Fort Narith, Barracks A, Raum 112. Akte liegt links auf dem Tisch (Wahl zwischen Turncoat/Lab Rat)." },
        { de: "Evakuierungsfrage", en: "Evacuation Question", v: "Turncoat", desc: "Evakuierungsbefehle.", sol: "Fort Narith, Barracks A, Raum 112 (Alternativer Weg für In The Right Hands)." },
        { de: "Eines Mannes Müll", en: "One Man's Trash", v: "Turncoat", desc: "Blue Lagoon Lager.", sol: "Blue Lagoon Restaurant Lager (Storage Key nötig)!" },
        { de: "Keine Fragen gestellt", en: "No Questions Asked", v: "Turncoat", desc: "Villen plündern.", sol: "Finde Wertsachen in Villa Anna Jana und Marta Monica (172 165)." },
        { de: "Verspätetes Paket", en: "Delayed Package", v: "Turncoat", desc: "Post-LKW.", sol: "Straße Tiger Bay DHL Wagen." },
        { de: "Käufer unerzählter Dinge", en: "Buyer of Untold Truths", v: "Turncoat", desc: "Diamanten im Zelt.", sol: "West-Zelt bei Tiger Bay. Item auf Tisch (Alternativ zu Crumb Collector)." },
        { de: "Nenne dein Gift", en: "Name your Poison", v: "Turncoat", desc: "Chemikalien Wassertank.", sol: "Wassertank NW neben Barracken. ACHTUNG: Beendet alternative Lab Rat Quest!" },
        { de: "Drachentöter", en: "Dragonslayer", v: "Turncoat", desc: "General Pa.", sol: "Töte Boss in Fort Narith." },
        { de: "Kenne deinen Feind", en: "Know Your Enemy", v: "Turncoat", desc: "Artillerie markieren.", sol: "Fort Narith Geschütze." },
        { de: "Akademisches Interesse", en: "Academic Interest", v: "Turncoat", desc: "Schul-Daten.", sol: "Startstadt Schule Akten." },
        { de: "Freundlicher Hinweis", en: "Friendly Suggestion", v: "Turncoat", desc: "Bürgermeister Drohung.", sol: "Munition in Bett Bürgermeister ablegen." },
        { de: "Frischfleisch", en: "Fresh Meat", v: "Turncoat", desc: "Gästeliste.", sol: "Haus bei Kilo 2 LZ, im Schlafzimmer auf kleinem Tisch." },
        { de: "Frischfleisch II", en: "Fresh Meat II", v: "Turncoat", desc: "Weitere Kills.", sol: "Gegner ausschalten (Folgequest)." },
        { de: "Frischfleisch III", en: "Fresh Meat III", v: "Turncoat", desc: "Zielperson killen.", sol: "Spezifischen Feind ausschalten." },

        // ==========================================
        // --- BANSHEE ---
        // ==========================================
        { de: "Holz", en: "Timber", v: "Banshee", desc: "Boss Sägewerk.", sol: "Sawmill (139 144). Töte den Boss (patrouilliert NE/Ost und große Halle)." },
        { de: "An den Hügeln", en: "At The Mounds", v: "Banshee", desc: "Gräber Ban Pa.", sol: "NE-Ban Pa Dokument Hügel." },
        { de: "Flugschreiber", en: "Flight Recorder", v: "Banshee", desc: "Blackbox C-130.", sol: "Ground Zero Wrack Heck." },
        { de: "Kopfgeldjäger", en: "Bounty Hunter", v: "Banshee", desc: "Commander Tiger Bay.", sol: "Töte Boss am Pier/HQ." },
        { de: "Nachtwache", en: "Night Watch", v: "Banshee", desc: "Stealth Raid.", sol: "Kills & Extraction leise abschließen." },
        { de: "Blut und Sand", en: "Blood and Sand", v: "Banshee", desc: "Schmuggel Küste.", sol: "Strand S-Tiger Bay Kisten." },
        { de: "Geisterstadt", en: "Ghost Town", v: "Banshee", desc: "Tiger Bay infiltrieren.", sol: "Überleben." },
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
        { de: "Jets'N'Marks", en: "Jets'N'Marks", v: "Banshee", desc: "Jets markieren.", sol: "Ground Zero Hangar 1 & 2." },
        { de: "Waffenlieferungs-Status", en: "State of Weapon Shipment", v: "Banshee", desc: "Waffen-Kisten.", sol: "Hunter's Paradise Dschungel Ost." },
        { de: "Lamang-Verbindung", en: "Lamang Connection", v: "Banshee", desc: "Funk Pier.", sol: "Tiger Bay Pier Funk. Braucht BP Hut Key (Item auf Schreibtisch links)." },
        { de: "Tiefe Verderbtheit", en: "Deep Depravity", v: "Banshee", desc: "Kultisten-Schrein.", sol: "Östlich Ban Pa." },
        { de: "Himmelskriecher", en: "Skycrawlers", v: "Banshee", desc: "Blackbox Wrack.", sol: "Ground Zero C-130." },
        { de: "Himmelskriecher II", en: "Skycrawlers II", v: "Banshee", desc: "Weitere Flugzeugteile.", sol: "Ground Zero Wrack." },
        { de: "Ein Schuss ins Blaue", en: "A Shot in the Dark", v: "Banshee", desc: "Sniper jagen.", sol: "5 Kills Sniper." },
        { de: "Verbrechen und Strafe", en: "Felony and Punishment", v: "Banshee", desc: "Kongressabgeordneter / Gefängnis.", sol: "Midnight Sapphire (173 166). Ende Flur links unter Papier." },
        { de: "Kein Entkommen", en: "No Escape", v: "Banshee", desc: "Säubere Airfield.", sol: "Ground Zero Kills." },
        { de: "Edles Pulver", en: "Noble Powder", v: "Banshee", desc: "Kokain Zimmer 301.", sol: "Midnight Sapphire Zimmer 301." },
        { de: "Gebacken", en: "Baked", v: "Banshee", desc: "Drogenlabor C4.", sol: "Blue Lagoon Sabotage." },
        { de: "Was übrig blieb", en: "What Was Left", v: "Banshee", desc: "Dogtags Krater.", sol: "Sichere Marken Ground Zero. (Gleicher Ort wie One Man's Trash)." },
        { de: "Schmutzgräber", en: "Dirt Digger", v: "Banshee", desc: "Erpressungsakte Safe.", sol: "Tiger Bay HQ Safe." },
        { de: "Aye Aye, Captain", en: "Aye Aye, Captain", v: "Banshee", desc: "Captain finden.", sol: "Ban Pa Boot." },
        { de: "Der Wert des Teilens", en: "The Value of Sharing", v: "Banshee", desc: "Wertsachen teilen.", sol: "Banshee Loot abgeben." },
        { de: "Gesuchter Mann", en: "Wanted Man", v: "Banshee", desc: "Kopfgeld.", sol: "Zielperson ausschalten." },
        { de: "Gesuchter Mann II", en: "Wanted Man II", v: "Banshee", desc: "Kopfgeld Folgequest.", sol: "Weitere Kills." },
        { de: "Verlorenes Mädchen II", en: "Lost Girl II", v: "Banshee", desc: "Spuren folgen.", sol: "Startgebiet Hinweise suchen." },
        { de: "Unnennbar", en: "Unnameable", v: "Banshee", desc: "Kult-Hinweise.", sol: "Ban Pa Elder's House." },
        { de: "Was bleibt", en: "What Remains", v: "Banshee", desc: "Überreste.", sol: "Untersuche die Ruinen." },

        // ==========================================
        // --- SONSTIGE / EXPLORATION / MULTI ---
        // ==========================================
        { de: "Doomsgate", en: "Doomsgate", v: "Handshake", desc: "Checkpoint LAF.", sol: "Ground Zero Übersichtskarte." },
        { de: "Das verlorene Lager", en: "The Campsite", v: "Gunny", desc: "Verlassenes Lager.", sol: "W-Juliet 4 Leiche." },
        { de: "Drogen-Lieferung", en: "Narco Delivery", v: "Turncoat", desc: "Golfplatz Sandbunker.", sol: "Midnight Sapphire 3. Loch." },
        { de: "Rauchzeichen", en: "Smoke Signals", v: "Artisan", desc: "Signalfeuer Miliz.", sol: "Hügel zw. Ban Pa/Lumber." },
        { de: "Schwarze Liste", en: "Blacklist", v: "Artisan", desc: "Buch Namen.", sol: "Ban Pa Elder's House Dielen." },
        { de: "Ungläubig", en: "Unbeliever", v: "Banshee", desc: "Manifest Kapelle.", sol: "Kapelle O-Stadt Altar." },
        { de: "Gefährliche Beute", en: "Hazardous Haul", v: "Lab Rat", desc: "Kontaminierte Proben.", sol: "YBL-1 Ebene -3." },
        { de: "Gefährliche Beute II", en: "Hazardous Haul II", v: "Lab Rat", desc: "Bringe Proben.", sol: "Übergabe an Lab Rat." },
        { de: "Vorratsengpass", en: "Supply Squeeze", v: "Gunny", desc: "Rationen Lumber.", sol: "5 MREs Sägewerk." },
        { de: "Sherpa: Erste Schritte", en: "Sherpa: First Steps", v: "Handshake", desc: "Hilfe Operators.", sol: "Begleite Spieler Startstadt." },
        { de: "Aasfresser", en: "Scavenger", v: "Banshee", desc: "Wertsachen Todeszone.", sol: "Ground Zero Rucksäcke." },
        { de: "Linie im Sand", en: "Line In The Sand", v: "Gunny", desc: "Ban Pa verteidigen.", sol: "Ban Pa (205 137). Ban Pa Pier (206 137)." },
        { de: "Tiefe Gewässer", en: "Deep Waters", v: "Gunny", desc: "Kills Blue Lagoon.", sol: "Kill 20 bots at Blue Lagoon." },
        { de: "Familien-Erbstück", en: "Family Heirloom", v: "Handshake", desc: "Erbstück bergen.", sol: "Suche das Haus im Startgebiet ab." },
        { de: "Ein kleiner Gefallen", en: "A Small Favor", v: "Handshake", desc: "Kleinigkeit besorgen.", sol: "Sammle spezifische Items (z.B. Zigarren/MREs)." },
        { de: "Verlorener Liebhaber", en: "Lost Lover", v: "Handshake", desc: "Suche nach PMC.", sol: "Untersuche die Häuser in Nam Thaven/Kiu Vongsa." },
        { de: "Suchender der Veränderung", en: "Seeker of change", v: "Turncoat", desc: "Proben aus Bett.", sol: "Barracks C, Raum 110 (141 132). Probe mit Kit aus blutigem Bett nehmen." },
        { de: "Unheimliche Akten", en: "Uncanny Files", v: "Turncoat", desc: "Geheime Dokumente.", sol: "Bunker YBL-1 Akten suchen." },

        // ==========================================
        // --- SQUAD MISSIONS ---
        // ==========================================
        { de: "Squad Strike: HVT", en: "Squad Strike: HVT", v: "Handshake", desc: "Boss-Eliminierung Team.", sol: "Teamplay POI Boss." },
        { de: "Squad Strike: Sichern & Halten", en: "Squad Strike: Secure & Hold", v: "Gunny", desc: "Halte Position.", sol: "5 Min. LZ Verteidigung." },
        { de: "Squad Strike: Datendiebstahl", en: "Squad Strike: Data Heist", v: "Turncoat", desc: "Infiltriere HQ.", sol: "YBL-1 oder Tiger Bay Daten." },
        { de: "Squad Strike: Night Raid", en: "Squad Strike: Night Raid", v: "Banshee", desc: "Leise Spec-Op.", sol: "Team Stealth Kills bei Nacht." }
    ];

    // ==========================================
    // 2. WAFFEN-DATENBANK (0.4 SPEARHEAD - 100% COMPLETE)
    // ==========================================
const weapons = {
    // --- STURMGEWEHRE (NATO) ---
    "m4a1": { name: "M4A1 Sturmgewehr", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Die Standard-NATO-Waffe. Stark modifizierbar." },
    "m16a1": { name: "M16A1 Sturmgewehr", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "0.4 NEU: 'The Black Rifle'. Retro-Look, extrem präzise." },
    "m201c": { name: "Norinco M-201C", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "0.4 NEU: Kompakte chinesische M4-Alternative. Hoher Durability Burn!" },
    "cqa1": { name: "CQ-A1", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Chinesischer M4-Klon. Günstig für den Start, später austauschen." },
    "ddm4": { name: "Daniel Defense DDM4", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "0.4 S-TIER: Perfekte Ergonomie ab Werk. Erfordert Blueprint-Unlock." },
    "ks1": { name: "KAC KS-1 (L403A1)", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "0.4 META: Bestes Rückstoßverhalten im Spiel." },
    "sicmcx": { name: "SIG MCX", ammo: ".300 Blackout", pen: "Sehr hoch", tip: "Tödlich im Nahkampf. Munition ist extrem selten. Blueprint im Hotel." },
    "mk18": { name: "MK18", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Kurzer Lauf, hohe Ergonomie. Perfekt für den Häuserkampf." },

    // --- STURMGEWEHRE (OSTBLOCK) ---
    "ak74": { name: "AK-74", ammo: "5.45x39mm", pen: "Gut", tip: "Das Original mit Holzschäftung." },
    "ak74n": { name: "AK-74N", ammo: "5.45x39mm", pen: "Gut", tip: "Mit Schwalbenschwanz-Montage für russische Optiken." },
    "ak74m": { name: "AK-74M", ammo: "5.45x39mm", pen: "Gut", tip: "Modernisierte Version mit Polymerschaft und Klappschaft." },
    "aks74u": { name: "AKS-74U", ammo: "5.45x39mm", pen: "Mittel", tip: "Sehr kurz. Starker Rückstoß, nur für CQB." },
    "aks74un": { name: "AKS-74UN", ammo: "5.45x39mm", pen: "Mittel", tip: "AKS-74U mit seitlicher Montage-Schiene." },
    "akm": { name: "AKM", ammo: "7.62x39mm", pen: "Hoch", tip: "Hoher Rückstoß, massive Stoppwirkung." },
    "akmn": { name: "AKMN", ammo: "7.62x39mm", pen: "Hoch", tip: "AKM mit Optik-Montage." },
    "akms": { name: "AKMS", ammo: "7.62x39mm", pen: "Hoch", tip: "AKM mit nach unten klappendem Schaft." },
    "akmsn": { name: "AKMSN", ammo: "7.62x39mm", pen: "Hoch", tip: "AKMS mit Optik-Montage." },
    "ak101": { name: "AK-101", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Export-AK, die NATO-Munition verschießt." },
    "ak102": { name: "AK-102", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Kurzversion der AK-101." },
    "ak103": { name: "AK-103", ammo: "7.62x39mm", pen: "Hoch", tip: "Moderne Polymer-AK. Spürbar besserer Basis-Rückstoß als die AKM." },
    "ak104": { name: "AK-104", ammo: "7.62x39mm", pen: "Hoch", tip: "Kurzversion der AK-103." },
    "ak105": { name: "AK-105", ammo: "5.45x39mm", pen: "Gut", tip: "Kompakter Kompromiss der AK-74M." },
    "ak12": { name: "AK-12", ammo: "5.45x39mm", pen: "Gut", tip: "Modernste russische Plattform. Sehr hohe Ergonomie." },
    "ak15": { name: "AK-15", ammo: "7.62x39mm", pen: "Hoch", tip: "7.62 Variante der AK-12." },
    "ak19": { name: "AK-19", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Neueste AK-Variante für NATO-Munition." },
    "ak308": { name: "AK-308", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "0.4 S-TIER: .308 Sniper-Muni im Vollauto-Modus. Jailbreak-Blueprint nötig!" },
    "vz58": { name: "SA vz. 58", ammo: "7.62x39mm", pen: "Hoch", tip: "0.4 NEU: 'Moravian Buzzsaw'. Hohe Feuerrate, frisst aber Haltbarkeit." },
    "vz58v": { name: "SA vz. 58 V", ammo: "7.62x39mm", pen: "Hoch", tip: "0.4 NEU: Variante mit Klappschaft." },
    "typ56": { name: "Type 56", ammo: "7.62x39mm", pen: "Mittel", tip: "Die absolute Einsteiger-Waffe. Schnell ersetzen." },
    "typ56_1": { name: "Type 56-1", ammo: "7.62x39mm", pen: "Mittel", tip: "Type 56 Variante mit Klappschaft." },
    "typ56_2": { name: "Type 56-2", ammo: "7.62x39mm", pen: "Mittel", tip: "Type 56 Variante mit seitlichem Klappschaft." },

    // --- DMR & SCHARFSCHÜTZEN ---
    "m14": { name: "M14 Battle Rifle", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "0.4 NEU: S-Tier DMR. Sehr präzise auf Distanz." },
    "m14ebr": { name: "M14 EBR", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "0.4 NEU: Modernisiertes Chassis der M14." },
    "m1a": { name: "M1A", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "0.4 NEU: Zivile Semi-Auto Variante der M14." },
    "m700": { name: "M700 Remington", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "⚠️ 0.4 MECHANIK: Erfordert Manual Bolting! Tödlich auf Distanz." },
    "rem788": { name: "Remington Model 788", ammo: "5.56x45mm / .308", pen: "Hoch", tip: "0.4 NEU: 'Baby's First Sniper'. Günstig für den Anfang. Manual Bolting!" },
    "mosin": { name: "Mosin-Nagant", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "⚠️ 0.4 MECHANIK: Manual Bolting! Die SNB-Munition durchschlägt fast alles." },
    "mosin_sniper": { name: "Mosin-Nagant (Sniper)", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "Mit gebogenem Kammerstängel, um Zielfernrohre zu montieren." },
    "mosin_obrez": { name: "Mosin Obrez", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "Abgesägte Mosin. Furchtbarer Rückstoß, aber enormer Schaden auf kurze Distanz." },
    "svd": { name: "SVD Dragunov", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "0.4 S-TIER: Semi-Auto Sniper. Blueprint in der Tiger Bay Mall." },
    "svds": { name: "SVDS", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "Klappschaft-Version der SVD." },
    "sks": { name: "SKS", ammo: "7.62x39mm", pen: "Gut", tip: "Solides Einsteiger-DMR." },
    "op_sks": { name: "OP-SKS", ammo: "7.62x39mm", pen: "Gut", tip: "SKS mit Montage für Optiken." },

    // --- SMG & SHOTGUNS ---
    "mp7a1": { name: "MP7A1", ammo: "4.6x30mm", pen: "Sehr Hoch (AP)", tip: "Hat einen fest verbauten Frontgriff." },
    "mp7a2": { name: "MP7A2", ammo: "4.6x30mm", pen: "Sehr Hoch (AP)", tip: "Ohne festen Griff, erlaubt eigene Attachments. Blueprint im Shelter." },
    "mp5a2": { name: "MP5A2", ammo: "9x19mm", pen: "Gering", tip: "Fester Schaft, extrem wenig Rückstoß." },
    "mp5a3": { name: "MP5A3", ammo: "9x19mm", pen: "Gering", tip: "Ausziehbarer Schaft für mehr Mobilität." },
    "mp5sd": { name: "MP5SD", ammo: "9x19mm", pen: "Gering", tip: "Integrierter Schalldämpfer. Sehr leise." },
    "mp5k": { name: "MP5K", ammo: "9x19mm", pen: "Gering", tip: "Kurzversion, ideal als Backup-Waffe." },
    "vityaz": { name: "PP-19-01 Vityaz", ammo: "9x19mm", pen: "Gering", tip: "Russische MP5-Alternative. Spielt sich wie eine kompakte AK." },
    "vz61": { name: "VZ-61 Skorpion", ammo: ".32 ACP", pen: "Minimal", tip: "Eher ein Spielzeug. Munition prallt an Rüstungen ab." },
    "m870": { name: "M870 Pump-Action", ammo: "12 Gauge", pen: "Gering", tip: "Standard-Shotgun. Unbedingt auf die Beine zielen!" },
    "moss590": { name: "Mossberg 590", ammo: "12 Gauge", pen: "Gering", tip: "Bessere Shotgun-Alternative zur 870." },
    "moss590a1": { name: "Mossberg 590A1", ammo: "12 Gauge", pen: "Gering", tip: "Schwere Militärversion der 590." },
    "moss590_shock": { name: "Mossberg 590 Shockwave", ammo: "12 Gauge", pen: "Gering", tip: "Extrem kurz, ohne Schaft. Sehr hoher Rückstoß." },

    // --- PISTOLEN ---
    "alien": { name: "Laugo Alien", ammo: "9x19mm", pen: "Mittel", tip: "0.4 NEU: 'Ein Sportwagen auf Schotterpisten'. Feuert so präzise wie ein Laser!" },
    "glock17": { name: "Glock 17", ammo: "9x19mm", pen: "Gering", tip: "Beste Standard-Backup-Waffe. Lässt sich mit Red-Dots modifizieren." },
    "glock19": { name: "Glock 19", ammo: "9x19mm", pen: "Gering", tip: "Kompakte Glock. Sehr zuverlässig." },
    "m9a1": { name: "M9A1 Beretta", ammo: "9x19mm", pen: "Gering", tip: "Solide Pistole mit großer Magazinkapazität." },
    "m9a3": { name: "M9A3 Beretta", ammo: "9x19mm", pen: "Gering", tip: "Modernisierte Beretta mit Gewindelauf für Schalldämpfer." },
    "1911": { name: "Colt M1911A1", ammo: ".45 ACP", pen: "Mittel", tip: "Nur 7 Schuss, aber .45 ACP richtet enormen Fleischschaden an." },
    "ccc": { name: "Colt Combat Commander", ammo: ".45 ACP", pen: "Mittel", tip: "Kompakte, kürzere Version der 1911." },
    "makarov": { name: "Makarov PM", ammo: "9x18mm", pen: "Minimal", tip: "Absolute Notfall-Waffe. Schnell austauschen." },
    "makarov_pb": { name: "Makarov PB", ammo: "9x18mm", pen: "Minimal", tip: "Makarov mit integriertem Schalldämpfer für Stealth-Kills." },
    "typ51": { name: "Type-51 / TT", ammo: "7.62x25mm", pen: "Mittel", tip: "Hohe Penetration für eine Pistole, aber winziges Magazin." }
};
    
// 3. WAFFEN BILDER DATENBANK
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

// ==========================================
// 10. AUSRÜSTUNG & GEAR (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const gearDb = {
    // --- PLATE CARRIERS (Plattenträger) ---
    "pc_defender": { name: "Defender-2 Schutzweste (Defender-2)", class: "NIJ III++", info: "<b>Warum er der Beste für Panzerung ist:</b> Die höchste Rüstungsklasse im Spiel (III++). Stoppt selbst AP-Snipermunition fast vollständig. <b>Nachteil:</b> Extrem schwer, macht dich zu einem langsamen Juggernaut." },
    "pc_rpc": { name: "Recon Plattenträger (Recon Plate Carrier)", class: "NIJ III+", info: "<b>Warum er der Beste für Mobility ist:</b> Die Endgame-Meta! Bietet extrem starken ballistischen Schutz (III+), ist aber leicht genug, um deine Ausdauer (Stamina) und Waffenträgheit im PvP kaum zu beeinträchtigen." },
    "pc_lancer": { name: "CZ 4M Lancer (CZ 4M Lancer)", class: "NIJ III", info: "<b>Warum er gut ist:</b> Hervorragender Mid-Game Carrier. Sehr gut ausbalanciert. Blockt Standard-Gewehrmunition extrem zuverlässig." },
    "pc_sentry": { name: "LCS Sentry (LCS Sentry Plate Carrier)", class: "NIJ III", info: "<b>Warum er gut ist:</b> Schlanker als der Lancer. Perfekt für schnelle Flankenmanöver im Dschungel." },
    "pc_m2": { name: "M2 Plattenträger (M2 Plate Carrier)", class: "NIJ III", info: "<b>Warum er gut ist:</b> Solider Standard-Carrier. Oft bei Elite-KI zu finden. Guter Schutz, aber recht klobig beim Zielen." },
    "pc_6b13": { name: "6B13 Sturm-Panzerung (6B13 Assault Armor)", class: "NIJ III", info: "<b>Warum sie gut ist:</b> Klassische Ostblock-Rüstung. Hält viele Treffer aus, aber das extrem hohe Gewicht senkt deine Ergonomie massiv." },
    "pc_6b23": { name: "6B23-1 Panzerung (6B23-1 Armor)", class: "NIJ III", info: "<b>Warum sie gut ist:</b> Guter Einstieg in die Klasse III. Wird oft von Rebellen getragen. Sollte aber früh gegen leichtere Modelle getauscht werden." },

    // --- ARMOR VESTS (Schutzwesten & Soft Armor) ---
    "av_atbv": { name: "ATBV Schutzweste (ATBV Vest)", class: "NIJ III", info: "<b>Warum sie gut ist:</b> Reine Weste (ohne Magazintaschen) mit Level III Schutz. Du MUSST ein Tactical Rig darüber tragen, um Magazine zu verstauen!" },
    "av_paca": { name: "PACA Schutzweste (PACA Body Armor)", class: "NIJ IIIA", info: "<b>Warum sie gut ist:</b> Stoppt Pistolen und Schrotflinten. <b>Wichtig:</b> Bietet absolut KEINEN Schutz gegen Sturmgewehre! Nur für Start-Zonen." },
    "av_6b2": { name: "6B2 Schutzweste (6B2 Armor)", class: "NIJ IIIA", info: "<b>Warum sie gut ist:</b> Russische Einsteiger-Weste. Schützt vor Scavs mit Pistolen, aber nutzlos gegen Militär-KI." },
    "av_lri": { name: "LRI / CSI Standard-Weste (Faction Vest)", class: "NIJ IIIA", info: "<b>Warum sie gut ist:</b> Die Standard-Fraktionsweste. Bietet ordentlichen Schutz für die ersten Missionen in der Startstadt." },
    "av_security": { name: "Security Weste (Security Vest)", class: "NIJ IIA", info: "<b>Warum sie nützlich ist:</b> Das absolute Minimum an Schutz. Blockt höchstens Querschläger oder extrem kleine Kaliber." },

    // --- BACKPACKS (Rucksäcke) ---
    "bp_wanderer": { name: "Wanderer Rucksack (Civilian Trekstars 70L Backpack)", class: "42 Slots (6x7)", info: "<b>Warum er extrem beliebt ist:</b> Der absolute Favorit der Community für Loot-Touren!" },
    "bp_delta": { name: "Delta Rucksack (Delta Backpack)", class: "36 Slots (6x6)", info: "<b>Warum er der Beste ist:</b> Der absolut größte Rucksack im Spiel. Unverzichtbar für ausgedehnte Loot-Runs in den Endgame-Zonen (Tiger Bay), um massiv Beute mitzunehmen." },
    "bp_rush72": { name: "Rush 72 2.0 (Rush 72 Backpack)", class: "30 Slots (5x6)", info: "<b>Warum er gut ist:</b> Hervorragender, robuster Militär-Rucksack für lange Tasks. Bietet Platz für 2-3 zerlegte Waffen." },
    "bp_ratnik": { name: "6Sh118 Ratnik V2 (6Sh118 Ratnik V2)", class: "30 Slots (5x6)", info: "<b>Warum er gut ist:</b> kam Neu mit den Speahead Update. ähnlich wie der Rush Rucksack nur etwas schwerer." },
    "bp_falang": { name: "Falang 28 (Falang 28)", class: "24 Slots (4x6)", info: "<b>Warum er gut ist:</b> Ziviler Rucksack. Toller Kompromiss aus Stauraum und unauffälligem Profil." },
    "bp_rush24": { name: "Rush 24 (Rush 24 Backpack)", class: "24 Slots (4x6)", info: "<b>Warum er gut ist:</b> Die kompaktere Version des Rush 72. Perfekter Allrounder." },
    "bp_3day": { name: "3-Tages-Sturmrucksack (3-Day Assault Pack)", class: "24 Slots (4x6)", info: "<b>Warum er gut ist:</b> Der militärische Standard von Gunny. Sehr verlässliches Platzangebot." },
    "bp_amp12": { name: "AMP12 Rucksack (AMP12 Backpack)", class: "20 Slots (4x5)", info: "<b>Warum er gut ist:</b> Beliebte Quest-Belohnung (Gunny). Perfekte Größe für Mid-Game Missionen, wo Geschwindigkeit wichtig ist." },
    "bp_patrol": { name: "Patrouillen-Rucksack (Patrol Backpack)", class: "20 Slots (4x5)", info: "<b>Warum er nützlich ist:</b> Reiner Anfänger-Rucksack für die ersten Stunden." },
    "bp_scorpion": { name: "Scorpion OCP (Scorpion OCP Pack)", class: "16 Slots (4x4)", info: "<b>Warum er gut ist:</b> Bester Rucksack für das Early-Game. Reicht genau für ein OP-Kit, Wasser und ein bisschen Loot." },
    "bp_daypack": { name: "Tagesrucksack (Daypack)", class: "16 Slots (4x4)", info: "<b>Warum er gut ist:</b> Ziviles Äquivalent zum Scorpion OCP. Liegt oft in Häusern herum." },
    "bp_gunfigther": { name: "Gunfigther 14 (Gunfigther 14)", class: "9 Slots (3x3)", info: "<b>Warum er nützlich ist:</b> Kompakter Taktischer Rucksack gerade am Anfang sehr beliebt." },
    "bp_sport": { name: "Sport Rucksack (Sport Backpack)", class: "9 Slots (3x3)", info: "<b>Warum er nützlich ist:</b> Ähnlich wie der Touristenrucksack, kann man sehr oft finden, wenn du keinen hast ist er besser als nichts" },
    "bp_tourist": { name: "Kleiner Touristenrucksack (Small Tourist Backpack)", class: "6 Slots (2x3)", info: "<b>Warum er nützlich ist:</b> Kann man sehr oft finden, wenn du keinen hast ist er besser als nichts" },
    "bp_drawstring": { name: "Turnbeutel / Sporttasche (Drawstring Bag)", class: "8 Slots (2x4)", info: "<b>Warum er nützlich ist:</b> Wenn du absolut pleite bist. Besser als nichts, aber mehr als ein Med-Kit passt nicht rein." },

    // --- TACTICAL RIGS (Tragesysteme) ---
    "rig_lbt": { name: "LBT-1961A Rig (LBT-1961A Chest Rig)", class: "High Capacity", info: "<b>Warum es das Beste ist:</b> Bietet absurd viel Platz für Magazine und OP-Kits. Perfekt in Kombination mit der ungepanzerten ATBV-Weste!" },
    "rig_recon": { name: "Recon Brust-Rig (Recon Chest Rig)", class: "Medium Capacity", info: "<b>Warum es gut ist:</b> Sehr leicht. Erhöht die Ergonomie beim schnellen Zielen (ADS). Platz für 4 Magazine." },
    "rig_tactec": { name: "TacTec Brust-Rig (TacTec Chest Rig)", class: "Medium Capacity", info: "<b>Warum es gut ist:</b> Beliebter Allrounder. Hält Magazine griffbereit und behindert nicht beim Sprinten." },
    "rig_viper": { name: "Viper Rig (Viper Chest Rig)", class: "Medium Capacity", info: "<b>Warum es gut ist:</b> Leichtes, modulares Rig. Oft beim Boss 'Viper' zu finden." },
    "rig_training": { name: "Training Mini Rig (Training Mini Rig)", class: "Low Capacity", info: "<b>Warum es gut ist:</b> Minimalistisch. Maximale Mobilität für Pistolen- oder leichte SMG-Runs." },
    "rig_type81": { name: "Type 81 AK-Rig (Type 81 Rig)", class: "Low Capacity", info: "<b>Warum es gut ist:</b> Die großen Taschen sind perfekt, um lange 40-Schuss AK-Magazine zu verstauen." },
    "rig_type56": { name: "Type 56 AK-Rig (Type 56 Rig)", class: "Low Capacity", info: "<b>Warum es gut ist:</b> Sehr billig, perfekt für Low-Budget Runs mit der AKM (Chicom-Design)." },
    "rig_improvised": { name: "Improvisiertes Rig (Improvised Rig)", class: "Minimal", info: "<b>Warum es nützlich ist:</b> Das absolute Minimum. Platz für genau zwei Ersatzmagazine." },

    // --- HEADWEAR (Helme & Kopfbedeckung) ---
    "hw_altyn": { name: "Altyn Helm (Altyn Helmet)", class: "NIJ III (Gesichtsschutz)", info: "<b>Warum er gut ist:</b> Einer der wenigen Helme mit Level III Visier! Schützt das Gesicht vor Sturmgewehren. <b>Nachteil:</b> Du bist fast taub, da keine Headsets darunter passen." },
    "hw_fastmt": { name: "FAST MT Helm (FAST MT Helmet)", class: "NIJ IIIA (Modular)", info: "<b>Warum er der Beste ist:</b> Federleicht, schützt vor Pistolenschüssen und erlaubt die Nutzung von High-End Headsets und Panoramanachtsicht (GPNVG-18)." },
    "hw_exfil": { name: "EXFIL Helm (Team Wendy EXFIL)", class: "NIJ IIIA (Modular)", info: "<b>Warum er gut ist:</b> Fantastische Passform. Die Ohren bleiben frei, wodurch Headsets ihr volles Audio-Potenzial entfalten können." },
    "hw_mich2000": { name: "MICH TC-2000 (MICH TC-2000)", class: "NIJ IIIA", info: "<b>Warum er gut ist:</b> Standard-Militärhelm. Sehr solider Schutz zum absolut fairen Preis." },
    "hw_mich2002": { name: "MICH TC-2002 (MICH TC-2002)", class: "NIJ IIIA", info: "<b>Warum er gut ist:</b> Höher geschnitten als der 2000er, wodurch ComTacs bequemer darunter passen." },
    "hw_lshz": { name: "LSHZ 1+ Helm (LSHZ 1+)", class: "NIJ IIIA", info: "<b>Warum er gut ist:</b> Sehr robuster russischer Kommandeurs-Helm." },
    "hw_6b47": { name: "6B47 Ratnik Helm (6B47 Ratnik)", class: "NIJ IIIA", info: "<b>Warum er gut ist:</b> Der Standard der Feind-KI. Leicht, günstig und rettet dich vor unglücklichen Querschlägern." },
    "hw_ssh": { name: "SSh-68 Stahlhelm (SSh-68)", class: "NIJ IIA", info: "<b>Warum er nützlich ist:</b> Nur Splitterschutz. Schwer und klobig, schützt maximal vor Makarow-Pistolen." },
    "hw_skull": { name: "Skull Crusher (NVG Mount)", class: "Kein Schutz", info: "<b>Warum er gut ist:</b> Bietet null Rüstung, ist aber die leichteste Methode im Spiel, um ein Nachtsichtgerät (NVG) zu tragen." },
    "hw_boonie": { name: "Dschungelhut (Boonie Hat)", class: "Tarnung", info: "<b>Warum er der Beste ist (PvP):</b> Bricht deine Kopfsilhouette im Dschungel extrem gut auf. Feinde erkennen dich im Gebüsch deutlich schwerer als mit einem runden Helm." },
    "hw_cap": { name: "Baseballkappe / Beanie", class: "Kosmetisch", info: "<b>Warum sie gut ist:</b> Reiner Style-Faktor für Basecamp-Runs." },

    // --- HEADSETS (Gehörschutz / Audio Meta) ---
    "hs_comtac4": { name: "ComTac 4 (ComTac 4 Headset)", class: "Audio: Extrem Hoch", info: "<b>Warum es das Beste ist:</b> Die absolute PvP-Meta! Filtert Umgebungsrauschen (Wind/Regen) fast komplett heraus und verstärkt feindliche Schritte extrem präzise. Ein Lebensretter." },
    "hs_sordin": { name: "Sordin Supreme (Sordin Supreme Pro-X)", class: "Audio: Hoch", info: "<b>Warum es gut ist:</b> Sehr basslastig. Eigene Schüsse klingen angenehm gedämpft, Schritte auf hartem Untergrund (Holz/Stein) treten überdeutlich hervor." },
    "hs_comtac2": { name: "ComTac 2 (ComTac 2 Headset)", class: "Audio: Mittel", info: "<b>Warum es gut ist:</b> Solider Standard-Gehörschutz. Wertet dein Gehör drastisch auf, hat aber ein leichtes, konstantes Grundrauschen." },
    "hs_m32": { name: "Earmor M32 (M32 Headset)", class: "Audio: Mittel", info: "<b>Warum es gut ist:</b> Die günstige Alternative zum ComTac. Erfüllt seinen Zweck sehr gut." },
    "hs_razor": { name: "Walker's Razor (Razor Headset)", class: "Audio: Mittel", info: "<b>Warum es gut ist:</b> Sehr flaches Profil, passt unter fast jeden Helm. Die Richtungsortung ist in Ordnung." },
    "hs_gssh": { name: "GSSh-01 (GSSh-01 Headset)", class: "Audio: Gering", info: "<b>Warum es nützlich ist:</b> Immer noch besser als nichts! <b>Nachteil:</b> Extrem lautes 'Crunchy' Eigengeräusch. Deine eigenen Schritte klingen sehr scharf." },

    // --- GLASSES & FACE COVER (Brillen & Masken) ---
    "gl_tactical": { name: "Taktische Schutzbrille (Tactical Goggles)", class: "Augenschutz", info: "<b>Warum sie die Beste ist:</b> Reduziert den Blendeffekt (Sun Glare), wenn du in die Sonne blickst. Ein absolutes Muss für Scharfschützen!" },
    "gl_sports": { name: "Sportsonnenbrille (Sports Sunglasses)", class: "Augenschutz", info: "<b>Warum sie gut ist:</b> Dunkelt das Bild ab. Sehr hilfreich, wenn man aus dem dunklen Dschungel in helle Gebiete schaut." },
    "gl_aviator": { name: "Fliegerbrille (Aviator Glasses)", class: "Kosmetisch", info: "<b>Warum sie gut ist:</b> Purer Style-Faktor für den Helikopter-Flug." },
    "fc_gasmask": { name: "Gasmaske (Gas Mask)", class: "Umweltschutz", info: "<b>Warum sie gut ist:</b> 0.4 Update Relevanz! Schützt deine Atemwege in den kontaminierten Bereichen (z.B. Ground Zero Sumpf) vor Toxinen." },
    "fc_balaclava": { name: "Sturmhaube (Balaclava)", class: "PvP Tarnung", info: "<b>Warum sie die Beste ist:</b> Verdeckt deine helle Gesichtshaut. Ein leuchtendes Gesicht im Schatten des Dschungels verrät dich an Sniper sofort. Pflicht für jeden Raid!" },
    "fc_shemagh": { name: "Shemagh / Palästinensertuch (Shemagh)", class: "Tarnung", info: "<b>Warum es gut ist:</b> Bricht die Hals- und Gesichtslinie auf. Exzellente Tarnung in schlammigen Gebieten." },
    "fc_neck": { name: "Schlauchschal (Neck Gaiter)", class: "Tarnung", info: "<b>Warum er gut ist:</b> Leichte Alternative zur Balaclava. Verdeckt Mund und Hals." },
    "fc_bandana": { name: "Bandana (Bandana)", class: "Kosmetisch", info: "<b>Warum es gut ist:</b> Kosmetischer Look, oft bei Rebellen-KI zu finden." },

    // --- BELTS (Gürtel) ---
    "belt_operator": { name: "Operator Gürtel (Operator Belt)", class: "Inventar: 6 Slots (2x3)", info: "<b>Warum er der Beste ist:</b> Der größte Gürtel im Spiel. Du kannst riesige OP-Kits oder 6 Magazine direkt am Gürtel tragen. Perfekt für Heavy Loadouts!" },
    "belt_battle": { name: "Gefechtsgürtel (Battle Belt)", class: "Inventar: 4 Slots (2x2)", info: "<b>Warum er gut ist:</b> Der Standard-Gürtel. Ideal, um Tourniquets und Bandagen auf Kurzwahltasten zu legen, ohne Platz im Rig zu verschwenden." },
    "belt_tactical": { name: "Taktischer Gürtel (Tactical Belt)", class: "Inventar: 2 Slots (1x2)", info: "<b>Warum er gut ist:</b> Bietet Platz für zwei Kurzwahl-Items, wie eine Bandage und einen Schokoriegel." },
    "belt_duty": { name: "Dienstgürtel (Duty Belt)", class: "Inventar: 2 Slots (1x2)", info: "<b>Warum er nützlich ist:</b> Günstigster Gürtel. Perfekt für 2 Reserve-Pistolenmagazine." }
};
    
// ==========================================
// 15. BOSS DATENBANK & INTEL (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const bosses = {
    // --- STARTREGIONEN & WÄLDER ---
    "market_leader": { 
        name: "Krimineller Anführer (Criminal Leader)", 
        loc: "Startstadt (Marktplatz)", 
        loot: "Basis-Waffen, Munition, Start-Schlüssel", 
        tip: "Trägt meist eine Schrotflinte oder eine einfache AK. Er ist sehr aggressiv auf kurze Distanz, lässt sich aber leicht flankieren." 
    },
    "lumber_boss": { 
        name: "Sägewerk-Vorarbeiter (Lumber Yard Foreman)", 
        loc: "Lumber Yard (Hauptgebäude / Echo)", 
        loot: "SKS, AKM, Holzfäller-Schlüssel", 
        tip: "Versteckt sich oft im Sägewerk-Hauptgebäude oder bei den Holzstapeln. Hat meist 2-3 stark gepanzerte Wachen bei sich." 
    },
    "rebel_ybl": { 
        name: "Rebellen-Anführer (Rebel Leader)", 
        loc: "YBL-1 Bunker (Haupteingang oder Untergeschoss)", 
        loot: "AK-Plattformen, Level IIIA Rüstung, Bunker Keys", 
        tip: "Trägt oft ein rotes Barett. Nutze Granaten (Flashbangs/Frags), um ihn und seine Wachen aus den extrem engen Gängen des Bunkers zu treiben." 
    },

    // --- MID-GAME POIs ---
    "hunter_commander": { 
        name: "Feindlicher Kommandant (Hostile Commander)", 
        loc: "Hunter's Paradise (Schießstand oder Bar)", 
        loot: "M4A1, M855 Munition, Level III Rüstung", 
        tip: "Achtung: Er und seine Wachen nutzen oft westliche (amerikanische) Waffen. Er droppt sehr oft wertvolle Schlüssel für die angrenzende Waffenkammer." 
    },
    "malo_blue": { 
        name: "Grin / Malo Luangrath (Blue Lagoon Boss)", 
        loc: "Blue Lagoon (Resort, Kahok Werkstatt oder kleine Insel)", 
        loot: "Level III+ Rüstung, 1911 C Pistole (Quest-Item)", 
        tip: "<b>0.4 ROTATION:</b> Spawnt jetzt an 3 verschiedenen Orten! Nutze AP-Munition für seine Level III+ Rüstung. <b>Wichtig:</b> Vergiss nicht, seine '1911 C Pistole' manuell aus seinem Holster zu looten (Wichtig für die Quest 'Like a Boss')!" 
    },
    "banpa_leader": { 
        name: "Naga / Ältester (Elder Leader)", 
        loc: "Ban Pa (Ältestenhaus oder verstecktes Dock)", 
        loot: "Type 51 Pistole, AK-Varianten, Holzstatuen", 
        tip: "Trägt ein auffälliges orangefarbenes Hemd. Du brauchst ihn für die 'Warm Welcome' Quest. Er patrouilliert meist beim großen Ältestenhaus auf den Holzstelzen oder unten am geheimen Dock." 
    },

    // --- END-GAME & HIGH DANGER ---
    "fort_commander": { 
        name: "General Pa (Fort Commander)", 
        loc: "Fort Narith (Hauptquartier)", 
        loot: "Level III++ Rüstung (Defender-2), High-End Sturmgewehre, AP-Munition", 
        tip: "Einer der am schwersten gepanzerten Gegner im gesamten Spiel. Ziele unbedingt auf den Kopf (Gesicht) oder die Beine, wenn du keine reine AP-Munition (wie M995) geladen hast!" 
    },
    "midnight_laf": { 
        name: "LAF Kommandant (LAF Commander)", 
        loc: "Midnight Sapphire (Dach oder obere Stockwerke)", 
        loot: "Signatur-Waffe, Level III+ Rüstung, Hotel Office Key", 
        tip: "Extrem schwer bewacht! Wenn du ihn das erste Mal tötest, erhältst du Zugang zur 'M700 Side Task'. Sein Schlüssel öffnet den wertvollen Loot-Raum auf der 2. Etage des Hotels." 
    },
    "tiger_bay_unlra": { 
        name: "UNLRA Offizier (UNLRA Officer)", 
        loc: "Tiger Bay (Flüchtlingslager / UNLRA HQ)", 
        loot: "High-Tier Meds, seltene Intel-Dokumente", 
        tip: "Das UNLRA-Lager ist eine absolute Todeszone. Räume erst die Umgebung per Scharfschütze, bevor du ihn pushst. Droppt den blauen UNLRA-Ordner für Handshake." 
    },
    "tiger_bay_pier": { 
        name: "Pier Boss (Tiger Bay)", 
        loc: "Tiger Bay (Am Ende des Piers)", 
        loot: "Sniper-Gewehre, Zielfernrohre, Schmuck", 
        tip: "Der extrem lange Weg über den Holzpier bietet null Deckung. Nutze Scharfschützengewehre, um ihn und seine Wachen aus sicherer Distanz vom Ufer aus auszuschalten." 
    },
    "airfield_boss": { 
        name: "Airfield Commander (Ground Zero)", 
        loc: "Pha Lang Airfield (Hangar, Marktplatz oder Zentralgebäude)", 
        loot: "High-End Gear, Spezial-Schlüssel", 
        tip: "<b>0.4 ROTATION:</b> Hat jetzt 3 verschiedene Spawn-Punkte (Haupt-Hangar, Marktplatz oder Zentralgebäude)! Extrem wichtig für die 'Departure' Mission. Er wird von 2 schwer gepanzerten Elitesoldaten eskortiert." 
    },

    // --- ROAMING BOSSES (Wechselnde Spawns) ---
    "viper": { 
        name: "Viper (Jungle Camps)", 
        loc: "Dschungel (Wechselnde kleine Camps)", 
        loot: "Viper Chest Rig, modifizierte SMGs", 
        tip: "Ein extrem mobiler Boss, der sich oft in den dicht bewachsenen und schwer einsehbaren Dschungel-Camps versteckt. Nahkampf-Waffen (Shotguns/SMGs) sind hier Pflicht." 
    },
    "bloodhound": { 
        name: "Bloodhound (Military Checkpoints)", 
        loc: "Militär-Checkpoints (z.B. nördlich von YBL-1)", 
        loot: "Taktische Rucksäcke, schwere Schutzwesten", 
        tip: "Bewacht oft die Übergänge zwischen den Sektoren. Agiert extrem taktisch und nutzt oft weitreichende Flankierungsmanöver mit seinen Wachen. Niemals still stehen bleiben!" 
    },
    "golden_boy": { 
        name: "Golden Boy (Midnight Sapphire)", 
        loc: "Midnight Sapphire (Villen-Viertel)", 
        loot: "Goldene Waffen, extrem viel Bargeld, Diamanten", 
        tip: "Der Name ist Programm: Er droppt den teuersten Loot im Spiel. Wird jedoch von den gefährlichsten Elite-Söldnern verteidigt. Perfekt für den 'Millionärs-Run'." 
    }
};
    
// ==========================================
// 13. AMMO MATRIX & BALLISTIK (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
// Die Penetrationswerte (pen) sind exakt auf die Rüstungsklassen abgestimmt:
// 2.0 = NIJ IIIA | 3.0 = NIJ III | 3.5 = NIJ III+ | 4.0 = NIJ III++

const armorClasses = [
    { label: "NIJ IIIA", threshold: 2.0 },
    { label: "NIJ III", threshold: 3.0 },
    { label: "NIJ III+", threshold: 3.5 },
    { label: "NIJ III++", threshold: 4.0 }
];

const ammoMatrixData = [
    // --- 5.56x45mm NATO (M4A1, KS-1, DDM4, M16A1, CQ-A1) ---
    { name: "5.56 M995 Panzerbrechend (M995 AP)", cal: "5.56x45mm", pen: 4.5, dmg: 40 },
    { name: "5.56 SSA AP Hochgeschwindigkeits-AP (SSA AP)", cal: "5.56x45mm", pen: 4.2, dmg: 38 },
    { name: "5.56 M855A1 Verbesserte Pen. (M855A1)", cal: "5.56x45mm", pen: 3.5, dmg: 50 },
    { name: "5.56 M856A1 Leuchtspur AP (M856A1 Tracer)", cal: "5.56x45mm", pen: 3.2, dmg: 51 },
    { name: "5.56 M855 Standard (M855 Ball)", cal: "5.56x45mm", pen: 3.0, dmg: 52 },
    { name: "5.56 M856 Leuchtspur (M856 Tracer)", cal: "5.56x45mm", pen: 2.8, dmg: 54 },
    { name: "5.56 M193 Zivil (M193)", cal: "5.56x45mm", pen: 2.5, dmg: 58 },
    { name: "5.56 MK255 Mod 0 RRLP (MK255 Mod 0)", cal: "5.56x45mm", pen: 1.5, dmg: 65 },
    { name: "5.56 HP BT Hohlspitz (HP BT)", cal: "5.56x45mm", pen: 1.0, dmg: 75 },
    { name: "5.56 Warmageddon Fleischschaden (Warmageddon)", cal: "5.56x45mm", pen: 0.5, dmg: 85 },

    // --- 5.45x39mm (AK-74, AK-12, AK-105, AKS-74U) ---
    { name: "5.45 7N39 Igolnik / PPBS (7N39)", cal: "5.45x39mm", pen: 4.5, dmg: 37 },
    { name: "5.45 BS Panzerbrechend (BS)", cal: "5.45x39mm", pen: 4.0, dmg: 40 },
    { name: "5.45 BP Gehärtet (BP)", cal: "5.45x39mm", pen: 3.5, dmg: 45 },
    { name: "5.45 BT Leuchtspur (BT Tracer)", cal: "5.45x39mm", pen: 3.5, dmg: 44 },
    { name: "5.45 PP Verbessert (PP)", cal: "5.45x39mm", pen: 3.0, dmg: 48 },
    { name: "5.45 PS Standard (PS)", cal: "5.45x39mm", pen: 2.5, dmg: 50 },
    { name: "5.45 FMJ Vollmantel (FMJ)", cal: "5.45x39mm", pen: 2.0, dmg: 54 },
    { name: "5.45 PRS Übungsmunition (PRS)", cal: "5.45x39mm", pen: 1.5, dmg: 60 },
    { name: "5.45 US Unterschall (US Subsonic)", cal: "5.45x39mm", pen: 1.5, dmg: 65 },
    { name: "5.45 SP Teilmantel (SP)", cal: "5.45x39mm", pen: 1.0, dmg: 68 },
    { name: "5.45 HP Hohlspitz (HP)", cal: "5.45x39mm", pen: 0.5, dmg: 75 },

    // --- 7.62x39mm (AKM, SKS, SA vz. 58, Type 56) ---
    { name: "7.62x39 MAI AP High-End AP (MAI AP)", cal: "7.62x39mm", pen: 4.5, dmg: 46 },
    { name: "7.62x39 BP Panzerbrechend (BP)", cal: "7.62x39mm", pen: 3.5, dmg: 50 },
    { name: "7.62x39 PS Standard (PS)", cal: "7.62x39mm", pen: 3.0, dmg: 55 },
    { name: "7.62x39 T45M Leuchtspur (T45M Tracer)", cal: "7.62x39mm", pen: 2.5, dmg: 57 },
    { name: "7.62x39 FMJ Vollmantel (FMJ)", cal: "7.62x39mm", pen: 2.5, dmg: 60 },
    { name: "7.62x39 US Unterschall (US Subsonic)", cal: "7.62x39mm", pen: 2.0, dmg: 58 },
    { name: "7.62x39 SP Teilmantel (SP)", cal: "7.62x39mm", pen: 1.5, dmg: 70 },
    { name: "7.62x39 HP Hohlspitz (HP)", cal: "7.62x39mm", pen: 0.5, dmg: 80 },

    // --- 7.62x51mm NATO / .308 (M14, M1A, M700, AK-308) ---
    { name: "7.62 M993 Schweres AP (M993 AP)", cal: "7.62x51mm", pen: 5.0, dmg: 65 },
    { name: "7.62 M61 Panzerbrechend (M61)", cal: "7.62x51mm", pen: 4.5, dmg: 70 },
    { name: "7.62 M62 Leuchtspur (M62 Tracer)", cal: "7.62x51mm", pen: 3.8, dmg: 75 },
    { name: "7.62 M80 Standard (M80 Ball)", cal: "7.62x51mm", pen: 3.2, dmg: 80 },
    { name: "7.62 BCP FMJ Zivil (BCP FMJ)", cal: "7.62x51mm", pen: 2.8, dmg: 85 },
    { name: "7.62 TCW SP Jagdmunition (TCW SP)", cal: "7.62x51mm", pen: 1.5, dmg: 100 },
    { name: "7.62 Ultra Nosler Fleischschaden (Ultra Nosler)", cal: "7.62x51mm", pen: 1.0, dmg: 110 },

    // --- 7.62x54mmR (SVD Dragunov, Mosin-Nagant) ---
    { name: "7.62x54R BS Panzerbrechend (BS)", cal: "7.64x54mmR", pen: 5.0, dmg: 72 },
    { name: "7.62x54R SNB Spezial-AP (SNB)", cal: "7.64x54mmR", pen: 4.5, dmg: 75 },
    { name: "7.62x54R 7N1 Sniper (7N1 Sniper)", cal: "7.64x54mmR", pen: 4.0, dmg: 82 },
    { name: "7.62x54R LPS Standard (LPS Gzh)", cal: "7.64x54mmR", pen: 3.5, dmg: 80 },
    { name: "7.62x54R T-46M Leuchtspur (T-46M)", cal: "7.64x54mmR", pen: 3.0, dmg: 82 },
    { name: "7.62x54R FMJ Vollmantel (FMJ)", cal: "7.64x54mmR", pen: 2.5, dmg: 84 },
    { name: "7.62x54R SP Teilmantel (SP)", cal: "7.64x54mmR", pen: 1.5, dmg: 95 },

    // --- .300 Blackout (SIG MCX) [0.4 NEU] ---
    { name: ".300 BLK AP Panzerbrechend (AP)", cal: ".300 BLK", pen: 3.8, dmg: 55 },
    { name: ".300 BLK CBJ Militär (CBJ)", cal: ".300 BLK", pen: 3.2, dmg: 60 },
    { name: ".300 BLK M62 Leuchtspur (M62 Tracer)", cal: ".300 BLK", pen: 3.0, dmg: 58 },
    { name: ".300 BLK BCP FMJ Zivil (BCP FMJ)", cal: ".300 BLK", pen: 2.5, dmg: 62 },
    { name: ".300 BLK Whisper Unterschall (Whisper)", cal: ".300 BLK", pen: 2.0, dmg: 65 },
    { name: ".300 BLK V-MAX Fleischschaden (V-MAX)", cal: ".300 BLK", pen: 0.5, dmg: 85 },

    // --- 4.6x30mm (MP7A1, MP7A2) [0.4 NEU] ---
    { name: "4.6x30 AP SX Rüstungsbrecher (AP SX)", cal: "4.6x30mm", pen: 3.8, dmg: 35 },
    { name: "4.6x30 FMJ SX Vollmantel (FMJ SX)", cal: "4.6x30mm", pen: 3.0, dmg: 43 },
    { name: "4.6x30 Subsonic SX Unterschall (Subsonic)", cal: "4.6x30mm", pen: 2.0, dmg: 45 },
    { name: "4.6x30 Action SX Zivil (Action SX)", cal: "4.6x30mm", pen: 1.0, dmg: 50 },

    // --- 9x19mm Parabellum (Glock, MP5, Alien, Vityaz) ---
    { name: "9mm 7N31 Panzerbrechend (7N31 AP)", cal: "9x19mm", pen: 3.0, dmg: 45 },
    { name: "9mm AP 6.3 Militär (AP 6.3)", cal: "9x19mm", pen: 2.5, dmg: 52 },
    { name: "9mm PST Gzh Standard (PST Gzh)", cal: "9x19mm", pen: 1.8, dmg: 55 },
    { name: "9mm PSO Gzh Übung (PSO Gzh)", cal: "9x19mm", pen: 1.0, dmg: 60 },
    { name: "9mm Luger CCI Hohlspitz (Luger CCI)", cal: "9x19mm", pen: 0.8, dmg: 70 },
    { name: "9mm QuakeMaker Expansion (QuakeMaker)", cal: "9x19mm", pen: 0.5, dmg: 85 },
    { name: "9mm RIP Beinschredder (RIP)", cal: "9x19mm", pen: 0.2, dmg: 100 },

    // --- .45 ACP (Colt 1911, CCC) ---
    { name: ".45 ACP AP Panzerbrechend (AP)", cal: ".45 ACP", pen: 2.5, dmg: 65 },
    { name: ".45 ACP Match Vollmantel (Match FMJ)", cal: ".45 ACP", pen: 1.5, dmg: 72 },
    { name: ".45 ACP Lasermatch Leuchtspur (Lasermatch)", cal: ".45 ACP", pen: 1.0, dmg: 80 },
    { name: ".45 ACP RIP Fleischschaden (RIP)", cal: ".45 ACP", pen: 0.2, dmg: 120 },

    // --- Russische Pistolen (9x18 Makarov, 7.62x25 Tokarev) ---
    { name: "7.62x25 Tokarev PST (PST Gzh)", cal: "7.62x25mm", pen: 2.0, dmg: 48 },
    { name: "7.62x25 Tokarev PT Gzh (PT Gzh)", cal: "7.62x25mm", pen: 1.5, dmg: 55 },
    { name: "7.62x25 Tokarev LRNPC Hohlspitz (LRNPC)", cal: "7.62x25mm", pen: 0.5, dmg: 65 },
    { name: "9x18 Makarov PMM Verbessert (PMM)", cal: "9x18mm", pen: 1.8, dmg: 50 },
    { name: "9x18 Makarov PST Standard (PST)", cal: "9x18mm", pen: 1.2, dmg: 55 },
    { name: "9x18 Makarov BZT Leuchtspur (BZT)", cal: "9x18mm", pen: 1.0, dmg: 58 },
    { name: "9x18 Makarov SP8 Hohlspitz (SP8)", cal: "9x18mm", pen: 0.8, dmg: 68 },
    { name: "9x18 Makarov SP7 Fleischschaden (SP7)", cal: "9x18mm", pen: 0.5, dmg: 75 },

    // --- .32 ACP (VZ-61 Skorpion) ---
    { name: ".32 ACP FMJ Vollmantel (.32 FMJ)", cal: ".32 ACP", pen: 1.0, dmg: 40 },
    { name: ".32 ACP JHP Hohlspitz (.32 JHP)", cal: ".32 ACP", pen: 0.5, dmg: 50 },

    // --- 12 Gauge (Shotguns: M870, Mossberg 590) ---
    { name: "12G AP-20 Flintenlaufgeschoss (AP-20 Slug)", cal: "12 Gauge", pen: 3.0, dmg: 160 },
    { name: "12G Copper Sabot Slug (Copper Sabot)", cal: "12 Gauge", pen: 2.5, dmg: 140 },
    { name: "12G Grizzly Slug Massivgeschoss (Grizzly 40)", cal: "12 Gauge", pen: 1.8, dmg: 190 },
    { name: "12G Flechette Pfeilmunition (Flechette)", cal: "12 Gauge", pen: 1.5, dmg: 120 },
    { name: "12G RIP Slug Beinschredder (RIP Slug)", cal: "12 Gauge", pen: 0.5, dmg: 260 },
    { name: "12G 8.5mm Magnum Schrot (8.5mm Magnum)", cal: "12 Gauge", pen: 0.5, dmg: 400 },
    { name: "12G 00 Buckshot Schrot (00 Buck)", cal: "12 Gauge", pen: 0.5, dmg: 280 },
    { name: "12G 7mm Buckshot Schrot (7mm Buck)", cal: "12 Gauge", pen: 0.2, dmg: 320 }
];
    
// 6. KEYS DATENBANK
    const allKeys = [
        // ==========================================
        // --- NAM THAVEN (Mithras Startstadt) ---
        // ==========================================
        { name: "Nam Thaven Doctor's Office Key", de: "Arztpraxis-Schlüssel (NT DOC)", loc: "Nam Thaven", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
        { name: "Nam Thaven Restaurant Storage Key", de: "Restaurant-Lager (NT)", loc: "Nam Thaven", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
        { name: "Nam Thaven Marketplace Office Key", de: "Markt-Büro (NT)", loc: "Nam Thaven", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
        { name: "Nam Thaven Marketplace Broom Closet Key", de: "Markt-Besenkammer (NT)", loc: "Nam Thaven", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
        { name: "Nam Thaven Marketplace Storeroom Key", de: "Markt-Lagerraum (NT)", loc: "Nam Thaven", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
        { name: "Nam Thaven Motel Room Key", de: "Motelzimmer (NT)", loc: "Nam Thaven", effect: "Öffnet ein Motelzimmer am Stadtrand.", loot: "Kleidung, Wertsachen" },
        { name: "Nam Thaven UNLRA Office Key", de: "UNLRA-Büro (NT)", loc: "Nam Thaven", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
        { name: "Nam Thaven Lumberyard Maintenance Room Key", de: "Sägewerk Wartungsraum (NT)", loc: "Nam Thaven", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
        { name: "Nam Thaven Town Hall Finance Department Key Card", de: "Rathaus Finanzabteilung (NT)", loc: "Nam Thaven", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

        // ==========================================
        // --- KIU VONGSA (Crimson Startstadt) ---
        // ==========================================
        { name: "Kiu Vongsa Doctor's Office Key", de: "Arztpraxis-Schlüssel (KV DOC)", loc: "Kiu Vongsa", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
        { name: "Kiu Vongsa Restaurant Storage Key", de: "Restaurant-Lager (KV)", loc: "Kiu Vongsa", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
        { name: "Kiu Vongsa Marketplace Office Key", de: "Markt-Büro (KV)", loc: "Kiu Vongsa", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
        { name: "Kiu Vongsa Marketplace Broom Closet Key", de: "Markt-Besenkammer (KV)", loc: "Kiu Vongsa", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
        { name: "Kiu Vongsa Marketplace Storeroom Key", de: "Markt-Lagerraum (KV)", loc: "Kiu Vongsa", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
        { name: "Kiu Vongsa Motel Room Key", de: "Motelzimmer (KV)", loc: "Kiu Vongsa", effect: "Öffnet ein Motelzimmer.", loot: "Kleidung, Wertsachen" },
        { name: "Kiu Vongsa UNLRA Office Key", de: "UNLRA-Büro (KV)", loc: "Kiu Vongsa", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
        { name: "Kiu Vongsa Lumberyard Maintenance Room Key", de: "Sägewerk Wartungsraum (KV)", loc: "Kiu Vongsa", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
        { name: "Kiu Vongsa Mayor's Mansion Room Key", de: "Bürgermeister-Villa Zimmer (KV)", loc: "Kiu Vongsa", effect: "Öffnet ein Zimmer in der Bürgermeister-Villa.", loot: "Wertsachen, Safe" },
        { name: "Kiu Vongsa Town Hall Finance Department Key Card", de: "Rathaus Finanzabteilung (KV)", loc: "Kiu Vongsa", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

        // ==========================================
        // --- PHA LANG (Lamang Startstadt) ---
        // ==========================================
        { name: "Pha Lang Doctor's Office Key", de: "Arztpraxis-Schlüssel (PL DOC)", loc: "Pha Lang", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
        { name: "Pha Lang Restaurant Storage Key", de: "Restaurant-Lager (PL)", loc: "Pha Lang", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
        { name: "Pha Lang Marketplace Office Key", de: "Markt-Büro (PL)", loc: "Pha Lang", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
        { name: "Pha Lang Marketplace Broom Closet Key", de: "Markt-Besenkammer (PL)", loc: "Pha Lang", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
        { name: "Pha Lang Marketplace Storeroom Key", de: "Markt-Lagerraum (PL)", loc: "Pha Lang", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
        { name: "Pha Lang Motel Room Key", de: "Motelzimmer (PL)", loc: "Pha Lang", effect: "Öffnet ein Motelzimmer.", loot: "Kleidung, Wertsachen" },
        { name: "Pha Lang UNLRA Office Key", de: "UNLRA-Büro (PL)", loc: "Pha Lang", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
        { name: "Pha Lang Lumberyard Maintenance Room Key", de: "Sägewerk Wartungsraum (PL)", loc: "Pha Lang", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
        { name: "Pha Lang Town Hall Finance Department Key Card", de: "Rathaus Finanzabteilung (PL)", loc: "Pha Lang", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

        // ==========================================
        // --- HUNTER'S PARADISE ---
        // ==========================================
        { name: "Hunter's Paradise Weapon Storage Key", de: "HP Waffenkammer (HP Wep)", loc: "Hunter's Paradise", effect: "Öffnet die Waffenkammer.", loot: "High-Tier Waffen, Task-Container" },
        { name: "Hunter's Paradise Motel Room 102 Key", de: "HP Motel 102", loc: "Hunter's Paradise", effect: "Öffnet Zimmer 102 im Motel.", loot: "Task-Intel (True Grit)" },
        { name: "Hunter's Paradise Motel Room 101 Key", de: "HP Motel 101", loc: "Hunter's Paradise", effect: "Öffnet Zimmer 101 im Motel.", loot: "Low-Tier Waffen, Munition" },
        { name: "Hunter's Paradise Improvised Motel Armory Key", de: "HP Improvisierte Waffenkammer", loc: "Hunter's Paradise", effect: "Öffnet eine umfunktionierte Waffenkammer im Motel.", loot: "Waffen, Aufsätze" },
        { name: "Hunter's Paradise Shooting Lines Storage Key", de: "HP Schießstand-Lager", loc: "Hunter's Paradise", effect: "Öffnet das Lager an den Schießbahnen.", loot: "Munition, Gehörschutz" },
        { name: "Hunter's Paradise Bunker Key", de: "HP Bunker-Schlüssel", loc: "Hunter's Paradise", effect: "Öffnet den kleinen Bunker-Bereich.", loot: "Militärbedarf, Waffen" },

        // ==========================================
        // --- SAWMILL ---
        // ==========================================
        { name: "Sawmill Office Key", de: "Vorarbeiter-Büro (SM Ofc)", loc: "Sawmill", effect: "Öffnet das Hauptbüro.", loot: "Task-Dokumente, Safe" },
        { name: "Sawmill Office Storage Room Key", de: "Sägewerk Büro-Lager (SM OStrg)", loc: "Sawmill", effect: "Öffnet den Lagerraum am Büro.", loot: "Task-Container (30kg)" },
        { name: "Sawmill Storage Shed Key", de: "Sägewerk Lagerschuppen", loc: "Sawmill", effect: "Öffnet den Geräteschuppen.", loot: "Werkzeuge, Materialien" },
        { name: "Sawmill Toilet Key", de: "Sägewerk Toiletten-Schlüssel", loc: "Sawmill", effect: "Öffnet die sanitären Anlagen.", loot: "Geringe Wertsachen, Medizin" },

        // ==========================================
        // --- BAN PA ---
        // ==========================================
        { name: "Ban Pa Fishing Hut Key", de: "BP Fischerhütte", loc: "Ban Pa", effect: "Öffnet eine verschlossene Hütte am Wasser.", loot: "Task-Intel, Schrott" },
        { name: "Ban Pa Elder's House Key", de: "Haus des Ältesten (Ban Pa)", loc: "Ban Pa", effect: "Öffnet das große Haus des Dorfältesten.", loot: "Statuen, Task-Item" },
        { name: "Ban Pa Elder's Room Key", de: "Zimmer des Ältesten (Ban Pa)", loc: "Ban Pa", effect: "Öffnet das Schlafzimmer des Ältesten.", loot: "Wertsachen, Tresor" },
        { name: "Ban Pa Warehouse Key", de: "BP Lagerhaus", loc: "Ban Pa", effect: "Öffnet das Lagergebäude am Rand.", loot: "Schmuggelware, Waffen" },

        // ==========================================
        // --- YBL-1 BUNKER ---
        // ==========================================
        { name: "YBL-1 Bedroom Key", de: "YBL-1 Schlafzimmer", loc: "YBL-1 Bunker", effect: "Öffnet die Schlafräume.", loot: "Kleidung, Wertsachen" },
        { name: "YBL-1 Corridor D Storage Room Key", de: "YBL-1 Flur D Lager", loc: "YBL-1 Bunker", effect: "Öffnet das Lager in Sektor D.", loot: "Munition, Rucksäcke" },
        { name: "YBL-1 Maintenance Door Key", de: "YBL-1 Wartungstür", loc: "YBL-1 Bunker", effect: "Öffnet einen Wartungsschacht.", loot: "Werkzeuge, Elektronik" },
        { name: "YBL-1 Weapon Storage Key", de: "YBL-1 Waffenkammer", loc: "YBL-1 Bunker", effect: "Öffnet die Bunker-Waffenkammer.", loot: "Militär-Waffen, Aufsätze" },
        { name: "YBL-1 Office 02 Key", de: "YBL-1 Büro 02", loc: "YBL-1 Bunker", effect: "Öffnet Büro 02.", loot: "Task-Intel (The Negotiator)" },
        { name: "YBL-1 Office Key 01", de: "YBL-1 Büro 01", loc: "YBL-1 Bunker", effect: "Öffnet Büro 01.", loot: "Dokumente, Intel" },
        { name: "YBL-1 Generator Room Key", de: "YBL-1 Generatorraum", loc: "YBL-1 Bunker", effect: "Öffnet den Hauptgeneratorraum.", loot: "Task-Zugang, Werkzeug" },

        // ==========================================
        // --- PHA LANG AIRFIELD ---
        // ==========================================
        { name: "Hangar 03 Key", de: "Hangar 03 Schlüssel", loc: "Pha Lang Airfield", effect: "Öffnet Hangar 3.", loot: "Waffen-Teile, Militär-Kisten" },
        { name: "Pha Lang Airfield Storage Office Key", de: "Airfield Lagerbüro", loc: "Pha Lang Airfield", effect: "Öffnet das Büro im Lagerbereich.", loot: "Intel, Safe" },
        { name: "Pha Lang Airfield Meeting Room Key", de: "Airfield Besprechungsraum", loc: "Pha Lang Airfield", effect: "Öffnet den Meeting-Raum.", loot: "Militärische Pläne, Akten" },
        { name: "Airport Storage Shed Key", de: "Airport Lagerschuppen", loc: "Pha Lang Airfield", effect: "Öffnet den Schuppen am Flugfeld.", loot: "Werkzeuge, Treibstoff" },

        // ==========================================
        // --- BLUE LAGOON ---
        // ==========================================
        { name: "Blue Lagoon Shack Key", de: "Malo's Hütte (BL Shack)", loc: "Blue Lagoon", effect: "Öffnet die Hütte über dem Wasser.", loot: "Waffen, Task-Items" },
        { name: "Blue Lagoon Office Storage Key", de: "Lagunen-Bürolager", loc: "Blue Lagoon", effect: "Öffnet das Verwaltungsbüro-Lager.", loot: "Intel, Wertsachen" },
        { name: "Blue Lagoon Restaurant Storage Key", de: "BL Restaurant-Lager", loc: "Blue Lagoon", effect: "Öffnet den Storage Room im Restaurant.", loot: "Task-Intel (One Man's Trash)" },

        // ==========================================
        // --- FORT NARITH ---
        // ==========================================
        { name: "Fort Narith HQ Reception Storage Key Card", de: "FN HQ Rezeption Lager", loc: "Fort Narith", effect: "Öffnet das Lager hinter der HQ-Rezeption.", loot: "Bargeld, Elektronik" },
        { name: "Fort Narith Air Traffic Control Tower Key", de: "FN Tower-Schlüssel", loc: "Fort Narith", effect: "Öffnet den ATC-Tower.", loot: "Militär-Funk, Waffen" },
        { name: "Fort Narith HQ Archive Key", de: "FN HQ Archiv", loc: "Fort Narith", effect: "Öffnet das Archiv im Hauptquartier.", loot: "Intel, Geheimdokumente" },
        { name: "A102 Key", de: "Baracke A102", loc: "Fort Narith", effect: "Öffnet Raum A102.", loot: "Waffen, Westen" },
        { name: "A103 Key", de: "Baracke A103", loc: "Fort Narith", effect: "Öffnet Raum A103.", loot: "Munition, Kleidung" },
        { name: "A208 Key", de: "Baracke A208", loc: "Fort Narith", effect: "Öffnet Raum A208.", loot: "Wertsachen, Helme" },
        { name: "A210 Key", de: "Baracke A210", loc: "Fort Narith", effect: "Öffnet Raum A210.", loot: "Waffen-Koffer" },
        { name: "C101 Key", de: "Baracke C101", loc: "Fort Narith", effect: "Öffnet Raum C101.", loot: "Task-Items, High-Tier Loot" },
        { name: "C108 Key", de: "Baracke C108", loc: "Fort Narith", effect: "Öffnet Raum C108.", loot: "Militär-Ausrüstung" },
        { name: "Fort Narith Dumping Ground Storage Shed Key", de: "FN Schrottplatz-Schuppen", loc: "Fort Narith", effect: "Öffnet den Schuppen am Schrottplatz.", loot: "Werkzeuge" },
        { name: "Fort Narith Garage Office Key", de: "FN Garagenbüro", loc: "Fort Narith", effect: "Öffnet das Büro in der Fahrzeughalle.", loot: "Fahrzeugteile, Safe" },
        { name: "Forth Narith HQ Comms Room Key", de: "FN HQ Funkraum", loc: "Fort Narith", effect: "Öffnet den Kommunikationsraum.", loot: "Elektronik, Task-Infos" },
        { name: "Fort Narith HQ Storage Room Key", de: "FN HQ Lagerraum", loc: "Fort Narith", effect: "Öffnet den allgemeinen Lagerraum im HQ.", loot: "Rucksäcke, Helme" },
        { name: "Fort Narith Infirmary ICU Key", de: "FN Lazarett Intensivstation", loc: "Fort Narith", effect: "Öffnet die ICU.", loot: "High-Tier Medizin (Stims, Surkits)" },
        { name: "Fort Narith Outskirts Improvised Armory Key", de: "FN Randgebiet Waffenkammer", loc: "Fort Narith", effect: "Öffnet ein improvisiertes Waffenlager.", loot: "Waffen, Granaten" },
        { name: "Fort Narith Motel Improvised Armory Key", de: "FN Motel Waffenkammer", loc: "Fort Narith", effect: "Öffnet eine Waffenkammer im Motel-Bereich.", loot: "Militär-Waffen" },
        { name: "Fort Narith Shooting Range Office Key", de: "FN Schießstand-Büro", loc: "Fort Narith", effect: "Öffnet das Büro am Schießstand.", loot: "Munition, Aufsätze" },
        { name: "Turncoat's House Key", de: "Turncoats Haus", loc: "Fort Narith / Umland", effect: "Öffnet das Versteck des Turncoats.", loot: "Spezifischer Loot, Intel" },

        // ==========================================
        // --- MIDNIGHT SAPPHIRE ---
        // ==========================================
        { name: "Golf Club Storage Key", de: "Golfclub-Lager", loc: "Midnight Sapphire", effect: "Öffnet das Lagerhäuschen am Golfplatz.", loot: "Sporttaschen, Wertsachen" },
        { name: "Villa Marta Monica Garage Key", de: "Garage Marta Monica", loc: "Midnight Sapphire", effect: "Öffnet die Garage der östlichen Villa.", loot: "Werkzeug, Safe" },
        { name: "Midnight Sapphire Hotel Office Key", de: "Hotel-Büro", loc: "Midnight Sapphire", effect: "Öffnet das Management-Büro.", loot: "Safe, Bargeld, Intel" },
        { name: "Hotel Supply Closet Key Card", de: "Hotel Versorgungsraum (Keycard)", loc: "Midnight Sapphire", effect: "Gewährt Zugang zum Supply Closet (Task).", loot: "Zugang CCTV-Raum" },
        { name: "Villa Katherine Key", de: "Villa Katherine", loc: "Midnight Sapphire", effect: "Öffnet eine weitere Luxusvilla.", loot: "Geld, Schmuck, Safe" },
        { name: "Villa Anna Jana Key", de: "Villa Anna Jana", loc: "Midnight Sapphire", effect: "Öffnet die mittlere Villa.", loot: "Task-Dokumente, Safe" },
        { name: "Villa Luisa Key", de: "Villa Luisa", loc: "Midnight Sapphire", effect: "Öffnet die Villa Luisa.", loot: "High-Tier Wertsachen" },
        { name: "Villa Elena Garage Key", de: "Garage Elena", loc: "Midnight Sapphire", effect: "Öffnet die Garage von Villa Elena.", loot: "Waffen-Koffer, Schrott" },

        // ==========================================
        // --- TIGER BAY ---
        // ==========================================
        { name: "Cement Factory Storage Key", de: "Zementfabrik-Lager", loc: "Tiger Bay", effect: "Öffnet das Lager in der Fabrik.", loot: "Baumaterial, Werkzeuge" },
        { name: "Tiger Bay Central Armory Key", de: "TB Zentrale Waffenkammer", loc: "Tiger Bay", effect: "Öffnet die Haupt-Waffenkammer.", loot: "Massive Waffen- & Munitionsmengen" },
        { name: "Improvised Bandit Lookout Key", de: "Banditen-Ausguck", loc: "Tiger Bay", effect: "Öffnet einen verschlossenen Sniper-Spot.", loot: "Scharfschützengewehre, Optiken" },
        { name: "Toto Hardware Storage Key", de: "Toto Baumarkt-Lager", loc: "Tiger Bay", effect: "Öffnet das Lager des Baumarkts.", loot: "Werkzeuge (Toolsets)" },
        { name: "Tiger Bay Trade Depot Office Key", de: "Handelsdepot-Büro", loc: "Tiger Bay", effect: "Öffnet das Depotbüro.", loot: "Geldkästen, Intel" },
        { name: "Pier Storage Key", de: "Pier Lagerhaus", loc: "Tiger Bay", effect: "Öffnet das Lagerhaus direkt am Pier.", loot: "Waffen-Kisten, Aufsätze" },
        { name: "Tiger Bay Outskirts Garage Key", de: "TB Randgebiet-Garage", loc: "Tiger Bay", effect: "Öffnet eine Garage im Außenbereich.", loot: "Fahrzeugteile" },
        { name: "UNLRA Equipment Container Key", de: "UNLRA Ausrüstungscontainer", loc: "Tiger Bay", effect: "Öffnet einen Container im Flüchtlingslager.", loot: "Rucksäcke, Westen" },
        { name: "UNLRA Quarantine Key", de: "UNLRA Quarantäne", loc: "Tiger Bay", effect: "Öffnet die Isolationsstation.", loot: "Medizinische High-Tier Güter, Task-Items" },
        { name: "UNLRA Medical Container Key", de: "UNLRA Medizincontainer", loc: "Tiger Bay", effect: "Öffnet den Sanitäts-Container.", loot: "IFAKs, Surkits, Stims" },
        { name: "House by the Pond Key", de: "Haus am Teich", loc: "Tiger Bay", effect: "Öffnet ein spezifisches Haus am Wasser.", loot: "Ziviler Loot, Wertsachen" },

        // ==========================================
        // --- LAMANG ISLAND (Allgemeine POIs / Dörfer) ---
        // ==========================================
        { name: "Villa Vongphet Room Key", de: "Villa Vongphet Zimmer", loc: "Lamang Island", effect: "Öffnet ein Zimmer in Villa Vongphet.", loot: "Safe, Schmuck" },
        { name: "Sunset Chalet Firearms Case Key", de: "Sunset Chalet Waffenkoffer", loc: "Lamang Island", effect: "Öffnet einen bestimmten Waffenkoffer.", loot: "High-Tier Waffe" },
        { name: "Fanny Paradise Office Key", de: "Fanny Paradise Büro", loc: "Lamang Island", effect: "Öffnet das Büro im Fanny Paradise.", loot: "Intel, Bargeld" },
        { name: "Small Marketplace House Key", de: "Marktplatz-Haus", loc: "Lamang Island", effect: "Öffnet ein kleines Haus am lokalen Markt.", loot: "Provisions" },
        { name: "School Room Key", de: "Klassenzimmer-Schlüssel", loc: "Lamang Island", effect: "Öffnet einen Raum in der verlassenen Schule.", loot: "Rucksäcke, Elektronik" },
        { name: "Inthavong Farm Shed Key", de: "Inthavong Farmschuppen", loc: "Inthavong", effect: "Öffnet den Schuppen der Farm.", loot: "Werkzeuge" },
        { name: "Hidden Fields 03 Hut Key", de: "Hidden Fields Hütte 03", loc: "Hidden Fields", effect: "Öffnet Hütte 03.", loot: "Schmuggelware, Drogen" },
        { name: "Hidden Fields 02 Hut Key", de: "Hidden Fields Hütte 02", loc: "Hidden Fields", effect: "Öffnet Hütte 02.", loot: "Waffen, Munition" },
        { name: "Phouarun Restaurant Attic Room Key", de: "Phouarun Restaurant Dachboden", loc: "Phouarun", effect: "Öffnet den Dachbodenraum.", loot: "Versteckte Kisten, Intel" },
        { name: "Phousai Village House Key", de: "Phousai Dorfhaus", loc: "Phousai", effect: "Öffnet ein verschlossenes Haus im Dorf.", loot: "Provisions, Wertsachen" },
        { name: "LAF Radio Tower Room Key", de: "LAF Funkturm-Raum", loc: "Lamang Island", effect: "Öffnet den Raum unter dem Funkturm.", loot: "Militärische Kommunikation, Aufsätze" },
        { name: "Khonwan Village House Key", de: "Khonwan Dorfhaus", loc: "Khonwan", effect: "Öffnet ein Gebäude in Khonwan.", loot: "Kleidung, einfache Waffen" },
        { name: "Khamhao Rice Depot Room Key", de: "Khamhao Reisdepot", loc: "Khamhao", effect: "Öffnet einen Raum im Reisdepot.", loot: "Große Mengen Nahrung, Geld" },
        { name: "Dongphou Hiking Camp Cottage Key", de: "Dongphou Wander-Hütte", loc: "Dongphou", effect: "Öffnet die Wanderhütte.", loot: "Zeltbedarf, Rucksäcke" },
        { name: "Construction Site Storage Key", de: "Baustellen-Lager", loc: "Lamang Island", effect: "Öffnet den Baucontainer.", loot: "Baumaterial (Nägel, Tape), Werkzeuge" },
        { name: "Ban Khamphet House Key", de: "Ban Khamphet Haus", loc: "Ban Khamphet", effect: "Öffnet ein Haus im Dorf Ban Khamphet.", loot: "Provisions" },
        { name: "Ban Phouphienge Room Key", de: "Ban Phouphienge Zimmer", loc: "Ban Phouphienge", effect: "Öffnet ein privates Zimmer.", loot: "Wertsachen, Tresor" },
        { name: "Siang Radio Station Room Key", de: "Siang Radiostation", loc: "Lamang Island", effect: "Öffnet einen Technikraum der Radiostation.", loot: "Elektronik, Kabel" },
    
        // ==========================================
        // --- Ergänzung Keys Spearhead - Update 0.4 ---
        // ==========================================
        { name: "Fort Narith Jail Key", de: "FN Gefängnisschlüssel", loc: "Fort Narith Jail", effect: "Öffnet Zellenblock-Bereiche.", loot: "AK-308 Blueprint (hinter kickbarer Tür)" },
        { name: "Tiger Bay Mall Key (TB-Mall-Key)", de: "TB Einkaufszentrum Schlüssel", loc: "Tiger Bay Mall", effect: "Öffnet den Hinterraum der Buchhandlung.", loot: "SVD Dragunov Blueprint" },
        { name: "Viper's Car Key", de: "Vipers Autoschlüssel", loc: "Pha Lang Airfield", effect: "Öffnet den Wagen am Fluss für die 'Like a Boss' Quest.", loot: "Intel für Vulture" },
        { name: "Ransacked Tourist Shelter Key", de: "Touristenunterkunft Schlüssel", loc: "Ransacked Shelter (188, 130)", effect: "Öffnet den Hauptraum der Unterkunft.", loot: "MP7A2 Blueprint" },
        { name: "Remote Campsite Key", de: "Entlegenes Lager Schlüssel", loc: "Südlich YBL-1 (149, 111)", effect: "Öffnet die verschlossene Kiste am Flusslager.", loot: "Mossberg 590 Blueprint" }
    ];
    
// ==============================================================
// 7. LOOT DATENBANK (UPDATE 0.4 SPEARHEAD - INKL. QUEST ITEMS)
// TIPP: ⚠️ Markiert Items, die zwingend für Quests oder Verträge gesammelt werden müssen!
// ==============================================================
const valuables = {
    // ==========================================
    // --- 💎 HIGH-END & JACKPOTS ---
    // ==========================================
    "ltsd_laser_designator": { price: "~ $60.000", slots: "2", info: "Das wertvollste Item im Spiel! Gefunden u.a. in Tiger Bay oder auf dem Hoteldach." },
    "moutai_alcohol": { price: "~ $15.000", slots: "1", info: "Extrem wertvoller Alkohol. Ein absoluter Jackpot-Fund für nur einen Slot!" },
    "pearl_earrings": { price: "~ $3.500", slots: "1", info: "Sehr lukrativer 1-Slot Gegenstand. Perfekt für den Secure Container." },
    
    // ==========================================
    // --- 💍 SCHMUCK & WERTSACHEN ---
    // ==========================================
    "gold_phone": { price: "~ $800", slots: "1", info: "Sehr seltener Fund. Eines der besten Items im Spiel für 1 Slot." },
    "diamond_ring": { price: "~ $600 - $800", slots: "1", info: "Spawnt häufig in Tresoren und Schmuckkästchen. Turncoat zahlt gut!" },
    "gold_watch": { price: "~ $500", slots: "1", info: "Sehr lukrativ. Unbedingt im Secure Container sichern!" },
    "gold_coin": { price: "~ $350", slots: "1", info: "Ein perfekter Lückenfüller für deinen Rucksack." },
    "gold_chain": { price: "~ $150", slots: "1", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Für Banshee und die Vulture-Boss-Freischaltung sammeln!). Ansonsten an Turncoat." },
    "silver_coin": { price: "~ $150", slots: "1", info: "Immer mitnehmen, solange Platz ist." },
    "pocket_watch": { price: "~ $120", slots: "1", info: "Häufig bei toten Scavs zu finden." },
    "silver_chain": { price: "~ $100", slots: "1", info: "Gut, um einzelne leere Slots im Rucksack aufzufüllen." },

    // ==========================================
    // --- 💻 ELEKTRONIK & TECHNIK ---
    // ==========================================
    "military_radio": { price: "~ $800", slots: "2", info: "Gute Ausbeute. Findet man oft in Militärgebieten oder Garagen (z.B. Fort Narith)." },
    "rt97s": { price: "~ $675", slots: "6", info: "Achtung: Nimmt 6 Slots ein! Sehr ineffizient für den reinen Slot-Wert, am besten liegen lassen." },
    "gpu": { price: "~ $450", slots: "4 (2x2)", info: "Hoher Wert, frisst aber massiv Platz. Lab Rat zahlt hier am besten." },
    "laptop": { price: "~ $400", slots: "4 (2x2)", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Du brauchst mind. 2 Stück für Mid-Game Quests). Ansonsten an Lab Rat." },
    "tablet": { price: "~ $300", slots: "2", info: "Guter Elektronik-Wert. Oft in Büros und dem Hotel auf Tischen zu finden." },
    "slr_camera": { price: "~ $200", slots: "2", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Banshee verlangt 2 Stück). Viel wertvoller als die digitalen!" },
    "smartphone": { price: "~ $150", slots: "1", info: "Guter Standard-Loot, oft auf Schreibtischen." },
    "digital_camera": { price: "~ $120", slots: "1", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Banshee verlangt 2 blaue und 2 schwarze Modelle für Aufklärung). Nicht sofort verkaufen!" },
    "hdd": { price: "~ $100", slots: "2", info: "Lohnt sich auf Dauer, da sie sehr häufig an PCs spawnen." },
    "voice_recorder": { price: "~ $110", slots: "1", info: "Solider Elektronik-Wert für nur einen Slot." },

    // ==========================================
    // --- 📁 DOKUMENTE & INTEL ---
    // ==========================================
    "weapon_blueprint": { price: "Unbezahlbar", slots: "1-2", info: "⚠️ WIRD FÜR TASKS BENÖTIGT. Schaltet 0.4 Waffen dauerhaft beim Händler frei. Niemals verkaufen!" },
    "class_docs": { price: "~ $500", slots: "2 (Horizontal)", info: "Wichtige Geheimdokumente, bringen sehr gutes Geld (Handshake zahlt Premium)." },
    "usb_drive": { price: "~ $450", slots: "1", info: "⚠️ WIRD FÜR TASKS BENÖTIGT. Oft für Handshake-Intel-Missionen gesammelt." },
    "intel_folder": { price: "~ $300", slots: "2", info: "⚠️ WIRD FÜR TASKS BENÖTIGT. Oft in feindlichen Basen und HQs zu finden." },
    "passport": { price: "~ $120", slots: "1", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Banshee braucht 2 Stück für seine Schmuggel-Tasks). Schwer zu finden!" },
    "credit_card": { price: "~ $150", slots: "1", info: "Artisan zahlt Bestpreise für Kreditkarten. Passt perfekt in dein Wallet." },
    "wallet": { price: "~ $50 - $200", slots: "1", info: "0.4 MECHANIK: Packe es in deinen Secure Container! Es hält 4 kleine Slots (Karten, Geld, Pässe)." },

    // ==========================================
    // --- 🔧 WERKZEUGE, MATERIAL & VERBRAUCHSGÜTER ---
    // ==========================================
    "acetylene_cylinder": { price: "~ $150", slots: "4", info: "⚠️ WIRD FÜR TASKS BENÖTIGT. Achtung: Wiegt massive 15kg! Extrem selten, sofort sichern wenn gefunden." },
    "lithium_grease": { price: "~ $80", slots: "1", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Wird u.a. an Baustellen wie bei Tiger Bay verlangt)." },
    "low_grade_gunpowder": { price: "~ $60", slots: "1", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Gunny verlangt oft 2 Stück davon)." },
    "weapon_parts": { price: "~ $50", slots: "1-2", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Defekte Waffenteile unter 50% für Artisan Maintenance Contracts sammeln)." },
    "mre_ration": { price: "~ $30", slots: "2", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Handshake Daily Contracts verlangen oft 3 MRE Rationen)." },

    // ==========================================
    // --- 🧪 CHEMIKALIEN & MEDIZIN ---
    // ==========================================
    "sulfuric_acid": { price: "~ $120", slots: "2", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Säureflaschen für Lab Rat! Spawnen oft bei Gegnern nahe Villa Vongphet & Sabai Lake)." },
    "water_samples": { price: "~ $100", slots: "1", info: "⚠️ WIRD FÜR TASKS BENÖTIGT (Lab Rat Biohazard Contracts aus den neuen 0.4 Sumpfgebieten)." },
    
    // ==========================================
    // --- 🗑️ SONSTIGES & TRASH (Low Value) ---
    // ==========================================
    "vintage_alcohol": { price: "~ $250", slots: "2", info: "Gunny kauft Vintage-Alkohol zu Top-Preisen." },
    "antique_vase": { price: "~ $200", slots: "4 (2x2)", info: "Sieht wertvoll aus, nimmt aber viel zu viel Platz weg. Eher ineffizient." },
    "wood_statue": { price: "~ $150", slots: "2", info: "Häufig in Ban Pa oder Blue Lagoon." },
    "fancy_cigarettes": { price: "~ $85", slots: "1", info: "Viel besser als normale Zigaretten. Gunny liebt sie." },
    "sunglasses": { price: "~ $60", slots: "1", info: "Netter Lückenfüller für 1 Slot. Oft auf Tischen oder in Cafés zu finden." },
    "zippo_lighter": { price: "~ $27", slots: "1", info: "Das Minimum, was du mitnehmen solltest." },
    "hand_mirror": { price: "~ $10", slots: "1", info: "Absoluter Müll, bricht einem das Herz. Lohnt sich überhaupt nicht zum Mitnehmen." },
    "toilet_paper": { price: "~ $10", slots: "4 (2x2)", info: "Der schlechteste Slot-Wert im Spiel. Liegen lassen!" },
    "matches": { price: "~ $5", slots: "1", info: "Niemals looten!" }
};
    
// ==========================================
// 8. STASH & CONTAINER DATENBANK (0.4 SPEARHEAD)
// ==========================================
const containers = {
    // --- SECURE CONTAINERS ---
    "secure_2x2": { 
        name: "Safe Lock Box (2x2) (Safe Lock Box)", 
        size: "4 Slots intern", 
        source: "Standard Edition / Artisan Level 1", 
        info: "<b>Wofür:</b> Basis-Schutz für Wertsachen und Schlüssel.<br><b>Kosten:</b> ~ $10.000<br><b>Kaufempfehlung:</b> Dein Start-Container. Bietet Platz für 1 Wallet, 1 Key Holder und kleine Meds." 
    },
    "admin_pouch": { 
        name: "Admin Tasche (2x3) (Admin Pouch)", 
        size: "6 Slots intern", 
        source: "Tactical Edition / Artisan Level 2", 
        info: "<b>Wofür:</b> Mittlerer Secure Container.<br><b>Kosten:</b> ~ $35.000<br><b>Kaufempfehlung:</b> Teuer, aber wichtiges Upgrade für Standard-Spieler, um z.B. ein OP-Kit (Surg Kit) verlustfrei mitzunehmen." 
    },
    "secure_3x3": { 
        name: "TAS Schließfach (3x3) (TAS Lockbox)", 
        size: "9 Slots intern", 
        source: "Elite & Supporter Edition / Artisan Level 4", 
        info: "<b>Wofür:</b> Maximaler Schutz für dicken Loot.<br><b>Kosten:</b> ~ $150.000<br><b>Kaufempfehlung:</b> Das ultimative Endgame-Ziel. Absoluter Luxus für schwere Quests und teuren Loot." 
    },

    // --- STASH CASES (Lagerkisten im Basecamp) ---
    "muxxum_rifle": { 
        name: "Muxxum Waffenkoffer (Muxxum Rifle Case)", 
        size: "96 Slots intern", 
        source: "Gunny Level 4", 
        info: "<b>Wofür:</b> Ausschließlich für Schusswaffen.<br><b>Kosten:</b> ~ $105.000<br><b>Kaufempfehlung:</b> <b>Pflichtkauf!</b> Hinweis: Sehr lange Waffen (SVD / M16) passen oft nicht aufrecht. Nimm Magazin und Griff ab, dann sind die Waffen nur 1 Slot breit!" 
    },
    "harde_case": { 
        name: "HARDE-Kiste (HARDE Case)", 
        size: "60 Slots intern", 
        source: "Gunny Level 3", 
        info: "<b>Wofür:</b> Ausschließlich für Schusswaffen.<br><b>Kosten:</b> ~ $77.000<br><b>Kaufempfehlung:</b> <b>Pflichtkauf!</b> Hinweis: Sehr lange Waffen (SVD / M16) passen oft nicht aufrecht. Nimm Magazin und Griff ab, dann sind die Waffen nur 1 Slot breit!" 
    },
    "parts_case": { 
        name: "Waffenteilkiste (Weapon Parts Case)", 
        size: "42 Slots intern", 
        source: "Gunny Level 3", 
        info: "<b>Wofür:</b> Visiere, Griffe, Schalldämpfer und Schäfte.<br><b>Kosten:</b> ~ $60.000<br><b>Kaufempfehlung:</b> Sehr nützlich, wenn du gerne teure Scopes und Attachments hortest." 
    },
    "ammo_box": { 
        name: "Metal-Munitionskiste (Metal Ammo Box)", 
        size: "Nimmt 4 Slots ein, massiver Innenraum", 
        source: "Turncoat Level 2", 
        info: "<b>Wofür:</b> Munitionskiste für lose Patronen.<br><b>Kosten:</b> ~ $60.300<br><b>Kaufempfehlung:</b> Mindestens 2 Stück kaufen! Spart extrem viel Platz." 
    },
    "mmammo_box": { 
        name: "MM-Munitionskiste (MM Ammo Box)", 
        size: "Nimmt 6 Slots ein, massiver Innenraum", 
        source: "Turncoat Level 4", 
        info: "<b>Wofür:</b> Munitionskiste für lose Patronen.<br><b>Kosten:</b> ~ $45.000<br><b>Kaufempfehlung:</b> Mindestens 2 Stück kaufen! Spart extrem viel Platz." 
    },
    "grenade_box": { 
        name: "Handgranatenkoffer (Hand Grenade Storage Box)", 
        size: "Nimmt 6 Slots ein, fasst 20 Granaten", 
        source: "Turncoat Level 3", 
        info: "<b>Wofür:</b> Granatenkoffer für alle Sprengstoff Enthusiasten.<br><b>Kosten:</b> ~ $75.500<br><b>Kaufempfehlung:</b> Wer viel und gerne mit Granaten spielt sollte sich 1-2 Stück kaufen." 
    },
    "mag_crate": { 
        name: "Magazinkiste (Magazine Crate)", 
        size: "Großes Raster für Magazine", 
        source: "Gunny Level 3", 
        info: "<b>Wofür:</b> Leere und geladene Waffenmagazine.<br><b>Kosten:</b> ~ $55.000<br><b>Kaufempfehlung:</b> Sehr wichtig, um das Chaos im Inventar zu besiegen." 
    },
    "truncase": { 
        name: "IV-Schutzkoffer (IV Truncase)", 
        size: "Riesiges Raster für Rüstung & Rucksäcke", 
        source: "Artisan Level 2", 
        info: "<b>Wofür:</b> Helme, Westen, Rigs, Gürtel und Rucksäcke.<br><b>Kosten:</b> ~ $61.700<br><b>Kaufempfehlung:</b> <b>Top!</b> Achtung: Du kannst keinen Rucksack hineinlegen, wenn sich in dem Rucksack eine Waffe befindet!" 
    },
    "first_aid_case": { 
        name: "Erste-Hilfe-Koffer (First Aid Case)", 
        size: "Großes Raster für Medizin", 
        source: "Lab Rat Level 2", 
        info: "<b>Wofür:</b> OP-Kits, Blutbeutel, Bandagen.<br><b>Kosten:</b> ~ $40.000<br><b>Kaufempfehlung:</b> Sehr wichtiges Mid-Game Upgrade." 
    },
    "cooler_case": { 
        name: "Kühlbox / Proviantkiste (Personal Cooler)", 
        size: "Großes Raster für Essen/Trinken", 
        source: "Artisan Level 2", 
        info: "<b>Wofür:</b> Getränke, Rationen und Snacks.<br><b>Kosten:</b> ~ $60.200<br><b>Kaufempfehlung:</b> Gut, um MREs und Wasser auf Vorrat zu halten." 
    },
    "huge_key_case": { 
        name: "Großer Schlüsselkoffer (Huge Key Case)", 
        size: "Nimmt 3 Slots ein, bietet Platz für 30 Keys", 
        source: "Banshee Level 3", 
        info: "<b>Wofür:</b> Lagerung ALLER Schlüssel, die du nicht im Raid brauchst.<br><b>Kosten:</b> ~ $65.000<br><b>Kaufempfehlung:</b> Sehr praktisch für Sammler, denen der kleine Key Holder im Stash nicht reicht." 
    },
    "mortar_case": { 
        name: "Mörser-Kiste (Mortar Round Case)", 
        size: "Spezialraster für Sprengmittel", 
        source: "Gunny Level 3", 
        info: "<b>Wofür:</b> Mörsergranaten.<br><b>Kosten:</b> ~ $75.000<br><b>Kaufempfehlung:</b> <b>Finger weg!</b> Kostet 75k und spart effektiv nur mickrige 5 Slots. Absolute Geldverschwendung." 
    },
    "small_safe": { 
        name: "Kleiner Tresor (Small Safe)", 
        size: "24 Slots intern", 
        source: "Vulture Level 3", 
        info: "<b>Wofür:</b> Bargeld und High-Value Loot (Gold, Diamanten).<br><b>Kosten:</b> ~ $75.000<br><b>Kaufempfehlung:</b> Nette Spielerei, aber Bargeld nimmt viel weniger Platz weg als das Loot selbst. Besser direkt verkaufen." 
    },
    "large_safe": { 
        name: "Großer Tresor (Large Safe)", 
        size: "108 Slots intern", 
        source: "Vulture Level 4", 
        info: "<b>Wofür:</b> Der ultimative Geldtresor.<br><b>Kosten:</b> ~ $105.000<br><b>Kaufempfehlung:</b> Reiner Endgame-Flex für Spieler mit Millionen auf dem Konto." 
    },
    "desk": { 
        name: "Verwaltungstisch (Administrative desk)", 
        size: "210 Slots", 
        source: "Artisan Level 3", 
        info: "<b>Wofür:</b> Aufbewahrung von großen Dokumentenmengen.<br><b>Kosten:</b> ~ $89.500<br><b>Kaufempfehlung:</b> Wer Spaß am Sammeln von allen Dokumenten hat und mehr der Lore verstehen will sollte die Kiste kaufen." 
    },

    // --- MICRO-CONTAINER & POUCHES (Für den Raid) ---
    "wallet": { 
        name: "Geldbörse (Tactical Wallet)", 
        size: "Nimmt 1 Slot ein, bietet 4 interne Slots", 
        source: "Artisan Level 1", 
        info: "<b>Wofür:</b> Bargeld, Kreditkarten und Pässe.<br><b>Kosten:</b> ~ $3.500<br><b>Kaufempfehlung:</b> <b>Absolutes Must-Have!</b> Gehört sofort in deine Secure Pouch." 
    },
    "key_holder": { 
        name: "Lederschlüsselhalter (Key Holder / Leather Key)", 
        size: "Nimmt 1 Slot ein, fasst viele Schlüssel", 
        source: "Artisan Level 2", 
        info: "<b>Wofür:</b> Raumschlüssel und Zugangskarten.<br><b>Kosten:</b> ~ $4.500<br><b>Kaufempfehlung:</b> <b>Must-Have!</b> Sichern, um Schlüssel beim Tod nicht zu verlieren." 
    },
    "key_case": { 
        name: "Schlüsseltasche (Key Case)", 
        size: "Nimmt 2 Slots ein, fasst sehr viele Schlüssel", 
        source: "Artisan Level 3", 
        info: "<b>Wofür:</b> Raumschlüssel und Zugangskarten.<br><b>Kosten:</b> ~ $6.000<br><b>Kaufempfehlung:</b> <b>Must-Have!</b> Sichern, um Schlüssel beim Tod nicht zu verlieren." 
    },
    "injector_case": { 
        name: "Injektoren-Etui (Injector Case / Stim Pouch)", 
        size: "9 Slots intern für Injektoren", 
        source: "Lab Rat Level 4", 
        info: "<b>Wofür:</b> Aufbewahrung von Adrenalin, Morphin und anderen Stims.<br><b>Kosten:</b> Variiert<br><b>Kaufempfehlung:</b> Ein starkes Endgame-Item, um massiv Platz im Container oder Belt zu sparen." 
    },
    "admin_bag": { 
        name: "Verwaltungstasche (Administration Bag)", 
        size: "Nimmt 2 Slots ein, fasst 6 Slots", 
        source: "Artisan Level 2", 
        info: "<b>Wofür:</b> Aufbewahrung von Dokumenten, Karten,Schlüssel und Geld.<br><b>Kosten:</b> ~ $75.900<br><b>Kaufempfehlung:</b> Kann man Kaufen, muss man aber nicht, bleibt euch überlassen." 
    },
    "kombat_folder": { 
        name: "Kombat-Ordner (Kombat Folder)", 
        size: "Nimmt 4 Slots ein, fasst 16 Slots", 
        source: "Artisan Level 3", 
        info: "<b>Wofür:</b> Aufbewahrung von Dokumenten, Karten,Schlüssel und Geld.<br><b>Kosten:</b> ~ $75.400<br><b>Kaufempfehlung:</b> Kann man Kaufen, muss man aber nicht, bleibt euch überlassen. Auf jedenfall besser als die Verwaltungstasche." 
    },
    "hfak": { 
        name: "Hartschalen-Erste-Hilfe-Set (Hard Case First Aid Kit)", 
        size: "1x2 Slot", 
        source: "Lab Rat Level 1", 
        info: "<b>Wofür:</b> Kleine Medizintasche für den Gürtel.<br><b>Kosten:</b> ~ $90<br><b>Kaufempfehlung:</b> Kann man sehr oft finden." 
    },
    "mfak": { 
        name: "Mini-Erste-Hilfe-Set (Mini First Aid Kit)", 
        size: "1x3 Slot", 
        source: "Lab Rat Level 2", 
        info: "<b>Wofür:</b> Kleine Medizintasche für den Gürtel.<br><b>Kosten:</b> ~ $200<br><b>Kaufempfehlung:</b> Günstig, hilft am Anfang." 
    },
    "qfak": { 
        name: "Schnellverschluss-Erste-Hilfe-Set (Quick Release First Aid Kit)", 
        size: "2x3 Slots", 
        source: "Lab Rat Level 3", 
        info: "<b>Wofür:</b> Mittlere Med-Pouch.<br><b>Kosten:</b> ~ $320<br><b>Kaufempfehlung:</b> Sehr effizient auf dem Tactical Belt." 
    },
    "emt": { 
        name: "EMT (RIP-AWAY EMT POUCH)", 
        size: "3x3 Slots", 
        source: "Lab Rat Level 4", 
        info: "<b>Wofür:</b> Große Sanitätstasche für den Rucksack.<br><b>Kosten:</b> ~ $000<br><b>Kaufempfehlung:</b> Ideal für Squad-Medics." 
    },

    // --- STASH-ERWEITERUNGEN ---
    "locker_upgrades": { 
        name: "Locker-Erweiterungen (Locker Expansions)", 
        size: "Dauerhafte Stash-Vergrößerung", 
        source: "Quests & Spielerlevel", 
        info: "<b>Wofür:</b> Vergrößert dauerhaft dein Basecamp-Schließfach.<br><b>Kosten:</b> Kostenlos durch Fortschritt.<br><b>Wann:</b> Handshake/Turncoat Quests UND automatisch bei Spielerlevel 20, 30, 40, 50." 
    }
};
    
// ==========================================
// 14. LANDEZONEN & NAVIGATION (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const lzDb = {
    // --- STARTGEBIETE (Safe Zones) ---
    "lz_alpha": { 
        name: "Nam Thaven (Mithras)", 
        lzs: "Alpha 1, Alpha 2, Alpha 3", 
        danger: "Gering (Low)", 
        tip: "Das Startgebiet für Mithras-Operator. Sehr sicher. LZ Alpha 3 ist perfekt, um das östliche Reisfeld ohne KI-Kontakt zu durchqueren." 
    },
    "lz_bravo": { 
        name: "Pha Lang (LRI)", 
        lzs: "Bravo 1, Bravo 2, Bravo 3", 
        danger: "Gering (Low)", 
        tip: "Startgebiet der LRI. Gute Deckung durch den dichten Dschungel direkt an den Landezonen. Ideal für Solo-Neulinge." 
    },
    "lz_charlie": { 
        name: "Kiu Vongsa (Crimson)", 
        lzs: "Charlie 1, Charlie 2, Charlie 3", 
        danger: "Gering (Low)", 
        tip: "Crimson Startgebiet. Die LZs liegen recht offen. Achte auf KI-Sniper, die sich in den Randgebäuden des Dorfes verstecken." 
    },

    // --- MID-GAME POIs ---
    "lz_echo": { 
        name: "Sägewerk (Lumber Yard)", 
        lzs: "Echo 1, Echo 2", 
        danger: "Mittel (Medium)", 
        tip: "Echo 1 liegt gefährlich nah am Hauptlager und wird oft von KIs gepusht. Echo 2 bietet einen deutlich sichereren Anmarsch durch den Wald." 
    },
    "lz_foxtrot": { 
        name: "Hunter's Paradise", 
        lzs: "Foxtrot 1, Foxtrot 2", 
        danger: "Mittel-Hoch (PvP Hotspot)", 
        tip: "Foxtrot 1 bietet extrem schnellen Zugang zum Schießstand, wird aber im PvP sehr oft von gegnerischen Fraktionen belagert (LZ-Camping)!" 
    },
    "lz_india": { 
        name: "Fischerdorf (Ban Pa)", 
        lzs: "India 1, India 2", 
        danger: "Mittel-Hoch (Medium-High)", 
        tip: "LZ India 1 liegt extrem gefährlich direkt neben den Hütten. Nutze India 2 für einen getarnten Vorstoß durch den Sumpf." 
    },
    "lz_kilo": { 
        name: "Blaue Lagune (Blue Lagoon)", 
        lzs: "Kilo 1, Kilo 2", 
        danger: "Mittel-Hoch (Medium-High)", 
        tip: "Wenig Deckung bei Kilo 1. Kilo 2 ist taktisch klüger, um das Restaurant von der bewaldeten Südseite aus anzugreifen." 
    },

    // --- END-GAME POIs (High Danger) ---
    "lz_juliet": { 
        name: "YBL-1 Bunker", 
        lzs: "Juliet 1, Juliet 2", 
        danger: "Hoch (High)", 
        tip: "Bereite dich sofort nach der Landung auf Gegenwehr vor. Juliet 2 eignet sich hervorragend, um die Hintereingänge des Bunkers zu flankieren." 
    },
    "lz_delta": { 
        name: "Fort Narith (Militärbasis)", 
        lzs: "Delta 1, Delta 2, Delta 3", 
        danger: "Extrem (Extreme)", 
        tip: "⚠️ 0.4 UPDATE: Das Gebiet wird nun sporadisch mit Mörsern (Mortar Strikes) beschossen! Delta 3 ist Selbstmord, wenn du nicht sofort in Deckung sprintest." 
    },
    "lz_hotel": { 
        name: "Midnight Sapphire", 
        lzs: "Hotel 1, Hotel 2, Hotel 3", 
        danger: "Extrem (Extreme)", 
        tip: "Hotel 1 führt dich in die Nähe der Villen (Millionärs-Run). Hotel 2 über den Golfplatz. Beide LZs sind von tödlichen Scharfschützen umgeben." 
    },
    "lz_lima": { 
        name: "Tiger Bay (Großstadt)", 
        lzs: "Lima 1, Lima 2", 
        danger: "Absolutes Maximum (Insane)", 
        tip: "Die gefährlichste Zone im Spiel. KIs stürmen den Heli oft schon beim Landen. Nutze dichten Rauch (Smoke Grenades) direkt beim Aussteigen!" 
    },
    "lz_golf": { 
        name: "Ground Zero", 
        lzs: "Golf 1, Golf 2", 
        danger: "Tödlich (Lethal - Radiation)", 
        tip: "Das Epizentrum. Extreme Radioaktivität! Ohne die neue Gasmaske und Anti-Strahlen-Medikation stirbst du hier innerhalb von Sekunden." 
    }
};

    // 10. SYMPTOME DATENBANK
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

    // 11. STATUS EFFECT DATENBANK
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

    function updateStatusEffect() {
        const val = document.getElementById('statusSelect').value;
        const infoDisplay = document.getElementById('statusInfo');
        const imgElement = document.getElementById('statusImg');
        
        if (val === "") {
            infoDisplay.innerHTML = "Wähle einen Effekt für Ursachen und Auswirkungen...";
            imgElement.src = "https://via.placeholder.com/150x150/222222/7ca35a?text=Status+Wählen";
        } else {
            const info = statusEffectsDb[val];
            infoDisplay.innerHTML = `
                <div style="margin-bottom: 8px;"><strong>Ursache:</strong> ${info.desc}</div>
                <div style="color: #ff4c4c; font-weight: bold; margin-bottom: 4px;">Auswirkung:</div>
                <div style="line-height: 1.4;">${info.effect}</div>
            `;
            imgElement.src = info.img;
        }
    }
    
// ==========================================
// TRADER DATABASE (UPDATE 0.4 SPEARHEAD)
// ==========================================
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
            <li><b>Waffen:</b> M16A1, verbesserte M4A1-Varianten</li>
            <li><b>Munition:</b> 5.56x45mm (M855A1, SOST), 9x19mm (JHP, +P)</li>
            <li><b>Visiere:</b> Elcan SpecterDR (1x/4x), ACOG (4x), verbesserte Holos</li>
            <li><b>Attachments:</b> KAC Schalldämpfer (5.56), Magpul CTR Stocks, 40-Schuss Magazine</li>
        </ul>`,
    "gunny_3": `<h3>Gunny Level 3</h3>
        <ul>
            <li><b>Waffen:</b> M4A1 SOPMOD (Voll aufgerüstet), High-End CQB Builds</li>
            <li><b>Munition:</b> 5.56x45mm (M995 AP, M856A1 Tracer)</li>
            <li><b>Visiere:</b> Vortex Razor HD Gen II (LPVO)</li>
            <li><b>Attachments:</b> 60-Schuss SureFire Magazine, PEQ-15 Laser/Licht-Module</li>
        </ul>`,
    "gunny_4": `<h3>Gunny Level 4 <span style="color:#ff4c4c;">[NEU 0.4]</span></h3>
        <ul>
            <li><b>Waffen:</b> DDM4 <span style="color:#7ca35a;">(Erfordert Blueprint-Unlock!)</span></li>
            <li><b>Munition:</b> 5.56x45mm SSA AP (Absolute Rüstungsbrecher)</li>
            <li><b>Attachments:</b> Die besten Ergonomie-Griffe und C-Clamp Handguards für minimalen Rückstoß</li>
            <li><b>Spezial:</b> Thermal-Hybride für westliche Waffensysteme</li>
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
            <li><b>Rüstung:</b> Level III Platten (Stahl/Keramik - <i>Achtung: Stahl erhöht Trägheit in 0.4!</i>), Ops-Core Helme</li>
            <li><b>Tragesysteme:</b> Taktische Plattenträger (Medium Kapazität)</li>
            <li><b>Rucksäcke:</b> Rush 24 (Medium), 3-Day Assault Packs</li>
            <li><b>Kopfhörer:</b> Basic ComTacs (verbessertes Gehör)</li>
        </ul>`,
    "handshake_3": `<h3>Handshake Level 3</h3>
        <ul>
            <li><b>Rüstung:</b> Level III+ / IV Platten (UHMWPE - extrem leicht, bestes Movement!)</li>
            <li><b>Tragesysteme:</b> Heavy Modular Rigs (Maximale Magazine)</li>
            <li><b>Rucksäcke:</b> Rush 72 (Groß), Operator Rucksäcke</li>
            <li><b>Zubehör:</b> High-End Aktivgehörschutz, Nachtsichtgeräte (NVG) Halterungen</li>
        </ul>`,
    "handshake_4": `<h3>Handshake Level 4 <span style="color:#ff4c4c;">[NEU 0.4]</span></h3>
        <ul>
            <li><b>Rüstung:</b> Level IV+ High-End Platten und schwere Schutzhelme mit ballistischem Visier</li>
            <li><b>Zubehör:</b> Beste Panoramische Nachtsichtgeräte (GPNVG-18)</li>
            <li><b>Spezial:</b> Exklusive Fraktions-Kosmetika und Westen für Squad-Leader</li>
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
            <li><b>Schmerzmittel:</b> Ibuprofen, Basis-Painkillers</li>
        </ul>`,
    "labrat_3": `<h3>Lab Rat Level 3</h3>
        <ul>
            <li><b>OP-Kits:</b> Große Surgery-Kits (mehrere Anwendungen, volle Organgesundheit)</li>
            <li><b>Stims:</b> Auto-Injektoren (schnelle Notfallheilung im Kampf)</li>
            <li><b>Verpflegung:</b> High-Energy Food für lange Raids</li>
        </ul>`,
    "labrat_4": `<h3>Lab Rat Level 4 <span style="color:#ff4c4c;">[NEU 0.4]</span></h3>
        <ul>
            <li><b>Spezial:</b> Strahlenschutz-Pillen und Toxin-Gegenmittel für die neuen Sumpf/Ground-Zero Gebiete</li>
            <li><b>Stims:</b> Combat-Stims für kurzzeitige Ausdauer-Boosts ("Unlimited Stamina Trick")</li>
            <li><b>Kits:</b> Elite-Feldsanitäter-Taschen</li>
        </ul>`,

    // --- ARTISAN (OST-BLOCK & CONTAINERS) ---
    "artisan_1": `<h3>Artisan Level 1 (Start)</h3>
        <ul>
            <li><b>Waffen:</b> AKMN, SKS, Type 56, Makarov Pistole</li>
            <li><b>Spezial:</b> Basis Secure Containers (2x2) <span style="color:#7ca35a;">[NEU 0.4]</span></li>
            <li><b>Visiere:</b> PSO-1 Scope (SKS), Basis Red-Dots (Cobra)</li>
            <li><b>Attachments:</b> Holzschäfte, Basis-Dämpfer (PBS-1)</li>
        </ul>`,
    "artisan_2": `<h3>Artisan Level 2</h3>
        <ul>
            <li><b>Waffen:</b> AK-74M, modernisierte SKS-Chassis</li>
            <li><b>Munition:</b> 5.45x39mm (PS, BT), 7.62x39mm (T-45M)</li>
            <li><b>Visiere:</b> OKP-7, Kobra EKP-8-02</li>
            <li><b>Attachments:</b> Zenitco PT-1 Stocks, B-33 Dust Cover, Hexagon Schalldämpfer</li>
        </ul>`,
    "artisan_3": `<h3>Artisan Level 3</h3>
        <ul>
            <li><b>Waffen:</b> SVD Dragunov <span style="color:#7ca35a;">(Erfordert Blueprint-Unlock!)</span></li>
            <li><b>Munition:</b> 5.45x39mm (BP, BS - Armor Piercing), 7.62x39mm (BP)</li>
            <li><b>Visiere:</b> Fortschrittliche russische Optiken</li>
            <li><b>Attachments:</b> 60-Schuss AK-Magazine, Perst-3 Laser, Zenitco Handguards</li>
        </ul>`,
    "artisan_4": `<h3>Artisan Level 4 <span style="color:#ff4c4c;">[NEU 0.4]</span></h3>
        <ul>
            <li><b>Waffen:</b> Modifizierte Mosins (z.B. mit Razor Scopes) und SKS mit MOE Stocks (Verkauft komplette Builds)</li>
            <li><b>Spezial:</b> Größere Secure Containers für dein Locker-Upgrade</li>
            <li><b>Attachments:</b> High-End Ost-Block Schalldämpfer und Griffe</li>
        </ul>`,

    // --- TURNCOAT (WESTERN / SNIPER / BAGS) ---
    "turncoat_1": `<h3>Turncoat Level 1</h3>
        <ul>
            <li><b>Waffen:</b> Remington 870 Shotgun, Basis-Zivilwaffen</li>
            <li><b>Quest-Items:</b> Bestimmte Werkzeuge und Barter-Items</li>
            <li><b>Attachments:</b> Standard-Shotgun Chokes</li>
        </ul>`,
    "turncoat_2": `<h3>Turncoat Level 2</h3>
        <ul>
            <li><b>Waffen:</b> M14 Battle Rifle, M700 Sniper Rifle</li>
            <li><b>Munition:</b> 7.62x51mm NATO (M80)</li>
            <li><b>Visiere:</b> Basis-Sniper-Scopes (Leupold)</li>
            <li><b>Attachments:</b> M14 Scope-Mounts, westliche Schalldämpfer für .308</li>
        </ul>`,
    "turncoat_3": `<h3>Turncoat Level 3</h3>
        <ul>
            <li><b>Waffen:</b> AICS Chassis für M700, EBR Chassis für M14</li>
            <li><b>Munition:</b> 7.62x51mm NATO (M61, M62 Tracer - durchschlägt Level 4!)</li>
            <li><b>Ausrüstung:</b> Type 2 Belts und die riesige 36-Slot "Delta Bag" <span style="color:#7ca35a;">[NEU 0.4]</span></li>
            <li><b>Visiere:</b> High-Power Scopes (Vudu, Nightforce)</li>
        </ul>`,
    "turncoat_4": `<h3>Turncoat Level 4 <span style="color:#ff4c4c;">[NEU 0.4]</span></h3>
        <ul>
            <li><b>Waffen:</b> M14 EBR <span style="color:#7ca35a;">(Erfordert Blueprint-Unlock!)</span>, voll modifizierte Sniper-Setups</li>
            <li><b>Munition:</b> M993 (.308 AP Munition)</li>
            <li><b>Attachments:</b> High-End Zweibeine (Bipods), extrem lange Sniper-Läufe für maximale Präzision</li>
        </ul>`,

    // --- BANSHEE (BLACK MARKET) ---
    "banshee_1": `<h3>Banshee Level 1</h3>
        <ul>
            <li><b>Schlüssel:</b> Seltene Raumschlüssel für frühe Quest-Gebiete</li>
            <li><b>Barter:</b> Tauscht High-Value Loot (Rolex, USB-Sticks) gegen Spezialausrüstung</li>
        </ul>`,
    "banshee_2": `<h3>Banshee Level 2</h3>
        <ul>
            <li><b>Waffen:</b> Laugo Alien Pistole (Extrem geringer Rückstoß!)</li>
            <li><b>Munition:</b> Spezielle 9mm AP-Munition für die Alien</li>
            <li><b>Spezial:</b> Keycards für Mid-Tier Zonen</li>
        </ul>`,
    "banshee_3": `<h3>Banshee Level 3</h3>
        <ul>
            <li><b>Waffen:</b> KS-1 Bullpup (Beste Ergonomie im Spiel!)</li>
            <li><b>Munition:</b> Seltene AP-Munitionstypen aller Kaliber</li>
            <li><b>Gear:</b> Wärmebildkameras (Thermals), Elite-Nachtsichtgeräte</li>
        </ul>`,
    "banshee_4": `<h3>Banshee Level 4 <span style="color:#ff4c4c;">[NEU 0.4]</span></h3>
        <ul>
            <li><b>Waffen:</b> MP7A2 <span style="color:#7ca35a;">(Erfordert Blueprint-Unlock!)</span>, MPX</li>
            <li><b>Munition:</b> 4.6x30mm AP (Rüstungsdurchschlag für MP7)</li>
            <li><b>Attachments:</b> MPX/MP7 Waffenteile, Razor Scopes & passende Scope-Rings</li>
        </ul>`,

    // --- VULTURE (SECRET VENDOR) ---
    "vulture_1": `<h3>Vulture <span style="color:#ff4c4c;">[SECRET VENDOR 0.4]</span></h3>
        <ul>
            <li><b>Waffen:</b> AK-308 <span style="color:#7ca35a;">(Erfordert Blueprint-Unlock im Jail!)</span>, Elite-Waffen der Lamang Warlords</li>
            <li><b>Freischaltung:</b> Verlangt das Abschließen einer Questreihe (Boss Viper am Pha Lang Airfield, Briefcase 9135 an der Farm).</li>
            <li><b>Standort:</b> Vulture ist ein rotierender Händler. Er befindet sich meist in extrem gefährlichen Endgame-Zonen (wie dem Fort Narith Medical Outpost).</li>
            <li><b>Angebot:</b> Sein Inventar rotiert und bietet oft Boss-Waffen (wie Vipers M1911 C) und einzigartige Munitionstypen gegen exklusive Barter-Items.</li>
        </ul>`
};

    // 13. FRAKTIONEN DATENBANK
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

    // ==========================================
// 11. CODES & PASSWÖRTER (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const codesDb = [
    // --- 0.4 SPEARHEAD (NEU) ---
    { name: "Kong Thab Depot Bunker (Kong Thab Bunker)", code: "Dynamisch", loc: "Kong Thab Depot", info: "Die Tür zum neuen Bunker erfordert ein Keypad. Der Code (z.B. 6867 oder 3412) generiert sich bei jedem Server-Neustart neu und liegt auf Notizzetteln im näheren Umkreis versteckt (Wichtig für die Quest 'Plan B')." },
    { name: "Na Xieng Farm (Farm Padlock)", code: "9135", loc: "Na Xieng (Mohnfelder / Poppy Fields)", info: "<b>Fester Code!</b> Schließt ein Vorhängeschloss auf, oft genutzt für die Vulture-Quest 'The New Contact' (0.4). Die Hinweise dazu liegen bei den Koordinaten 192,154 und 178,153." },

    // --- NAKASA VILLAGE & FORT NARITH (Das 5-Code-Rätsel) ---
    // ACHTUNG: Im Erdgeschoss des blauen Hauses in Nakasa (140, 134) liegen 5 Haftnotizen auf der Küchentheke. Diese Codes wechseln bei jedem Server-Neustart und öffnen die folgenden 5 Schlösser:
    { name: "Nakasa Obergeschoss (Nakasa Upper Floor Door)", code: "Dynamisch (5er Set)", loc: "Nakasa Village (Blaues Haus)", info: "Eine der 5 Haftnotizen aus der Küche im Erdgeschoss öffnet diese Keypad-Tür im oberen Stockwerk." },
    { name: "Nakasa Munitionskiste (Nakasa Ammo Box)", code: "Dynamisch (5er Set)", loc: "Nakasa Village (Holzhütte)", info: "Eine Kiste in der Holzhütte mit der Veranda neben dem blauen Haus. Der Code ist eine der 5 Notizen aus der Küche." },
    { name: "FN Müllplatz-Kiste (Dumping Ground Crate)", code: "Dynamisch (5er Set)", loc: "Nördlich von Fort Narith (Dumping Ground)", info: "Militärkiste auf dem Schrottplatz (nahe der Landezone). Der Code ist ebenfalls eine der 5 Notizen aus dem blauen Haus in Nakasa." },
    { name: "FN Garagen-Kiste (Garage Crate)", code: "Dynamisch (5er Set)", loc: "Bürogebäude gegenüber dem FN-Haupttor", info: "Militärkiste auf dem unteren Regal in der Garage (nördlich vom Motel). Code stammt aus der Nakasa-Küche." },
    { name: "Squad Mission Tür (Squad Mission Door)", code: "Dynamisch (5er Set)", loc: "Nakasa Village", info: "Der fünfte Code aus der Küche öffnet eine gesicherte Tür im Dorf für bestimmte Waffenkisten-Missionen." },
    
    // --- FORT NARITH (Weitere) ---
    { name: "Flugkontrollturm (Air Control Tower)", code: "9198", loc: "Fort Narith (Airfield)", info: "<b>Fester Code!</b> Der Code für den Tower findet sich auf einem Zettel im Serverraum A204 der Militärbaracken." },
    { name: "Static Echoes Tür (Static Echoes Door)", code: "Dynamisch (Oft 2063)", loc: "Nakasa Village (Obergeschoss)", info: "Nachdem du die erste Tür im Obergeschoss (mit dem Küchen-Code) geöffnet hast, liegt drinnen ein Buch mit dem Code für diese zweite Tür." },

    // --- HUNTER'S PARADISE & SAWMILL ---
    { name: "Alter Bunker (Old Bunker Padlock)", code: "Dynamisch", loc: "Hunter's Paradise", info: "Der Code steht auf einer leuchtend gelben Haftnotiz im Büro hinter der Waffenkammer, rechts an der Wand direkt neben der gefesselten Leiche." },
    { name: "Sägewerk Schuppen & Lager (Sawmill Padlocks)", code: "Dynamisch", loc: "Lumber Yard (Sawmill)", info: "Es gibt Vorhängeschlösser für den Schuppen, die Toilette und das Lagerhaus. Die Codes spawnen immer auf Zetteln in der direkten Umgebung." },

    // --- STARTGEBIETE (Starter Towns) & BAN PA ---
    { name: "Villa Elena Tresor (Villa Garage Safe)", code: "Dynamisch", loc: "Startstadt (Starter Town)", info: "Der Code für den Safe in der Garage liegt auf einem kleinen Notizblock auf dem Nachttisch im Schlafzimmer im Obergeschoss der Villa." },
    { name: "Rathaus Tresor (Town Hall Safe)", code: "Dynamisch", loc: "Startstadt (Starter Town)", info: "Der Code befindet sich auf einem Zettel direkt neben dem Schalter für das stadtweite Übertragungsradio." },
    { name: "Ban Suk Hütte (Ban Suk Door)", code: "8777", loc: "Ban Suk (Südöstliche Halbinsel)", info: "<b>Fester Code!</b> Steht in einem roten Buch auf einem Boot in der Nähe. <b>Pro-Tipp:</b> Du kannst das Schloss komplett umgehen, indem du einfach über das Bücherregal neben der Tür kletterst!" },

    // --- YBL-1 BUNKER & TIGER BAY ---
    { name: "Gefängniszelle & Lager (Prison Cell & Storage)", code: "Dynamisch", loc: "YBL-1 Bunker", info: "Die Codes für die Zelle und das Padlock-Lager im Bunker generieren sich dynamisch und sind in benachbarten Räumen auf Tischen versteckt." },
    { name: "UNLRA Hauptquartier (UNLRA HQ Keypad)", code: "Dynamisch", loc: "Tiger Bay", info: "Der Code für das Tastenfeld spawnt zufällig in der direkten Umgebung des UNLRA-Gebäudes (oft auf Schreibtischen)." }
];

// ==========================================
// 12. LOOT RUNS & FARMING ROUTEN (0.4 SPEARHEAD)
// ==========================================
const lootRoutesDb = [
    {
        id: "route_midnight",
        name: "Der Millionärs-Run (The Millionaire's Run)",
        location: "Midnight Sapphire (Hotel & Villen)",
        danger: "Hoch (High)",
        time: "~ 20-25 Minuten",
        requirements: "Wallet, Hotel/Villa Keys.",
        target: "Bargeld, Elektronik, M700 & SIG MCX Blueprint.",
        video: "https://www.youtube.com/watch?v=xoHA6eLkHSc",
        steps: [
            "<b>1. Landung:</b> LZ Hotel 1 oder 2.",
            "<b>2. Villen:</b> Tresore in Schlafzimmern und PCs in Büros looten.",
            "<b>3. Hotel EG:</b> Rechts hinten den <b>SIG MCX Blueprint</b> sichern.",
            "<b>4. Hotelzimmer:</b> Attachments und Wertsachen hinter verschlossenen Türen.",
            "<b>5. Dach:</b> Am Ende den <b>M700 Blueprint</b> und LTSD Laser finden."
        ],
        tip: "Verkaufe Schmuck an Turncoat (125%) und Elektronik an Lab Rat (125%)."
    },
    {
        id: "route_narith",
        name: "Die Waffenkammer (The Armory Run)",
        location: "Fort Narith (HQ & Baracken)",
        danger: "Extrem (Extreme)",
        time: "~ 30-35 Minuten",
        requirements: "Delta Backpack, Rüstung NIJ III+.",
        target: "Rüstung, AP-Munition, DDM4 & AK-308 Blueprint.",
        video: "https://www.youtube.com/watch?v=AIDko0yBmos",
        steps: [
            "<b>1. Landung:</b> LZ Delta 1/2. Achtung vor Mörserbeschuss!",
            "<b>2. Schrottplatz:</b> Militärkiste looten (Nakasa-Code nötig).",
            "<b>3. Baracken:</b> 2. Stock <b>DDM4 Blueprint</b>, Raum A204 Code holen.",
            "<b>4. Gefängnis:</b> In den Zellen-Gängen nach dem <b>AK-308 Blueprint</b> suchen.",
            "<b>5. Tower:</b> Code nutzen und Waffen-Racks am Airfield plündern."
        ],
        tip: "Nimm nur die teuren Attachments mit, um Platz für Rüstungen zu sparen."
    },
    {
        id: "route_tigerbay",
        name: "Das Urbane Chaos (The Urban Jungle)",
        location: "Tiger Bay (UNLRA & Mall)",
        danger: "Maximum (Insane)",
        time: "~ 40-50 Minuten",
        requirements: "Squad empfohlen, viel Munition, große Med-Kits.",
        target: "SVD Dragunov Blueprint, High-Tier Meds, UNLRA Intel.",
        video: "https://www.youtube.com/watch?v=6TaADu5-Fl4",
        steps: [
            "<b>1. Landung:</b> India 2 oder Lima LZs.",
            "<b>2. UNLRA Camp:</b> Sanitätszelte für OP-Kits und Stims plündern.",
            "<b>3. UNLRA HQ:</b> Dynamischen Code suchen und blaue Quest-Ordner sichern.",
            "<b>4. Schleichweg:</b> Durch den Zaun beim Schrottplatz zur Mall-Rückseite.",
            "<b>5. Mall:</b> Im Hinterzimmer des Bookstores den <b>SVD Blueprint</b> holen."
        ],
        tip: "Farme KI rund um die Mall für den 'TB-Mall-Key', falls er dir fehlt."
    },
    {
        id: "route_hunters",
        name: "Der Schrottsammler (The Scavenger Run)",
        location: "Hunter's Paradise",
        danger: "Mittel (Medium)",
        time: "~ 15 Minuten",
        requirements: "Ideal für Solo-Spieler.",
        target: "Weapon Parts, M14 EBR Blueprint, Mods.",
        video: "https://www.youtube.com/watch?v=am99ZXCWC10",
        steps: [
            "<b>1. Landung:</b> LZ Foxtrot 1 oder 2.",
            "<b>2. Schießstand:</b> Munition und Weapon Mods auf Tischen/Bänken.",
            "<b>3. Bunker:</b> Gelbe Notiz im Büro lesen und Bunker-Schloss öffnen.",
            "<b>4. Waffenkammer:</b> Im Nebenraum den <b>M14 EBR Blueprint</b> einsammeln.",
            "<b>5. Boss:</b> Hostile Commander für Rüstung und Keys ausschalten."
        ],
        tip: "Perfekt für Artisan-Dailies (Defekte Waffenteile sammeln)."
    },
    {
        id: "route_banpa",
        name: "Die Ban Pa Schatzsuche (The Ban Pa Treasure Hunt)",
        location: "Ban Pa (Fischerdorf)",
        danger: "Mittel (Medium)",
        time: "~ 20 Minuten",
        requirements: "Keine speziellen Anforderungen.",
        target: "Holzstatuen, Lithiumfett, Schmuck.",
        video: "https://www.youtube.com/watch?v=9TJg6uGjifA",
        steps: [
            "<b>1. Landung:</b> LZ India 1 oder 2.",
            "<b>2. Pfahlbauten:</b> Depot-Codes auf Zetteln suchen, Lithiumfett looten.",
            "<b>3. Ältestenhaus:</b> Via Außengeländer/Balkon ohne Key eindringen.",
            "<b>4. Versteck:</b> Munitionskiste unter dem Tisch im Geheimraum plündern.",
            "<b>5. Naga Boss:</b> Aktenkoffer beim Radioturm (192, 137) sichern."
        ],
        tip: "Bester Ort für die 3 Holzstatuen der 'Hazardous Treasures' Quest."
    }
];

    // 14. Waffen Blueprints
    const blueprintDb = {
        "AK-308": { loc: "Fort Narith Jail (142, 130)", desc: "Hinter einer aufkickbaren Tür unter der Kaffeemaschine.", tip: "Du musst den Jail Key besitzen." },
        "AKMN": { loc: "Erhöhte Hütte (195, 153)", desc: "In der kleinen Hütte auf halbem Weg zwischen Ban Pa und Tiger Bay.", tip: "Vorsicht vor den Patrouillen im Dschungel." },
        "DDM4": { loc: "Fort Narith Barracks (141, 131)", desc: "Im 2. Stock der Baracken auf einem Tisch.", tip: "Häufig umkämpftes Gebiet!" },
        "M700 Sniper": { loc: "Hotel Dach (Midnight Sapphire)", desc: "Am entfernten Ende des Dachs (Treppe hoch).", tip: "Nutze den Heli-Landeplatz Hotel 1." },
        "M14 EBR": { loc: "Hunter's Paradise (159, 168)", desc: "Im Raum direkt neben der verschlossenen Waffenkammer.", tip: "Kein Schlüssel für diesen spezifischen Raum nötig." },
        "MP7A2": { loc: "Ransacked Tourist Shelter (188, 130)", desc: "Liegt auf der Couch im Hauptraum.", tip: "Benötigt den Tourist Shelter Key." },
        "SIG MCX": { loc: "Hotel Midnight Sapphire (171, 166)", desc: "Im Erdgeschoss, hintere rechte Seite.", tip: "Gute Tarnung ist hier Pflicht." },
        "SVD Dragunov": { loc: "Tiger Bay Mall (197, 129)", desc: "Im Hinterraum der Buchhandlung auf einem Regal.", tip: "Extreme KI-Dichte, bring genug Munition mit." },
        "Mossberg 590": { loc: "Remote Campsite (149, 111)", desc: "Südöstlich von YBL-1, in einer Kiste beim Flusslager.", tip: "Relativ friedliche Zone für Anfänger." }
    };
