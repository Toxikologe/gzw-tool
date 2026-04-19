// ==========================================
// GRAY ZONE WARFARE - TACTICAL DATABASE
// Update: 0.4 Spearhead & Hotfix 0.4.0.3
// ==========================================

    // ==============================================================
    // DATENBANKEN
    // ==============================================================

    // ==============================================================
    // 1. MISSIONS-DATENBANK (TASKS) - 0.4 SPEARHEAD (100% COMPLETE)
    // ==============================================================
    const allTasks = [
        // --- HANDSHAKE TASKS ---
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
        { de: "Zahme Ratte", en: "Domesticated Rat", v: "Handshake", desc: "Shack-Kontakt ausmachen.", sol: "Hunter's Paradise Waldhütte. ACHTUNG: Nur Nachts (22:00-05:00). Intel holen." },
        { de: "Rebellengesindel", en: "Rebel Scum", v: "Handshake", desc: "20 Feinde Bunker YBL-1.", sol: "YBL-1 Bunker (142 121). 20 Kills erzielen." },
        { de: "Ich kam, sah, siegte I", en: "I Went, I Saw, I Conquered I", v: "Handshake", desc: "Sägewerk ausspähen.", sol: "Sawmill (138 143). Spähe Straßen/Hügel aus (Nur Nachts 22:00-05:00)." },
        { de: "Ich kam, sah, siegte II", en: "I Went, I Saw, I Conquered II", v: "Handshake", desc: "Sprengstoffwerkstatt.", sol: "Sawmill (138 143). Finde die Werkstatt und Fässer." },
        { de: "Ich kam, sah, siegte III", en: "I Went, I Saw, I Conquered III", v: "Handshake", desc: "20 Kills Sägewerk.", sol: "Sawmill. 20 Kills." },
        { de: "Manifest Destiny", en: "Manifest Destiny", v: "Handshake", desc: "Festplatte extrahieren.", sol: "Airfield (182 158). Datenbank auf dem PC checken (Nur Nachts)." },
        { de: "Schießstand", en: "Shooting Gallery", v: "Handshake", desc: "20 Kills Hunter's Paradise.", sol: "Hunter's Paradise (159 168). 20 Kills erzielen." },
        { de: "UNLRA", en: "UNLRA", v: "Handshake", desc: "Intel aus UNLRA Camp.", sol: "Tiger Bay. Finde den Ordner im Zelt (Nur Nachts 22:00-05:00)." },
        { de: "Abkürzung", en: "Shortcut", v: "Handshake", desc: "Durchgang Fort Narith.", sol: "Bunker Ebene -2 (142 121). In den Trümmern suchen." },
        { de: "Schatten über Ban Pa II", en: "The Shadow Over Ban Pa II", v: "Handshake", desc: "Kult in Ban Pa.", sol: "Hole Intel aus Ban Pa (205 137)." },
        { de: "Geschäft oder Vergnügen", en: "Business Or Pleasure", v: "Handshake", desc: "Airfield untersuchen.", sol: "Airfield (183 158). USB auf Holztisch bei Laptop (Nur Nachts)." },
        { de: "Flügel stutzen", en: "Wing Clipping", v: "Handshake", desc: "20 Feinde Flugplatz.", sol: "Pha Lang Airfield. 20 Kills." },
        { de: "Wahrer Mut", en: "True Grit", v: "Handshake", desc: "Antiker Revolver.", sol: "Hunter's Paradise (160 167). Revolver aus Motel 102 holen." },
        { de: "Ein Schuss, ein Treffer", en: "One Shot, One Kill", v: "Handshake", desc: "Commander ausschalten.", sol: "Hunter's Paradise (159 168). HP Boss (Cap, lila Shirt) töten." },
        { de: "Blick auf den Fluss", en: "Riverfront View", v: "Handshake", desc: "Schicksal Späher.", sol: "Midnight Sapphire. Finde Hinweise über den Späher." },
        { de: "Tiefste, dunkelste Fantasien", en: "Deepest, Darkest Fantasies", v: "Handshake", desc: "Flash Drive holen.", sol: "Midnight Sapphire. USB sichern." },
        { de: "Revolutionäre Straße", en: "Revolutionary Road", v: "Handshake", desc: "Tankstelle Fort Narith.", sol: "Fort Narith Tankstelle. Laptop und Notizen finden." },
        { de: "Spaziergang durch Fort Narith", en: "Fort Narith Stroll", v: "Handshake", desc: "Alle Eingänge prüfen.", sol: "Airfield (141 126), Fuel (146 127), Main (145 130), Barracks (143 131)." },
        { de: "Was hochkommt", en: "What Comes Up", v: "Handshake", desc: "Flugschreiber bergen.", sol: "Pha Lang Airfield (192 152). Blackbox am Wrack finden." },
        { de: "Gewaltsame Aufklärung", en: "Reconnaissance-in-Force", v: "Handshake", desc: "30 Soldaten Fort Narith.", sol: "Töte 30 Soldaten im Fort Narith." },
        { de: "Bis zur Schnupftabakdose", en: "Up To Snuff", v: "Handshake", desc: "VIP Kundenliste.", sol: "Hunter's Paradise (160 168). Gebäude, Schreibtisch rechts." },
        { de: "Gefährliche Schätze", en: "Hazardous Treasures", v: "Handshake", desc: "Eliminieren & Container.", sol: "Finde 30kg Container in: Sawmill, Lagoon, HP, Ban Pa, Airfield, YBL-1." },
        { de: "Hacker", en: "Hacker", v: "Handshake", desc: "4 Kameras hacken.", sol: "Fort Narith (Nur Nachts). Air Traffic, Main, North, HQ." },
        { de: "Zurückgelassen II", en: "Left Behind II", v: "Handshake", desc: "Identität Leiche.", sol: "Midnight Sapphire. Leiche identifizieren." },
        { de: "Unkraut jäten", en: "Weeding", v: "Handshake", desc: "30 LAF Forces MS.", sol: "Midnight Sapphire. 30 LAF Feinde töten." },
        { de: "Je mehr desto besser", en: "The More the Merrier", v: "Handshake", desc: "Patrouillen-Dokumente.", sol: "Fort Narith Barracks (Nur Nachts). Intel finden." },
        { de: "Der Kongressabgeordnete", en: "The Congressman", v: "Handshake", desc: "Smartphone Hotel.", sol: "Midnight Sapphire (173 166). Smartphone holen." },
        { de: "Hacker II", en: "Hacker II", v: "Handshake", desc: "Codebuch finden.", sol: "Fort Narith (Nur Nachts). 3 Antennen hacken. Codebuch HQ 2. Stock." },
        { de: "Trollbrücke", en: "Troll Bridge", v: "Handshake", desc: "Verminte Brücke.", sol: "Tiger Bay (West). Untersuche die Brücke." },
        { de: "UNLRA II", en: "UNLRA II", v: "Handshake", desc: "3 Checkpoints untersuchen.", sol: "Tiger Bay Checkpoints (Nur Nachts). Ordner sichern." },
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
        { de: "Familien-Erbstück", en: "Family Heirloom", v: "Handshake", desc: "Erbstück bergen.", sol: "Suche das Haus im Startgebiet ab." },
        { de: "Ein kleiner Gefallen", en: "A Small Favor", v: "Handshake", desc: "Kleinigkeit besorgen.", sol: "Sammle spezifische Items (z.B. Zigarren/MREs)." },
        { de: "Verlorener Liebhaber", en: "Lost Lover", v: "Handshake", desc: "Suche nach PMC.", sol: "Untersuche die Häuser in Nam Thaven/Kiu Vongsa." },
        { de: "Sherpa: Erste Schritte", en: "Sherpa: First Steps", v: "Handshake", desc: "Hilfe Operators.", sol: "Begleite Spieler in der Startstadt." },

        // --- GUNNY TASKS ---
        { de: "Medikamente gesucht", en: "Meds Wanted", v: "Gunny", desc: "Hilfsgüter Wasserturm.", sol: "Wasserturm (140 161). Kiste am Fundament." },
        { de: "Schießplatz-Check", en: "Range Check", v: "Gunny", desc: "Munitionskisten Schießstand.", sol: "Rechts unter Wellblechdach." },
        { de: "Luftabwehr-Sichtung", en: "AA Sighting", v: "Gunny", desc: "Markiere FLAK.", sol: "Fort Narith Block A, B, C Dächer markieren." },
        { de: "Treibstoffdiebe", en: "Fuel Thieves", v: "Gunny", desc: "Benzinkanister Hangar.", sol: "Hangar 2 hinter den Wracks." },
        { de: "Scharfschützen-Nest", en: "Sniper's Nest", v: "Gunny", desc: "Wasserturm Sniper.", sol: "Töte Wache oben auf dem Turm." },
        { de: "Herzliches Willkommen", en: "Warm Welcome", v: "Gunny", desc: "Boss in Ban Pa killen.", sol: "Ban Pa (204 136). Naga (Boss) bei Stelzenhäusern töten." },
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
        { de: "Waffenbrüder", en: "Brothers in Arms", v: "Gunny", desc: "Verlorene M4A1.", sol: "2 unmodifizierte M4A1 aus Hunter's Paradise an Gunny übergeben." },
        { de: "Feuer frei", en: "Weapons Free", v: "Gunny", desc: "25 Kills Sägewerk.", sol: "Massive Räumung im Lumber Yard." },
        { de: "Sturm auf das Fort", en: "Storm the Fort", v: "Gunny", desc: "Fort Narith Innenhof.", sol: "Erreiche zentralen Appellplatz." },
        { de: "Säuberung der Lagune", en: "Lagoon Sweep", v: "Gunny", desc: "Kartell vertreiben.", sol: "20 Kills Blue Lagoon." },
        { de: "Kopfgeld", en: "Bounty", v: "Gunny", desc: "Barett Commander.", sol: "Rotes Barett des Hunter's Paradise Bosses looten." },
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
        { de: "Das verlorene Lager", en: "The Campsite", v: "Gunny", desc: "Verlassenes Lager.", sol: "W-Juliet 4 Leiche." },
        { de: "Vorratsengpass", en: "Supply Squeeze", v: "Gunny", desc: "Rationen Lumber.", sol: "5 MREs Sägewerk." },
        { de: "Linie im Sand", en: "Line In The Sand", v: "Gunny", desc: "Ban Pa verteidigen.", sol: "Ban Pa (205 137). Ban Pa Pier (206 137)." },
        { de: "Tiefe Gewässer", en: "Deep Waters", v: "Gunny", desc: "Kills Blue Lagoon.", sol: "Kill 20 Bots an der Blue Lagoon. ACHTUNG: Boss Malo rotiert!" },

        // --- LAB RAT TASKS ---
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
        { de: "Gefährliche Beute", en: "Hazardous Haul", v: "Lab Rat", desc: "Kontaminierte Proben.", sol: "YBL-1 Ebene -3." },
        { de: "Gefährliche Beute II", en: "Hazardous Haul II", v: "Lab Rat", desc: "Bringe Proben.", sol: "Übergabe an Lab Rat." },

        // --- ARTISAN TASKS ---
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
        { de: "Rauchzeichen", en: "Smoke Signals", v: "Artisan", desc: "Signalfeuer Miliz.", sol: "Hügel zw. Ban Pa/Lumber." },
        { de: "Schwarze Liste", en: "Blacklist", v: "Artisan", desc: "Buch Namen.", sol: "Ban Pa Elder's House Dielen." },

        // --- TURNCOAT TASKS ---
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
        { de: "In den richtigen Händen", en: "In The Right Hands", v: "Turncoat", desc: "Evakuierungsbefehle.", sol: "Fort Narith, Barracks A, Raum 112. Akte liegt links auf dem Tisch." },
        { de: "Evakuierungsfrage", en: "Evacuation Question", v: "Turncoat", desc: "Evakuierungsbefehle.", sol: "Fort Narith, Barracks A, Raum 112 (Alternativer Weg für In The Right Hands)." },
        { de: "Eines Mannes Müll", en: "One Man's Trash", v: "Turncoat", desc: "Blue Lagoon Lager.", sol: "Blue Lagoon Restaurant Lager (Storage Key nötig)!" },
        { de: "Keine Fragen gestellt", en: "No Questions Asked", v: "Turncoat", desc: "Villen plündern.", sol: "Finde Wertsachen in Villa Anna Jana und Marta Monica (172 165)." },
        { de: "Verspätetes Paket", en: "Delayed Package", v: "Turncoat", desc: "Post-LKW.", sol: "Straße Tiger Bay DHL Wagen." },
        { de: "Käufer unerzählter Dinge", en: "Buyer of Untold Truths", v: "Turncoat", desc: "Diamanten im Zelt.", sol: "West-Zelt bei Tiger Bay. Item auf Tisch (Alternativ zu Crumb Collector)." },
        { de: "Nenne dein Gift", en: "Name your Poison", v: "Turncoat", desc: "Chemikalien Wassertank.", sol: "Wassertank NW neben Barracken. ACHTUNG: Beendet alternative Lab Rat Quest!" },
        { de: "Drachentöter", en: "Dragonslayer", v: "Turncoat", desc: "General Pa.", sol: "Töte Boss in Fort Narith. [0.4 Hinweis: General Pa hat extremes AP-Gear]." },
        { de: "Kenne deinen Feind", en: "Know Your Enemy", v: "Turncoat", desc: "Artillerie markieren.", sol: "Fort Narith Geschütze." },
        { de: "Akademisches Interesse", en: "Academic Interest", v: "Turncoat", desc: "Schul-Daten.", sol: "Startstadt Schule Akten." },
        { de: "Freundlicher Hinweis", en: "Friendly Suggestion", v: "Turncoat", desc: "Bürgermeister Drohung.", sol: "Munition in Bett Bürgermeister ablegen." },
        { de: "Frischfleisch", en: "Fresh Meat", v: "Turncoat", desc: "Gästeliste.", sol: "Haus bei Kilo 2 LZ, im Schlafzimmer auf kleinem Tisch." },
        { de: "Frischfleisch II", en: "Fresh Meat II", v: "Turncoat", desc: "Weitere Kills.", sol: "Gegner ausschalten (Folgequest)." },
        { de: "Frischfleisch III", en: "Fresh Meat III", v: "Turncoat", desc: "Zielperson killen.", sol: "Spezifischen Feind ausschalten." },
        { de: "Drogen-Lieferung", en: "Narco Delivery", v: "Turncoat", desc: "Golfplatz Sandbunker.", sol: "Midnight Sapphire 3. Loch." },
        { de: "Suchender der Veränderung", en: "Seeker of change", v: "Turncoat", desc: "Proben aus Bett.", sol: "Barracks C, Raum 110 (141 132). Probe mit Kit aus blutigem Bett nehmen." },
        { de: "Unheimliche Akten", en: "Uncanny Files", v: "Turncoat", desc: "Geheime Dokumente.", sol: "Bunker YBL-1 Akten suchen." },

        // --- BANSHEE TASKS ---
        { de: "Holz", en: "Timber", v: "Banshee", desc: "Boss Sägewerk.", sol: "Sawmill (139 144). Töte den Boss (patrouilliert NE/Ost und große Halle)." },
        { de: "An den Hügeln", en: "At The Mounds", v: "Banshee", desc: "Gräber Ban Pa.", sol: "NE-Ban Pa Dokument Hügel." },
        { de: "Flugschreiber", en: "Flight Recorder", v: "Banshee", desc: "Blackbox C-130.", sol: "Ground Zero Wrack Heck." },
        { de: "Kopfgeldjäger", en: "Bounty Hunter", v: "Banshee", desc: "Commander Tiger Bay.", sol: "Töte Boss am Pier/HQ." },
        { de: "Nachtwache", en: "Night Watch", v: "Banshee", desc: "Stealth Raid.", sol: "Kills & Extraction bei Nacht (22:00-05:00)." },
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
        { de: "Ungläubig", en: "Unbeliever", v: "Banshee", desc: "Manifest Kapelle.", sol: "Kapelle O-Stadt Altar." },
        { de: "Aasfresser", en: "Scavenger", v: "Banshee", desc: "Wertsachen Todeszone.", sol: "Ground Zero Rucksäcke." },

        // ==============================================================
        // --- 🆕 UPDATE 0.4 SPEARHEAD TASKS (BLUEPRINTS, VULTURE & SQUAD) ---
        // ==============================================================
        
        // --- VULTURE (SECRET VENDOR) ---
        { de: "Der neue Kontakt", en: "The New Contact", v: "Vulture", desc: "Aktenkoffer von der Farm holen.", sol: "Na Xieng Farm. Nutze den Code 9135 am Vorhängeschloss, um Vultures Respekt zu gewinnen." },
        { de: "Chamäleon", en: "Chameleon", v: "Vulture", desc: "AK-308 Blueprint besorgen.", sol: "Fort Narith Jail. Finde den Blueprint hinter der kickbaren Tür und übergib ihn an Vulture." },
        { de: "Wie ein Boss", en: "Like a Boss", v: "Vulture", desc: "Versteckte Boss-Pistolen.", sol: "Töte den Boss Malo an der Blue Lagoon und loote seine 1911 C manuell aus dem Holster!" },
        
        // --- BLUEPRINT UNLOCKS (Andere Händler) ---
        { de: "Phantom-Lanze", en: "Phantom Lance", v: "Gunny", desc: "DDM4 Blueprint besorgen.", sol: "Fort Narith. Gehe in die Baracken, 2. Stock. Extrahiere den Blueprint und gib ihn bei Gunny ab." },
        { de: "Stille Bedrohung", en: "Silent Threat", v: "Artisan", desc: "SVD Blueprint besorgen.", sol: "Tiger Bay Mall. Buchladen-Hinterzimmer (TB-Mall-Key nötig)." },
        { de: "Kompakte Feuerkraft", en: "Compact Firepower", v: "Handshake", desc: "MP7A2 Blueprint besorgen.", sol: "Ransacked Shelter (188 130). Den Blueprint sichern und zu Handshake bringen." },
        { de: "Yens M700 (Side Task)", en: "Yen's M700", v: "Banshee", desc: "M700 Skin freischalten.", sol: "Midnight Sapphire. Töte den LAF Commander und sichere dir den Blueprint auf dem Hoteldach." },
        { de: "Plan B", en: "Plan B", v: "Lab Rat", desc: "Kong Thab Depot Bunker.", sol: "Kong Thab Depot. Dynamischen Keypad-Code im Umkreis finden, um die Medikamente zu sichern." },

        // --- SQUAD STRIKE MISSIONEN ---
        { de: "Squad Strike: HVT", en: "Squad Strike: HVT", v: "Handshake", desc: "Boss-Eliminierung Team.", sol: "Töte einen POI Boss im Squad. ACHTUNG: Nur der letzte Treffer (Lasthit) zählt für den Kill!" },
        { de: "Squad Strike: Sichern & Halten", en: "Squad Strike: Secure & Hold", v: "Gunny", desc: "Halte Position.", sol: "5 Min. LZ Verteidigung. ACHTUNG: Stirbst du, erhältst du einen Cooldown auf die Aufgabe!" },
        { de: "Squad Strike: Datendiebstahl", en: "Squad Strike: Data Heist", v: "Turncoat", desc: "Infiltriere HQ.", sol: "YBL-1 oder Tiger Bay Daten. Extraktion im Squad zwingend nötig." },
        { de: "Squad Strike: Night Raid", en: "Squad Strike: Night Raid", v: "Banshee", desc: "Leise Spec-Op.", sol: "Team Stealth Kills bei Nacht (22:00-05:00)." }
    ];

    // ==========================================
    // 2. GUNSMITH: WAFFEN & MODS DATENBANK (0.4 SPEARHEAD - 100% COMPLETE)
    // ==========================================

    // --- MODS (Aufsätze & Bauteile) DATENBANK ---
const gunsmithMods = {
    // --- Mündungen / Schalldämpfer ---
    "m_nt4": { name: "KAC QDSS-NT4 (5.56)", recoil: +15, ergo: -8, noise: +60, moa: -0.1, vel: +10, reload: 0 },
    "m_rc1": { name: "SureFire SOCOM556 RC1", recoil: +18, ergo: -6, noise: +62, moa: -0.2, vel: +12, reload: 0 },
    "m_rc2": { name: "SureFire SOCOM556 RC2", recoil: +20, ergo: -6, noise: +65, moa: -0.2, vel: +15, reload: 0 },
    "m_pbs1": { name: "PBS-01 (7.62 AK)", recoil: +12, ergo: -10, noise: +50, moa: -0.1, vel: +5, reload: 0 },
    "m_pbs4": { name: "PBS-04 (5.45 AK)", recoil: +14, ergo: -9, noise: +55, moa: -0.1, vel: +8, reload: 0 },
    "m_tgpv": { name: "TGP-V (SVD 7.62x54)", recoil: +25, ergo: -15, noise: +70, moa: -0.3, vel: +20, reload: 0 },
    "m_banish": { name: "BANISH 45 (Pistole)", recoil: +10, ergo: -5, noise: +55, moa: 0, vel: +5, reload: 0 },
    "m_srd762": { name: "SIG SRD762-QD (.308)", recoil: +18, ergo: -8, noise: +60, moa: -0.1, vel: +12, reload: 0 },
    "m_salvo": { name: "Salvo 12 (Shotgun)", recoil: +25, ergo: -20, noise: +45, moa: 0, vel: 0, reload: 0 },
    "m_rotex": { name: "MP7 Rotex (4.6mm)", recoil: +8, ergo: -3, noise: +50, moa: 0, vel: +8, reload: 0 },
    "m_comp": { name: "Saker ASR Kompensator", recoil: +10, ergo: -2, noise: 0, moa: 0, vel: 0, reload: 0 },
    "m_dtk1": { name: "DTK-1 Muzzle Brake", recoil: +14, ergo: -3, noise: -10, moa: 0, vel: 0, reload: 0 },
    "m_dtk2": { name: "DTK-2 Muzzle Brake", recoil: +16, ergo: -4, noise: -15, moa: 0, vel: 0, reload: 0 },
    "m_hyper": { name: "Hypertap Muzzle Brake", recoil: +18, ergo: -5, noise: -20, moa: 0, vel: 0, reload: 0 },
    "m_9mm": { name: "Osprey 9 (9mm)", recoil: +5, ergo: -4, noise: +40, moa: 0, vel: +5, reload: 0 },

    // --- Visiere (Optics) ---
    "o_exps": { name: "EOTech EXPS2/3 (Holo)", recoil: 0, ergo: -2, noise: 0, moa: 0, vel: 0, reload: 0 },
    "o_t2": { name: "Aimpoint Micro T-1/T-2", recoil: 0, ergo: -1, noise: 0, moa: 0, vel: 0, reload: 0 },
    "o_kobra": { name: "Kobra EKP-8-18 (Red Dot)", recoil: 0, ergo: -1, noise: 0, moa: 0, vel: 0, reload: 0 },
    "o_specter": { name: "Elcan SpecterDR 1-4x", recoil: +2, ergo: -8, noise: 0, moa: -0.5, vel: 0, reload: 0 },
    "o_vudu1": { name: "Vudu 1-6x24 FFP", recoil: +5, ergo: -8, noise: 0, moa: -1.0, vel: 0, reload: 0 },
    "o_vudu3": { name: "Vudu 3.5-18x50 FFP", recoil: +8, ergo: -12, noise: 0, moa: -1.5, vel: 0, reload: 0 },
    "o_razor": { name: "Vortex RAZOR 1-6x", recoil: +4, ergo: -8, noise: 0, moa: -0.9, vel: 0, reload: 0 },
    "o_viper": { name: "Viper PST Gen II", recoil: +10, ergo: -12, noise: 0, moa: -1.8, vel: 0, reload: 0 },
    "o_acog": { name: "ACOG TA01NSN 4x32", recoil: +3, ergo: -8, noise: 0, moa: -0.6, vel: 0, reload: 0 },
    "o_pso1": { name: "PSO-1 4x24 (AK/SVD)", recoil: +2, ergo: -6, noise: 0, moa: -0.5, vel: 0, reload: 0 },
    "o_pu": { name: "Mosin PU 3.5x22 Scope", recoil: +1, ergo: -8, noise: 0, moa: -0.8, vel: 0, reload: 0 },

    // --- Griffe (Foregrips) ---
    "g_rvg": { name: "Magpul RVG (Vertikal)", recoil: +8, ergo: +4, noise: 0, moa: 0, vel: 0, reload: 0 },
    "g_shift": { name: "Fortis Shift (Gewinkelt)", recoil: +5, ergo: +10, noise: 0, moa: 0, vel: 0, reload: 0 },
    "g_rk2": { name: "Zenit RK-2 (Vertikal)", recoil: +15, ergo: -4, noise: 0, moa: 0, vel: 0, reload: 0 },
    "g_bcm": { name: "BCM Gunfighter Grip", recoil: +6, ergo: +6, noise: 0, moa: 0, vel: 0, reload: 0 },
    "g_rk3": { name: "Zenit RK-3 (AK Pistol Grip)", recoil: +10, ergo: +10, noise: 0, moa: 0, vel: 0, reload: 0 },

    // --- Schäfte (Stocks) ---
    "s_pt1": { name: "AK PT-1 Stock", recoil: +15, ergo: +6, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_pt3": { name: "AK PT-3 Stock", recoil: +17, ergo: +6, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_zhukov": { name: "AK Zhukov Stock", recoil: +8, ergo: +8, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_moe": { name: "MOE Stock (Alle Farben)", recoil: +10, ergo: +6, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_dd": { name: "DD Adjustable Buttstock", recoil: +10, ergo: +4, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_sopmod": { name: "SOPMOD Stock", recoil: +6, ergo: +2, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_hunter": { name: "M700 Hunter Stock", recoil: +12, ergo: +6, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_modx": { name: "M700 MOD*X Stock", recoil: +9, ergo: +10, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_arch": { name: "Mosin Archangel Stock", recoil: +12, ergo: +4, noise: 0, moa: 0, vel: 0, reload: 0 },
    "s_sga": { name: "M870 / M590 SGA Stock", recoil: +6, ergo: +6, noise: 0, moa: 0, vel: 0, reload: 0 },

    // --- Magazine ---
    "mag_30_ar": { name: "30-Schuss PMAG", recoil: 0, ergo: +2, noise: 0, moa: 0, vel: 0, reload: -0.2 },
    "mag_60_ar": { name: "60-Schuss SureFire", recoil: -2, ergo: -10, noise: 0, moa: 0, vel: 0, reload: +1.5 },
    "mag_30_ak": { name: "30-Schuss Bakelit", recoil: 0, ergo: 0, noise: 0, moa: 0, vel: 0, reload: 0 },
    "mag_60_ak": { name: "60-Schuss Trommel", recoil: -4, ergo: -12, noise: 0, moa: 0, vel: 0, reload: +2.0 },
    "mag_10_svd": { name: "10-Schuss Standard", recoil: 0, ergo: 0, noise: 0, moa: 0, vel: 0, reload: 0 },
    "mag_20_svd": { name: "20-Schuss Erweitert", recoil: 0, ergo: -5, noise: 0, moa: 0, vel: 0, reload: +0.8 },
    "mag_ext_9mm": { name: "33-Schuss Glock Mag", recoil: 0, ergo: -3, noise: 0, moa: 0, vel: 0, reload: +0.5 }
};

// --- MOD-POOLS FÜR WAFFEN-KLASSEN ---
// WICHTIG: "o_specter" (Elcan SpecterDR) ist jetzt bei allen ARs & DMRs zwingend mit dabei!
const p_ar = { 
    muzzle: ["m_nt4", "m_rc1", "m_rc2", "m_hyper", "m_comp"], 
    optic: ["o_exps", "o_t2", "o_specter", "o_vudu1", "o_razor", "o_acog"], 
    grip: ["g_rvg", "g_shift", "g_bcm"], 
    stock: ["s_moe", "s_dd", "s_sopmod"], 
    mag: ["mag_30_ar", "mag_60_ar"] 
};
const p_ak7 = { 
    muzzle: ["m_pbs1", "m_dtk1", "m_dtk2", "m_comp"], 
    optic: ["o_kobra", "o_pso1", "o_specter", "o_exps"], 
    grip: ["g_rk2", "g_shift", "g_rk3"], 
    stock: ["s_pt1", "s_pt3", "s_zhukov", "s_moe"], 
    mag: ["mag_30_ak", "mag_60_ak"] 
};
const p_ak5 = { 
    muzzle: ["m_pbs4", "m_dtk1", "m_dtk2", "m_comp"], 
    optic: ["o_kobra", "o_pso1", "o_specter", "o_exps"], 
    grip: ["g_rk2", "g_shift", "g_rk3"], 
    stock: ["s_pt1", "s_pt3", "s_zhukov"], 
    mag: ["mag_30_ak", "mag_60_ak"] 
};
const p_dmr_nato = { 
    muzzle: ["m_srd762", "m_comp"], 
    optic: ["o_vudu1", "o_vudu3", "o_razor", "o_viper", "o_specter"], 
    grip: ["g_shift"], 
    stock: ["s_hunter", "s_modx"], 
    mag: [] 
};
const p_dmr_rus = { 
    muzzle: ["m_tgpv", "m_dtk1"], 
    optic: ["o_pso1", "o_specter", "o_vudu1"], 
    grip: [], 
    stock: ["s_pt1", "s_pt3"], 
    mag: ["mag_10_svd", "mag_20_svd"] 
};
const p_smg = { 
    muzzle: ["m_rotex", "m_banish", "m_9mm"], 
    optic: ["o_exps", "o_t2", "o_kobra"], 
    grip: ["g_shift", "g_rvg"], 
    stock: ["s_moe"], 
    mag: ["mag_ext_9mm"] 
};
const p_shot = { 
    muzzle: ["m_salvo", "m_comp"], 
    optic: ["o_exps", "o_t2"], 
    grip: ["g_rvg"], 
    stock: ["s_sga"], 
    mag: [] 
};

// --- DIE WAFFEN-DATENBANK ---
const gunsmithWeapons = [
    // NATO ARs
    { id: "m4a1", name: "M4A1 Sturmgewehr", isMeta: false, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "Die Standard-NATO-Waffe.<br><b>Build-Tipp:</b> RC2 Schalldämpfer + SpecterDR + SOPMOD Stock.", base: { moa: 2.0, rpm: 800, recoil: 55, ergo: 60, noise: 0, vel: 880, reload: 2.8 }, mods: p_ar },
    { id: "m16a1", name: "M16A1 Sturmgewehr", isMeta: false, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "0.4 NEU: 'The Black Rifle'. Retro-Look, extrem präzise.<br><b>Build-Tipp:</b> Auf Distanz lassen, z.B. mit Vudu-Visier.", base: { moa: 1.5, rpm: 750, recoil: 65, ergo: 50, noise: 0, vel: 950, reload: 3.0 }, mods: p_ar },
    { id: "m201c", name: "Norinco M-201C", isMeta: false, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "0.4 NEU: Kompakte chinesische M4. Hoher Verschleiß!<br><b>Build-Tipp:</b> Gut für Tiger Bay Häuserkampf.", base: { moa: 2.5, rpm: 800, recoil: 45, ergo: 70, noise: 0, vel: 820, reload: 2.7 }, mods: p_ar },
    { id: "cqa1", name: "CQ-A1", isMeta: false, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "Chinesischer M4-Klon. Günstig für den Start, später austauschen.", base: { moa: 2.2, rpm: 800, recoil: 50, ergo: 58, noise: 0, vel: 870, reload: 2.9 }, mods: p_ar },
    { id: "ddm4", name: "Daniel Defense DDM4", isMeta: true, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "0.4 S-TIER: Perfekte Ergonomie ab Werk. Erfordert Blueprint.<br><b>Build-Tipp:</b> SpecterDR + Shift Griff + DD Stock = OP.", base: { moa: 1.2, rpm: 800, recoil: 65, ergo: 75, noise: 0, vel: 910, reload: 2.5 }, mods: p_ar },
    { id: "ks1", name: "KAC KS-1 (L403A1)", isMeta: true, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "0.4 META: Bestes Rückstoßverhalten im Spiel.", base: { moa: 1.0, rpm: 800, recoil: 70, ergo: 72, noise: 0, vel: 920, reload: 2.4 }, mods: p_ar },
    { id: "sicmcx", name: "SIG MCX", isMeta: true, ammo: ".300 Blackout", type: "Sturmgewehr", tip: "Tödlich im Nahkampf. Munition ist extrem selten. Blueprint im Hotel.", base: { moa: 1.8, rpm: 850, recoil: 60, ergo: 80, noise: 0, vel: 650, reload: 2.2 }, mods: p_ar },
    { id: "mk18", name: "MK18", isMeta: true, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "Kurzer Lauf, hohe Ergonomie. Perfekt für den Häuserkampf.", base: { moa: 2.3, rpm: 800, recoil: 52, ergo: 85, noise: 0, vel: 780, reload: 2.6 }, mods: p_ar },

    // OSTBLOCK ARs
    { id: "ak74", name: "AK-74", isMeta: false, ammo: "5.45x39mm", type: "Sturmgewehr", tip: "Das Original mit Holzschäftung.", base: { moa: 2.4, rpm: 650, recoil: 48, ergo: 55, noise: 0, vel: 880, reload: 3.2 }, mods: p_ak5 },
    { id: "ak74n", name: "AK-74N", isMeta: false, ammo: "5.45x39mm", type: "Sturmgewehr", tip: "Mit Schwalbenschwanz-Montage für russische Optiken.", base: { moa: 2.4, rpm: 650, recoil: 48, ergo: 54, noise: 0, vel: 880, reload: 3.2 }, mods: p_ak5 },
    { id: "ak74m", name: "AK-74M", isMeta: true, ammo: "5.45x39mm", type: "Sturmgewehr", tip: "Modernisiert mit Polymer. Guter Allrounder.", base: { moa: 2.1, rpm: 650, recoil: 52, ergo: 60, noise: 0, vel: 890, reload: 3.0 }, mods: p_ak5 },
    { id: "aks74u", name: "AKS-74U", isMeta: false, ammo: "5.45x39mm", type: "MP / Kurz", tip: "Sehr kurz. Starker Rückstoß, nur für CQB.", base: { moa: 3.5, rpm: 700, recoil: 35, ergo: 80, noise: 0, vel: 730, reload: 2.8 }, mods: { muzzle: ["m_pbs4"], optic: ["o_kobra"], grip: ["g_rk3"], stock: ["s_pt1"], mag: ["mag_30_ak"] } },
    { id: "aks74un", name: "AKS-74UN", isMeta: false, ammo: "5.45x39mm", type: "MP / Kurz", tip: "AKS-74U mit seitlicher Montage-Schiene.", base: { moa: 3.5, rpm: 700, recoil: 35, ergo: 80, noise: 0, vel: 730, reload: 2.8 }, mods: { muzzle: ["m_pbs4"], optic: ["o_kobra", "o_pso1"], grip: ["g_rk3"], stock: ["s_pt1"], mag: ["mag_30_ak"] } },
    { id: "akm", name: "AKM", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "Hoher Rückstoß, massive Stoppwirkung.", base: { moa: 2.8, rpm: 600, recoil: 40, ergo: 50, noise: 0, vel: 715, reload: 3.4 }, mods: p_ak7 },
    { id: "akmn", name: "AKMN", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "AKM mit Optik-Montage.", base: { moa: 2.8, rpm: 600, recoil: 40, ergo: 49, noise: 0, vel: 715, reload: 3.4 }, mods: p_ak7 },
    { id: "akms", name: "AKMS", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "AKM mit nach unten klappendem Schaft.", base: { moa: 2.8, rpm: 600, recoil: 38, ergo: 52, noise: 0, vel: 715, reload: 3.4 }, mods: p_ak7 },
    { id: "akmsn", name: "AKMSN", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "AKMS mit Optik-Montage.", base: { moa: 2.8, rpm: 600, recoil: 38, ergo: 51, noise: 0, vel: 715, reload: 3.4 }, mods: p_ak7 },
    { id: "ak101", name: "AK-101", isMeta: false, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "Export-AK, die NATO-Munition verschießt.", base: { moa: 2.0, rpm: 600, recoil: 52, ergo: 62, noise: 0, vel: 900, reload: 3.0 }, mods: p_ak5 },
    { id: "ak102", name: "AK-102", isMeta: false, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "Kurzversion der AK-101.", base: { moa: 2.4, rpm: 600, recoil: 48, ergo: 68, noise: 0, vel: 850, reload: 3.0 }, mods: p_ak5 },
    { id: "ak103", name: "AK-103", isMeta: true, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "Moderne Polymer-AK. Spürbar besserer Rückstoß als die AKM.", base: { moa: 2.0, rpm: 600, recoil: 55, ergo: 65, noise: 0, vel: 730, reload: 3.0 }, mods: p_ak7 },
    { id: "ak104", name: "AK-104", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "Kurzversion der AK-103.", base: { moa: 2.4, rpm: 600, recoil: 50, ergo: 70, noise: 0, vel: 680, reload: 3.0 }, mods: p_ak7 },
    { id: "ak105", name: "AK-105", isMeta: false, ammo: "5.45x39mm", type: "Sturmgewehr", tip: "Kompakter Kompromiss der AK-74M.", base: { moa: 2.3, rpm: 650, recoil: 49, ergo: 66, noise: 0, vel: 840, reload: 3.0 }, mods: p_ak5 },
    { id: "ak12", name: "AK-12", isMeta: true, ammo: "5.45x39mm", type: "Sturmgewehr", tip: "Modernste russische Plattform. Sehr hohe Ergonomie.", base: { moa: 1.8, rpm: 700, recoil: 62, ergo: 70, noise: 0, vel: 900, reload: 2.8 }, mods: p_ak5 },
    { id: "ak15", name: "AK-15", isMeta: true, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "7.62 Variante der AK-12.", base: { moa: 1.9, rpm: 700, recoil: 58, ergo: 68, noise: 0, vel: 730, reload: 2.8 }, mods: p_ak7 },
    { id: "ak19", name: "AK-19", isMeta: false, ammo: "5.56x45mm NATO", type: "Sturmgewehr", tip: "Neueste AK-Variante für NATO-Munition.", base: { moa: 1.7, rpm: 700, recoil: 64, ergo: 72, noise: 0, vel: 910, reload: 2.8 }, mods: p_ak5 },
    { id: "ak308", name: "AK-308", isMeta: true, ammo: "7.62x51mm NATO", type: "Schweres AR", tip: "0.4 S-TIER: .308 Sniper-Muni im Vollauto-Modus! Jailbreak-Blueprint nötig.", base: { moa: 1.5, rpm: 600, recoil: 38, ergo: 55, noise: 0, vel: 850, reload: 3.5 }, mods: p_ak7 },
    { id: "vz58", name: "SA vz. 58", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "0.4 NEU: 'Moravian Buzzsaw'. Hohe Feuerrate.", base: { moa: 2.6, rpm: 800, recoil: 42, ergo: 62, noise: 0, vel: 705, reload: 3.1 }, mods: { muzzle: ["m_pbs1"], optic: [], grip: [], stock: [], mag: [] } },
    { id: "vz58v", name: "SA vz. 58 V", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "0.4 NEU: Variante mit Klappschaft.", base: { moa: 2.6, rpm: 800, recoil: 40, ergo: 65, noise: 0, vel: 705, reload: 3.1 }, mods: { muzzle: ["m_pbs1"], optic: [], grip: [], stock: [], mag: [] } },
    { id: "typ56", name: "Type 56", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "Die absolute Einsteiger-Waffe. Schnell ersetzen.", base: { moa: 3.2, rpm: 600, recoil: 35, ergo: 48, noise: 0, vel: 710, reload: 3.6 }, mods: p_ak7 },
    { id: "typ56_1", name: "Type 56-1", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "Type 56 Variante mit Klappschaft.", base: { moa: 3.2, rpm: 600, recoil: 32, ergo: 50, noise: 0, vel: 710, reload: 3.6 }, mods: p_ak7 },
    { id: "typ56_2", name: "Type 56-2", isMeta: false, ammo: "7.62x39mm", type: "Sturmgewehr", tip: "Type 56 Variante mit seitlichem Klappschaft.", base: { moa: 3.1, rpm: 600, recoil: 33, ergo: 52, noise: 0, vel: 710, reload: 3.6 }, mods: p_ak7 },

    // DMRs & SNIPER
    { id: "m14", name: "M14 Battle Rifle", isMeta: true, ammo: "7.62x51mm NATO", type: "DMR", tip: "0.4 NEU: S-Tier DMR. Sehr präzise auf Distanz.", base: { moa: 1.1, rpm: 700, recoil: 30, ergo: 45, noise: 0, vel: 850, reload: 3.5 }, mods: p_dmr_nato },
    { id: "m14ebr", name: "M14 EBR", isMeta: true, ammo: "7.62x51mm NATO", type: "DMR", tip: "0.4 NEU: Modernisiertes Chassis der M14.", base: { moa: 0.9, rpm: 700, recoil: 35, ergo: 55, noise: 0, vel: 850, reload: 3.2 }, mods: p_dmr_nato },
    { id: "m1a", name: "M1A", isMeta: false, ammo: "7.62x51mm NATO", type: "DMR", tip: "0.4 NEU: Zivile Semi-Auto Variante der M14.", base: { moa: 1.2, rpm: 400, recoil: 32, ergo: 48, noise: 0, vel: 840, reload: 3.4 }, mods: p_dmr_nato },
    { id: "m700", name: "M700 Remington", isMeta: false, ammo: "7.62x51mm NATO", type: "Sniper", tip: "⚠️ 0.4 MECHANIK: Erfordert Manual Bolting! Tödlich auf Distanz.", base: { moa: 0.6, rpm: 40, recoil: 20, ergo: 35, noise: 0, vel: 890, reload: 4.5 }, mods: p_dmr_nato },
    { id: "rem788", name: "Remington Model 788", isMeta: false, ammo: "5.56 / .308", type: "Sniper", tip: "0.4 NEU: 'Baby's First Sniper'. Manual Bolting!", base: { moa: 1.5, rpm: 45, recoil: 22, ergo: 40, noise: 0, vel: 850, reload: 4.2 }, mods: { muzzle: ["m_nt4"], optic: ["o_vudu1", "o_razor"], grip: [], stock: [], mag: [] } },
    { id: "mosin", name: "Mosin-Nagant", isMeta: false, ammo: "7.62x54mmR", type: "Sniper", tip: "⚠️ Manual Bolting! SNB-Munition durchschlägt fast alles.", base: { moa: 1.5, rpm: 30, recoil: 15, ergo: 25, noise: 0, vel: 830, reload: 5.0 }, mods: { muzzle: ["m_dtk1"], optic: [], grip: [], stock: ["s_arch"], mag: [] } },
    { id: "mosin_sniper", name: "Mosin-Nagant (Sniper)", isMeta: false, ammo: "7.62x54mmR", type: "Sniper", tip: "Mit gebogenem Kammerstängel für Zielfernrohre.", base: { moa: 1.1, rpm: 30, recoil: 15, ergo: 24, noise: 0, vel: 830, reload: 5.0 }, mods: { muzzle: ["m_dtk1"], optic: ["o_pu"], grip: [], stock: ["s_arch"], mag: [] } },
    { id: "mosin_obrez", name: "Mosin Obrez", isMeta: false, ammo: "7.62x54mmR", type: "Pistole/Kurz", tip: "Abgesägte Mosin. Furchtbarer Rückstoß, enormer Schaden.", base: { moa: 6.0, rpm: 30, recoil: 5, ergo: 70, noise: 0, vel: 600, reload: 4.5 }, mods: { muzzle: [], optic: [], grip: [], stock: [], mag: [] } },
    { id: "svd", name: "SVD Dragunov", isMeta: true, ammo: "7.62x54mmR", type: "Sniper", tip: "0.4 S-TIER: Semi-Auto Sniper.<br><b>Tipp:</b> TGP-V Schalldämpfer ist Pflicht!", base: { moa: 0.8, rpm: 150, recoil: 25, ergo: 30, noise: 0, vel: 830, reload: 3.8 }, mods: p_dmr_rus },
    { id: "svds", name: "SVDS", isMeta: false, ammo: "7.62x54mmR", type: "Sniper", tip: "Klappschaft-Version der SVD.", base: { moa: 0.9, rpm: 150, recoil: 24, ergo: 35, noise: 0, vel: 830, reload: 3.8 }, mods: p_dmr_rus },
    { id: "sks", name: "SKS", isMeta: false, ammo: "7.62x39mm", type: "DMR", tip: "Solides Einsteiger-DMR.", base: { moa: 2.0, rpm: 200, recoil: 45, ergo: 55, noise: 0, vel: 735, reload: 4.0 }, mods: { muzzle: ["m_pbs1"], optic: [], grip: [], stock: [], mag: [] } },
    { id: "op_sks", name: "OP-SKS", isMeta: false, ammo: "7.62x39mm", type: "DMR", tip: "SKS mit Montage für Optiken.", base: { moa: 1.9, rpm: 200, recoil: 45, ergo: 54, noise: 0, vel: 735, reload: 4.0 }, mods: { muzzle: ["m_pbs1"], optic: ["o_pso1", "o_kobra"], grip: [], stock: [], mag: [] } },

    // SMGs & SHOTGUNS
    { id: "mp7a1", name: "MP7A1", isMeta: true, ammo: "4.6x30mm", type: "SMG", tip: "Hat einen fest verbauten Frontgriff. Sehr hohe AP-Rate.", base: { moa: 3.0, rpm: 950, recoil: 70, ergo: 88, noise: 0, vel: 725, reload: 2.0 }, mods: { muzzle: ["m_rotex"], optic: ["o_t2", "o_exps"], grip: [], stock: [], mag: [] } },
    { id: "mp7a2", name: "MP7A2", isMeta: true, ammo: "4.6x30mm", type: "SMG", tip: "Ohne festen Griff, erlaubt eigene Attachments. Blueprint im Shelter.", base: { moa: 3.0, rpm: 950, recoil: 75, ergo: 90, noise: 0, vel: 725, reload: 2.0 }, mods: p_smg },
    { id: "mp5a2", name: "MP5A2", isMeta: false, ammo: "9x19mm", type: "SMG", tip: "Fester Schaft, extrem wenig Rückstoß.", base: { moa: 3.5, rpm: 800, recoil: 80, ergo: 85, noise: 0, vel: 400, reload: 2.5 }, mods: p_smg },
    { id: "mp5a3", name: "MP5A3", isMeta: false, ammo: "9x19mm", type: "SMG", tip: "Ausziehbarer Schaft für mehr Mobilität.", base: { moa: 3.6, rpm: 800, recoil: 78, ergo: 88, noise: 0, vel: 400, reload: 2.5 }, mods: p_smg },
    { id: "mp5sd", name: "MP5SD", isMeta: true, ammo: "9x19mm", type: "SMG", tip: "Integrierter Schalldämpfer. Sehr leise für Stealth-Runs.", base: { moa: 3.2, rpm: 800, recoil: 85, ergo: 80, noise: +50, vel: 285, reload: 2.4 }, mods: { muzzle: [], optic: ["o_exps", "o_t2"], grip: [], stock: [], mag: ["mag_ext_9mm"] } },
    { id: "mp5k", name: "MP5K", isMeta: false, ammo: "9x19mm", type: "SMG", tip: "Kurzversion, ideal als Backup-Waffe.", base: { moa: 4.0, rpm: 900, recoil: 65, ergo: 95, noise: 0, vel: 350, reload: 2.2 }, mods: { muzzle: ["m_9mm"], optic: ["o_t2"], grip: [], stock: [], mag: ["mag_ext_9mm"] } },
    { id: "vityaz", name: "PP-19-01 Vityaz", isMeta: false, ammo: "9x19mm", type: "SMG", tip: "Russische MP5-Alternative. Spielt sich wie eine kompakte AK.", base: { moa: 3.0, rpm: 750, recoil: 80, ergo: 82, noise: 0, vel: 380, reload: 2.5 }, mods: { muzzle: ["m_9mm"], optic: ["o_kobra", "o_exps"], grip: ["g_rk2", "g_shift"], stock: ["s_pt1"], mag: [] } },
    { id: "vz61", name: "VZ-61 Skorpion", isMeta: false, ammo: ".32 ACP", type: "SMG", tip: "Eher ein Spielzeug. Munition prallt an Rüstungen ab.", base: { moa: 5.0, rpm: 850, recoil: 60, ergo: 98, noise: 0, vel: 320, reload: 2.0 }, mods: { muzzle: [], optic: [], grip: [], stock: [], mag: [] } },
    { id: "m870", name: "M870 Pump-Action", isMeta: false, ammo: "12 Gauge", type: "Shotgun", tip: "Standard-Shotgun. Unbedingt auf die Beine zielen!", base: { moa: 15.0, rpm: 80, recoil: 10, ergo: 40, noise: 0, vel: 400, reload: 6.0 }, mods: p_shot },
    { id: "moss590", name: "Mossberg 590", isMeta: false, ammo: "12 Gauge", type: "Shotgun", tip: "Bessere Shotgun-Alternative zur 870.", base: { moa: 14.5, rpm: 85, recoil: 12, ergo: 42, noise: 0, vel: 410, reload: 5.8 }, mods: p_shot },
    { id: "moss590a1", name: "Mossberg 590A1", isMeta: false, ammo: "12 Gauge", type: "Shotgun", tip: "Schwere Militärversion der 590.", base: { moa: 14.0, rpm: 85, recoil: 15, ergo: 38, noise: 0, vel: 415, reload: 6.0 }, mods: p_shot },
    { id: "moss590_shock", name: "Mossberg 590 Shockwave", isMeta: false, ammo: "12 Gauge", type: "Shotgun", tip: "Extrem kurz, ohne Schaft. Sehr hoher Rückstoß.", base: { moa: 18.0, rpm: 90, recoil: 5, ergo: 70, noise: 0, vel: 380, reload: 5.5 }, mods: { muzzle: ["m_salvo"], optic: [], grip: [], stock: [], mag: [] } },

    // PISTOLS
    { id: "alien", name: "Laugo Alien", isMeta: true, ammo: "9x19mm", type: "Pistole", tip: "0.4 NEU: 'Ein Sportwagen auf Schotterpisten'. Feuert extrem präzise!", base: { moa: 2.5, rpm: 400, recoil: 95, ergo: 95, noise: 0, vel: 360, reload: 1.8 }, mods: { muzzle: ["m_9mm"], optic: ["o_t2"], grip: [], stock: [], mag: [] } },
    { id: "glock17", name: "Glock 17", isMeta: false, ammo: "9x19mm", type: "Pistole", tip: "Beste Standard-Backup-Waffe. Lässt sich gut modifizieren.", base: { moa: 3.5, rpm: 400, recoil: 85, ergo: 90, noise: 0, vel: 375, reload: 1.9 }, mods: { muzzle: ["m_9mm"], optic: ["o_t2"], grip: [], stock: [], mag: ["mag_ext_9mm"] } },
    { id: "glock19", name: "Glock 19", isMeta: false, ammo: "9x19mm", type: "Pistole", tip: "Kompakte Glock. Sehr zuverlässig.", base: { moa: 3.8, rpm: 400, recoil: 82, ergo: 92, noise: 0, vel: 360, reload: 1.8 }, mods: { muzzle: ["m_9mm"], optic: ["o_t2"], grip: [], stock: [], mag: [] } },
    { id: "m9a1", name: "M9A1 Beretta", isMeta: false, ammo: "9x19mm", type: "Pistole", tip: "Solide Pistole mit großer Magazinkapazität.", base: { moa: 3.4, rpm: 350, recoil: 80, ergo: 88, noise: 0, vel: 380, reload: 2.1 }, mods: { muzzle: [], optic: [], grip: [], stock: [], mag: [] } },
    { id: "m9a3", name: "M9A3 Beretta", isMeta: false, ammo: "9x19mm", type: "Pistole", tip: "Modernisierte Beretta mit Gewindelauf.", base: { moa: 3.2, rpm: 350, recoil: 82, ergo: 89, noise: 0, vel: 380, reload: 2.0 }, mods: { muzzle: ["m_9mm"], optic: [], grip: [], stock: [], mag: [] } },
    { id: "1911", name: "Colt M1911A1", isMeta: false, ammo: ".45 ACP", type: "Pistole", tip: "Nur 7 Schuss, aber .45 ACP richtet enormen Fleischschaden an.", base: { moa: 3.0, rpm: 300, recoil: 70, ergo: 85, noise: 0, vel: 250, reload: 2.2 }, mods: { muzzle: ["m_banish"], optic: [], grip: ["pg_dd"], stock: [], mag: [] } },
    { id: "ccc", name: "Colt Combat Commander", isMeta: false, ammo: ".45 ACP", type: "Pistole", tip: "Kompakte, kürzere Version der 1911.", base: { moa: 3.5, rpm: 300, recoil: 65, ergo: 88, noise: 0, vel: 240, reload: 2.1 }, mods: { muzzle: ["m_banish"], optic: [], grip: [], stock: [], mag: [] } },
    { id: "makarov", name: "Makarov PM", isMeta: false, ammo: "9x18mm", type: "Pistole", tip: "Absolute Notfall-Waffe. Schnell austauschen.", base: { moa: 4.5, rpm: 350, recoil: 85, ergo: 95, noise: 0, vel: 315, reload: 1.8 }, mods: { muzzle: [], optic: [], grip: [], stock: [], mag: [] } },
    { id: "makarov_pb", name: "Makarov PB", isMeta: false, ammo: "9x18mm", type: "Pistole", tip: "Integrierter Schalldämpfer für Stealth-Kills.", base: { moa: 4.5, rpm: 350, recoil: 88, ergo: 92, noise: +60, vel: 290, reload: 2.0 }, mods: { muzzle: [], optic: [], grip: [], stock: [], mag: [] } },
    { id: "typ51", name: "Type-51 / TT", isMeta: false, ammo: "7.62x25mm", type: "Pistole", tip: "Hohe Penetration für eine Pistole, aber winziges Magazin.", base: { moa: 3.0, rpm: 350, recoil: 75, ergo: 86, noise: 0, vel: 450, reload: 2.1 }, mods: { muzzle: [], optic: [], grip: [], stock: [], mag: [] } }
];
    
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
// 4. RÜSTUNG, HELME & GEAR DATENBANK (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
// isMeta: true markiert absolute Game-Changer Items!

const gearDb = [
    // ==========================================
    // --- PLATE CARRIERS (Schwere Panzerung) ---
    // ==========================================
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Plate6 Plate Carrier", stats: "NIJ III++", isMeta: true, info: "<b>Warum er Meta ist:</b> Bietet den höchsten Schutz (inklusive der Seiten), ist aber mit fast 15kg der schwerste Plattenträger im Spiel! Zieht massiv Ausdauer." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Phantom Type 2", stats: "NIJ III++", isMeta: true, info: "<b>Warum er Meta ist:</b> Hervorragende III++ Panzerung für Front und Rücken ohne den massiven Gewichts-Nachteil der Plate6. Perfekt ausbalanciert." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Recon Plate Carrier (RPC)", stats: "NIJ III+", isMeta: true, info: "<b>Warum er Meta ist:</b> Der leichteste III+ Carrier im Spiel! Bietet höchste Mobilität bei exzellentem Schutz und großem Stauraum." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "M2 Plate Carrier", stats: "NIJ III+", isMeta: true, info: "<b>Warum er Meta ist:</b> Sehr beliebter Mid-Weight Carrier. Bietet III+ Schutz (Front/Rücken) und lässt sich extrem gut bei KIs farmen." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "CGPC3 TQS", stats: "NIJ III+", isMeta: true, info: "<b>Warum er Meta ist:</b> Ein hervorragender westlicher Plate Carrier. Bietet starken Schutz und eine sehr gute Anordnung für Magazine." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Chest Rig 901 Elite 4", stats: "NIJ III+", isMeta: true, info: "<b>Warum es Meta ist:</b> Ein gepanzertes Chest Rig der Elite-Klasse! Bietet sowohl massig Platz als auch integrierte ballistische Platten." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Modular Operator Carrier Gen II", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Guter Rundumschutz inklusive der Seiten. Das gleicht die etwas niedrigere Rüstungsklasse (im Vergleich zu III+) extrem gut aus." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Pantsir 2.0", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Sehr solider russischer Plattenträger. Schwer, aber absolut zuverlässig gegen Scav-Beschuss." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Specter", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Solide Panzerung für Mid-Game Gebiete. Schützt zuverlässig vor Standardmunition." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "CZ 4M Lancer", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Guter Schutz, aber sehr klobig und schwer. Verringert deine Ausdauer beim Sprinten spürbar." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "CZ 4M Lancer (UNLRA)", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Auffällig blaue Variante der UNLRA-Truppen. Schützt gut, macht dich aber im Dschungel zur wandelnden blauen Zielscheibe!" },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "LCS Sentry", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Leichter Plattenträger. Bietet guten Schutz mit hoher Mobilität, hat aber wenig Platz für große Loot-Touren." },

    // ==========================================
    // --- ARMOR VESTS (Weichballistik) ---
    // ==========================================
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "ATBV Schutzweste", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Seltene Weichballistik, die auch Gewehrkugeln stoppt. Du musst aber zwingend ein taktisches Rig darüber anziehen für Magazine." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "PACA Schutzweste", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> ACHTUNG: Stoppt NUR Pistolen und Schrot! Gegen Sturmgewehre komplett nutzlos." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "6B2 Schutzweste", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Alte russische Weste. Stoppt keine Gewehrkugeln." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "Fraktions-Weste (LRI/MSS/CSI)", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Deine Startweste. Tausche sie so schnell wie möglich gegen einen echten Plate Carrier aus!" },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "Security Weste", stats: "NIJ IIA", isMeta: false, info: "<b>Info:</b> Absoluter Müll. Schützt bestenfalls vor kleinen Splittern." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "6B13-1 Sturm-Panzerung", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Russische Standard-Panzerung. Solide, aber meist schwerer als westliche Alternativen." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "6B23-1 Panzerung", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Vergleichbar mit der 6B13, oft bei Militär-KIs (wie in Fort Narith) zu finden." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "6B33 Defender-2 Schutzweste", stats: "NIJ III", isMeta: true, info: "<b>Warum sie Meta ist:</b> Legendäre Rüstung! Stoppt extrem starke AP-Munition mehrmals. Macht dich aber schwerfällig." },

    // ==========================================
    // --- BACKPACKS (Rucksäcke) ---
    // ==========================================
    { category: "🎒 Rucksäcke (Backpacks)", name: "Wanderer Rucksack (Trekstars 70L)", stats: "42 Slots (6x7)", isMeta: true, info: "<b>Warum er extrem beliebt ist:</b> Der absolute Favorit der Community für Loot-Touren!" },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Delta Rucksack", stats: "36 Slots (6x6)", isMeta: true, info: "<b>Warum er der Beste ist:</b> Der absolut größte militärische Rucksack im Spiel. Unverzichtbar für ausgedehnte Loot-Runs in den Endgame-Zonen (Tiger Bay)." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Rush 72 2.0", stats: "30 Slots (5x6)", isMeta: true, info: "<b>Warum er gut ist:</b> Hervorragender, robuster Militär-Rucksack für lange Tasks. Bietet Platz für 2-3 zerlegte Waffen." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "6Sh118 Ratnik V2", stats: "30 Slots (5x6)", isMeta: false, info: "<b>Warum er gut ist:</b> Kam Neu mit dem Spearhead Update. Ähnlich wie der Rush Rucksack, nur etwas schwerer." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Falang 28", stats: "24 Slots (4x6)", isMeta: false, info: "<b>Warum er gut ist:</b> Ziviler Rucksack. Toller Kompromiss aus Stauraum und unauffälligem Profil." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Rush 24", stats: "24 Slots (4x6)", isMeta: false, info: "<b>Warum er gut ist:</b> Die kompaktere Version des Rush 72. Perfekter Allrounder." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "3-Tages-Sturmrucksack", stats: "24 Slots (4x6)", isMeta: false, info: "<b>Warum er gut ist:</b> Der militärische Standard von Gunny. Sehr verlässliches Platzangebot." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "AMP12 Rucksack", stats: "20 Slots (4x5)", isMeta: false, info: "<b>Warum er gut ist:</b> Beliebte Quest-Belohnung (Gunny). Perfekte Größe für Mid-Game Missionen, wo Geschwindigkeit wichtig ist." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Patrouillen-Rucksack", stats: "20 Slots (4x5)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Reiner Anfänger-Rucksack für die ersten Stunden." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Scorpion OCP", stats: "16 Slots (4x4)", isMeta: false, info: "<b>Warum er gut ist:</b> Bester Rucksack für das Early-Game. Reicht genau für ein OP-Kit, Wasser und ein bisschen Loot." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Tagesrucksack (Daypack)", stats: "16 Slots (4x4)", isMeta: false, info: "<b>Warum er gut ist:</b> Ziviles Äquivalent zum Scorpion OCP. Liegt oft in Häusern herum." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Gunfighter 14", stats: "9 Slots (3x3)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Kompakter Taktischer Rucksack, gerade am Anfang sehr beliebt." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Sport Rucksack", stats: "9 Slots (3x3)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Ähnlich wie der Touristenrucksack, kann man sehr oft finden. Wenn du keinen hast, ist er besser als nichts." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Turnbeutel (Drawstring Bag)", stats: "8 Slots (2x4)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Wenn du absolut pleite bist. Besser als nichts, aber mehr als ein Med-Kit passt nicht rein." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Kleiner Touristenrucksack", stats: "6 Slots (2x3)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Kann man sehr oft finden, wenn du keinen hast, ist er besser als nichts." },

    // ==========================================
    // --- TACTICAL RIGS (Tragesysteme) ---
    // ==========================================
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "LBT-1961A Chest Rig", stats: "High Capacity", isMeta: true, info: "<b>Warum es Meta ist:</b> Das beste Rig im Spiel! Fasst extrem viele Magazine und Granaten. Wird direkt über Weichballistik getragen." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "TacTec Brust-Rig", stats: "Medium Capacity", isMeta: false, info: "<b>Info:</b> Solides, zuverlässiges Rig für mittlere Einsätze." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Recon Chest Rig", stats: "Medium Capacity", isMeta: false, info: "<b>Info:</b> Leichtes Rig, ideal für schnelle Flankierungs-Manöver." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Viper Chest Rig", stats: "Medium Capacity", isMeta: false, info: "<b>Info:</b> Droppt oft vom Boss 'Viper' im Dschungel. Sieht cool aus und bietet vernünftigen Platz." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Training Mini Rig", stats: "Low Capacity", isMeta: false, info: "<b>Info:</b> Reicht für 2 Magazine und 2 Bandagen. Sehr unauffällig." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Type 81 AK-Rig", stats: "Low Capacity", isMeta: false, info: "<b>Info:</b> Start-Ausrüstung für AK-Spieler." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Type 56 AK-Rig", stats: "Low Capacity", isMeta: false, info: "<b>Info:</b> Günstiges, weit verbreitetes Tragesystem bei KIs." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Improvisiertes Rig", stats: "Minimal Capacity", isMeta: false, info: "<b>Info:</b> Besser als die Taschen deiner Hose, aber ansonsten Müll." },

    // ==========================================
    // --- HEADWEAR (Helme & Kopfbedeckung) ---
    // ==========================================
    { category: "🪖 Helme & Kopfbedeckung", name: "FAST MT Helm", stats: "NIJ IIIA+", isMeta: true, info: "<b>Warum er Meta ist:</b> Der beste Allround-Helm! Erlaubt Headsets, Nachtsichtgeräte (NVGs) und hat das beste Gewicht-Schutz-Verhältnis." },
    { category: "🪖 Helme & Kopfbedeckung", name: "Altyn Helm", stats: "NIJ III", isMeta: true, info: "<b>Warum er Meta ist:</b> Ein Panzer für den Kopf! Stoppt Gewehrkugeln. ACHTUNG: Du kannst kein Headset tragen und das Sichtfeld ist massiv eingeschränkt!" },
    { category: "🪖 Helme & Kopfbedeckung", name: "EXFIL Helm (Team Wendy)", stats: "NIJ IIIA", isMeta: true, info: "<b>Warum er Meta ist:</b> Top-Ergonomie, unterstützt volle Kopf-Modifikationen wie NVGs." },
    { category: "🪖 Helme & Kopfbedeckung", name: "MICH TC-2000", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Guter Mid-Game Helm. Schützt vor Pistolen und Granatsplittern." },
    { category: "🪖 Helme & Kopfbedeckung", name: "MICH TC-2002", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Etwas höher geschnitten als der TC-2000, um größere Headsets besser zuzulassen." },
    { category: "🪖 Helme & Kopfbedeckung", name: "LSHZ 1+", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Russischer Standardhelm. Sehr oft in Kisten und bei KIs zu finden." },
    { category: "🪖 Helme & Kopfbedeckung", name: "6B47 Ratnik", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Robustes russisches Design. Unterstützt Nachtsichtgeräte." },
    { category: "🪖 Helme & Kopfbedeckung", name: "SSh-68 Stahlhelm", stats: "NIJ IIA", isMeta: false, info: "<b>Info:</b> Klassischer Blechhelm. Schützt fast vor gar nichts." },
    { category: "🪖 Helme & Kopfbedeckung", name: "Skull Crusher (NVG Mount)", stats: "Kein Schutz", isMeta: false, info: "<b>Info:</b> Reines Tragesystem für Nachtsichtgeräte, wenn man extrem leicht (ohne Helm) unterwegs sein will." },
    { category: "🪖 Helme & Kopfbedeckung", name: "Dschungelhut (Boonie Hat)", stats: "Tarnung", isMeta: false, info: "<b>Info:</b> Bricht die menschliche Silhouette im dichten Dschungel auf." },
    { category: "🪖 Helme & Kopfbedeckung", name: "Baseballkappe / Beanie", stats: "Kosmetisch", isMeta: false, info: "<b>Info:</b> Reiner Drip für Operator." },

    // ==========================================
    // --- HEADSETS (Gehörschutz) ---
    // ==========================================
    { category: "🎧 Headsets (Gehörschutz)", name: "ComTac 4 Headset", stats: "Audio Meta", isMeta: true, info: "<b>Warum es Meta ist:</b> Das beste Headset im Spiel! Filtert laute Geräusche (eigene Schüsse, Wind) perfekt heraus und verstärkt feindliche Schritte massiv." },
    { category: "🎧 Headsets (Gehörschutz)", name: "Sordin Supreme Pro-X", stats: "Audio High", isMeta: true, info: "<b>Warum es Meta ist:</b> Sehr basslastiges Profil. Schritte auf Holz und Stein sind extrem gut und früh hörbar." },
    { category: "🎧 Headsets (Gehörschutz)", name: "ComTac 2", stats: "Audio Mid", isMeta: false, info: "<b>Info:</b> Gutes Mid-Tier Headset. Deutliches Upgrade zum Spielen ohne Gehörschutz." },
    { category: "🎧 Headsets (Gehörschutz)", name: "Earmor M32", stats: "Audio Mid", isMeta: false, info: "<b>Info:</b> Oft getragen von Söldnern. Solide Geräuschunterdrückung." },
    { category: "🎧 Headsets (Gehörschutz)", name: "Walker's Razor", stats: "Audio Mid", isMeta: false, info: "<b>Info:</b> Solides Einsteiger-Headset, manchmal etwas aggressiv bei Umgebungsgeräuschen." },
    { category: "🎧 Headsets (Gehörschutz)", name: "GSSh-01 Headset", stats: "Audio Low", isMeta: false, info: "<b>Info:</b> Das 'Rausche-Headset'. Verstärkt Schritte, aber deine eigenen Schüsse sprengen dir fast die Ohren weg. Nur im äußersten Notfall nutzen." },

    // ==========================================
    // --- FACE COVER & GLASSES ---
    // ==========================================
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Gasmaske (Gas Mask)", stats: "Strahlenschutz", isMeta: true, info: "<b>WICHTIG (0.4 UPDATE):</b> Absolut zwingend erforderlich, um Ground Zero zu betreten (in Kombination mit Rad-X Pillen)!" },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Sturmhaube (Balaclava)", stats: "Tarnung", isMeta: true, info: "<b>Warum sie Meta ist:</b> Verdeckt dein helles Gesicht im Dschungel. Ein absolutes Muss für PvP-Spieler, um nicht sofort gesehen zu werden!" },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Shemagh", stats: "Tarnung", isMeta: false, info: "<b>Info:</b> Klassisches Wüstentuch. Gute Alternative zur Balaclava." },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Schlauchschal (Neck Gaiter)", stats: "Tarnung", isMeta: false, info: "<b>Info:</b> Deckt den unteren Teil des Gesichts ab." },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Bandana", stats: "Tarnung", isMeta: false, info: "<b>Info:</b> Banditen-Style für den leichten Look." },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Taktische Schutzbrille", stats: "Kosmetisch", isMeta: false, info: "<b>Info:</b> Verhindert Glare (Blendung) in manchen Lichtsituationen." },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Sportsonnenbrille / Aviators", stats: "Kosmetisch", isMeta: false, info: "<b>Info:</b> Aktuell rein optische Anpassungen für deinen Operator." },

    // ==========================================
    // --- BELTS (Taktische Gürtel) ---
    // ==========================================
    { category: "🪢 Taktische Gürtel (Belts)", name: "Operator Gürtel (Operator Belt)", stats: "2x3 Slots", isMeta: true, info: "<b>Warum er Meta ist:</b> Der größte Gürtel im Spiel! Erlaubt dir, 60-Schuss-Magazine, Meds und mehrere Granaten im absoluten Schnellzugriff zu haben." },
    { category: "🪢 Taktische Gürtel (Belts)", name: "Gefechtsgürtel (Battle Belt)", stats: "2x2 Slots", isMeta: true, info: "<b>Warum er gut ist:</b> Sehr guter Mid-Game Gürtel. Bietet Platz für Erste-Hilfe (SurKit) und Ersatzmagazine." },
    { category: "🪢 Taktische Gürtel (Belts)", name: "Taktischer Gürtel (Tactical Belt)", stats: "1x2 Slots", isMeta: false, info: "<b>Info:</b> Besser als der Standard-Dienstgürtel." },
    { category: "🪢 Taktische Gürtel (Belts)", name: "Dienstgürtel (Duty Belt)", stats: "1x2 Slots", isMeta: false, info: "<b>Info:</b> Start-Ausrüstung. Reicht gerade mal für eine Bandage und ein kleines Magazin." }
];
    
// ==========================================
// 5. BOSS DATENBANK (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const bosses = {
    // --- Startregionen & Mid-Game ---
    "market_leader": { 
        name: "Criminal Leader", 
        threat: "low", 
        loc: "Nam Thaven / Kiu Vongsa / Pha Lang (Marktplatz)", 
        loot: "AK-74 (Modernisiert), Fraktions-Schlüssel", 
        tip: "Oft in Gebäuden mit zwei Ausgängen verschanzt. Nutze Splittergranaten, bevor du den Raum betrittst, um seine Wachen auszuschalten." 
    },
    "lumber_boss": { 
        name: "Foreman (Red Stone Brigade)", 
        threat: "med", 
        loc: "Sägewerk (Sawmill)", 
        loot: "Schrotflinte, Sägewerk-Schlüssel, AK-74M mit ACOG", 
        tip: "Gehört zur Red Stone Brigade. Sie sind hochkoordiniert und sollten nicht als unorganisierte Miliz unterschätzt werden. Halte Distanz vom Waldrand aus." 
    },
    "rebel_ybl": { 
        name: "Rebel Leader (LLA)", 
        threat: "high", 
        loc: "YBL-1 Bunker (Büro-Ebene)", 
        loot: "AK-Plattform, Blaues Bandana (Einzigartig), Bunker-Schlüssel", 
        tip: "Extreme Nahkampfgefahr! Die engen Korridore bevorteilen CQB-Waffen. Er nutzt oft dunkle Ecken und Räume, um tödliche Hinterhalte zu legen." 
    },
    "hunter_commander": { 
        name: "Hostile Commander (Lotus Circle)", 
        threat: "high", 
        loc: "Hunter's Paradise (Waffenlager)", 
        loot: "Modifizierte M4A1, Mossberg 590, Schalldämpfer", 
        tip: "Trägt meist einen NIJ III Helm. Kopfschüsse sind hier nur mit panzerbrechender (AP) Munition effektiv. Sichere erst die Außenbereiche." 
    },
    "malo_blue": { 
        name: "Malo 'Grin' Luangrath", 
        threat: "extreme", 
        loc: "Blaue Lagune (Restaurant)", 
        loot: "Goldene Uhr, 1911 C Pistole (im Halster versteckt), AK-74M", 
        tip: "Die gefährlichste KI im Mid-Game. Er hat eine extrem hohe Reaktionszeit und patrouilliert oft verdeckt mit dem brutalen Sifa Syndicate." 
    },
    "banpa_leader": { 
        name: "Naga (Elder)", 
        threat: "med", 
        loc: "Ban Pa (Häuser auf Stelzen)", 
        loot: "SKS, Quest-Dokumente, Elder Key", 
        tip: "Bleibt oft in den runden Holzhütten am Wasser. Vorsicht vor den Naga-Scharfschützen, die sich in den Bäumen und im dichten Blattwerk der Küste verstecken." 
    },
    
    // --- End-Game & High Danger ---
    "fort_commander": { 
        name: "General Pa (LAF)", 
        threat: "extreme", 
        loc: "Fort Narith (HQ - Obergeschoss)", 
        loot: "Militär-Ausrüstung, HQ Schlüssel, Gravierte AK-74M", 
        tip: "Absolutes Endgame-Ziel, extrem schwer bewacht durch elitäre LAF Truppen. Nimm ein komplettes Squad mit und achte auf die dynamischen Mörserschläge im Außengebiet." 
    },
    "midnight_laf": { 
        name: "LAF Commander", 
        threat: "extreme", 
        loc: "Midnight Sapphire (Hotel Dach)", 
        loot: "DMR-Gewehre (M700), Hotel-Keys", 
        tip: "Tödliche Gefahr durch Sniper auf dem Dach und auf dem Helipad. Räume das Hotel systematisch von unten nach oben über das Haupttreppenhaus." 
    },
    "tiger_bay_unlra": { 
        name: "UNLRA Officer", 
        threat: "extreme", 
        loc: "Tiger Bay (UNLRA HQ / Zeltlager)", 
        loot: "SVD Sniper, UNLRA-Intel (Blaue Mappe), Level 4 Armor", 
        tip: "Verschanzt sich im Zeltlager nahe dem HQ. Das Gebiet ist ein absoluter Fleischwolf. Achtung vor endlosen KI-Patrouillen und feindlichen Snipern in den Büschen auf dem Weg dorthin." 
    },
    "tiger_bay_pier": { 
        name: "Pier Boss", 
        threat: "extreme", 
        loc: "Tiger Bay (Pier / Hafenanlagen)", 
        loot: "CQB-Waffen, Pier-Schlüssel, Wertsachen", 
        tip: "Das Pier-Gebiet ist ein unübersichtliches Labyrinth aus Containern. Nutze das Wasser als Flanke, aber pass auf Scharfschützen an der Küstenlinie auf." 
    },
    "airfield_boss": { 
        name: "Airfield Commander (Viper Tactical)", 
        threat: "extreme", 
        loc: "Pha Lang Airfield / Hangars", 
        loot: "CQA1 Rifle (Einzigartig), Airfield-Keys, High-Tier Gear (Nachtsicht)", 
        tip: "Die Viper Tactical Services nutzen professionelle Flankierung und ständiges Unterdrückungsfeuer. Ziehe die KIs einzeln aus der Distanz auf das offene Rollfeld (Runway)." 
    },

    // --- Roaming Bosses (Wechselnde Spawns) ---
    "viper": { 
        name: "Viper (Roaming)", 
        threat: "high", 
        loc: "Dschungel-Camps (Zufällige Spawns)", 
        loot: "Viper Chest Rig (Einzigartig)", 
        tip: "Spawnt völlig zufällig in den dichten Wäldern zwischen den POIs. Er ist in der Vegetation perfekt getarnt und greift oft ohne Vorwarnung aus dem Gebüsch an." 
    },
    "bloodhound": { 
        name: "Bloodhound", 
        threat: "high", 
        loc: "Military Checkpoints (Zufällige Spawns)", 
        loot: "Spezial-Ausrüstung, Checkpoint-Keys", 
        tip: "Patrouilliert zufällig zwischen den abgeriegelten militärischen Straßensperren. Er und seine Wachen nutzen oft Schalldämpfer, achte also genau auf das Mündungsfeuer im Wald!" 
    },
    "golden_boy": { 
        name: "Golden Boy", 
        threat: "high", 
        loc: "Midnight Sapphire (Luxus-Villa)", 
        loot: "Wertsachen, Goldene Items, Safe-Codes", 
        tip: "Hält sich fast ausschließlich in den geschlossenen Räumen der Villa auf. Schieße die Lichter aus, schalte den Stromkasten ab, nutze Nachtsicht und stürme mit CQB-Waffen." 
    }
};
    
// ==========================================
// 6. BALLISTICS & AMMO DATABASE (0.4 SPREADSHEET MATRIX - COMPLETE)
// Werte: 3 = 1 TAP, 2 = Medium Trauma, 1 = Light Trauma, 0 = NO PEN
// ==========================================
const ammoDb = [
    // --- 7.65 Browning ---
    { cal: "7.65 Browning", name: "FMJ", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "318 m/s", acc: "0%", dur: "0%", price: "$1", source: "Artisan LL1" },
    { cal: "7.65 Browning", name: "JHP", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "276 m/s", acc: "-4%", dur: "0%", price: "$2", source: "Artisan LL1" },
    { cal: "7.65 Browning", name: "XTREME DEF", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "290 m/s", acc: "-2%", dur: "-15%", price: "$4", source: "Artisan LL2" },

    // --- 7.62x25mm Tokarev ---
    { cal: "7.62x25mm", name: "FMJ", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "430 m/s", acc: "0%", dur: "0%", price: "$1", source: "Artisan LL1" },
    { cal: "7.62x25mm", name: "PST", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "430 m/s", acc: "-2%", dur: "-15%", price: "$3", source: "Artisan LL2" },
    { cal: "7.62x25mm", name: "PT", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "415 m/s", acc: "-2%", dur: "0%", price: "$1", source: "Artisan LL1" },

    // --- 9x18mm Makarov ---
    { cal: "9x18mm", name: "PST", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "315 m/s", acc: "0%", dur: "0%", price: "$1", source: "Turncoat LL1" },
    { cal: "9x18mm", name: "SP7", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "420 m/s", acc: "-4%", dur: "-15%", price: "$3", source: "Turncoat LL2" },
    { cal: "9x18mm", name: "PMM", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "415 m/s", acc: "0%", dur: "-40%", price: "$6", source: "Turncoat LL3" },

    // --- 9x19mm ---
    { cal: "9x19mm", name: "FMJ", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "390 m/s", acc: "0%", dur: "0%", price: "$1", source: "Gunny LL1" },
    { cal: "9x19mm", name: "TRACER", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "342 m/s", acc: "-4%", dur: "0%", price: "$1", source: "Gunny LL1" },
    { cal: "9x19mm", name: "HP", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "377 m/s", acc: "-3%", dur: "0%", price: "$2", source: "Gunny LL1" },
    { cal: "9x19mm", name: "XTREME PEN", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "381 m/s", acc: "+2%", dur: "-15%", price: "$4", source: "Gunny LL2" },
    { cal: "9x19mm", name: "LIBRA SNAIL", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":0, "III++":0 }, speed: "700 m/s", acc: "0%", dur: "-40%", price: "$10", source: "Gunny LL3" },

    // --- .45 ACP ---
    { cal: ".45 ACP", name: "FMJ", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "260 m/s", acc: "0%", dur: "0%", price: "$2", source: "Artisan LL1" },
    { cal: ".45 ACP", name: "JHP", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "290 m/s", acc: "-2%", dur: "0%", price: "$3", source: "Artisan LL1" },
    { cal: ".45 ACP", name: "HYDRA-SHOK", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "274 m/s", acc: "0%", dur: "-15%", price: "$5", source: "Artisan LL2" },
    { cal: ".45 ACP", name: "AP", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "450 m/s", acc: "0%", dur: "-40%", price: "$10", source: "Artisan LL3" },

    // --- .222 Rem ---
    { cal: ".222 Rem", name: "SP", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "970 m/s", acc: "-5%", dur: "0%", price: "$1", source: "Artisan LL1" },
    { cal: ".222 Rem", name: "FMJ", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "970 m/s", acc: "0%", dur: "0%", price: "$2", source: "Artisan LL1" },
    { cal: ".222 Rem", name: "HP", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "966 m/s", acc: "-2%", dur: "-15%", price: "$4", source: "Artisan LL2" },

    // --- 4.6x30mm (MP7) ---
    { cal: "4.6x30mm", name: "SUBSONIC", penMap: { "IIIA":3, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "290 m/s", acc: "0%", dur: "0%", price: "$2", source: "Banshee LL1" },
    { cal: "4.6x30mm", name: "FMJ SX", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":0, "III++":0 }, speed: "620 m/s", acc: "0%", dur: "0%", price: "$3", source: "Banshee LL1" },
    { cal: "4.6x30mm", name: "ACTION SX", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "690 m/s", acc: "0%", dur: "0%", price: "$3", source: "Banshee LL1" },
    { cal: "4.6x30mm", name: "V-MAX", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "640 m/s", acc: "0%", dur: "-15%", price: "$5", source: "Banshee LL2" },
    { cal: "4.6x30mm", name: "AP SX", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "680 m/s", acc: "0%", dur: "-40%", price: "$10", source: "Banshee LL3" },

    // --- 5.45x39mm (AK-74) ---
    { cal: "5.45x39mm", name: "US", penMap: { "IIIA":3, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "303 m/s", acc: "-6%", dur: "0%", price: "$2", source: "Turncoat LL1" },
    { cal: "5.45x39mm", name: "FMJ", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "855 m/s", acc: "0%", dur: "-15%", price: "$3", source: "Turncoat LL2" },
    { cal: "5.45x39mm", name: "HP", penMap: { "IIIA":3, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "880 m/s", acc: "-6%", dur: "-15%", price: "$4", source: "Turncoat LL2" },
    { cal: "5.45x39mm", name: "PS", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":0, "III++":0 }, speed: "900 m/s", acc: "-2%", dur: "-15%", price: "$5", source: "Turncoat LL2" },
    { cal: "5.45x39mm", name: "PP", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":0 }, speed: "870 m/s", acc: "+2%", dur: "-40%", price: "$11", source: "Turncoat LL3" },
    { cal: "5.45x39mm", name: "BT", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":0 }, speed: "915 m/s", acc: "+2%", dur: "-40%", price: "$11", source: "Turncoat LL3" },
    { cal: "5.45x39mm", name: "BP", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "860 m/s", acc: "+1%", dur: "-100%", price: "$21", source: "Turncoat LL4" },
    { cal: "5.45x39mm", name: "BS", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "840 m/s", acc: "+6%", dur: "-100%", price: "$21", source: "Turncoat LL4" },

    // --- 5.56x45mm (M4A1) ---
    { cal: "5.56x45mm", name: "SP", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "930 m/s", acc: "-3%", dur: "0%", price: "$2", source: "Gunny LL1" },
    { cal: "5.56x45mm", name: "FMJ", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "880 m/s", acc: "0%", dur: "0%", price: "$3", source: "Gunny LL1" },
    { cal: "5.56x45mm", name: "HPBT", penMap: { "IIIA":3, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "861 m/s", acc: "-3%", dur: "-15%", price: "$4", source: "Gunny LL2" },
    { cal: "5.56x45mm", name: "M193", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "1006 m/s", acc: "+2%", dur: "-15%", price: "$4", source: "Gunny LL2" },
    { cal: "5.56x45mm", name: "M855", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":0, "III++":0 }, speed: "920 m/s", acc: "+2%", dur: "-15%", price: "$8", source: "Gunny LL2" },
    { cal: "5.56x45mm", name: "M856 (Tracer)", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":0, "III++":0 }, speed: "917 m/s", acc: "-3%", dur: "-15%", price: "$8", source: "Gunny LL2" },
    { cal: "5.56x45mm", name: "M856A1", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":0 }, speed: "945 m/s", acc: "-4%", dur: "-40%", price: "$12", source: "Gunny LL3" },
    { cal: "5.56x45mm", name: "M855A1", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "970 m/s", acc: "+7%", dur: "-40%", price: "$12", source: "Gunny LL3" },
    { cal: "5.56x45mm", name: "M995 AP", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "1030 m/s", acc: "+5%", dur: "-100%", price: "$22", source: "Gunny LL4" },

    // --- 7.62x39mm (AKM) ---
    { cal: "7.62x39mm", name: "US", penMap: { "IIIA":3, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "310 m/s", acc: "-6%", dur: "0%", price: "$2", source: "Artisan LL1" },
    { cal: "7.62x39mm", name: "SP", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "743 m/s", acc: "-2%", dur: "0%", price: "$2", source: "Artisan LL1" },
    { cal: "7.62x39mm", name: "FMJ", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "738 m/s", acc: "-6%", dur: "0%", price: "$4", source: "Turncoat LL1" },
    { cal: "7.62x39mm", name: "TRACER", penMap: { "IIIA":3, "IIIA+":3, "III":0, "III+":0, "III++":0 }, speed: "725 m/s", acc: "-3%", dur: "0%", price: "$4", source: "Turncoat LL1" },
    { cal: "7.62x39mm", name: "PS", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":0, "III++":0 }, speed: "725 m/s", acc: "+1%", dur: "-15%", price: "$9", source: "Turncoat LL2" },
    { cal: "7.62x39mm", name: "PP", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":0 }, speed: "740 m/s", acc: "+1%", dur: "-40%", price: "$13", source: "Turncoat LL3" },
    { cal: "7.62x39mm", name: "BP", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "740 m/s", acc: "+2%", dur: "-100%", price: "$23", source: "Turncoat LL4" },

    // --- 7.62x51mm (M700) ---
    { cal: "7.62x51mm", name: "HPBT", penMap: { "IIIA":3, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "800 m/s", acc: "+4%", dur: "-40%", price: "$12", source: "Gunny LL3" },
    { cal: "7.62x51mm", name: "M80", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":0 }, speed: "817 m/s", acc: "0%", dur: "0%", price: "$5", source: "Gunny LL1" },
    { cal: "7.62x51mm", name: "M62 (Tracer)", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":0 }, speed: "820 m/s", acc: "-4%", dur: "0%", price: "$5", source: "Gunny LL1" },
    { cal: "7.62x51mm", name: "M80A1", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "835 m/s", acc: "+3%", dur: "-40%", price: "$15", source: "Gunny LL3" },
    { cal: "7.62x51mm", name: "M61", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "838 m/s", acc: "+4%", dur: "-100%", price: "$28", source: "Gunny LL4" },

    // --- 7.62x54mmR (Mosin) ---
    { cal: "7.62x54mmR", name: "SP", penMap: { "IIIA":3, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "700 m/s", acc: "0%", dur: "0%", price: "$4", source: "Turncoat LL1" },
    { cal: "7.62x54mmR", name: "FMJ", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":0, "III++":0 }, speed: "840 m/s", acc: "0%", dur: "0%", price: "$5", source: "Turncoat LL2" },
    { cal: "7.62x54mmR", name: "LPS", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":0 }, speed: "865 m/s", acc: "0%", dur: "-15%", price: "$8", source: "Turncoat LL2" },
    { cal: "7.62x54mmR", name: "T-46M", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":0 }, speed: "800 m/s", acc: "-2%", dur: "-15%", price: "$8", source: "Turncoat LL2" },
    { cal: "7.62x54mmR", name: "SNB", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "875 m/s", acc: "+2%", dur: "-40%", price: "$16", source: "Turncoat LL3" },
    { cal: "7.62x54mmR", name: "BS", penMap: { "IIIA":3, "IIIA+":3, "III":3, "III+":3, "III++":3 }, speed: "860 m/s", acc: "+4%", dur: "-100%", price: "$25", source: "Turncoat LL4" },

    // --- 12 Gauge (Schrotflinten) ---
    { cal: "12 Gauge", name: "00 BUCK", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "370 m/s", acc: "+38%", dur: "0%", price: "$3", source: "Gunny LL1" },
    { cal: "12 Gauge", name: "12G SLUG", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "420 m/s", acc: "+42%", dur: "-15%", price: "$5", source: "Gunny LL2" },
    { cal: "12 Gauge", name: "FC 00 BUCK", penMap: { "IIIA":0, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "349 m/s", acc: "+27%", dur: "-15%", price: "$6", source: "Gunny LL2" },
    { cal: "12 Gauge", name: "SST SABOT SLUG", penMap: { "IIIA":3, "IIIA+":0, "III":0, "III+":0, "III++":0 }, speed: "609 m/s", acc: "+50%", dur: "-40%", price: "$12", source: "Gunny LL3" }
];
    
// ==========================================
// 7. SCHLÜSSEL & RÄUME (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const allKeys = [
    // ==========================================
    // --- NAM THAVEN (Mithras Startstadt) ---
    // ==========================================
    { group: "🔰 Startregionen (Mithras)", name: "Arztpraxis-Schlüssel (Nam Thaven Doctor's Office Key)", loc: "Nam Thaven", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
    { group: "🔰 Startregionen (Mithras)", name: "Restaurant-Lager (Nam Thaven Restaurant Storage Key)", loc: "Nam Thaven", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
    { group: "🔰 Startregionen (Mithras)", name: "Markt-Büro (Nam Thaven Marketplace Office Key)", loc: "Nam Thaven", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
    { group: "🔰 Startregionen (Mithras)", name: "Markt-Besenkammer (Nam Thaven Marketplace Broom Closet Key)", loc: "Nam Thaven", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
    { group: "🔰 Startregionen (Mithras)", name: "Markt-Lagerraum (Nam Thaven Marketplace Storeroom Key)", loc: "Nam Thaven", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
    { group: "🔰 Startregionen (Mithras)", name: "Motelzimmer (Nam Thaven Motel Room Key)", loc: "Nam Thaven", effect: "Öffnet ein Motelzimmer am Stadtrand.", loot: "Kleidung, Wertsachen" },
    { group: "🔰 Startregionen (Mithras)", name: "UNLRA-Büro (Nam Thaven UNLRA Office Key)", loc: "Nam Thaven", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
    { group: "🔰 Startregionen (Mithras)", name: "Sägewerk Wartungsraum (Nam Thaven Lumberyard Maintenance Key)", loc: "Nam Thaven", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
    { group: "🔰 Startregionen (Mithras)", name: "Rathaus Finanzabteilung (Nam Thaven Town Hall Finance Key)", loc: "Nam Thaven", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

    // ==========================================
    // --- KIU VONGSA (Crimson Startstadt) ---
    // ==========================================
    { group: "🔰 Startregionen (Crimson)", name: "Arztpraxis-Schlüssel (Kiu Vongsa Doctor's Office Key)", loc: "Kiu Vongsa", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
    { group: "🔰 Startregionen (Crimson)", name: "Restaurant-Lager (Kiu Vongsa Restaurant Storage Key)", loc: "Kiu Vongsa", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
    { group: "🔰 Startregionen (Crimson)", name: "Markt-Büro (Kiu Vongsa Marketplace Office Key)", loc: "Kiu Vongsa", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
    { group: "🔰 Startregionen (Crimson)", name: "Markt-Besenkammer (Kiu Vongsa Marketplace Broom Closet Key)", loc: "Kiu Vongsa", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
    { group: "🔰 Startregionen (Crimson)", name: "Markt-Lagerraum (Kiu Vongsa Marketplace Storeroom Key)", loc: "Kiu Vongsa", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
    { group: "🔰 Startregionen (Crimson)", name: "Motelzimmer (Kiu Vongsa Motel Room Key)", loc: "Kiu Vongsa", effect: "Öffnet ein Motelzimmer.", loot: "Kleidung, Wertsachen" },
    { group: "🔰 Startregionen (Crimson)", name: "UNLRA-Büro (Kiu Vongsa UNLRA Office Key)", loc: "Kiu Vongsa", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
    { group: "🔰 Startregionen (Crimson)", name: "Sägewerk Wartungsraum (Kiu Vongsa Lumberyard Maintenance Key)", loc: "Kiu Vongsa", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
    { group: "🔰 Startregionen (Crimson)", name: "Bürgermeister-Villa Zimmer (Kiu Vongsa Mayor's Mansion Key)", loc: "Kiu Vongsa", effect: "Öffnet ein Zimmer in der Bürgermeister-Villa.", loot: "Wertsachen, Safe" },
    { group: "🔰 Startregionen (Crimson)", name: "Rathaus Finanzabteilung (Kiu Vongsa Town Hall Finance Key)", loc: "Kiu Vongsa", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

    // ==========================================
    // --- PHA LANG (Lamang LRI Startstadt) ---
    // ==========================================
    { group: "🔰 Startregionen (Lamang LRI)", name: "Arztpraxis-Schlüssel (Pha Lang Doctor's Office Key)", loc: "Pha Lang", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Restaurant-Lager (Pha Lang Restaurant Storage Key)", loc: "Pha Lang", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Markt-Büro (Pha Lang Marketplace Office Key)", loc: "Pha Lang", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Markt-Besenkammer (Pha Lang Marketplace Broom Closet Key)", loc: "Pha Lang", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Markt-Lagerraum (Pha Lang Marketplace Storeroom Key)", loc: "Pha Lang", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Motelzimmer (Pha Lang Motel Room Key)", loc: "Pha Lang", effect: "Öffnet ein Motelzimmer.", loot: "Kleidung, Wertsachen" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "UNLRA-Büro (Pha Lang UNLRA Office Key)", loc: "Pha Lang", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Sägewerk Wartungsraum (Pha Lang Lumberyard Maintenance Key)", loc: "Pha Lang", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Rathaus Finanzabteilung (Pha Lang Town Hall Finance Key)", loc: "Pha Lang", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

    // ==========================================
    // --- HUNTER'S PARADISE ---
    // ==========================================
    { group: "🎯 Hunter's Paradise", name: "HP Waffenkammer (Hunter's Paradise Weapon Storage Key)", loc: "Hunter's Paradise", effect: "Öffnet die Waffenkammer.", loot: "High-Tier Waffen, Task-Container" },
    { group: "🎯 Hunter's Paradise", name: "HP Motel 102 (Hunter's Paradise Motel Room 102 Key)", loc: "Hunter's Paradise", effect: "Öffnet Zimmer 102 im Motel.", loot: "Task-Intel (True Grit)" },
    { group: "🎯 Hunter's Paradise", name: "HP Motel 101 (Hunter's Paradise Motel Room 101 Key)", loc: "Hunter's Paradise", effect: "Öffnet Zimmer 101 im Motel.", loot: "Low-Tier Waffen, Munition" },
    { group: "🎯 Hunter's Paradise", name: "HP Improvisierte Waffenkammer (Hunter's Paradise Improvised Armory Key)", loc: "Hunter's Paradise", effect: "Öffnet eine umfunktionierte Waffenkammer im Motel.", loot: "Waffen, Aufsätze" },
    { group: "🎯 Hunter's Paradise", name: "HP Schießstand-Lager (Hunter's Paradise Shooting Lines Storage Key)", loc: "Hunter's Paradise", effect: "Öffnet das Lager an den Schießbahnen.", loot: "Munition, Gehörschutz" },
    { group: "🎯 Hunter's Paradise", name: "HP Bunker-Schlüssel (Hunter's Paradise Bunker Key)", loc: "Hunter's Paradise", effect: "Öffnet den kleinen Bunker-Bereich.", loot: "Militärbedarf, Waffen" },

    // ==========================================
    // --- SAWMILL ---
    // ==========================================
    { group: "🌲 Sägewerk (Lumber Yard)", name: "Vorarbeiter-Büro (Sawmill Office Key)", loc: "Sawmill", effect: "Öffnet das Hauptbüro.", loot: "Task-Dokumente, Safe" },
    { group: "🌲 Sägewerk (Lumber Yard)", name: "Sägewerk Büro-Lager (Sawmill Office Storage Room Key)", loc: "Sawmill", effect: "Öffnet den Lagerraum am Büro.", loot: "Task-Container (30kg)" },
    { group: "🌲 Sägewerk (Lumber Yard)", name: "Sägewerk Lagerschuppen (Sawmill Storage Shed Key)", loc: "Sawmill", effect: "Öffnet den Geräteschuppen.", loot: "Werkzeuge, Materialien" },
    { group: "🌲 Sägewerk (Lumber Yard)", name: "Sägewerk Toiletten (Sawmill Toilet Key)", loc: "Sawmill", effect: "Öffnet die sanitären Anlagen.", loot: "Geringe Wertsachen, Medizin" },

    // ==========================================
    // --- BAN PA ---
    // ==========================================
    { group: "🎣 Ban Pa (Fischerdorf)", name: "BP Fischerhütte (Ban Pa Fishing Hut Key)", loc: "Ban Pa", effect: "Öffnet eine verschlossene Hütte am Wasser.", loot: "Task-Intel, Schrott" },
    { group: "🎣 Ban Pa (Fischerdorf)", name: "Haus des Ältesten (Ban Pa Elder's House Key)", loc: "Ban Pa", effect: "Öffnet das große Haus des Dorfältesten.", loot: "Statuen, Task-Item" },
    { group: "🎣 Ban Pa (Fischerdorf)", name: "Zimmer des Ältesten (Ban Pa Elder's Room Key)", loc: "Ban Pa", effect: "Öffnet das Schlafzimmer des Ältesten.", loot: "Wertsachen, Tresor" },
    { group: "🎣 Ban Pa (Fischerdorf)", name: "BP Lagerhaus (Ban Pa Warehouse Key)", loc: "Ban Pa", effect: "Öffnet das Lagergebäude am Rand.", loot: "Schmuggelware, Waffen" },

    // ==========================================
    // --- YBL-1 BUNKER ---
    // ==========================================
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Schlafzimmer (YBL-1 Bedroom Key)", loc: "YBL-1 Bunker", effect: "Öffnet die Schlafräume.", loot: "Kleidung, Wertsachen" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Flur D Lager (YBL-1 Corridor D Storage Room Key)", loc: "YBL-1 Bunker", effect: "Öffnet das Lager in Sektor D.", loot: "Munition, Rucksäcke" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Wartungstür (YBL-1 Maintenance Door Key)", loc: "YBL-1 Bunker", effect: "Öffnet einen Wartungsschacht.", loot: "Werkzeuge, Elektronik" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Waffenkammer (YBL-1 Weapon Storage Key)", loc: "YBL-1 Bunker", effect: "Öffnet die Bunker-Waffenkammer.", loot: "Militär-Waffen, Aufsätze" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Büro 02 (YBL-1 Office 02 Key)", loc: "YBL-1 Bunker", effect: "Öffnet Büro 02.", loot: "Task-Intel (The Negotiator)" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Büro 01 (YBL-1 Office Key 01)", loc: "YBL-1 Bunker", effect: "Öffnet Büro 01.", loot: "Dokumente, Intel" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Generatorraum (YBL-1 Generator Room Key)", loc: "YBL-1 Bunker", effect: "Öffnet den Hauptgeneratorraum.", loot: "Task-Zugang, Werkzeug" },

    // ==========================================
    // --- PHA LANG AIRFIELD ---
    // ==========================================
    { group: "✈️ Ground Zero & Airfield", name: "Hangar 03 Schlüssel (Hangar 03 Key)", loc: "Pha Lang Airfield", effect: "Öffnet Hangar 3.", loot: "Waffen-Teile, Militär-Kisten" },
    { group: "✈️ Ground Zero & Airfield", name: "Airfield Lagerbüro (Pha Lang Airfield Storage Office Key)", loc: "Pha Lang Airfield", effect: "Öffnet das Büro im Lagerbereich.", loot: "Intel, Safe" },
    { group: "✈️ Ground Zero & Airfield", name: "Airfield Besprechungsraum (Pha Lang Airfield Meeting Room Key)", loc: "Pha Lang Airfield", effect: "Öffnet den Meeting-Raum.", loot: "Militärische Pläne, Akten" },
    { group: "✈️ Ground Zero & Airfield", name: "Airport Lagerschuppen (Airport Storage Shed Key)", loc: "Pha Lang Airfield", effect: "Öffnet den Schuppen am Flugfeld.", loot: "Werkzeuge, Treibstoff" },

    // ==========================================
    // --- BLUE LAGOON ---
    // ==========================================
    { group: "🌊 Blaue Lagune (Blue Lagoon)", name: "Malo's Hütte (Blue Lagoon Shack Key)", loc: "Blue Lagoon", effect: "Öffnet die Hütte über dem Wasser.", loot: "Waffen, Task-Items" },
    { group: "🌊 Blaue Lagune (Blue Lagoon)", name: "Lagunen-Bürolager (Blue Lagoon Office Storage Key)", loc: "Blue Lagoon", effect: "Öffnet das Verwaltungsbüro-Lager.", loot: "Intel, Wertsachen" },
    { group: "🌊 Blaue Lagune (Blue Lagoon)", name: "BL Restaurant-Lager (Blue Lagoon Restaurant Storage Key)", loc: "Blue Lagoon", effect: "Öffnet den Storage Room im Restaurant.", loot: "Task-Intel (One Man's Trash)" },

    // ==========================================
    // --- FORT NARITH ---
    // ==========================================
    { group: "🪖 Fort Narith (Basis)", name: "FN HQ Rezeption Lager (Fort Narith HQ Reception Storage Key)", loc: "Fort Narith", effect: "Öffnet das Lager hinter der HQ-Rezeption.", loot: "Bargeld, Elektronik" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Tower-Schlüssel (Fort Narith Air Traffic Control Tower Key)", loc: "Fort Narith", effect: "Öffnet den ATC-Tower.", loot: "Militär-Funk, Waffen" },
    { group: "🪖 Fort Narith (Basis)", name: "FN HQ Archiv (Fort Narith HQ Archive Key)", loc: "Fort Narith", effect: "Öffnet das Archiv im Hauptquartier.", loot: "Intel, Geheimdokumente" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke A102 (A102 Key)", loc: "Fort Narith", effect: "Öffnet Raum A102.", loot: "Waffen, Westen" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke A103 (A103 Key)", loc: "Fort Narith", effect: "Öffnet Raum A103.", loot: "Munition, Kleidung" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke A208 (A208 Key)", loc: "Fort Narith", effect: "Öffnet Raum A208.", loot: "Wertsachen, Helme" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke A210 (A210 Key)", loc: "Fort Narith", effect: "Öffnet Raum A210.", loot: "Waffen-Koffer" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke C101 (C101 Key)", loc: "Fort Narith", effect: "Öffnet Raum C101.", loot: "Task-Items, High-Tier Loot" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke C108 (C108 Key)", loc: "Fort Narith", effect: "Öffnet Raum C108.", loot: "Militär-Ausrüstung" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Schrottplatz-Schuppen (Fort Narith Dumping Ground Storage Shed Key)", loc: "Fort Narith", effect: "Öffnet den Schuppen am Schrottplatz.", loot: "Werkzeuge" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Garagenbüro (Fort Narith Garage Office Key)", loc: "Fort Narith", effect: "Öffnet das Büro in der Fahrzeughalle.", loot: "Fahrzeugteile, Safe" },
    { group: "🪖 Fort Narith (Basis)", name: "FN HQ Funkraum (Forth Narith HQ Comms Room Key)", loc: "Fort Narith", effect: "Öffnet den Kommunikationsraum.", loot: "Elektronik, Task-Infos" },
    { group: "🪖 Fort Narith (Basis)", name: "FN HQ Lagerraum (Fort Narith HQ Storage Room Key)", loc: "Fort Narith", effect: "Öffnet den allgemeinen Lagerraum im HQ.", loot: "Rucksäcke, Helme" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Lazarett Intensivstation (Fort Narith Infirmary ICU Key)", loc: "Fort Narith", effect: "Öffnet die ICU.", loot: "High-Tier Medizin (Stims, Surkits)" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Randgebiet Waffenkammer (Fort Narith Outskirts Improvised Armory Key)", loc: "Fort Narith", effect: "Öffnet ein improvisiertes Waffenlager.", loot: "Waffen, Granaten" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Motel Waffenkammer (Fort Narith Motel Improvised Armory Key)", loc: "Fort Narith", effect: "Öffnet eine Waffenkammer im Motel-Bereich.", loot: "Militär-Waffen" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Schießstand-Büro (Fort Narith Shooting Range Office Key)", loc: "Fort Narith", effect: "Öffnet das Büro am Schießstand.", loot: "Munition, Aufsätze" },
    { group: "🪖 Fort Narith (Basis)", name: "Turncoats Haus (Turncoat's House Key)", loc: "Fort Narith / Umland", effect: "Öffnet das Versteck des Turncoats.", loot: "Spezifischer Loot, Intel" },

    // ==========================================
    // --- MIDNIGHT SAPPHIRE ---
    // ==========================================
    { group: "💎 Midnight Sapphire (Hotel)", name: "Golfclub-Lager (Golf Club Storage Key)", loc: "Midnight Sapphire", effect: "Öffnet das Lagerhäuschen am Golfplatz.", loot: "Sporttaschen, Wertsachen" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Garage Marta Monica (Villa Marta Monica Garage Key)", loc: "Midnight Sapphire", effect: "Öffnet die Garage der östlichen Villa.", loot: "Werkzeug, Safe" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Hotel-Büro (Midnight Sapphire Hotel Office Key)", loc: "Midnight Sapphire", effect: "Öffnet das Management-Büro.", loot: "Safe, Bargeld, Intel" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Hotel Versorgungsraum (Hotel Supply Closet Key Card)", loc: "Midnight Sapphire", effect: "Gewährt Zugang zum Supply Closet (Task).", loot: "Zugang CCTV-Raum" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Villa Katherine (Villa Katherine Key)", loc: "Midnight Sapphire", effect: "Öffnet eine weitere Luxusvilla.", loot: "Geld, Schmuck, Safe" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Villa Anna Jana (Villa Anna Jana Key)", loc: "Midnight Sapphire", effect: "Öffnet die mittlere Villa.", loot: "Task-Dokumente, Safe" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Villa Luisa (Villa Luisa Key)", loc: "Midnight Sapphire", effect: "Öffnet die Villa Luisa.", loot: "High-Tier Wertsachen" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Garage Elena (Villa Elena Garage Key)", loc: "Midnight Sapphire", effect: "Öffnet die Garage von Villa Elena.", loot: "Waffen-Koffer, Schrott" },

    // ==========================================
    // --- TIGER BAY ---
    // ==========================================
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Zementfabrik-Lager (Cement Factory Storage Key)", loc: "Tiger Bay", effect: "Öffnet das Lager in der Fabrik.", loot: "Baumaterial, Werkzeuge" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "TB Zentrale Waffenkammer (Tiger Bay Central Armory Key)", loc: "Tiger Bay", effect: "Öffnet die Haupt-Waffenkammer.", loot: "Massive Waffen- & Munitionsmengen" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Banditen-Ausguck (Improvised Bandit Lookout Key)", loc: "Tiger Bay", effect: "Öffnet einen verschlossenen Sniper-Spot.", loot: "Scharfschützengewehre, Optiken" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Toto Baumarkt-Lager (Toto Hardware Storage Key)", loc: "Tiger Bay", effect: "Öffnet das Lager des Baumarkts.", loot: "Werkzeuge (Toolsets)" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Handelsdepot-Büro (Tiger Bay Trade Depot Office Key)", loc: "Tiger Bay", effect: "Öffnet das Depotbüro.", loot: "Geldkästen, Intel" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Pier Lagerhaus (Pier Storage Key)", loc: "Tiger Bay", effect: "Öffnet das Lagerhaus direkt am Pier.", loot: "Waffen-Kisten, Aufsätze" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "TB Randgebiet-Garage (Tiger Bay Outskirts Garage Key)", loc: "Tiger Bay", effect: "Öffnet eine Garage im Außenbereich.", loot: "Fahrzeugteile" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "UNLRA Ausrüstungscontainer (UNLRA Equipment Container Key)", loc: "Tiger Bay", effect: "Öffnet einen Container im Flüchtlingslager.", loot: "Rucksäcke, Westen" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "UNLRA Quarantäne (UNLRA Quarantine Key)", loc: "Tiger Bay", effect: "Öffnet die Isolationsstation.", loot: "Medizinische High-Tier Güter, Task-Items" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "UNLRA Medizincontainer (UNLRA Medical Container Key)", loc: "Tiger Bay", effect: "Öffnet den Sanitäts-Container.", loot: "IFAKs, Surkits, Stims" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Haus am Teich (House by the Pond Key)", loc: "Tiger Bay", effect: "Öffnet ein spezifisches Haus am Wasser.", loot: "Ziviler Loot, Wertsachen" },

    // ==========================================
    // --- LAMANG ISLAND (Dörfer & POIs) ---
    // ==========================================
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Villa Vongphet Zimmer (Villa Vongphet Room Key)", loc: "Lamang Island", effect: "Öffnet ein Zimmer in Villa Vongphet.", loot: "Safe, Schmuck" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Sunset Chalet Waffenkoffer (Sunset Chalet Firearms Case Key)", loc: "Lamang Island", effect: "Öffnet einen bestimmten Waffenkoffer.", loot: "High-Tier Waffe" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Fanny Paradise Büro (Fanny Paradise Office Key)", loc: "Lamang Island", effect: "Öffnet das Büro im Fanny Paradise.", loot: "Intel, Bargeld" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Marktplatz-Haus (Small Marketplace House Key)", loc: "Lamang Island", effect: "Öffnet ein kleines Haus am lokalen Markt.", loot: "Provisions" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Klassenzimmer-Schlüssel (School Room Key)", loc: "Lamang Island", effect: "Öffnet einen Raum in der verlassenen Schule.", loot: "Rucksäcke, Elektronik" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Inthavong Farmschuppen (Inthavong Farm Shed Key)", loc: "Inthavong", effect: "Öffnet den Schuppen der Farm.", loot: "Werkzeuge" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Hidden Fields Hütte 03 (Hidden Fields 03 Hut Key)", loc: "Hidden Fields", effect: "Öffnet Hütte 03.", loot: "Schmuggelware, Drogen" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Hidden Fields Hütte 02 (Hidden Fields 02 Hut Key)", loc: "Hidden Fields", effect: "Öffnet Hütte 02.", loot: "Waffen, Munition" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Phouarun Restaurant Dachboden (Phouarun Restaurant Attic Key)", loc: "Phouarun", effect: "Öffnet den Dachbodenraum.", loot: "Versteckte Kisten, Intel" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Phousai Dorfhaus (Phousai Village House Key)", loc: "Phousai", effect: "Öffnet ein verschlossenes Haus im Dorf.", loot: "Provisions, Wertsachen" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "LAF Funkturm-Raum (LAF Radio Tower Room Key)", loc: "Lamang Island", effect: "Öffnet den Raum unter dem Funkturm.", loot: "Militärische Kommunikation, Aufsätze" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Khonwan Dorfhaus (Khonwan Village House Key)", loc: "Khonwan", effect: "Öffnet ein Gebäude in Khonwan.", loot: "Kleidung, einfache Waffen" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Khamhao Reisdepot (Khamhao Rice Depot Room Key)", loc: "Khamhao", effect: "Öffnet einen Raum im Reisdepot.", loot: "Große Mengen Nahrung, Geld" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Dongphou Wander-Hütte (Dongphou Hiking Camp Cottage Key)", loc: "Dongphou", effect: "Öffnet die Wanderhütte.", loot: "Zeltbedarf, Rucksäcke" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Baustellen-Lager (Construction Site Storage Key)", loc: "Lamang Island", effect: "Öffnet den Baucontainer.", loot: "Baumaterial (Nägel, Tape), Werkzeuge" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Ban Khamphet Haus (Ban Khamphet House Key)", loc: "Ban Khamphet", effect: "Öffnet ein Haus im Dorf Ban Khamphet.", loot: "Provisions" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Ban Phouphienge Zimmer (Ban Phouphienge Room Key)", loc: "Ban Phouphienge", effect: "Öffnet ein privates Zimmer.", loot: "Wertsachen, Tresor" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Siang Radiostation (Siang Radio Station Room Key)", loc: "Lamang Island", effect: "Öffnet einen Technikraum der Radiostation.", loot: "Elektronik, Kabel" },

    // ==========================================
    // --- UPDATE 0.4 SPEARHEAD KEYS ---
    // ==========================================
    { group: "🆕 Update 0.4 (Spearhead)", name: "FN Gefängnisschlüssel (Fort Narith Jail Key)", loc: "Fort Narith Jail", effect: "Öffnet Zellenblock-Bereiche.", loot: "AK-308 Blueprint (hinter kickbarer Tür)" },
    { group: "🆕 Update 0.4 (Spearhead)", name: "TB Einkaufszentrum Schlüssel (Tiger Bay Mall Key / TB-Mall-Key)", loc: "Tiger Bay Mall", effect: "Öffnet den Hinterraum der Buchhandlung.", loot: "SVD Dragunov Blueprint" },
    { group: "🆕 Update 0.4 (Spearhead)", name: "Vipers Autoschlüssel (Viper's Car Key)", loc: "Pha Lang Airfield", effect: "Öffnet den Wagen am Fluss für die 'Like a Boss' Quest.", loot: "Intel für Vulture" },
    { group: "🆕 Update 0.4 (Spearhead)", name: "Touristenunterkunft Schlüssel (Ransacked Tourist Shelter Key)", loc: "Ransacked Shelter (188, 130)", effect: "Öffnet den Hauptraum der Unterkunft.", loot: "MP7A2 Blueprint" },
    { group: "🆕 Update 0.4 (Spearhead)", name: "Entlegenes Lager Schlüssel (Remote Campsite Key)", loc: "Südlich YBL-1 (149, 111)", effect: "Öffnet die verschlossene Kiste am Flusslager.", loot: "Mossberg 590 Blueprint" }
];
    
// ==========================================
// UNIFIED LOGISTICS DATABASE (LOOT & QUESTS) - 100% DEUTSCH
// ==========================================
const logisticsDb = [
    // --- HOCHWERTIGE TECHNOLOGIE (HIGH VALUE TECH) ---
    { name: "LTSD-4-3 Laser-Zielmarkierer", category: "Hochwertige Technologie", vendor: "Alle", price: 60000, grid: "3x3", weight: "14 kg", isQuest: false, questInfo: "" },
    { name: "R-438 Barrier-T System", category: "Hochwertige Technologie", vendor: "Alle", price: 45000, grid: "3x3", weight: "16 kg", isQuest: false, questInfo: "" },
    { name: "PBG-01+ Drohnen-Kontrollstation", category: "Hochwertige Technologie", vendor: "Alle", price: 6400, grid: "2x2", weight: "14.2 kg", isQuest: true, questInfo: "Wichtiges Drohnen-Equipment (Mission) - 2x Benötigt (ACHTUNG: 14.2kg!)" },
    { name: "C2 Militär-Laptop", category: "Hochwertige Technologie", vendor: "Alle", price: 4900, grid: "2x2", weight: "5.5 kg", isQuest: false, questInfo: "" },
    { name: "STRELETS-M Tablet", category: "Hochwertige Technologie", vendor: "Alle", price: 4700, grid: "2x2", weight: "1.4 kg", isQuest: false, questInfo: "" },
    { name: "AN/PYQ-10", category: "Hochwertige Technologie", vendor: "Alle", price: 3200, grid: "1x2", weight: "0.97 kg", isQuest: false, questInfo: "" },
    { name: "KIK-11 Taktischer Schlüssel-Lader", category: "Hochwertige Technologie", vendor: "Alle", price: 2900, grid: "2x1", weight: "0.45 kg", isQuest: false, questInfo: "" },
    { name: "Verstärkter Militär-Laptop", category: "Hochwertige Technologie", vendor: "Alle", price: 2300, grid: "2x2", weight: "2.5 kg", isQuest: true, questInfo: "Tech Recovery (Lab Rat / Handshake) - 2x Benötigt" },
    { name: "HGCS-30 Drohnen-Kontrollstation", category: "Hochwertige Technologie", vendor: "Alle", price: 2000, grid: "2x2", weight: "3 kg", isQuest: false, questInfo: "" },
    { name: "Robustes Militär-Tablet", category: "Hochwertige Technologie", vendor: "Alle", price: 1200, grid: "2x2", weight: "2 kg", isQuest: false, questInfo: "" },
    
    // --- WERTSACHEN (VALUABLES) ---
    { name: "Schwarze Kreditkarte", category: "Wertsachen", vendor: "Artisan", price: 15000, grid: "1x1", weight: "0.005 kg", isQuest: false, questInfo: "" },
    { name: "Moutai - 50 Jahre", category: "Wertsachen", vendor: "Gunny", price: 15000, grid: "2x1", weight: "1.5 kg", isQuest: false, questInfo: "" },
    { name: "Platinring", category: "Wertsachen", vendor: "Turncoat", price: 10000, grid: "1x1", weight: "0.01 kg", isQuest: false, questInfo: "" },
    { name: "Majestätische Titanuhr", category: "Wertsachen", vendor: "Turncoat", price: 8000, grid: "1x1", weight: "0.05 kg", isQuest: false, questInfo: "" },
    { name: "Diamantring", category: "Wertsachen", vendor: "Turncoat", price: 7700, grid: "1x1", weight: "0.01 kg", isQuest: false, questInfo: "" },
    { name: "Platin-Kreditkarte", category: "Wertsachen", vendor: "Artisan", price: 6000, grid: "1x1", weight: "0.005 kg", isQuest: false, questInfo: "" },
    { name: "Diamantohrringe", category: "Wertsachen", vendor: "Turncoat", price: 5700, grid: "1x1", weight: "0.02 kg", isQuest: false, questInfo: "" },
    { name: "Allanach Single Malt Scotch - 40 Jahre", category: "Wertsachen", vendor: "Gunny", price: 5500, grid: "2x1", weight: "2.1 kg", isQuest: false, questInfo: "" },
    { name: "Diamant-Korallen-Ring", category: "Wertsachen", vendor: "Turncoat", price: 5300, grid: "1x1", weight: "0.02 kg", isQuest: false, questInfo: "" },
    { name: "Smaragdhalskette", category: "Wertsachen", vendor: "Turncoat", price: 5300, grid: "1x1", weight: "0.05 kg", isQuest: false, questInfo: "" },
    { name: "Perfekte Perlenohrringe", category: "Wertsachen", vendor: "Turncoat", price: 5000, grid: "1x1", weight: "0.01 kg", isQuest: false, questInfo: "" },
    { name: "Aufwendiger Ring", category: "Wertsachen", vendor: "Turncoat", price: 4400, grid: "1x1", weight: "0.02 kg", isQuest: false, questInfo: "" },
    { name: "Breda Rum - 30 Jahre", category: "Wertsachen", vendor: "Gunny", price: 3800, grid: "2x1", weight: "1.7 kg", isQuest: false, questInfo: "" },
    { name: "Saphir-Anhänger", category: "Wertsachen", vendor: "Turncoat", price: 3600, grid: "1x1", weight: "0.01 kg", isQuest: false, questInfo: "" },
    { name: "Gold-Kreditkarte", category: "Wertsachen", vendor: "Artisan", price: 2200, grid: "1x1", weight: "0.005 kg", isQuest: false, questInfo: "" },
    { name: "Tzuntzimitl Tequila - 25 Jahre", category: "Wertsachen", vendor: "Gunny", price: 2000, grid: "2x1", weight: "1.8 kg", isQuest: false, questInfo: "" },
    { name: "Elegante Luxusuhr", category: "Wertsachen", vendor: "Turncoat", price: 1700, grid: "1x1", weight: "0.13 kg", isQuest: false, questInfo: "" },
    { name: "Master Carbon SEAL Uhr", category: "Wertsachen", vendor: "Turncoat", price: 1450, grid: "1x1", weight: "0.17 kg", isQuest: false, questInfo: "" },
    { name: "Dunkle Perlenhalskette", category: "Wertsachen", vendor: "Turncoat", price: 1400, grid: "1x1", weight: "0.05 kg", isQuest: false, questInfo: "" },
    { name: "Edelsteinring", category: "Wertsachen", vendor: "Turncoat", price: 820, grid: "1x1", weight: "0.01 kg", isQuest: false, questInfo: "" },
    { name: "Gewöhnliche Kreditkarte", category: "Wertsachen", vendor: "Artisan", price: 600, grid: "1x1", weight: "0.005 kg", isQuest: false, questInfo: "" },
    { name: "Luxus-Smartwatch", category: "Wertsachen", vendor: "Turncoat", price: 600, grid: "1x1", weight: "0.15 kg", isQuest: false, questInfo: "" },
    { name: "Goodlad Whiskey - 20 Jahre", category: "Wertsachen", vendor: "Gunny", price: 450, grid: "2x1", weight: "1.6 kg", isQuest: false, questInfo: "" },
    { name: "Schlangenwein", category: "Wertsachen", vendor: "Gunny", price: 399, grid: "2x1", weight: "1.4 kg", isQuest: false, questInfo: "" },
    { name: "Himmlische Parfümflasche", category: "Wertsachen", vendor: "Gunny", price: 335, grid: "1x1", weight: "0.3 kg", isQuest: false, questInfo: "" },
    { name: "Lambert Zigarren", category: "Wertsachen", vendor: "Gunny", price: 282, grid: "2x1", weight: "0.6 kg", isQuest: false, questInfo: "" },
    { name: "Goldhalskette", category: "Wertsachen", vendor: "Turncoat", price: 180, grid: "1x1", weight: "0.05 kg", isQuest: false, questInfo: "" },
    { name: "Zarte Parfümflasche", category: "Wertsachen", vendor: "Gunny", price: 150, grid: "1x1", weight: "0.3 kg", isQuest: false, questInfo: "" },
    { name: "Goldring", category: "Wertsachen", vendor: "Turncoat", price: 150, grid: "1x1", weight: "0.01 kg", isQuest: false, questInfo: "" },
    { name: "Moderne Uhr", category: "Wertsachen", vendor: "Turncoat", price: 150, grid: "1x1", weight: "0.12 kg", isQuest: false, questInfo: "" },
    { name: "Hyperborea Zigaretten", category: "Wertsachen", vendor: "Gunny", price: 139, grid: "1x1", weight: "0.02 kg", isQuest: false, questInfo: "" },
    { name: "Duftende Parfümflasche", category: "Wertsachen", vendor: "Gunny", price: 75, grid: "2x1", weight: "0.25 kg", isQuest: false, questInfo: "" },
    { name: "Stange Tahirs Zigaretten", category: "Wertsachen", vendor: "Alle", price: 27, grid: "3x1", weight: "0.25 kg", isQuest: true, questInfo: "Supply Request - wird 2x Benötigt" },
    { name: "Tahirs Zigaretten", category: "Wertsachen", vendor: "Gunny", price: 5, grid: "1x1", weight: "0.013 kg", isQuest: false, questInfo: "" },
    { name: "Goldkette", category: "Wertsachen", vendor: "Banshee / Vulture", price: 0, grid: "1x1", weight: "0.1 kg", isQuest: false, questInfo: "" },
    { name: "Holzstatue", category: "Wertsachen", vendor: "Turncoat / Artisan", price: 0, grid: "1x2", weight: "0.5 kg", isQuest: false, questInfo: "" },
    { name: "Goldene Uhr (Rolex)", category: "Wertsachen", vendor: "Turncoat", price: 0, grid: "1x1", weight: "0.1 kg", isQuest: false, questInfo: "" },

    // --- GEHEIMDIENST & DOKUMENTE (INTEL & DOCS) ---
    { name: "VIP-Reisepass", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 6800, grid: "1x1", weight: "0.05 kg", isQuest: false, questInfo: "" },
    { name: "Touristen-Reisepass", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 2600, grid: "1x1", weight: "0.05 kg", isQuest: true, questInfo: "Smuggling Route (Banshee) - wird 2x Benötigt" },
    { name: "Einmalpad-Schlüsselcodes", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 2400, grid: "1x1", weight: "0.1 kg", isQuest: true, questInfo: "Wichtige Entschlüsselungs-Daten" },
    { name: "Biometrische Zugangskarte", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 2000, grid: "1x1", weight: "0.008 kg", isQuest: true, questInfo: "Zugangskarte für Operationen" },
    { name: "Biometrischer USB-Stick", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 1900, grid: "1x1", weight: "0.004 kg", isQuest: true, questInfo: "Data Extraction (Handshake) - wird 2x Benötigt" },
    { name: "Armee-Geheimdienstdaten", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 1280, grid: "2x1", weight: "0.1 kg", isQuest: false, questInfo: "" },
    { name: "Geschäftsmann-Ausweis", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 937, grid: "1x1", weight: "0.05 kg", isQuest: true, questInfo: "Target Identification - wird 2x Benötigt" },
    { name: "Führerschein", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 262, grid: "1x1", weight: "0.05 kg", isQuest: false, questInfo: "" },
    { name: "Einheimischen-Ausweis", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 187, grid: "1x1", weight: "0.05 kg", isQuest: false, questInfo: "" },
    { name: "Verbrechen-bezogene Daten", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 140, grid: "2x1", weight: "0.1 kg", isQuest: false, questInfo: "" },
    { name: "Touristen-Ausweis", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 112, grid: "1x1", weight: "0.05 kg", isQuest: true, questInfo: "Identification - wird 2x Benötigt" },
    { name: "Beweise / Dokumente / Intel", category: "Geheimdienst & Dokumente", vendor: "Alle", price: 0, grid: "1x1", weight: "0.1 kg", isQuest: true, questInfo: "Fast jeder Händler (Quest-Intel niemals wegwerfen!)" },

    // --- ELEKTRONIK ---
    { name: "Geldautomaten-Hacking-Tool", category: "Elektronik", vendor: "Alle", price: 5000, grid: "1x1", weight: "0.15 kg", isQuest: false, questInfo: "" },
    { name: "Verschlüsselte Einsatz-Festplatte", category: "Elektronik", vendor: "Alle", price: 4900, grid: "1x1", weight: "0.18 kg", isQuest: false, questInfo: "" },
    { name: "Schwarzes Luxus-Smartphone", category: "Elektronik", vendor: "Lab Rat", price: 1500, grid: "1x1", weight: "0.22 kg", isQuest: false, questInfo: "" },
    { name: "Verschlüsselte Festplatte", category: "Elektronik", vendor: "Lab Rat", price: 1200, grid: "1x1", weight: "0.2 kg", isQuest: true, questInfo: "Tech Recovery / Intel - wird 2x Benötigt" },
    { name: "NPI-2 Navigationsempfänger", category: "Elektronik", vendor: "Alle", price: 1100, grid: "1x1", weight: "0.3 kg", isQuest: false, questInfo: "" },
    { name: "Luxus-Smartphone", category: "Elektronik", vendor: "Lab Rat", price: 1000, grid: "1x1", weight: "0.22 kg", isQuest: false, questInfo: "" },
    { name: "Spiegelreflexkamera (DSLR)", category: "Elektronik", vendor: "Alle", price: 960, grid: "1x2", weight: "0.95 kg", isQuest: false, questInfo: "" },
    { name: "GLONASS Grot-M Navigationsempfänger", category: "Elektronik", vendor: "Alle", price: 937, grid: "1x2", weight: "0.8 kg", isQuest: false, questInfo: "" },
    { name: "AZART P1 Funkgerät", category: "Elektronik", vendor: "Alle", price: 825, grid: "2x1", weight: "0.72 kg", isQuest: true, questInfo: "Comms Sabotage / Setup - wird 2x Benötigt" },
    { name: "Laptop", category: "Elektronik", vendor: "Alle", price: 750, grid: "2x2", weight: "1.5 kg", isQuest: true, questInfo: "Tech Recovery (Lab Rat) - wird 2x Benötigt" },
    { name: "Tragbarer ECM-Störsender", category: "Elektronik", vendor: "Alle", price: 712, grid: "2x1", weight: "2 kg", isQuest: false, questInfo: "" },
    { name: "Signalverstärker RT97S", category: "Elektronik", vendor: "Alle", price: 675, grid: "3x2", weight: "1.66 kg", isQuest: false, questInfo: "" },
    { name: "Teures Smartphone", category: "Elektronik", vendor: "Lab Rat", price: 350, grid: "1x1", weight: "0.25 kg", isQuest: false, questInfo: "" },
    { name: "Smartphone", category: "Elektronik", vendor: "Lab Rat", price: 250, grid: "1x1", weight: "0.22 kg", isQuest: false, questInfo: "" },
    { name: "Digitalkamera (DigiCam)", category: "Elektronik", vendor: "Alle", price: 112, grid: "1x1", weight: "0.35 kg", isQuest: true, questInfo: "Smile for the Camera (Banshee) - wird 2x Benötigt" },
    { name: "Handy-Ladegerät", category: "Elektronik", vendor: "Alle", price: 9, grid: "1x1", weight: "0.075 kg", isQuest: false, questInfo: "" },
    
    // --- WERKZEUGE & MATERIALIEN ---
    { name: "Weißes Lithiumfett", category: "Werkzeuge & Materialien", vendor: "Alle", price: 150, grid: "3x2", weight: "15.88 kg", isQuest: true, questInfo: "Smooth Operation (Artisan) - wird 2x Benötigt" },
    { name: "Werkzeugset", category: "Werkzeuge & Materialien", vendor: "Alle", price: 142, grid: "2x2", weight: "1.6 kg", isQuest: false, questInfo: "" },
    { name: "Schwefelsäure", category: "Werkzeuge & Materialien", vendor: "Alle", price: 99, grid: "2x2", weight: "5.03 kg", isQuest: true, questInfo: "Toxic Environment (Lab Rat) - wird 2x Benötigt" },
    { name: "Kaputte Nagelpistole", category: "Werkzeuge & Materialien", vendor: "Alle", price: 75, grid: "2x2", weight: "2.5 kg", isQuest: false, questInfo: "" },
    { name: "Autobatterie", category: "Werkzeuge & Materialien", vendor: "Alle", price: 56, grid: "2x2", weight: "12.66 kg", isQuest: false, questInfo: "" },
    { name: "Acetylenflasche", category: "Werkzeuge & Materialien", vendor: "Alle", price: 56, grid: "4x2", weight: "11.5 kg", isQuest: true, questInfo: "Heavy Metal (Artisan) - 2x (ACHTUNG: 11.5kg!)" },
    { name: "Kaputter Winkelschleifer", category: "Werkzeuge & Materialien", vendor: "Alle", price: 56, grid: "2x2", weight: "2.499 kg", isQuest: false, questInfo: "" },
    { name: "Kaputte Stichsäge", category: "Werkzeuge & Materialien", vendor: "Alle", price: 55, grid: "2x2", weight: "2 kg", isQuest: false, questInfo: "" },
    { name: "Gummi-Erneuerer", category: "Werkzeuge & Materialien", vendor: "Alle", price: 51, grid: "2x1", weight: "1 kg", isQuest: false, questInfo: "" },
    { name: "Aramid-Gewebe", category: "Werkzeuge & Materialien", vendor: "Alle", price: 42, grid: "2x1", weight: "0.061 kg", isQuest: false, questInfo: "" },
    { name: "Motorradbatterie", category: "Werkzeuge & Materialien", vendor: "Alle", price: 36, grid: "2x1", weight: "2 kg", isQuest: false, questInfo: "" },
    { name: "Propanflasche", category: "Werkzeuge & Materialien", vendor: "Alle", price: 31, grid: "2x1", weight: "0.453 kg", isQuest: false, questInfo: "" },
    { name: "Starthilfekabel", category: "Werkzeuge & Materialien", vendor: "Alle", price: 30, grid: "2x2", weight: "2.34 kg", isQuest: false, questInfo: "" },
    { name: "Industrielles Lösungsmittel", category: "Werkzeuge & Materialien", vendor: "Alle", price: 29, grid: "2x2", weight: "3.8 kg", isQuest: false, questInfo: "" },
    { name: "Kaputte Handsäge", category: "Werkzeuge & Materialien", vendor: "Alle", price: 24, grid: "2x2", weight: "0.68 kg", isQuest: false, questInfo: "" },
    { name: "Minderwertiges Schießpulver", category: "Werkzeuge & Materialien", vendor: "Alle", price: 23, grid: "2x1", weight: "0.45 kg", isQuest: true, questInfo: "Explosive Material (Gunny) - wird 2x Benötigt" },
    { name: "Bremsflüssigkeit", category: "Werkzeuge & Materialien", vendor: "Alle", price: 21, grid: "2x2", weight: "3.8 kg", isQuest: false, questInfo: "" },
    { name: "Benzinkanister", category: "Werkzeuge & Materialien", vendor: "Alle", price: 21, grid: "2x2", weight: "5 kg", isQuest: true, questInfo: "Fuel Run (Artisan) - wird 2x Benötigt" },
    { name: "Bleichmittel", category: "Werkzeuge & Materialien", vendor: "Alle", price: 19, grid: "1x1", weight: "3.57 kg", isQuest: false, questInfo: "" },
    { name: "Naosaoad 100% Reiniger", category: "Werkzeuge & Materialien", vendor: "Alle", price: 18, grid: "2x1", weight: "0.5 kg", isQuest: false, questInfo: "" },
    { name: "Motoröl", category: "Werkzeuge & Materialien", vendor: "Alle", price: 15, grid: "2x2", weight: "4.3 kg", isQuest: false, questInfo: "" },
    { name: "Rohrreiniger", category: "Werkzeuge & Materialien", vendor: "Alle", price: 15, grid: "2x1", weight: "5 kg", isQuest: false, questInfo: "" },
    { name: "Tarnstoff", category: "Werkzeuge & Materialien", vendor: "Alle", price: 10, grid: "2x1", weight: "0.48 kg", isQuest: false, questInfo: "" },
    { name: "Paracord", category: "Werkzeuge & Materialien", vendor: "Alle", price: 9, grid: "2x1", weight: "0.1 kg", isQuest: false, questInfo: "" },
    { name: "Waffenöl", category: "Werkzeuge & Materialien", vendor: "Alle", price: 9, grid: "2x1", weight: "0.272 kg", isQuest: false, questInfo: "" },
    { name: "Packung AA-Batterien", category: "Werkzeuge & Materialien", vendor: "Alle", price: 7, grid: "1x1", weight: "0.024 kg", isQuest: false, questInfo: "" },
    { name: "Kaputter Schraubenschlüssel", category: "Werkzeuge & Materialien", vendor: "Alle", price: 7, grid: "2x1", weight: "0.122 kg", isQuest: false, questInfo: "" },
    { name: "Kaputter Zimmermannshammer", category: "Werkzeuge & Materialien", vendor: "Alle", price: 6, grid: "2x1", weight: "0.312 kg", isQuest: false, questInfo: "" },
    { name: "Kaputter Schraubenzieher", category: "Werkzeuge & Materialien", vendor: "Alle", price: 6, grid: "1x1", weight: "0.12 kg", isQuest: false, questInfo: "" },
    { name: "Kupferkabel", category: "Werkzeuge & Materialien", vendor: "Artisan", price: 0, grid: "1x2", weight: "1 kg", isQuest: false, questInfo: "" },
    { name: "Nägel", category: "Werkzeuge & Materialien", vendor: "Artisan", price: 0, grid: "1x1", weight: "0.5 kg", isQuest: false, questInfo: "" },
    { name: "Panzertape", category: "Werkzeuge & Materialien", vendor: "Artisan", price: 0, grid: "1x1", weight: "0.2 kg", isQuest: false, questInfo: "" },
    { name: "Waffenteile", category: "Werkzeuge & Materialien", vendor: "Artisan", price: 0, grid: "2x1", weight: "1 kg", isQuest: false, questInfo: "" },
    { name: "Zündkerze", category: "Werkzeuge & Materialien", vendor: "Artisan", price: 0, grid: "1x1", weight: "0.2 kg", isQuest: false, questInfo: "" },

    // --- MEDIZIN & SURVIVAL ---
    { name: "Fläschchen mit Antigenen", category: "Medizin & Survival", vendor: "Alle", price: 947, grid: "1x1", weight: "0.03 kg", isQuest: false, questInfo: "" },
    { name: "Desinfektionsmittel", category: "Medizin & Survival", vendor: "Alle", price: 199, grid: "1x1", weight: "1 kg", isQuest: true, questInfo: "Medical Supply - wird 2x Benötigt" },
    { name: "UN-Medizinwerkzeuge", category: "Medizin & Survival", vendor: "Alle", price: 15, grid: "2x1", weight: "0.5 kg", isQuest: false, questInfo: "" },
    { name: "Insektenspray", category: "Medizin & Survival", vendor: "Alle", price: 6, grid: "1x1", weight: "0.258 kg", isQuest: false, questInfo: "" },
    { name: "Blutbeutel 500ml", category: "Medizin & Survival", vendor: "Lab Rat", price: 0, grid: "1x2", weight: "0.5 kg", isQuest: false, questInfo: "" },
    { name: "Morphin-Injektor", category: "Medizin & Survival", vendor: "Lab Rat", price: 0, grid: "1x1", weight: "0.1 kg", isQuest: false, questInfo: "" },
    { name: "Tourniquet (CAT)", category: "Medizin & Survival", vendor: "Lab Rat", price: 0, grid: "1x1", weight: "0.1 kg", isQuest: false, questInfo: "" },
    { name: "Verbandskasten / IFAK", category: "Medizin & Survival", vendor: "Handshake", price: 0, grid: "2x2", weight: "1 kg", isQuest: false, questInfo: "" },
    { name: "Wasserproben", category: "Medizin & Survival", vendor: "Lab Rat", price: 0, grid: "1x1", weight: "0.2 kg", isQuest: false, questInfo: "" },
    { name: "Packung Premium-Kaffee", category: "Medizin & Survival", vendor: "Alle", price: 27, grid: "2x1", weight: "0.6 kg", isQuest: false, questInfo: "" },
    { name: "Wasserreinigungstabletten", category: "Medizin & Survival", vendor: "Alle", price: 27, grid: "1x1", weight: "1.25 kg", isQuest: true, questInfo: "Survival Prep - wird 2x Benötigt" },
    { name: "MRE (Kampfration)", category: "Medizin & Survival", vendor: "Gunny / Handshake", price: 0, grid: "1x2", weight: "0.5 kg", isQuest: false, questInfo: "" },
    
    // --- SONSTIGES (MISC) ---
    { name: "Nachfüllbares Feuerzeug", category: "Sonstiges", vendor: "Alle", price: 27, grid: "1x1", weight: "0.08 kg", isQuest: false, questInfo: "" },
    { name: "Handspiegel", category: "Sonstiges", vendor: "Alle", price: 9, grid: "2x1", weight: "0.4 kg", isQuest: false, questInfo: "" },
    { name: "Vaseline (Petrolatum)", category: "Sonstiges", vendor: "Alle", price: 9, grid: "1x1", weight: "0.37 kg", isQuest: false, questInfo: "" },
    { name: "Kartenspiel", category: "Sonstiges", vendor: "Alle", price: 3, grid: "1x1", weight: "0.088 kg", isQuest: false, questInfo: "" },
    { name: "Angelschnur", category: "Sonstiges", vendor: "Alle", price: 3, grid: "1x1", weight: "0.13 kg", isQuest: false, questInfo: "" },
    { name: "Lampenöl", category: "Sonstiges", vendor: "Alle", price: 3, grid: "2x1", weight: "1 kg", isQuest: false, questInfo: "" },
    { name: "Feuerzeug", category: "Sonstiges", vendor: "Alle", price: 1, grid: "1x1", weight: "0.04 kg", isQuest: false, questInfo: "" },
    { name: "Nähzeug", category: "Sonstiges", vendor: "Alle", price: 1, grid: "1x1", weight: "0.146 kg", isQuest: false, questInfo: "" },
    { name: "Rettungsdecke", category: "Sonstiges", vendor: "Alle", price: 1, grid: "1x1", weight: "0.057 kg", isQuest: false, questInfo: "" },
    { name: "M4A1 Sturmgewehr", category: "Sonstiges", vendor: "Gunny / Turncoat", price: 0, grid: "2x4", weight: "3.5 kg", isQuest: false, questInfo: "" },
    { name: "Unmodifizierte AKMN", category: "Sonstiges", vendor: "Artisan", price: 0, grid: "2x5", weight: "3.8 kg", isQuest: false, questInfo: "" }
];
    
// ==========================================
// 9. STASH & CONTAINER DATENBANK (0.4 SPEARHEAD)
// ==========================================
// isMeta: true markiert die absoluten Pflichtkäufe mit dem 🔥-Symbol!

const containersDb = [
    // --- SECURE CONTAINERS ---
    { category: "🔒 Secure Containers (Raid-Schutz)", name: "Safe Lock Box (2x2)", size: "4 Slots intern", source: "Standard Edition / Artisan Level 1", isMeta: false, info: "<b>Wofür:</b> Basis-Schutz für Wertsachen und Schlüssel.<br><b>Kosten:</b> ~ $10.000<br><b>Kaufempfehlung:</b> Dein Start-Container. Bietet Platz für 1 Wallet, 1 Key Holder und kleine Meds." },
    { category: "🔒 Secure Containers (Raid-Schutz)", name: "Admin Tasche (2x3) (Admin Pouch)", size: "6 Slots intern", source: "Tactical Edition / Artisan Level 2", isMeta: true, info: "<b>Wofür:</b> Mittlerer Secure Container.<br><b>Kosten:</b> ~ $35.000<br><b>Kaufempfehlung:</b> Teuer, aber wichtiges Upgrade für Standard-Spieler, um z.B. ein OP-Kit (Surg Kit) verlustfrei mitzunehmen." },
    { category: "🔒 Secure Containers (Raid-Schutz)", name: "TAS Schließfach (3x3) (TAS Lockbox)", size: "9 Slots intern", source: "Elite & Supporter Edition / Artisan Level 4", isMeta: true, info: "<b>Wofür:</b> Maximaler Schutz für dicken Loot.<br><b>Kosten:</b> ~ $150.000<br><b>Kaufempfehlung:</b> Das ultimative Endgame-Ziel. Absoluter Luxus für schwere Quests und teuren Loot." },

    // --- STASH CASES (Lagerkisten im Basecamp) ---
    { category: "📦 Stash Cases (Lagerkisten)", name: "Muxxum Waffenkoffer (Muxxum Rifle Case)", size: "96 Slots intern", source: "Gunny Level 4", isMeta: true, info: "<b>Wofür:</b> Ausschließlich für Schusswaffen.<br><b>Kosten:</b> ~ $105.000<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Pflichtkauf!</b> Hinweis: Sehr lange Waffen (SVD / M16) passen oft nicht aufrecht. Nimm Magazin und Griff ab, dann sind die Waffen nur 1 Slot breit!" },
    { category: "📦 Stash Cases (Lagerkisten)", name: "HARDE-Kiste (HARDE Case)", size: "60 Slots intern", source: "Gunny Level 3", isMeta: true, info: "<b>Wofür:</b> Ausschließlich für Schusswaffen.<br><b>Kosten:</b> ~ $77.000<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Pflichtkauf!</b> Guter Vorgänger für den großen Muxxum Koffer." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Waffenteilkiste (Weapon Parts Case)", size: "42 Slots intern", source: "Gunny Level 3", isMeta: false, info: "<b>Wofür:</b> Visiere, Griffe, Schalldämpfer und Schäfte.<br><b>Kosten:</b> ~ $60.000<br><b>Kaufempfehlung:</b> Sehr nützlich, wenn du gerne teure Scopes und Attachments hortest." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Metal-Munitionskiste (Metal Ammo Box)", size: "Nimmt 4 Slots ein, massiver Innenraum", source: "Turncoat Level 2", isMeta: true, info: "<b>Wofür:</b> Munitionskiste für lose Patronen.<br><b>Kosten:</b> ~ $60.300<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Mindestens 2 Stück kaufen!</b> Spart extrem viel Platz." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "MM-Munitionskiste (MM Ammo Box)", size: "Nimmt 6 Slots ein, massiver Innenraum", source: "Turncoat Level 4", isMeta: true, info: "<b>Wofür:</b> Munitionskiste für lose Patronen.<br><b>Kosten:</b> ~ $45.000<br><b>Kaufempfehlung:</b> Die große Version. Spart im Lategame massiv Platz." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Handgranatenkoffer (Hand Grenade Storage Box)", size: "Nimmt 6 Slots ein, fasst 20 Granaten", source: "Turncoat Level 3", isMeta: false, info: "<b>Wofür:</b> Granatenkoffer für Sprengstoff-Enthusiasten.<br><b>Kosten:</b> ~ $75.500<br><b>Kaufempfehlung:</b> Wer viel und gerne mit Granaten spielt, sollte sich 1-2 Stück kaufen." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Magazinkiste (Magazine Crate)", size: "Großes Raster für Magazine", source: "Gunny Level 3", isMeta: true, info: "<b>Wofür:</b> Leere und geladene Waffenmagazine.<br><b>Kosten:</b> ~ $55.000<br><b>Kaufempfehlung:</b> Sehr wichtig, um das Chaos im Inventar zu besiegen." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "IV-Schutzkoffer (IV Truncase)", size: "Riesiges Raster für Rüstung & Rucksäcke", source: "Artisan Level 2", isMeta: true, info: "<b>Wofür:</b> Helme, Westen, Rigs, Gürtel und Rucksäcke.<br><b>Kosten:</b> ~ $61.700<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Top!</b> Achtung: Du kannst keinen Rucksack hineinlegen, wenn sich in dem Rucksack eine Waffe befindet!" },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Erste-Hilfe-Koffer (First Aid Case)", size: "Großes Raster für Medizin", source: "Lab Rat Level 2", isMeta: true, info: "<b>Wofür:</b> OP-Kits, Blutbeutel, Bandagen.<br><b>Kosten:</b> ~ $40.000<br><b>Kaufempfehlung:</b> Sehr wichtiges Mid-Game Upgrade." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Kühlbox / Proviantkiste (Personal Cooler)", size: "Großes Raster für Essen/Trinken", source: "Artisan Level 2", isMeta: false, info: "<b>Wofür:</b> Getränke, Rationen und Snacks.<br><b>Kosten:</b> ~ $60.200<br><b>Kaufempfehlung:</b> Gut, um MREs und Wasser auf Vorrat zu halten." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Großer Schlüsselkoffer (Huge Key Case)", size: "Nimmt 3 Slots ein, fasst 30 Keys", source: "Banshee Level 3", isMeta: true, info: "<b>Wofür:</b> Lagerung ALLER Schlüssel, die du nicht im Raid brauchst.<br><b>Kosten:</b> ~ $65.000<br><b>Kaufempfehlung:</b> Sehr praktisch für Sammler, denen der kleine Key Holder im Stash nicht reicht." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Mörser-Kiste (Mortar Round Case)", size: "Spezialraster für Sprengmittel", source: "Gunny Level 3", isMeta: false, info: "<b>Wofür:</b> Mörsergranaten.<br><b>Kosten:</b> ~ $75.000<br><b>Kaufempfehlung:</b> <b style='color:#ff4c4c;'>Finger weg!</b> Kostet 75k und spart effektiv nur mickrige 5 Slots. Absolute Geldverschwendung." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Kleiner Tresor (Small Safe)", size: "24 Slots intern", source: "Vulture Level 3", isMeta: false, info: "<b>Wofür:</b> Bargeld und High-Value Loot (Gold, Diamanten).<br><b>Kosten:</b> ~ $75.000<br><b>Kaufempfehlung:</b> Nette Spielerei, aber Bargeld nimmt viel weniger Platz weg als das Loot selbst. Besser direkt verkaufen." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Großer Tresor (Large Safe)", size: "108 Slots intern", source: "Vulture Level 4", isMeta: false, info: "<b>Wofür:</b> Der ultimative Geldtresor.<br><b>Kosten:</b> ~ $105.000<br><b>Kaufempfehlung:</b> Reiner Endgame-Flex für Spieler mit Millionen auf dem Konto." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Verwaltungstisch (Administrative Desk)", size: "210 Slots", source: "Artisan Level 3", isMeta: false, info: "<b>Wofür:</b> Aufbewahrung von großen Dokumentenmengen.<br><b>Kosten:</b> ~ $89.500<br><b>Kaufempfehlung:</b> Wer Spaß am Sammeln von allen Dokumenten hat und mehr der Lore verstehen will, sollte die Kiste kaufen." },

    // --- MICRO-CONTAINER & POUCHES (Für den Raid) ---
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Geldbörse (Tactical Wallet)", size: "Nimmt 1 Slot ein, bietet 4 intern", source: "Artisan Level 1", isMeta: true, info: "<b>Wofür:</b> Bargeld, Kreditkarten und Pässe.<br><b>Kosten:</b> ~ $3.500<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Absolutes Must-Have!</b> Gehört sofort in deine Secure Pouch." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Lederschlüsselhalter (Key Holder)", size: "Nimmt 1 Slot ein, fasst viele Keys", source: "Artisan Level 2", isMeta: true, info: "<b>Wofür:</b> Raumschlüssel und Zugangskarten.<br><b>Kosten:</b> ~ $4.500<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Must-Have!</b> Sichern, um Schlüssel beim Tod nicht zu verlieren." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Schlüsseltasche (Key Case)", size: "Nimmt 2 Slots ein, fasst extrem viele Keys", source: "Artisan Level 3", isMeta: true, info: "<b>Wofür:</b> Raumschlüssel und Zugangskarten.<br><b>Kosten:</b> ~ $6.000<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Must-Have!</b> Für Operator, die für ganz Tiger Bay und das Hotel gewappnet sein wollen." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Injektoren-Etui (Injector Case)", size: "9 Slots intern für Injektoren", source: "Lab Rat Level 4", isMeta: true, info: "<b>Wofür:</b> Aufbewahrung von Adrenalin, Morphin und Stims.<br><b>Kosten:</b> Variiert<br><b>Kaufempfehlung:</b> Ein starkes Endgame-Item, um massiv Platz im Container oder Belt zu sparen." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Verwaltungstasche (Administration Bag)", size: "Nimmt 2 Slots ein, fasst 6 Slots", source: "Artisan Level 2", isMeta: false, info: "<b>Wofür:</b> Aufbewahrung von Dokumenten, Karten, Schlüssel und Geld.<br><b>Kosten:</b> ~ $75.900<br><b>Kaufempfehlung:</b> Kann man kaufen, muss man aber nicht." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Kombat-Ordner (Kombat Folder)", size: "Nimmt 4 Slots ein, fasst 16 Slots", source: "Artisan Level 3", isMeta: false, info: "<b>Wofür:</b> Dokumente, Karten, Schlüssel und Geld.<br><b>Kosten:</b> ~ $75.400<br><b>Kaufempfehlung:</b> Auf jeden Fall besser als die kleine Verwaltungstasche." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Hartschalen-Erste-Hilfe (HFAK)", size: "1x2 Slot", source: "Lab Rat Level 1", isMeta: false, info: "<b>Wofür:</b> Kleine Medizintasche für den Gürtel.<br><b>Kosten:</b> ~ $90<br><b>Kaufempfehlung:</b> Kann man sehr oft in der Welt finden." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Mini-Erste-Hilfe-Set (MFAK)", size: "1x3 Slot", source: "Lab Rat Level 2", isMeta: false, info: "<b>Wofür:</b> Kleine Medizintasche für den Gürtel.<br><b>Kosten:</b> ~ $200<br><b>Kaufempfehlung:</b> Günstig, hilft am Anfang enorm." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Schnellverschluss-Medikit (QFAK)", size: "2x3 Slots", source: "Lab Rat Level 3", isMeta: false, info: "<b>Wofür:</b> Mittlere Med-Pouch.<br><b>Kosten:</b> ~ $320<br><b>Kaufempfehlung:</b> Sehr effizient auf dem Tactical Belt." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "RIP-AWAY EMT POUCH (EMT)", size: "3x3 Slots", source: "Lab Rat Level 4", isMeta: false, info: "<b>Wofür:</b> Große Sanitätstasche für den Rucksack.<br><b>Kosten:</b> Variiert<br><b>Kaufempfehlung:</b> Ideal für designierte Squad-Medics." },

    // --- STASH-ERWEITERUNGEN ---
    { category: "🏗️ Locker Upgrades (Stash-Erweiterung)", name: "Locker-Erweiterungen (Locker Expansions)", size: "Dauerhafte Stash-Vergrößerung", source: "Quests & Spielerlevel", isMeta: true, info: "<b>Wofür:</b> Vergrößert dauerhaft dein Basecamp-Schließfach.<br><b>Kosten:</b> Kostenlos.<br><b>Wann:</b> Bei Handshake/Turncoat Quests UND automatisch auf Spielerlevel 20, 30, 40, 50!" }
];
    
// ==========================================
// 10. LANDEZONEN & NAVIGATION (0.4 SPEARHEAD - 100% COMPLETE)
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

// ==========================================
// 12. MEDICAL CENTER DATENBANK (100% COMPLETE - WIKI SYNCED)
// ==========================================
const medicalDb = [
    // --- AUSDAUER & ERSCHÖPFUNG ---
    { 
        id: "encumbered", 
        name: "Überlastet (Encumbered)", 
        icon: "⚖️", 
        symptom: "Kein Sprinten/Springen möglich. Verringerte ADS-Geschwindigkeit.", 
        diag: "Zu viel Tragegewicht", 
        desc: "Dein Charakter trägt 54kg oder mehr. Dies beeinflusst deine Mobilität massiv.", 
        vitals: [{ label: "Mobilität", val: 40, color: "#ffa500" }], 
        treat: ["Loot abwerfen", "Schweres Gear droppen"], 
        tip: "Gewicht verringert auch die Bein-Ausdauer-Regeneration massiv." 
    },
    {
        id: "exhausted", 
        name: "Erschöpft (Exhausted)", 
        icon: "🛑", 
        symptom: "Sichtbares Waffen-Wackeln. Kein Sprinten, Springen oder Klettern möglich.", 
        diag: "Absolute Bein-Erschöpfung", 
        desc: "Deine Bein-Ausdauer ist auf 1% gefallen. Deine Beine versagen den Dienst.", 
        vitals: [{ label: "Bein-Ausdauer", val: 1, color: "#ff4c4c" }], 
        treat: ["Sofortige Deckung suchen", "Adrenalin-Injektor (Notfall)"], 
        tip: "In diesem Zustand bist du ein leichtes Ziel, da du keine Hindernisse mehr überwinden kannst." 
    },
    {
        id: "fatigued", 
        name: "Ermüdet / Erschöpft (Fatigued)", 
        icon: "📉", 
        symptom: "Hörbares Atmen. Waffen-Wackeln. Kein Sprint/Klettern.", 
        diag: "Physische Bein-Erschöpfung", 
        desc: "Tritt auf, wenn die Bein-Ausdauer unter 40% (Ermüdet) oder auf 1% (Erschöpft) fällt.", 
        vitals: [{ label: "Bein-Ausdauer", val: 10, color: "#ff4c4c" }], 
        treat: ["Sofortige Pause", "Kaffee (Stamina Buff)", "Energy Drink"], 
        tip: "Die Ausdauer regeneriert erst wieder, wenn du stehen bleibst." 
    },
    {
        id: "sore_arms",
        name: "Schmerzende Arme (Sore Arms)",
        icon: "💪",
        symptom: "Erhöhtes Waffen-Wackeln (Sway) beim Zielen.",
        diag: "Leichte Arm-Erschöpfung",
        desc: "Tritt auf, wenn die Arm-Ausdauer unter 40% fällt. Oft durch langes Zielen (ADS) mit schweren Waffen verursacht.",
        vitals: [{ label: "Arm-Ausdauer", val: 35, color: "#ffa500" }],
        treat: ["Waffe senken", "Zielen (ADS) abbrechen"],
        tip: "Hohes Waffengewicht beschleunigt diesen Effekt massiv."
    },
    { 
        id: "cramps", 
        name: "Krämpfe (Cramps)", 
        icon: "⚡", 
        symptom: "Extremes Waffen-Wackeln. Keine Nahkampfangriffe möglich.", 
        diag: "Muskelversagen (Arme)", 
        desc: "Die Arm-Ausdauer ist auf 1% gefallen. Du kannst die Waffe nicht mehr ruhig halten.", 
        vitals: [{ label: "Arm-Ausdauer", val: 1, color: "#ff4c4c" }], 
        treat: ["Zielen sofort abbrechen", "Deckung suchen"], 
        tip: "Vermeide langes 'Hard-Scoping' in Gängen." 
    },
    {
        id: "out_of_breath", 
        name: "Außer Atem (Out of Breath)", 
        icon: "😮‍💨", 
        symptom: "Hörbares Atmen. Atem anhalten ist unmöglich.", 
        diag: "Atemnot", 
        desc: "Verursacht durch ständiges Sprinten, zu langes Luftanhalten oder einen akuten Lungenschaden.", 
        vitals: [{ label: "Lungenkapazität", val: 10, color: "#ff4c4c" }], 
        treat: ["Deckung suchen & Warten", "Bei Lungenschaden: Chirurgie-Set"], 
        tip: "Ein unsichtbarer Breath-Meter reguliert dieses System im Hintergrund." 
    },

    // --- VERPFLEGUNG (NAHRUNG & WASSER) ---
    { 
        id: "thirsty", 
        name: "Durstig / Dehydriert", 
        icon: "🏜️", 
        symptom: "Blut regeneriert nicht mehr. Später: Doppelte / Hazy Sicht.", 
        diag: "Flüssigkeitsmangel", 
        desc: "Hydration ist unter 50% (Durstig) oder bei 1% (Dehydriert).", 
        vitals: [{ label: "Hydration", val: 15, color: "#ff4c4c" }], 
        treat: ["Wasserflasche", "Militär-Feldflasche", "Fruchtsäfte"], 
        tip: "Achtung: Schmerzmittel (Ibuprofen etc.) entziehen dir massiv Wasser!" 
    },
    { 
        id: "hungry", 
        name: "Hungrig / Verhungernd", 
        icon: "💀", 
        symptom: "Blut regeneriert nicht mehr. Später: Doppelte / Hazy Sicht.", 
        diag: "Kaloriendefizit", 
        desc: "Energie ist unter 50% (Hungrig) oder bei 1% (Starving).", 
        vitals: [{ label: "Energie", val: 15, color: "#ff4c4c" }], 
        treat: ["MREs", "Dosenfleisch", "Snacks"], 
        tip: "Konserven stillen den Hunger hervorragend, machen aber extrem durstig." 
    },

    // --- BLUTUNGEN ---
    { 
        id: "bleed_light", 
        name: "Leichte Blutung", 
        icon: "🩸", 
        symptom: "Blutige Sicht, langsamer Blutverlust.", 
        diag: "Leichte Wunde", 
        desc: "Oberflächliche Wunde, bei der Projektile von Rüstung gestoppt oder nur leicht eingedrungen sind. Heilt manchmal von selbst.", 
        vitals: [{ label: "Blutvolumen", val: 80, color: "#ffa500" }], 
        treat: ["Bandage", "Combat Gauze"], 
        tip: "Nutze für leichte Blutungen günstige Bandagen und spar dir die Tourniquets." 
    },
    {
        id: "bleed_med", 
        name: "Mittlere Blutung", 
        icon: "🩸🩸", 
        symptom: "Blutige Sicht, moderater Blutverlust.", 
        diag: "Tiefe Schnitt- / Schusswunde", 
        desc: "Tritt bei mittleren Wunden oder mehreren leichten Wunden auf.", 
        vitals: [{ label: "Blutvolumen", val: 50, color: "#ffa500" }], 
        treat: ["Tourniquet (CAT)", "Notfallbandage", "Combat Gauze"], 
        tip: "Tourniquets stoppen die Blutung sofort, behandeln aber die Wunde selbst nicht!" 
    },
    {
        id: "bleed_heavy",
        name: "Schwere Blutung",
        icon: "🩸🩸🩸",
        symptom: "Blutige Sicht, immenser Blutverlust.",
        diag: "Arterielle Verletzung",
        desc: "Kritischer Zustand! Entsteht durch schwere Wunden oder viele kleine Wunden. Führt rasant ins Koma.",
        vitals: [{ label: "Blutvolumen", val: 15, color: "#ff4c4c" }],
        treat: ["Tourniquet (CAT) - SOFORT!", "Blutbeutel (1000ml)", "Israeli Bandage"],
        tip: "Wende sofort ein Tourniquet an und fülle danach zwingend dein Blutvolumen mit Blutbeuteln auf."
    },

    // --- KNOCHEN & ORGANE ---
    { 
        id: "limping", 
        name: "Humpeln (Limping)", 
        icon: "🦴", 
        symptom: "Kein Sprinten/Springen. Verringerte Bein-Ausdauer.", 
        diag: "Beinknochen zerstört", 
        desc: "Ein Sturz oder ein direkter Treffer hat die Beinknochen zertrümmert.", 
        vitals: [{ label: "Knochenintegrität", val: 0, color: "#ff4c4c" }], 
        treat: ["Schiene (Holz / SAM)"], 
        tip: "SAM-Schienen sind im Gefecht deutlich schneller angelegt als Holzschienen." 
    },
    {
        id: "organ_damage",
        name: "Organschaden",
        icon: "🫁",
        symptom: "Charakter hustet Blut, ständiges Stöhnen",
        diag: "Thorax / Abdomen Penetration",
        desc: "Innere Organe (Lunge, Magen, Leber) wurden verletzt. Verursacht Schmerz und dauerhaften HP-Verlust.",
        vitals: [{ label: "Organfunktion", val: 35, color: "#ff4c4c" }],
        treat: ["Chirurgie-Set (SurvKit / CMS)", "Schmerzmittel"],
        tip: "Chirurgie dauert sehr lange (15-20 Sek). Suche dir unbedingt eine sichere Deckung!"
    },
    {
        id: "tremors", 
        name: "Zittern (Tremors)", 
        icon: "🫨", 
        symptom: "Sichtbares, starkes Waffen-Wackeln.", 
        diag: "Trauma / Armknochen zerstört", 
        desc: "Tritt auf bei zerstörten Armknochen, extremem Leiden (Suffering) oder Benommenheit.", 
        vitals: [{ label: "Stabilität", val: 10, color: "#ff4c4c" }], 
        treat: ["Schiene (für Arme)", "Schmerzmittel"], 
        tip: "Zittern beeinträchtigt deine Präzision im Feuergefecht massiv." 
    },
    { 
        id: "coughing", 
        name: "Husten (Coughing)", 
        icon: "🗣️", 
        symptom: "Hörbares Husten. Kurzatmigkeit.", 
        diag: "Lungenschaden", 
        desc: "Ein Projektil hat die Lunge durchschlagen und das Organ zerstört.", 
        vitals: [{ label: "Organfunktion", val: 0, color: "#ff4c4c" }], 
        treat: ["Chirurgie-Set (SurvKit)"], 
        tip: "Der Einsatz eines Chirurgie-Sets dauert sehr lange. Suche dir unbedingt eine sichere Deckung!" 
    },
    { 
        id: "upset_stomach", 
        name: "Magenverstimmung", 
        icon: "🤮", 
        symptom: "Hörbares, konstantes Stöhnen (Audible groaning).", 
        diag: "Organschaden", 
        desc: "Innere Organe wurden durch Schüsse schwer verletzt.", 
        vitals: [{ label: "Organfunktion", val: 0, color: "#ff4c4c" }], 
        treat: ["Chirurgie-Set (SurvKit)"], 
        tip: "Operator-Faustregel: 'When in doubt, SurKit it out!' Das Kit löst fast alle Organ-Probleme." 
    },

    // --- NEUROLOGISCH & TOXISCH ---
    { 
        id: "nauseous", 
        name: "Übelkeit (Nauseous)", 
        icon: "🤢", 
        symptom: "Verschwommene / doppelte Sicht.", 
        diag: "Vergiftung / Leberschaden / Strahlung", 
        desc: "Tritt auf durch Leberschäden, Intoxikation (zu viele Stims) oder Ground Zero Strahlung.", 
        vitals: [{ label: "Toxizität", val: 80, color: "#ff4c4c" }], 
        treat: ["Chirurgie (bei Leber)", "Anti-Rad Tabletten", "Warten"], 
        tip: "Leberschäden sind die häufigste Ursache für Übelkeit nach einem Treffer in den Torso." 
    },
    {
        id: "dizzy",
        name: "Schwindlig (Dizzy)",
        icon: "💫",
        symptom: "Verschwommene / doppelte (hazy) Sicht.",
        diag: "Kreislaufschwäche",
        desc: "Die Vorstufe. Tritt auf bei leichtem Blutverlust, Dehydration oder extremem Hunger.",
        vitals: [{ label: "Kreislauf", val: 50, color: "#ffa500" }],
        treat: ["Trinken", "Essen", "Blutverlust stoppen"],
        tip: "Ein schnelles Getränk oder ein Snack beheben dieses Problem oft sofort."
    },
    {
        id: "dazed_confused", 
        name: "Benommen / Desorientiert", 
        icon: "🧠", 
        symptom: "Verschwommene / doppelte (hazy) Sicht. Schwindel.", 
        diag: "Gehirnschaden / Extremer Blutverlust", 
        desc: "Benommen (Dazed) durch Gehirnschaden. Desorientiert/Verwirrt durch immensen Blutverlust.", 
        vitals: [{ label: "Bewusstsein", val: 20, color: "#ff4c4c" }], 
        treat: ["Chirurgie-Set (Gehirn)", "Blutbeutel (Blood Bags)"], 
        tip: "Ein Kopftreffer ist oft tödlich, Streifschüsse am Helm verursachen jedoch Benommenheit." 
    },
    { 
        id: "vision_blackout", 
        name: "Blindheit / Tinnitus", 
        icon: "👁️‍🗨️", 
        symptom: "Komplette Blindheit (2 Sek) oder Weiße Flecken (4 Sek).", 
        diag: "Optische Überreizung (Blendung)", 
        desc: "Direkter Blick in die Detonation einer Flashbang-Granate.", 
        vitals: [{ label: "Sehkraft", val: 0, color: "#ff4c4c" }], 
        treat: ["Deckung suchen", "Warten"], 
        tip: "Ebenfalls kann ein Tinnitus (Pfeifen im Ohr durch Gehirnerschütterung) durch Explosionen auftreten." 
    },

    // --- SCHMERZEN & KOMA ---
    { 
        id: "hurt_pain", 
        name: "Verletzt / Schmerzen / Leiden", 
        icon: "🩹", 
        symptom: "Hörbarer Herzschlag, Atmen, ständiges Stöhnen.", 
        diag: "Trauma-Schock durch Wunden", 
        desc: "Kombinierte Wunden, Organ- oder Knochenschäden. Eskaliert bei extremen Verletzungen zu 'Leiden' (Suffering).", 
        vitals: [{ label: "Schmerzlevel", val: 85, color: "#ff4c4c" }], 
        treat: ["Ursache heilen", "Ibuprofen", "Morphin-Injektor"], 
        tip: "Prellungen (Bruises), die entstehen wenn Rüstung ein Projektil abwehrt, verursachen ebenfalls Schmerzen." 
    },
    {
        id: "pain",
        name: "Starker Schmerz",
        icon: "⚡",
        symptom: "Verschwommene Sicht am Bildschirmrand",
        diag: "Trauma-Reaktion",
        desc: "Der Körper steht unter Schock. Die Sichttrübung erschwert die Identifizierung von Zielen.",
        vitals: [{ label: "Konzentration", val: 50, color: "#ffa500" }],
        treat: ["Ibuprofen", "Meloxicam", "Morphin (Kritisch)"],
        tip: "Vorsicht: Starke Schmerzmittel entziehen dir massiv Hydration (Wasser)!"
    },
    {
        id: "radiation",
        name: "Strahlenkrankheit",
        icon: "☢️",
        symptom: "Nausea (Übelkeit), plötzlicher Schwindel",
        diag: "Radioaktive Belastung (Ground Zero)",
        desc: "Zellen wurden durch Gammastrahlung geschädigt. Das Immunsystem bricht zusammen.",
        vitals: [{ label: "Zellintegrität", val: 60, color: "#7ca35a" }],
        treat: ["Anti-Rad Tabletten", "Viel Wasser trinken", "Gebiet verlassen"],
        tip: "Strahlenkrankheit kann im Feld nicht vollständig geheilt werden, nur verzögert."
    },    
    {
        id: "coma", 
        name: "Koma (Coma)", 
        icon: "⚰️", 
        symptom: "Völliger Kontrollverlust, Zusammenbruch zum Boden. Schweres Röcheln.", 
        diag: "Kritisches Organversagen / Blut-Leer", 
        desc: "Du hast 2 Minuten (Bleed-out Zeit), bis dein Charakter stirbt. Passiert bei Zerstörung von Lunge/Leber/Gehirn oder massivem Blutverlust.", 
        vitals: [{ label: "Lebenszeichen", val: 1, color: "#b33939" }], 
        treat: ["Kumpel muss reanimieren (Blut/Chirurgie)"], 
        tip: "Ohne Teammitglieder ist das Koma ein sofortiges Todesurteil ('Give up')." 
    }
];
    
// ==========================================
// 13. HÄNDLER FREISCHALTUNGEN (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
// isMeta: true markiert absolute Game-Changer Items!

const tradersDb = [
    // ==========================================
    // --- GUNNY (Westliche Waffen & Munition) ---
    // ==========================================
    { trader: "Gunny", level: 1, name: "CQ-A1 (5.56x45)", isMeta: false, info: "Basis-Sturmgewehre. Die CQ-A1 ist eine günstige chinesische Alternative zur M4." },
    { trader: "Gunny", level: 1, name: "Remington 870", isMeta: false, info: "Verlässliche Schrotflinten für den Start." },
    { trader: "Gunny", level: 1, name: "M193 Munition (5.56x45)", isMeta: false, info: "Zivile Munition. Kaum Rüstungsdurchschlag." },
    { trader: "Gunny", level: 1, name: "Aimpoint T-1 Rotpunktvisier", isMeta: false, info: "Gutes, klares Visier für die ersten Missionen." },
    
    { trader: "Gunny", level: 2, name: "KAC QDSS-NT4 Schalldämpfer", isMeta: true, info: "Dein erster Schalldämpfer für die M4! Ein absoluter Game-Changer, um KI-Gruppen nicht sofort zu alarmieren." },
    { trader: "Gunny", level: 2, name: "M855 Munition (5.56x45)", isMeta: false, info: "Militär-Standard. Durchschlägt leichte Helme und Soft-Armor (NIJ IIIA)." },
    { trader: "Gunny", level: 2, name: "Trijicon ACOG 4x Visier", isMeta: true, info: "Das beste Mid-Game Visier für Distanzkämpfe im dichten Dschungel." },
    { trader: "Gunny", level: 2, name: "EOTech EXPS3 Holovisier", isMeta: false, info: "Perfekt für den Nahkampf (Tiger Bay & Bunker)." },
    { trader: "Gunny", level: 2, name: "30-Schuss PMAG Magazin", isMeta: false, info: "Leichter und zuverlässiger als die Standard-Blechmagazine." },

    { trader: "Gunny", level: 3, name: "DDM4 (Blueprint Unlock)", isMeta: true, info: "Nur verfügbar nach Abschluss der Quest 'Phantom Lance'. Eine der präzisesten 5.56 Waffen im Spiel!" },
    { trader: "Gunny", level: 3, name: "M855A1 AP Munition (5.56x45)", isMeta: true, info: "Durchschlägt Level III Rüstungen zuverlässig. Die absolute Pflicht-Munition ab Level 3!" },
    { trader: "Gunny", level: 3, name: "Elcan SpecterDR 1-4x", isMeta: true, info: "Umschaltbares Visier (Nahkampf & Distanz). Das beliebteste Meta-Visier." },
    { trader: "Gunny", level: 3, name: "SureFire RC2 Schalldämpfer", isMeta: true, info: "Besserer Schalldämpfer als der KAC, extrem gute Rückstoßdämpfung." },
    { trader: "Gunny", level: 3, name: "60-Schuss SureFire Magazin", isMeta: true, info: "Verdoppelt deine Feuerkraft ohne Nachladen. Überlebenswichtig für Tiger Bay!" },

    { trader: "Gunny", level: 4, name: "L403A1 / KS-1 Rifle", isMeta: true, info: "0.4 Neuzugang! Das britische Elite-Gewehr. Teuer, aber überragendes Handling." },
    { trader: "Gunny", level: 4, name: "M995 AP Munition (5.56x45)", isMeta: true, info: "Panzerbrechend! Ignoriert fast jede Rüstung im Spiel (selbst NIJ III++)." },
    { trader: "Gunny", level: 4, name: "Vudu 1-6x Scharfschützen-Visier", isMeta: true, info: "Das absolute Meta-Sniper-Visier für westliche Sturmgewehre." },
    { trader: "Gunny", level: 4, name: "Waffenkoffer (Weapon Case)", isMeta: true, info: "Der Stash-Retter! Bietet enormen Platz für deine gesammelten Waffen." },
    { trader: "Gunny", level: 4, name: "PEQ-15 Laser/IR Modul", isMeta: false, info: "Wichtig für Night-Raids mit Nachtsicht." },

    // ==========================================
    // --- HANDSHAKE (Rüstungen, Rucksäcke & Helme) ---
    // ==========================================
    { trader: "Handshake", level: 1, name: "Scorpion OCP Convoy Pack (16 Slots)", isMeta: false, info: "Besser als nichts für die ersten Loot-Runs." },
    { trader: "Handshake", level: 1, name: "Commander (Navy) (NIJ IIIA)", isMeta: false, info: "Schützt nur vor Pistolen und Schrot. Gegen Sturmgewehre der KIs komplett nutzlos." },
    { trader: "Handshake", level: 1, name: "Gunfighter 14 (9 Slots)", isMeta: true, info: "Der erste kleine Rucksack. Besser als garnichts!" },
    { trader: "Handshake", level: 1, name: "Skull Crusher", isMeta: false, info: "Basis-Kopfschutz." },

    { trader: "Handshake", level: 2, name: "C2 Bag Combat Compact Backpack (12 Slots)", isMeta: true, info: "Der erste vernünftige Rucksack. Erhöht deinen Loot-Profit massiv!" },
    { trader: "Handshake", level: 2, name: "Modular Operator Carrier Gen II (NIJ IIIA)", isMeta: true, info: "Die erste brauchbare Panzerung. Stoppt Standard-Sturmgewehrkugeln (z.B. PS-Munition)." },
    { trader: "Handshake", level: 2, name: "Desert Locust (klar)", isMeta: false, info: "Klare Sicht, 50% Regenschutz" },
    { trader: "Handshake", level: 2, name: "MICH Helm", isMeta: false, info: "Solider NIJ IIIA Helm mit Platz für Headsets." },

    { trader: "Handshake", level: 3, name: "CZ 4M Lancer (NIJ III)", isMeta: true, info: "Perfekte Balance aus Gewicht, Stauraum und Schutz vor harten Treffern." },
    { trader: "Handshake", level: 3, name: "AMP12 (20 Slots)", isMeta: false, info: "Sehr großer Rucksack, macht dich aber schwerfälliger und senkt die Ausdauer." },
    { trader: "Handshake", level: 3, name: "MC50 Laser Edition", isMeta: true, info: "Ein Guter Gürtel mit etwas mehr Platz (3 Slots)" },

    { trader: "Handshake", level: 4, name: "Recon Plate Carrier (NIJ III+)", isMeta: true, info: "Die stärkste Kaufbare Rüstung im Spiel! Macht dich fast unbesiegbar gegen Standard-Kugeln." },
    { trader: "Handshake", level: 4, name: "FAST MT Helm", isMeta: true, info: "Kombinierbar mit Nachtsichtgeräten (NVG) und ballistischem Gesichtsschutz." },

    // ==========================================
    // --- LAB RAT (Medizin & Vorräte) ---
    // ==========================================
    { trader: "Lab Rat", level: 1, name: "Bandagen & Tourniquets", isMeta: false, info: "Stoppt leichte (Bandage) und schwere (Tourniquet) Blutungen." },
    { trader: "Lab Rat", level: 1, name: "Splint (Schiene)", isMeta: false, info: "Heilt gebrochene Knochen, um wieder rennen zu können." },
    
    { trader: "Lab Rat", level: 2, name: "Kleine Blutkonserve (Blood Bag)", isMeta: false, info: "Füllt dein Blutlevel nach schweren Treffern langsam wieder auf." },
    { trader: "Lab Rat", level: 2, name: "SurKit (Chirurgisches Set)", isMeta: true, info: "Lebensretter! Heilt zerstörte Organe (Lunge, Leber) im Feld, sonst verblutest du unweigerlich." },
    { trader: "Lab Rat", level: 2, name: "IFAK (Erste-Hilfe-Set)", isMeta: false, info: "Kombiniert Blutungskontrolle und leichte Heilung auf wenig Platz." },
    { trader: "Lab Rat", level: 2, name: "Ibuprofen", isMeta: false, info: "Günstige, langanhaltende Schmerzlinderung." },

    { trader: "Lab Rat", level: 3, name: "Adrenalin-Injektor", isMeta: true, info: "Regeneriert sofort massiv Ausdauer. Überlebenswichtig für die Flucht aus Hotzones!" },
    { trader: "Lab Rat", level: 3, name: "Morphin-Injektor", isMeta: true, info: "Unterdrückt sofort alle Schmerz-Effekte und unscharfe Sicht, selbst bei gebrochenen Beinen." },
    { trader: "Lab Rat", level: 3, name: "Kleine Blutstillende Spritze", isMeta: false, info: "Sofortige Stoppung der Blutung. Extrem Gut, einfach ein Must Have!" },
    { trader: "Lab Rat", level: 3, name: "Mittlere Blutkonserve", isMeta: true, info: "Stellt viel deines Blutvolumen auf einmal wieder her. Sehr wichtig nach Coma-Phasen." },
    { trader: "Lab Rat", level: 3, name: "4-Slot Medkits", isMeta: false, info: "Heilt Wunden extrem schnell, belegt aber viel Platz." },

    { trader: "Lab Rat", level: 4, name: "Anti-Strahlen Pillen (Rad-X)", isMeta: true, info: "0.4 Feature: Ohne diese Pillen und eine Gasmaske überlebst du das Ground Zero Epizentrum nicht!" },
    { trader: "Lab Rat", level: 4, name: "Regenerations-Stims", isMeta: true, info: "Heilt dich langsam passiv über Zeit hoch. Sehr teuer, aber das absolute Meta für Tiger Bay." },
    { trader: "Lab Rat", level: 4, name: "Medizin-Koffer (Medical Case)", isMeta: true, info: "Riesige Box für deine Stash, um all deine SurKits und Stims sauber zu lagern." },
    { trader: "Lab Rat", level: 4, name: "Große Blutkonserve", isMeta: true, info: "Stellt sehr viel deines Blutvolumen auf einmal wieder her. Sehr wichtig nach Coma-Phasen." },

    // ==========================================
    // --- ARTISAN (Östliche Waffen, AKs & Mods) ---
    // ==========================================
    { trader: "Artisan", level: 1, name: "AKM, SKS & Type 56", isMeta: false, info: "Die Arbeitstiere. Schlagen hart zu, haben aber enormen Rückstoß." },
    { trader: "Artisan", level: 1, name: "7.62x39mm PS Munition", isMeta: false, info: "Solider Durchschlag gegen frühe Helme und leichte Westen." },
    
    { trader: "Artisan", level: 2, name: "AK-74M", isMeta: false, info: "Viel präziser als die AKM, feuert das kleinere 5.45 Kaliber." },
    { trader: "Artisan", level: 2, name: "PBS-1 Schalldämpfer (7.62)", isMeta: true, info: "Macht deine AKM lautlos. Ein Muss für Sägewerk und Ban Pa." },
    { trader: "Artisan", level: 2, name: "Kobra & PSO-1 Visiere", isMeta: false, info: "Klassische russische Visiere für Nahkampf (Kobra) und Distanz (PSO-1)." },

    { trader: "Artisan", level: 3, name: "AK-12 (Spearhead Modell)", isMeta: true, info: "Extrem geringer Rückstoß, fantastische Feuerrate. Die beste 5.45 Waffe!" },
    { trader: "Artisan", level: 3, name: "5.45x39mm BP Munition", isMeta: true, info: "Hervorragende Penetration gegen militärische Panzerung." },
    { trader: "Artisan", level: 3, name: "PBS-4 & Hexagon Schalldämpfer", isMeta: true, info: "Die besten Suppressors für alle 5.45 Modelle." },
    { trader: "Artisan", level: 3, name: "60-Schuss AK Magazine", isMeta: true, info: "Trommelmagazine für Dauerfeuer in Häuserkämpfen." },

    { trader: "Artisan", level: 4, name: "7.62x39mm MAI AP Munition", isMeta: true, info: "Die beste 7.62 Munition im Spiel! Zerstört dicke Westen auf einen Schlag." },
    { trader: "Artisan", level: 4, name: "5.45x39mm BS / 7N39 Igolnik", isMeta: true, info: "Absolutes AP-Monster für die AK-12. Geht durch alles durch." },
    { trader: "Artisan", level: 4, name: "OKP-7 Visier", isMeta: false, info: "Das beliebteste und sauberste Rotpunkt-Visier für die AK-Plattform." },
    { trader: "Artisan", level: 4, name: "Item Case", isMeta: true, info: "Bietet massig Platz für Schrott, Loot und Werkzeuge in deiner Basis." },

    // ==========================================
    // --- TURNCOAT (Ex-Söldner Gear, Rigs & 7.62x54R) ---
    // ==========================================
    { trader: "Turncoat", level: 1, name: "Mosin-Nagant & 7.62x54R LPS", isMeta: false, info: "Das alte Scharfschützengewehr. Ein Schuss, massiver Schaden." },
    { trader: "Turncoat", level: 1, name: "Bank Robber & Chicom Rigs", isMeta: false, info: "Günstige Westen für reine Zero-to-Hero Loot-Runs ohne Rüstung." },

    { trader: "Turncoat", level: 2, name: "SVD Dragunov (Basis)", isMeta: false, info: "Starkes halbautomatisches Sniper, aber ohne Mods schwer zu kontrollieren." },
    { trader: "Turncoat", level: 2, name: "PU Scope", isMeta: false, info: "Das klassische Visier für die Mosin." },
    { trader: "Turncoat", level: 2, name: "Phantom Rig", isMeta: false, info: "Sehr gute taktische Weste mit viel Stauraum." },

    { trader: "Turncoat", level: 3, name: "AK-15", isMeta: true, info: "Moderne 7.62x39 Variante. Tödlich und extrem präzise." },
    { trader: "Turncoat", level: 3, name: "7.62x54R 7N1 Sniper-Munition", isMeta: true, info: "Extrem hoher Fleisch-Schaden. Tötet Ziele ohne NIJ III oft mit einem Körpertreffer." },
    { trader: "Turncoat", level: 3, name: "TGP-V Schalldämpfer (SVD)", isMeta: true, info: "Reduziert den enormen Knall der SVD. Ein Muss für Tiger Bay Sniper." },
    { trader: "Turncoat", level: 3, name: "4-Slot Gürtel (Belts)", isMeta: true, info: "Die besten Gürtel im Spiel! Endlich Platz für große 60-Schuss Magazine in der Schnellauswahl." },

    { trader: "Turncoat", level: 4, name: "7.62x54R SNB AP Munition", isMeta: true, info: "Durchschlägt absolut jede Deckung und jeden Helm. Die stärkste Kugel des Spiels." },
    { trader: "Turncoat", level: 4, name: "SVT-40", isMeta: true, info: "0.4 Neuzugang! Historisch, aber verheerende Stoppwirkung." },
    { trader: "Turncoat", level: 4, name: "Munitions-Koffer (Ammo Case)", isMeta: true, info: "Endlich ein Ort, um deine gesammelte AP-Munition platzsparend zu lagern!" },
    { trader: "Turncoat", level: 4, name: "Delta Backpack (24 Slots)", isMeta: true, info: "Ein richtig große Rucksack. Erhöht deinen Loot-Profit massiv!" },

    // ==========================================
    // --- BANSHEE (High-End NATO, Sniper & Night Ops) ---
    // ==========================================
    { trader: "Banshee", level: 1, name: "M700 Sniper", isMeta: false, info: "Präzises westliches Repetiergewehr." },
    { trader: "Banshee", level: 1, name: "7.62x51mm M80 Munition", isMeta: false, info: "Gute Basis-Munition, stoppt KIs auf Distanz." },

    { trader: "Banshee", level: 2, name: "M700 Schalldämpfer", isMeta: true, info: "Macht dich zum tödlichen Geist aus den Hügeln von Midnight Sapphire." },
    { trader: "Banshee", level: 2, name: "Razor HD Gen II 1-6x Visier", isMeta: true, info: "Wahnsinnig klare Sicht. Das beste Zoom-Visier für mittlere und große Distanzen." },
    { trader: "Banshee", level: 2, name: "7.62x51mm M62 Tracer", isMeta: false, info: "Gute Penetration, aber die Leuchtspur verrät nachts deine Position." },

    { trader: "Banshee", level: 3, name: "M1A & SR-25 DMR", isMeta: true, info: "Halbautomatische Sniper-Gewehre. Perfekt, um ganze Squads auf Distanz zu zerlegen." },
    { trader: "Banshee", level: 3, name: "7.62x51mm M61 AP Munition", isMeta: true, info: "Durchschlagskraft pur. Tötet stark gepanzerte Ziele extrem schnell." },
    { trader: "Banshee", level: 3, name: "Großer Schlüsselbund (Keyholder)", isMeta: true, info: "Pflichtkauf! Bietet enormen Platz für alle deine Keys aus dem 0.4 Update." },

    { trader: "Banshee", level: 4, name: "Nachtsichtgeräte (NVGs)", isMeta: true, info: "Quad-Nods! Macht die Dunkelheit zu deinem Revier (Night Raids 22-05 Uhr)." },
    { trader: "Banshee", level: 4, name: "Thermal-Visiere (FLIR)", isMeta: true, info: "Unglaublich teuer, aber OP. Du siehst Feinde leuchtend weiß durch das dickste Blattwerk!" },
    { trader: "Banshee", level: 4, name: "Alien Pistole (Laugo Alien)", isMeta: true, info: "0.4 Neuzugang! Die beste Pistole im Spiel, feuert fast ohne spürbaren Rückstoß." },
    { trader: "Banshee", level: 4, name: "M993 AP Munition", isMeta: true, info: "Höchster Penetrationswert im gesamten Spiel. Geht durch Defender-2 Westen wie durch Butter." },

    // ==========================================
    // --- VULTURE (0.4 Secret Vendor & Boss Gear) ---
    // ==========================================
    { trader: "Vulture", level: 1, name: "Boss Skins (z.B. Viper's 1911 C)", isMeta: false, info: "Kosmetische Freischaltungen und modifizierte Waffen, nachdem du Boss-Tasks erledigt hast." },
    { trader: "Vulture", level: 2, name: "Rotierende Boss-Schlüssel", isMeta: true, info: "Vulture verkauft gelegentlich extrem seltene Boss-Schlüssel für In-Game Cash." },
    { trader: "Vulture", level: 3, name: "AK-308 (Blueprint Freischaltung)", isMeta: true, info: "Nach Abschluss der 'Chameleon' Quest. Ein absolutes Monster-Gewehr auf 7.62x51mm Basis." },
    { trader: "Vulture", level: 4, name: "Vulture's Black Market Case", isMeta: false, info: "Geheimer Stash-Koffer für wertvolle Schmuggelware." },
    { trader: "Vulture", level: 4, name: "Secure Container Upgrades", isMeta: true, info: "Vergrößert deine sichere Lockbox (z.B. auf 3x3). Das absolute Endgame-Grind-Ziel!" }
];

    // ==========================================
    // 14. FRAKTIONEN DATENBANK
    // ==========================================
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
// 15. CODES & PASSWÖRTER DATENBANK (0.4 SPEARHEAD - FINAL COMPLETE)
// ==========================================
// type: "static" = Fester Code | type: "dynamic" = Wechselt pro Server-Neustart!

const codesDb = [
    // --- NAKASA VILLAGE & FORT NARITH (Das 5-Code-Rätsel) ---
    // Intel: Im blauen Haus in Nakasa (140, 134) liegen 5 Haftnotizen in der Küche.
    { name: "Nakasa Obergeschoss Tür", loc: "Nakasa Village (Blaues Haus)", code: "DYNAMISCH", type: "dynamic", info: "Einer der 5 Codes von der Küchentheke im Erdgeschoss öffnet diese Tür im 1. Stock." },
    { name: "Nakasa Munitionskiste", loc: "Nakasa Village (Holzhütte)", code: "DYNAMISCH", type: "dynamic", info: "Steht in der Hütte mit Veranda neben dem blauen Haus. Code ist Teil des Nakasa-5er-Sets." },
    { name: "FN Schrottplatz-Kiste", loc: "Fort Narith (Dumping Ground)", code: "DYNAMISCH", type: "dynamic", info: "Militärkiste auf dem Müllplatz nördlich der Basis. Code stammt aus der Nakasa-Küche." },
    { name: "FN Garagen-Kiste", loc: "Büro gegenüber FN-Haupttor", code: "DYNAMISCH", type: "dynamic", info: "Kiste im unteren Regal der Garage nördlich vom Motel. Code stammt aus der Nakasa-Küche." },
    { name: "Squad Mission Tür", loc: "Nakasa Village", code: "DYNAMISCH", type: "dynamic", info: "Öffnet eine gesicherte Tür für spezielle Waffenkisten-Missionen. Code stammt aus der Nakasa-Küche." },
    { name: "Static Echoes Tür", loc: "Nakasa Village (1. Stock)", code: "DYNAMISCH", type: "dynamic", info: "Nach der ersten Tür im OG findest du drinnen ein Buch mit dem Code für diese zweite Tür (oft 2063)." },

    // --- FORT NARITH & AIRFIELD ---
    { name: "Flugkontrollturm (ATC)", loc: "Fort Narith (Airfield)", code: "9198", type: "static", info: "<b>Fester Code!</b> Den Hinweis findest du auf einem Zettel im Serverraum A204 der Baracken." },
    { name: "Versteckter Waffen-Bunker", loc: "Fort Narith (Barracks)", code: "5756", type: "static", info: "Elektronisches Schloss in den Baracken. Code versteckt in einem Buch. Enthält Top-Aufsätze." },
    { name: "Bunker am Schießstand", loc: "Fort Narith (Shooting Range)", code: "DYNAMISCH", type: "dynamic", info: "Der Code liegt in einem Zelt direkt hinter dem Schießstand auf dem Hügel." },
    
    // --- KONG THAB & NA XIENG ---
    { name: "Kong Thab Depot Bunker", loc: "Kong Thab Depot", code: "DYNAMISCH", type: "dynamic", info: "Wichtig für Quest 'Plan B'. Code liegt auf Notizzetteln im Umkreis (z.B. 6867 / 3412)." },
    { name: "Na Xieng Farm (Padlock)", loc: "Na Xieng (Mohnfelder)", code: "9135", type: "static", info: "<b>Fester Code!</b> Wichtig für Vulture-Quest 'The New Contact'. Hinweise bei 192,154 und 178,153." },
    
    // --- HUNTER'S PARADISE & SAWMILL ---
    { name: "Alter Bunker (Padlock)", loc: "Hunter's Paradise", code: "DYNAMISCH", type: "dynamic", info: "Zettel klebt im Büro hinter der Waffenkammer rechts an der Wand neben der Leiche." },
    { name: "Sägewerk Schuppen/Lager", loc: "Lumber Yard (Sawmill)", code: "DYNAMISCH", type: "dynamic", info: "Codes für Schuppen, Toilette und Lagerhaus liegen als Zettel in der direkten Umgebung." },
    { name: "Windturbinen Keypad", loc: "Sägewerk (Lumber Yard)", code: "DYNAMISCH", type: "dynamic", info: "Quest 'Unlisted Flight'. Code klebt am Beifahrerfenster des roten SUVs. Achtung: 30-Sek-Zeitlimit!" },
    { name: "Black Box Schuppen", loc: "Sägewerk (Lumber Yard)", code: "DYNAMISCH", type: "dynamic", info: "Quest 'Unlisted Flight'. Zettel im östlichen Bürogebäude (Flussseite) auf dem Schreibtisch." },

    // --- YBL-1 BUNKER & TIGER BAY ---
    { name: "Gefängniszelle & Lager", loc: "YBL-1 Bunker", code: "DYNAMISCH", type: "dynamic", info: "Codes für Zelle und Padlock-Lager liegen auf Tischen in den benachbarten Räumen." },
    { name: "UNLRA HQ Keypad", loc: "Tiger Bay", code: "DYNAMISCH", type: "dynamic", info: "Der Code spawnt zufällig auf Schreibtischen innerhalb oder direkt am UNLRA-Gebäude." },
    { name: "Server-Raum", loc: "Radio Station", code: "1506", type: "static", info: "Quest 'The Last Broadcast'. Code steht auf einem Post-It im Büro (oberer Stock des Hauptgebäudes)." },

    // --- STARTGEBIETE & DÖRFER ---
    { name: "Villa Elena Tresor", loc: "Startstadt (Villa)", code: "DYNAMISCH", type: "dynamic", info: "Code liegt auf einem Notizblock auf dem Nachttisch im Schlafzimmer (Obergeschoss)." },
    { name: "Rathaus Tresor", loc: "Startstadt (Town Hall)", code: "DYNAMISCH", type: "dynamic", info: "Der Code liegt auf einem Zettel neben dem Schalter für das stadtweite Übertragungsradio." },
    { name: "Ban Suk Hütte", loc: "Ban Suk (Halbinsel)", code: "8777", type: "static", info: "<b>Fester Code!</b> Im roten Buch auf dem Boot. <b>Tipp:</b> Klettere über das Regal neben der Tür!" }
];

// ==========================================
// 16. LOOT RUNS & FARMING ROUTEN (0.4 SPEARHEAD)
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

    // ==========================================
    // 17. WAFFEN-BLUEPRINTS DATENBANK (0.4 SPEARHEAD - VIDEO SYNCED)
    // ==========================================
    // Trage deine MapGenie-Links zwischen die Anführungszeichen bei "mapUrl" ein!

const blueprintDb = {
    "Mossberg 590": {
        loc: "Remote Campsite (Südlich von Lima 2 / Mike 3)",
        desc: "Schaltet die Mossberg 590 Schrotflinte (Range/Rifle Magazin) frei.",
        tip: "Gehe von Lima 2 nach Süden zum Fluss. Überquere die kleine Brücke am Flussbogen. Die Blaupause liegt dort in einer kleinen Hütte.",
        mapUrl: "https://gzwtacmap.com/maps/lamang?x=5229.34844&y=1631.5017&z=16.5" // DEIN LEERFELD FÜR DEN MAP-LINK
    },
    "DDM4 (Camo)": {
        loc: "Fort Narith - Zweite Kaserne (Top Floor)",
        desc: "Schaltet die DDM4 (Camo-Version) mit 60-Schuss-Magazin frei.",
        tip: "Nähere dich über das Old Service Gate. Es ist das zweite Kasernengebäude. Geh die Treppen ganz nach oben und dann am Ende des Flurs auf der linken Seite.",
        mapUrl: "https://gzwtacmap.com/de/maps/lamang/place/@4172.7,3175.36" // DEIN LEERFELD FÜR DEN MAP-LINK
    },
    "AK-308": {
        loc: "Fort Narith - Das neue Gefängnis (Jail)",
        desc: "Schaltet das mächtige AK-308 Sturmgewehr frei.",
        tip: "Das neue Gefängnis-Gebäude liegt exakt zwischen der Krankenstation (Infirmary) und der Kantine. Geh rein und nimm direkt den linken Raum.",
        mapUrl: "https://gzwtacmap.com/de/maps/lamang/place/@4252.48,3050.93" // DEIN LEERFELD FÜR DEN MAP-LINK
    },
    "M14 Rifle": {
        loc: "Hunter's Paradise (Nahe Waffenlager)",
        desc: "Schaltet das M14 DMR frei.",
        tip: "Lande am besten bei Foxtrot 1. Die Blaupause liegt in einem Gebäude direkt neben / außerhalb des Haupt-Waffenlagers (Weapon Storage).",
        mapUrl: "https://gzwtacmap.com/de/maps/lamang/place/@5942.34,6853.4" // DEIN LEERFELD FÜR DEN MAP-LINK
    },
    "SIG MCX": {
        loc: "Midnight Sapphire - Hotel Lobby (Erdgeschoss)",
        desc: "Schaltet die SIG MCX (.300 Blackout) frei.",
        tip: "Gehe durch den Haupteingang in die Rezeption. Dreh dich direkt neben der großen Haupttreppe nach rechts. Liegt dort auf einem Tisch.",
        mapUrl: "https://gzwtacmap.com/de/maps/lamang/place/@7194.34,6673.92" // DEIN LEERFELD FÜR DEN MAP-LINK
    },
    "M700 Sniper": {
        loc: "Midnight Sapphire - Hotel Dach (Roof)",
        desc: "Schaltet das M700 Scharfschützengewehr frei.",
        tip: "Geh ganz nach oben aufs Dach zum Helipad (Vorsicht vor Snipern/Boss!). Lauf ganz nach hinten zu den Satellitenschüsseln. Liegt auf einem kleinen Ecktisch.",
        mapUrl: "https://gzwtacmap.com/de/maps/lamang/place/@7198.73,6672.31" // DEIN LEERFELD FÜR DEN MAP-LINK
    },
    "AKMN": {
        loc: "Occupied Cottage (Nahe Oscar 2)",
        desc: "Schaltet die AKMN (mit Optik-Montage) frei.",
        tip: "TÖDLICHE GEFAHR: Wenn du von Oscar 2 kommst und die kleine Brücke zum Cottage überquerst, pass auf den Stolperdraht (Tripwire) auf! Die Blueprint liegt direkt im Haus.",
        mapUrl: "https://gzwtacmap.com/de/maps/lamang/place/@9517.26,5349.74" // DEIN LEERFELD FÜR DEN MAP-LINK
    },
    "MP7A2": {
        loc: "Ransacked Tourist Shelter (Juliet 4)",
        desc: "Schaltet die MP7A2 (ohne festen Griff) frei.",
        tip: "Lande bei Juliet 4. Das Shelter befindet sich direkt neben der Gladius-Markierung auf der Map. Einfach reinlaufen und einsammeln.",
        mapUrl: "https://gzwtacmap.com/de/maps/lamang/place/@8856.78,3103.19" // DEIN LEERFELD FÜR DEN MAP-LINK
    },
    "SVD Dragunov": {
        loc: "Tiger Bay Mall - 'Cake Time' Shop",
        desc: "Schaltet das SVD DMR permanent frei.",
        tip: "Geh ins Erdgeschoss der großen Mall. Suche den Laden 'Cake Time' (direkt neben dem Galaxy Store). Die Blaupause liegt im hinteren Büro auf dem Schreibtisch.",
        mapUrl: "https://gzwtacmap.com/de/maps/lamang/place/@9873.92,2932.91" // DEIN LEERFELD FÜR DEN MAP-LINK
    }
};

// ==========================================
// 18. PROVISIONS & MARKET DATABASE (100% COMPLETE - WIKI SYNCED)
// ==========================================
const provisionsDb = [
    // --- STAMINA BOOSTERS (Mit temporären Buff-Effekten) ---
    { name: "Dark Star Iced Coffee", type: "Stamina Booster", hyd: 20, eng: 5, uses: 1, grid: "1x1", isBuff: true, boost: "Arm & Bein Ausdauer", armCap: "+20%", armDur: "180s", legCap: "+20%", legDur: "180s", info: "Gibt dir einen starken Boost für lange Sprints oder das Halten schwerer Waffen im ADS." },
    { name: "NuKlear Energy: Meltdown Mango", type: "Stamina Booster", hyd: 55, eng: 4, uses: 1, grid: "1x1", isBuff: true, boost: "Bein Ausdauer", armCap: "-", armDur: "-", legCap: "+30%", legDur: "120s", info: "Extremer Bein-Stamina-Boost. Perfekt, um unter Beschuss in Deckung zu rennen." },
    { name: "Energy Bar Nuts and Fruits", type: "Stamina Booster", hyd: 0, eng: 14, uses: 1, grid: "1x1", isBuff: true, boost: "Arm Ausdauer", armCap: "+15%", armDur: "120s", legCap: "-", legDur: "-", info: "Stabilisiert deine Arme deutlich länger beim Zielen." },
    { name: "Windmill Almond Choc Bar", type: "Stamina Booster", hyd: 0, eng: 16, uses: 1, grid: "1x1", isBuff: true, boost: "Bein Ausdauer", armCap: "-", armDur: "-", legCap: "+15%", legDur: "90s", info: "Kleiner, aber feiner Boost für den langen Rückweg zur Basis." },
    { name: "TamTam DoubleChoc", type: "Stamina Booster", hyd: 0, eng: 20, uses: 1, grid: "1x1", isBuff: true, boost: "Arm Ausdauer", armCap: "+25%", armDur: "150s", legCap: "-", legDur: "-", info: "Sehr starker Arm-Boost für Scharfschützen, die lange das Scope halten müssen." },
    { name: "Berg Bar Cookie Chocolate", type: "Stamina Booster", hyd: 0, eng: 25, uses: 1, grid: "1x1", isBuff: true, boost: "Allround Boost", armCap: "+10%", armDur: "120s", legCap: "+10%", legDur: "120s", info: "Ein solider Allrounder für den Gürtel. Wirkt auf den ganzen Körper." },

    // --- GETRÄNKE (DRINKS) ---
    { name: "Noakon Water 0.6 l", type: "Getränk", hyd: 60, eng: 0, uses: 1, grid: "1x1", isBuff: false, info: "Die effizienteste kleine Wasserflasche im Spiel für einen 1x1 Slot." },
    { name: "Power Energy Drink", type: "Getränk", hyd: 45, eng: 10, uses: 1, grid: "1x1", isBuff: false, info: "Standard-Energy. Gute Hydration und etwas Energie." },
    { name: "Gray Focused Energy", type: "Getränk", hyd: 50, eng: 15, uses: 1, grid: "1x1", isBuff: false, info: "Sehr starker Durstlöscher mit einem ordentlichen Kalorien-Schub." },
    { name: "Infinity Isotonic Drink", type: "Getränk", hyd: 40, eng: 5, uses: 1, grid: "1x1", isBuff: false, info: "Isotonisches Getränk. Schnell konsumiert." },
    { name: "Kaipo Lychee Nectar", type: "Getränk", hyd: 35, eng: 10, uses: 1, grid: "1x1", isBuff: false, info: "Süßer Fruchtnektar." },
    { name: "Touchdown Lemon Soda", type: "Getränk", hyd: 18, eng: 0, uses: 1, grid: "1x1", isBuff: false, info: "Eine kleine Limonade für den schnellen Durst." },
    { name: "Coco Jumbo Coconut Juice", type: "Getränk", hyd: 24, eng: 0, uses: 1, grid: "1x1", isBuff: false, info: "Kokosnusswasser in einer handlichen Dose." },
    { name: "Sunrise Cola", type: "Getränk", hyd: 33, eng: 15, uses: 1, grid: "1x1", isBuff: false, info: "Zuckerhaltig. Gut für eine schnelle Energiezufuhr bei mittlerem Durst." },
    { name: "Aques Water 1 l", type: "Getränk", hyd: 33, eng: 0, uses: 3, grid: "1x2", isBuff: false, info: "Klassische Wasserflasche mit 3 Anwendungen." },
    { name: "Aques Water 1.5 l", type: "Getränk", hyd: 33, eng: 0, uses: 4, grid: "1x2", isBuff: false, info: "Große Aques Flasche für mehrere Einsätze." },
    { name: "Noakon Water 1 l", type: "Getränk", hyd: 33, eng: 0, uses: 3, grid: "1x2", isBuff: false, info: "Standard Noakon Wasserflasche." },
    { name: "Noakon Water 1.5 l", type: "Getränk", hyd: 50, eng: 0, uses: 3, grid: "1x2", isBuff: false, info: "Sehr effizient für Squads. Bietet dreimal satte +50 Hydration." },
    { name: "Maknav Iced Tea", type: "Getränk", hyd: 45, eng: 10, uses: 2, grid: "1x2", isBuff: false, info: "Eistee in der großen Flasche. Bietet 2 Anwendungen." },
    { name: "White Orchid Crystal Water 2 l", type: "Getränk", hyd: 33, eng: 0, uses: 6, grid: "1x2", isBuff: false, info: "Massive 2-Liter Flasche. Perfekt, um sie im Stash zu lagern." },
    { name: "Riminda Green Bubbly Bliss", type: "Getränk", hyd: 38, eng: 0, uses: 4, grid: "1x2", isBuff: false, info: "Große Limonadenflasche. Bietet viele Rationen für Unterwegs." },
    { name: "Sunrise Cola (2 L)", type: "Getränk", hyd: 38, eng: 15, uses: 4, grid: "1x2", isBuff: false, info: "Große Cola-Flasche für das ganze Team." },

    // --- MAHLZEITEN (MEALS) ---
    { name: "Spicy Thai Combat Meal", type: "Mahlzeit", hyd: -15, eng: 80, uses: 2, grid: "1x2", isBuff: false, info: "Macht extrem satt (2 Anwendungen), zieht aber massiv Wasser! Trinken bereithalten." },
    { name: "Combat Ration Pack (CRP)", type: "Mahlzeit", hyd: 0, eng: 75, uses: 2, grid: "1x2", isBuff: false, info: "Militärration. Sehr effizient, da es kein Wasser abzieht." },
    { name: "HDR Meal", type: "Mahlzeit", hyd: 0, eng: 75, uses: 2, grid: "1x2", isBuff: false, info: "Humanitarian Daily Ration. Große Mahlzeit für lange Einsätze." },
    { name: "Premium Pork Luncheon Meat", type: "Mahlzeit", hyd: -10, eng: 70, uses: 2, grid: "1x2", isBuff: false, info: "Dosenfleisch. Gibt viel Energie, trocknet dich aber leicht aus." },
    { name: "Sinngua Lunch Meat", type: "Mahlzeit", hyd: -10, eng: 60, uses: 2, grid: "1x2", isBuff: false, info: "Gutes Dosenfleisch für Unterwegs." },
    { name: "Mackerel in Teriyaki Sauce", type: "Mahlzeit", hyd: -10, eng: 60, uses: 1, grid: "1x1", isBuff: false, info: "Fischkonserve. Solider Energie-Schub für einen 1x1 Slot." },
    { name: "Canned Tuna Chunks", type: "Mahlzeit", hyd: -10, eng: 40, uses: 1, grid: "1x1", isBuff: false, info: "Thunfisch. Gut als Notration." },
    { name: "Cowboy Baked Beans", type: "Mahlzeit", hyd: 5, eng: 35, uses: 2, grid: "1x2", isBuff: false, info: "Bohnen in Sauce. Spendet sogar ein klein wenig Hydration (+5)." },
    { name: "Lucky Pork Liver Pâté", type: "Mahlzeit", hyd: -5, eng: 35, uses: 1, grid: "1x1", isBuff: false, info: "Leberpastete. Kleine Mahlzeit, die den Durst kaum beeinflusst." },
    { name: "Lychee in Syrup", type: "Mahlzeit", hyd: 10, eng: 26, uses: 2, grid: "1x2", isBuff: false, info: "Der Sirup gibt Wasser und Energie gleichzeitig zurück." },

    // --- SNACKS ---
    { name: "Organic Tofu", type: "Snack", hyd: -10, eng: 18, uses: 1, grid: "1x1", isBuff: false, info: "Reines Protein. Zieht etwas Wasser, füllt aber schnell den Magen." },
    { name: "1 Shot Energy Chews", type: "Snack", hyd: 5, eng: 15, uses: 1, grid: "1x1", isBuff: false, info: "Schnelle Gummibärchen für den Sofort-Kick. Kann bei Lab Rat gekauft werden." },
    { name: "Bamboo Shoots", type: "Snack", hyd: 5, eng: 15, uses: 2, grid: "1x2", isBuff: false, info: "Bambussprossen. Leicht wässrig, daher +5 Hydration." },
    { name: "Kasem Chocolate Wafers", type: "Snack", hyd: -5, eng: 14, uses: 1, grid: "1x1", isBuff: false, info: "Schokowaffeln. Trocken und krümelig, minimaler Boost." },
    { name: "SnipSnap Crunchy", type: "Snack", hyd: 0, eng: 10, uses: 1, grid: "1x1", isBuff: false, info: "Ein kleiner, knackiger Riegel für zwischendurch." }
];
